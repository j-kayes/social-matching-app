const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import auth routes
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes); // Mount the auth routes

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
