import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'unsubscribed', 'pending'],
        default: 'active'
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    },
    unsubscribedAt: {
        type: Date
    },
    source: {
        type: String,
        default: 'website'
    }
}, { timestamps: true });

export const Newsletter = mongoose.model('Newsletter', newsletterSchema);
