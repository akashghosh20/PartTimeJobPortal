import { User } from "../models/user.model.js";
import { Subscription } from "../models/subscription.model.js";

export const checkSubscription = async (req, res, next) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).populate('subscription');

        if (!user.isSubscribed || !user.subscription) {
            return res.status(403).json({
                message: "You need an active subscription to apply for jobs. Please subscribe first.",
                success: false,
                requiresSubscription: true
            });
        }

        const subscription = user.subscription;
        const now = new Date();

        // Check if subscription is expired
        if (subscription.endDate < now || subscription.status !== 'active') {
            // Update user subscription status
            user.isSubscribed = false;
            await user.save();

            subscription.status = 'expired';
            subscription.isActive = false;
            await subscription.save();

            return res.status(403).json({
                message: "Your subscription has expired. Please renew your subscription to apply for jobs.",
                success: false,
                requiresSubscription: true
            });
        }

        // Check if user has sufficient balance for monthly fee
        const monthlyFee = 500; // 500 BDT
        if (user.balance < monthlyFee) {
            return res.status(403).json({
                message: "Insufficient balance. Please add money to your account to continue applying for jobs.",
                success: false,
                requiresPayment: true
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
