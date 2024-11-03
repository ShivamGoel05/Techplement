import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to fetch a random quote
app.get('/api/random-quote', async (req, res) => {
    try {
        const response = await fetch('https://zenquotes.io/api/random');
        const data = await response.json();
        res.json(data[0]);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).send('Error fetching quote');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});