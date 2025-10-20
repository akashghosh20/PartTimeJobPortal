import express from "express";
import { 
    createPayment, 
    getUserPayments, 
    getPendingPayments, 
    approvePayment, 
    rejectPayment,
    getUserBalance 
} from "../controllers/payment.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

// User routes
router.post("/create", isAuthenticated, createPayment);
router.get("/user-payments", isAuthenticated, getUserPayments);
router.get("/balance", isAuthenticated, getUserBalance);

// Admin routes
router.get("/pending", isAuthenticated, getPendingPayments);
router.put("/approve/:paymentId", isAuthenticated, approvePayment);
router.put("/reject/:paymentId", isAuthenticated, rejectPayment);

export default router;
