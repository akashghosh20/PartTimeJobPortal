import express from "express";
import { 
    subscribeNewsletter, 
    unsubscribeNewsletter, 
    getAllSubscribers, 
    getNewsletterStats 
} from "../controllers/newsletter.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Public routes
router.post("/subscribe", subscribeNewsletter);
router.post("/unsubscribe", unsubscribeNewsletter);

// Admin routes
router.get("/subscribers", isAuthenticated, getAllSubscribers);
router.get("/stats", isAuthenticated, getNewsletterStats);

export default router;
