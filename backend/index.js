
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();


import path from 'path';
import { fileURLToPath } from "url";


const __dirname1 = path.dirname(fileURLToPath(import.meta.url));
const __dirname2 = path.join(__dirname1, '../');

app.use(cors());
app.use(express.json());

// DEPLOYMENT CODE
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname2, '/frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname2, 'frontend', 'dist', 'index.html')));
}
else {
    app.get('/', (req, res) => {
        res.send('Server is running in dev mode');
    });
    console.log('=== Dev Mode server.js ===');
}

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



