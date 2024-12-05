const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

// Get user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Update profile
router.put('/me', auth, async (req, res) => {
  const { age, location, likes, dislikes } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if(!user) return res.status(404).json({ msg: 'User not found' });

    user.age = age || user.age;
    user.location = location || user.location;
    if (likes) user.likes = Array.isArray(likes) ? likes : likes.split(',').map(l => l.trim());
    if (dislikes) user.dislikes = Array.isArray(dislikes) ? dislikes : dislikes.split(',').map(d => d.trim());

    await user.save();
    res.json(user);
  } catch(err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
