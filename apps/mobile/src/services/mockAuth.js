// src/services/mockAuth.js
// A lightweight in-memory mock of Supabase Auth to use during local development
// NOTE: This is **NOT** production-ready. It is only meant to let the UI flow
// naturally without a real backend.

// Very naive in-memory user store
let users = [];

const STORAGE_KEY = 'hc_user';

// Load any persisted user so session survives page refresh
let persistedUser = null;
if (typeof localStorage !== 'undefined') {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) persistedUser = JSON.parse(raw);
  } catch (_) {
    // ignore parse errors
  }
}

// Helper to simulate network latency so the UI can show loading states
const delay = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a primitive unique id (good enough for the mock)
const genId = () => `${Date.now()}-${Math.floor(Math.random() * 1e6)}`;

async function signup({ email, password, fullName = '', username = '', role = 'creator' }) {
  await delay();
  // Check for existing email or username
  const exists = users.find(u => u.email === email || u.username === username);
  if (exists) {
    throw new Error('User already exists with that email or username');
  }
  const newUser = {
    id: genId(),
    email,
    password, // NEVER store plain text passwords in real life – this is only a mock!
    fullName,
    username,
    role,
  };
  users.push(newUser);
  // persist
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  }
  return { success: true, user: { ...newUser, password: undefined } };
}

async function login(emailOrUsername, password) {
  await delay();
  const user = users.find(
    u => (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password,
  );
  if (!user) {
    throw new Error('Invalid credentials');
  }
  // persist session
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
  return { success: true, user: { ...user, password: undefined } };
}

async function logout() {
  await delay(200);
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return { success: true };
}

function getCurrentUser() {
  if (persistedUser) return persistedUser;
  if (typeof localStorage !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
  }
  return null;
}

export default {
  signup,
  login,
  logout,
  getCurrentUser,
};
