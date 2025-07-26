// src/services/api.js
import axios from 'axios';

// Base API URL — change to full URL or use Vite proxy
const API_BASE_URL = '/api'; // Make sure Vite proxy is configured if using this

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// -----------------------------
// 🚀 CONTACT FORM API
// -----------------------------
export const sendContactForm = async (formData) => {
  try {
    const response = await api.post('/contactus/addcontact', formData);
    return response.data;
  } catch (error) {
    console.error('Contact API Error:', error);
    throw error?.response?.data?.message || 'Something went wrong while sending message.';
  }
};

// -----------------------------
// 📅 EVENTS API
// -----------------------------
export const getAllEvents = async () => {
  const response = await axios.get(`${BASE_URL}/getallevent`);
  let eventsArray = [];

  if (Array.isArray(response.data)) {
    eventsArray = response.data;
  } else if (response.data?.events && Array.isArray(response.data.events)) {
    eventsArray = response.data.events;
  } else if (response.data?.data && Array.isArray(response.data.data)) {
    eventsArray = response.data.data;
  } else {
    throw new Error('Invalid data structure');
  }

  return eventsArray.map(event => ({
    id: event._id || event.id,
    title: event.name || event.title,
    description: event.description,
    image: event.image?.startsWith('http')
      ? event.image
      : `http://localhost:8000/uploads/${event.image}`,
    date: event.date ? new Date(event.date).toLocaleDateString() : 'TBD',
    day: event.date ? new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' }) : 'TBD',
    time: event.time || 'TBD',
    location: event.location || 'TBD'
  }));
};

export const participateInEvent = async (participantData) => {
  return await axios.post(`${BASE_URL}/participate`, participantData);
};

