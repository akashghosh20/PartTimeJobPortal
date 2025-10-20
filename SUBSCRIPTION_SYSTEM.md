# Subscription-Based Job Portal System

## Overview
This job portal now implements a subscription-based business model where users must pay a monthly subscription fee to apply for jobs. The system includes payment management, subscription tracking, and admin approval workflows.

## Features Implemented

### 1. Backend Models

#### User Model Updates
- Added `balance` field to track user's account balance
- Added `subscription` field to reference user's subscription
- Added `isSubscribed` boolean field to track subscription status

#### Subscription Model
- Tracks user subscription details
- Supports monthly and yearly plans
- Tracks subscription status (active, expired, cancelled)
- Records start and end dates
- Monthly fee: 500 BDT

#### Payment Model
- Records payment requests from users
- Supports Bkash, Rocket, and Nagad payment methods
- Tracks payment status (pending, approved, rejected)
- Includes admin approval workflow
- Links payments to subscriptions

### 2. Backend Controllers

#### Payment Controller
- `createPayment`: Submit payment request
- `getUserPayments`: Get user's payment history
- `getPendingPayments`: Get all pending payments (admin)
- `approvePayment`: Approve payment and add to user balance
- `rejectPayment`: Reject payment with reason
- `getUserBalance`: Get user's current balance

#### Subscription Controller
- `createSubscription`: Create new subscription
- `getUserSubscription`: Get user's subscription details
- `checkSubscriptionStatus`: Verify subscription validity
- `getSubscriptionInfo`: Get comprehensive subscription info
- `deductMonthlyFee`: Deduct monthly fee from balance

### 3. Frontend Components

#### Finance Management
- User balance display
- Subscription status
- Payment history
- Add money functionality
- Subscription creation

#### Subscription Popup
- Shows when user tries to apply without subscription
- Different messages for insufficient balance vs no subscription
- Redirects to finance management

#### Admin Payment Management
- View all pending payments
- Approve/reject payments with notes
- Payment history tracking

### 4. Business Logic

#### Job Application Flow
1. User clicks "Apply Now" on a job
2. System checks if user has active subscription
3. System checks if user has sufficient balance (500 BDT)
4. If checks pass, application is created
5. If checks fail, subscription popup is shown

#### Payment Flow
1. User adds money to account via payment request
2. Admin reviews and approves/rejects payment
3. If approved, amount is added to user's balance
4. User can then subscribe and apply for jobs

#### Subscription Flow
1. User creates subscription (monthly/yearly)
2. Monthly fee is deducted from balance
3. If insufficient balance, subscription is deactivated
4. User must add more money to reactivate

## API Endpoints

### Payment Endpoints
- `POST /api/v1/payment/create` - Create payment request
- `GET /api/v1/payment/user-payments` - Get user payments
- `GET /api/v1/payment/balance` - Get user balance
- `GET /api/v1/payment/pending` - Get pending payments (admin)
- `PUT /api/v1/payment/approve/:id` - Approve payment (admin)
- `PUT /api/v1/payment/reject/:id` - Reject payment (admin)

### Subscription Endpoints
- `POST /api/v1/subscription/create` - Create subscription
- `GET /api/v1/subscription/user-subscription` - Get user subscription
- `GET /api/v1/subscription/check-status` - Check subscription status
- `GET /api/v1/subscription/info` - Get subscription info
- `POST /api/v1/subscription/deduct-fee` - Deduct monthly fee

## Payment Methods Supported
- Bkash
- Rocket
- Nagad

## Monthly Subscription Fee
- 500 BDT per month
- Automatically deducted from user balance
- Subscription deactivated if insufficient balance

## Admin Features
- View all pending payment requests
- Approve or reject payments with notes
- Track payment history
- Manage user subscriptions

## User Experience
1. **First-time users**: Must add money and subscribe to apply for jobs
2. **Existing subscribers**: Can apply for jobs if they have sufficient balance
3. **Expired subscriptions**: Must renew subscription to continue applying
4. **Insufficient balance**: Must add money to account

## Error Handling
- Clear error messages for subscription issues
- Popup notifications for payment problems
- Admin notes for rejected payments
- Automatic subscription deactivation for insufficient funds

## Security Features
- Payment requests require admin approval
- Transaction ID validation
- Balance verification before job applications
- Subscription status validation

## Future Enhancements
- Automated payment processing
- Email notifications for payment status
- Subscription renewal reminders
- Analytics dashboard for admin
- Multiple subscription tiers
- Promotional offers and discounts
