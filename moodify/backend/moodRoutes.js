import express from 'express';
import Mood from './Mood.js'; // Make sure the model is correctly imported

const router = express.Router();

// Route to save a new mood
router.post('/', async (req, res) => {
  const { mood } = req.body;
  const timestamp = new Date();

  const newMood = new Mood({ mood, timestamp });
  try {
    await newMood.save();
    res.status(200).json({ message: 'Mood saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save mood' });
  }
});

// Route to get all moods
router.get('/', async (req, res) => {
  try {
    const moods = await Mood.find(); // Get all moods
    res.json(moods); // Send moods as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch mood history' });
  }
});

export default router;
