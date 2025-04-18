import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import moodRoutes from './moodRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/moodify')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/moods', moodRoutes); // Route to handle mood data

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
