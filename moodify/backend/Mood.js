import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Mood = mongoose.model('Mood', moodSchema);

export default Mood;
