import { createClient } from '@supabase/supabase-js';

// API Service Layer for Hype Connect
const API_BASE_URL = 'http://localhost:4000/api';
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Fallback to a demo project if env vars are missing so the dev build doesn’t crash.
const DEFAULT_SUPABASE_URL = 'https://demo.supabase.co';
const DEFAULT_SUPABASE_KEY = 'public-anon-key';

export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : createClient(DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_KEY);

const FLUTTERWAVE_PUBLIC_KEY = 'FLWPUBK_TEST-YOUR_PUBLIC_KEY';
const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUDINARY_CLOUD_NAME';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = null;
  }

  setAuthToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Mock Auth APIs for testing
  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Supabase login error:', error);
      throw new Error(error.message || 'Login failed');
    }
    return { success: true, user: data.user, session: data.session };
  }

  async signup(userData) {
    const { email, password, fullName, username, role = 'creator' } = userData;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, username, role },
      },
    });
    if (error) {
      console.error('Supabase signup error:', error);
      throw new Error(error.message || 'Signup failed');
    }

    // Upsert into profiles table (ensure RLS allows this)
    const { error: profileError } = await supabase.from('profiles').upsert({
      id: data.user.id,
      full_name: fullName,
      username,
      role,
    });
    if (profileError) {
      console.error('Supabase profile upsert error:', profileError);
      throw new Error(profileError.message || 'Failed to create profile');
    }

    return { success: true, user: data.user };
  }

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  }

  // User Profile APIs
  async getProfile(userId) {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (error) throw error;
    return data;
  }

  async updateProfile(userId, profileData) {
    const { data, error } = await supabase.from('profiles').update(profileData).eq('id', userId).select().single();
    if (error) throw error;
    return data;
  }

  async fetchAllProfiles() {
    const { data, error } = await supabase.from('profiles').select('*');
    if (error) throw error;
    return data;
  }

  // Feed APIs
  async getFeed(page = 1, limit = 20) {
    return this.request(`/feed?page=${page}&limit=${limit}`);
  }

  async createPost(postData) {
    return this.request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async likePost(postId) {
    return this.request(`/posts/${postId}/like`, { method: 'POST' });
  }

  async addComment(postId, comment) {
    return this.request(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
    });
  }

  // Gigs APIs
  async getGigs(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.request(`/gigs?${queryParams}`);
  }

  async createGig(gigData) {
    return this.request('/gigs', {
      method: 'POST',
      body: JSON.stringify(gigData),
    });
  }

  async bookGig(gigId, bookingData) {
    return this.request(`/gigs/${gigId}/book`, {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  // Wallet APIs
  async getWallet() {
    return this.request('/wallet');
  }

  async withdrawFunds(withdrawalData) {
    return this.request('/wallet/withdraw', {
      method: 'POST',
      body: JSON.stringify(withdrawalData),
    });
  }

  // Messages APIs
  async getConversations() {
    return this.request('/messages/conversations');
  }

  async getMessages(conversationId) {
    return this.request(`/messages/conversations/${conversationId}`);
  }

  async sendMessage(conversationId, message) {
    return this.request(`/messages/conversations/${conversationId}`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  // Live Streaming APIs
  async startLiveStream(streamData) {
    return this.request('/streams/start', {
      method: 'POST',
      body: JSON.stringify(streamData),
    });
  }

  async endLiveStream(streamId) {
    return this.request(`/streams/${streamId}/end`, { method: 'POST' });
  }

  async sendTip(streamId, tipData) {
    return this.request(`/streams/${streamId}/tip`, {
      method: 'POST',
      body: JSON.stringify(tipData),
    });
  }

  // Media Upload
  async uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );

    return response.json();
  }
}

export default new ApiService();
