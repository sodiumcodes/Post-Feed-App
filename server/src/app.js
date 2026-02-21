// Backend application entry point using Express
import express from 'express';
import multer from 'multer';
import cors from 'cors';
import postModel from '../models/post.model.js';
import uploadFile from '../services/storage.service.js';

const app = express();

// Enabling CORS to allow requests from the React frontend dev server
app.use(cors());

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up Multer to store uploaded files temporarily in memory
const upload = multer({ storage: multer.memoryStorage() })

/**
 * Route to create a new post with an image and a caption.
 */
app.post("/create-post", upload.single("image"), async (req, res) => {
    // 1. Upload the image to ImageKit via our storage service
    const result = await uploadFile(req.file.buffer);

    // 2. Create a new record in the MongoDB database
    await postModel.create({
        "image": result.url,
        "caption": req.body.caption
    })

    res.status(201).json({ "message": "post created successfully" });
})

/**
 * Route to retrieve all posts currently stored in the database.
 */
app.get("/all-posts", async (req, res) => {
    // Fetching all records from the 'posts' collection
    const posts = await postModel.find();
    res.status(200).json({
        "message": "posts retrieved",
        posts: posts
    })
})

export default app;
