import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';

const app = express();
dotenv.config();

// Const
const PORT = process.env.PORT || 3003;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@christmasshop.hill9rw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'assets/static/image')));

// Routes
app.use('/api', router);

app.get('/', (req, res) => {
	return res.json({ message: 'All worked' });
});

async function start() {
	try {
		await mongoose
			.connect(DB)
			.then(res => console.log('Connect DB'))
			.catch(err => console.log(err));
		app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
	} catch (e) {
		console.log(e);
	}
}

start();
