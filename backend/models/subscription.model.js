import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    plan: {
        type: String,
        enum: ['monthly', 'yearly'],
        default: 'monthly'
    },
    status: {
        type: String,
        enum: ['active', 'expired', 'cancelled'],
        default: 'active'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    monthlyFee: {
        type: Number,
        default: 500 // 500 BDT per month
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Subscription = mongoose.model('Subscription', subscriptionSchema);
