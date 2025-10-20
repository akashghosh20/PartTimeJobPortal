import { Payment } from "../models/payment.model.js";
import { User } from "../models/user.model.js";
import { Subscription } from "../models/subscription.model.js";

// Create payment request
export const createPayment = async (req, res) => {
    try {
        const userId = req.id;
        const { amount, paymentMethod, transactionId } = req.body;

        if (!amount || !paymentMethod || !transactionId) {
            return res.status(400).json({
                message: "Amount, payment method, and transaction ID are required",
                success: false
            });
        }

        // Check if transaction ID already exists
        const existingPayment = await Payment.findOne({ transactionId });
        if (existingPayment) {
            return res.status(400).json({
                message: "Transaction ID already exists",
                success: false
            });
        }

        const payment = await Payment.create({
            user: userId,
            amount,
            paymentMethod,
            transactionId
        });

        return res.status(201).json({
            message: "Payment request created successfully. Waiting for admin approval.",
            success: true,
            payment
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Get user's payment history
export const getUserPayments = async (req, res) => {
    try {
        const userId = req.id;
        const payments = await Payment.find({ user: userId }).sort({ createdAt: -1 });

        return res.status(200).json({
            payments,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Get all pending payments (admin only)
export const getPendingPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ status: 'pending' })
            .populate('user', 'fullname email phoneNumber')
            .sort({ createdAt: -1 });

        return res.status(200).json({
            payments,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Approve payment (admin only)
export const approvePayment = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const { adminNotes } = req.body;
        const adminId = req.id;

        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).json({
                message: "Payment not found",
                success: false
            });
        }

        if (payment.status !== 'pending') {
            return res.status(400).json({
                message: "Payment is not pending",
                success: false
            });
        }

        // Update payment status
        payment.status = 'approved';
        payment.approvedBy = adminId;
        payment.approvedAt = new Date();
        payment.adminNotes = adminNotes || '';

        // Add amount to user's balance
        const user = await User.findById(payment.user);
        user.balance += payment.amount;
        await user.save();

        await payment.save();

        return res.status(200).json({
            message: "Payment approved successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Reject payment (admin only)
export const rejectPayment = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const { adminNotes } = req.body;
        const adminId = req.id;

        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).json({
                message: "Payment not found",
                success: false
            });
        }

        if (payment.status !== 'pending') {
            return res.status(400).json({
                message: "Payment is not pending",
                success: false
            });
        }

        payment.status = 'rejected';
        payment.approvedBy = adminId;
        payment.approvedAt = new Date();
        payment.adminNotes = adminNotes || '';

        await payment.save();

        return res.status(200).json({
            message: "Payment rejected",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Get user balance
export const getUserBalance = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select('balance isSubscribed');

        return res.status(200).json({
            balance: user.balance,
            isSubscribed: user.isSubscribed,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
