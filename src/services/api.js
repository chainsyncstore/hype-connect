
// API Service Layer for Hype Connect
const API_BASE_URL = 'https://your-api-endpoint.com/api/v1';
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
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
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    if (email && password) {
      const mockUser = {
        id: '123',
        email: email,
        name: 'Test User',
        token: 'mock_jwt_token_12345'
      };
      this.setAuthToken(mockUser.token);
      return { success: true, user: mockUser };
    } else {
      throw new Error('Invalid credentials');
    }
  }

  async signup(userData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful signup
    if (userData.email && userData.password && userData.fullName) {
      const mockUser = {
        id: '123',
        email: userData.email,
        name: userData.fullName,
        username: userData.username || userData.email.split('@')[0],
        role: userData.role || 'creator',
        token: 'mock_jwt_token_12345'
      };
      this.setAuthToken(mockUser.token);
      return { success: true, user: mockUser };
    } else {
      throw new Error('Missing required fields');
    }
  }

  async logout() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    this.setAuthToken(null);
    return { success: true };
  }

  // User Profile APIs
  async getProfile(userId) {
    return this.request(`/users/${userId}`);
  }

  async updateProfile(userId, profileData) {
    return this.request(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
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
      }
    );

    return response.json();
  }
}

export default new ApiService();
