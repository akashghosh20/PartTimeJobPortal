import { Subscription } from "../models/subscription.model.js";
import { User } from "../models/user.model.js";

// Create subscription
export const createSubscription = async (req, res) => {
    try {
        const userId = req.id;
        const { plan } = req.body;

        // Get user with current balance
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        // Check if user already has an active subscription
        const existingSubscription = await Subscription.findOne({
            user: userId,
            status: 'active'
        });

        if (existingSubscription) {
            return res.status(400).json({
                message: "User already has an active subscription",
                success: false
            });
        }

        // Calculate monthly fee
        const monthlyFee = 500; // 500 BDT per month

        // Check if user has sufficient balance
        if (user.balance < monthlyFee) {
            return res.status(400).json({
                message: `Insufficient balance. You need at least ${monthlyFee} BDT to subscribe. Current balance: ${user.balance} BDT`,
                success: false,
                requiredAmount: monthlyFee,
                currentBalance: user.balance
            });
        }

        // Calculate end date based on plan
        const startDate = new Date();
        const endDate = new Date();
        if (plan === 'monthly') {
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (plan === 'yearly') {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        // Create subscription
        const subscription = await Subscription.create({
            user: userId,
            plan,
            startDate,
            endDate,
            monthlyFee: plan === 'yearly' ? 500 * 12 : 500
        });

        // Deduct monthly fee from user balance
        user.balance -= monthlyFee;
        user.subscription = subscription._id;
        user.isSubscribed = true;
        await user.save();

        return res.status(201).json({
            message: `Subscription created successfully. ${monthlyFee} BDT deducted from your balance.`,
            success: true,
            subscription,
            newBalance: user.balance
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Get user subscription
export const getUserSubscription = async (req, res) => {
    try {
        const userId = req.id;
        const subscription = await Subscription.findOne({ user: userId })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            subscription,
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

// Check subscription status
export const checkSubscriptionStatus = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).populate('subscription');

        if (!user.isSubscribed || !user.subscription) {
            return res.status(200).json({
                isSubscribed: false,
                message: "User is not subscribed",
                success: true
            });
        }

        const subscription = user.subscription;
        const now = new Date();
        const isExpired = subscription.endDate < now;

        if (isExpired) {
            // Update subscription status
            subscription.status = 'expired';
            subscription.isActive = false;
            await subscription.save();

            user.isSubscribed = false;
            await user.save();

            return res.status(200).json({
                isSubscribed: false,
                message: "Subscription has expired",
                success: true
            });
        }

        return res.status(200).json({
            isSubscribed: true,
            subscription,
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

// Deduct monthly fee
export const deductMonthlyFee = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId);

        if (!user.isSubscribed) {
            return res.status(400).json({
                message: "User is not subscribed",
                success: false
            });
        }

        const monthlyFee = 500; // 500 BDT

        if (user.balance < monthlyFee) {
            // Deactivate subscription
            const subscription = await Subscription.findById(user.subscription);
            subscription.status = 'expired';
            subscription.isActive = false;
            await subscription.save();

            user.isSubscribed = false;
            await user.save();

            return res.status(400).json({
                message: "Insufficient balance. Subscription deactivated.",
                success: false
            });
        }

        // Deduct monthly fee
        user.balance -= monthlyFee;
        await user.save();

        return res.status(200).json({
            message: "Monthly fee deducted successfully",
            newBalance: user.balance,
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

// Get subscription info for user
export const getSubscriptionInfo = async (req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).populate('subscription');

        if (!user.isSubscribed || !user.subscription) {
            return res.status(200).json({
                isSubscribed: false,
                balance: user.balance,
                message: "User is not subscribed",
                success: true
            });
        }

        const subscription = user.subscription;
        const now = new Date();
        const isExpired = subscription.endDate < now;

        if (isExpired) {
            // Update subscription status
            subscription.status = 'expired';
            subscription.isActive = false;
            await subscription.save();

            user.isSubscribed = false;
            await user.save();

            return res.status(200).json({
                isSubscribed: false,
                balance: user.balance,
                message: "Subscription has expired",
                success: true
            });
        }

        return res.status(200).json({
            isSubscribed: true,
            balance: user.balance,
            subscription: {
                plan: subscription.plan,
                startDate: subscription.startDate,
                endDate: subscription.endDate,
                status: subscription.status
            },
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
