import express from "express";
import { 
    createSubscription, 
    getUserSubscription, 
    checkSubscriptionStatus,
    deductMonthlyFee,
    getSubscriptionInfo
} from "../controllers/subscription.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/create", isAuthenticated, createSubscription);
router.get("/user-subscription", isAuthenticated, getUserSubscription);
router.get("/check-status", isAuthenticated, checkSubscriptionStatus);
router.get("/info", isAuthenticated, getSubscriptionInfo);
router.post("/deduct-fee", isAuthenticated, deductMonthlyFee);

export default router;
