import { Newsletter } from "../models/newsletter.model.js";

// Subscribe to newsletter
export const subscribeNewsletter = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required",
                success: false
            });
        }

        // Check if email already exists
        const existingSubscription = await Newsletter.findOne({ email });
        
        if (existingSubscription) {
            if (existingSubscription.status === 'active') {
                return res.status(400).json({
                    message: "Email is already subscribed to our newsletter",
                    success: false
                });
            } else if (existingSubscription.status === 'unsubscribed') {
                // Reactivate subscription
                existingSubscription.status = 'active';
                existingSubscription.subscribedAt = new Date();
                existingSubscription.unsubscribedAt = null;
                await existingSubscription.save();

                return res.status(200).json({
                    message: "Welcome back! You've been resubscribed to our newsletter",
                    success: true
                });
            }
        }

        // Create new subscription
        const newsletter = await Newsletter.create({
            email,
            status: 'active'
        });

        return res.status(201).json({
            message: "Successfully subscribed to our newsletter!",
            success: true,
            subscription: newsletter
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

// Unsubscribe from newsletter
export const unsubscribeNewsletter = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required",
                success: false
            });
        }

        const subscription = await Newsletter.findOne({ email });
        
        if (!subscription) {
            return res.status(404).json({
                message: "Email not found in our newsletter list",
                success: false
            });
        }

        if (subscription.status === 'unsubscribed') {
            return res.status(400).json({
                message: "Email is already unsubscribed",
                success: false
            });
        }

        subscription.status = 'unsubscribed';
        subscription.unsubscribedAt = new Date();
        await subscription.save();

        return res.status(200).json({
            message: "Successfully unsubscribed from our newsletter",
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

// Get all newsletter subscribers (admin only)
export const getAllSubscribers = async (req, res) => {
    try {
        const { status, page = 1, limit = 10 } = req.query;
        
        let query = {};
        if (status) {
            query.status = status;
        }

        const subscribers = await Newsletter.find(query)
            .sort({ subscribedAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Newsletter.countDocuments(query);

        return res.status(200).json({
            subscribers,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total,
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

// Get newsletter statistics (admin only)
export const getNewsletterStats = async (req, res) => {
    try {
        const totalSubscribers = await Newsletter.countDocuments();
        const activeSubscribers = await Newsletter.countDocuments({ status: 'active' });
        const unsubscribed = await Newsletter.countDocuments({ status: 'unsubscribed' });
        
        // Get recent subscriptions (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const recentSubscriptions = await Newsletter.countDocuments({
            subscribedAt: { $gte: thirtyDaysAgo }
        });

        return res.status(200).json({
            stats: {
                totalSubscribers,
                activeSubscribers,
                unsubscribed,
                recentSubscriptions
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
