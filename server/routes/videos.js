import express from 'express';
import { addVideo } from '../controllers/video.js';
import verifyToken from '../verifyToken.js';

const router = express.Router();

// Create a Video
router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", addVideo)
router.put("/view/:id", addVideo)
router.put("/view/:id", addVideo)


export default router;