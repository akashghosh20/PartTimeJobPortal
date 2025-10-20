import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Wallet, Plus, CreditCard, AlertCircle, CheckCircle } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { PAYMENT_API_END_POINT, SUBSCRIPTION_API_END_POINT } from '@/utils/constant'

const FinanceManagement = () => {
    const { user } = useSelector(store => store.auth)
    const [balance, setBalance] = useState(0)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [payments, setPayments] = useState([])
    const [subscription, setSubscription] = useState(null)
    const [showPaymentDialog, setShowPaymentDialog] = useState(false)
    const [paymentData, setPaymentData] = useState({
        amount: '',
        paymentMethod: '',
        transactionId: ''
    })

    // Fetch user balance and subscription status
    useEffect(() => {
        fetchUserBalance()
        fetchUserPayments()
        fetchUserSubscription()
    }, [])

    const fetchUserBalance = async () => {
        try {
            const response = await fetch(`${PAYMENT_API_END_POINT}/balance`, {
                credentials: 'include'
            })
            const data = await response.json()
            if (data.success) {
                setBalance(data.balance)
                setIsSubscribed(data.isSubscribed)
            }
        } catch (error) {
            console.error('Error fetching balance:', error)
        }
    }

    const fetchUserPayments = async () => {
        try {
            const response = await fetch(`${PAYMENT_API_END_POINT}/user-payments`, {
                credentials: 'include'
            })
            const data = await response.json()
            if (data.success) {
                setPayments(data.payments)
            }
        } catch (error) {
            console.error('Error fetching payments:', error)
        }
    }

    const fetchUserSubscription = async () => {
        try {
            const response = await fetch(`${SUBSCRIPTION_API_END_POINT}/user-subscription`, {
                credentials: 'include'
            })
            const data = await response.json()
            if (data.success) {
                setSubscription(data.subscription)
            }
        } catch (error) {
            console.error('Error fetching subscription:', error)
        }
    }

    const handlePaymentSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${PAYMENT_API_END_POINT}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(paymentData)
            })
            const data = await response.json()
            
            if (data.success) {
                toast.success('Payment request submitted successfully. Waiting for admin approval.')
                setShowPaymentDialog(false)
                setPaymentData({ amount: '', paymentMethod: '', transactionId: '' })
                fetchUserPayments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.error('Error submitting payment:', error)
            toast.error('Error submitting payment request')
        }
    }

    const createSubscription = async () => {
        try {
            const response = await fetch(`${SUBSCRIPTION_API_END_POINT}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ plan: 'monthly' })
            })
            const data = await response.json()
            
            if (data.success) {
                toast.success(data.message)
                fetchUserSubscription()
                fetchUserBalance()
            } else {
                toast.error(data.message)
                // If insufficient balance, show specific message
                if (data.requiredAmount && data.currentBalance) {
                    toast.error(`You need ${data.requiredAmount} BDT but only have ${data.currentBalance} BDT. Please add more money to your account.`)
                }
            }
        } catch (error) {
            console.error('Error creating subscription:', error)
            toast.error('Error creating subscription')
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'rejected':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="space-y-6">
            {/* Balance and Subscription Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">৳{balance}</div>
                        <p className="text-xs text-muted-foreground">
                            Available for job applications
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscription Status</CardTitle>
                        {isSubscribed ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                        )}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {isSubscribed ? 'Active' : 'Inactive'}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {isSubscribed ? 'Monthly fee: ৳500' : 'Subscribe to apply for jobs'}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Subscription Info */}
            {subscription && (
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Plan:</span>
                                <span className="text-sm font-medium capitalize">{subscription.plan}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Start Date:</span>
                                <span className="text-sm font-medium">{formatDate(subscription.startDate)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">End Date:</span>
                                <span className="text-sm font-medium">{formatDate(subscription.endDate)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Status:</span>
                                <Badge className={getStatusColor(subscription.status)}>
                                    {subscription.status}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Add Money Section */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        Add Money to Account
                    </CardTitle>
                    <CardDescription>
                        Add money to your account to pay for monthly subscription fees
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
                        <DialogTrigger asChild>
                            <Button className="w-full">
                                <CreditCard className="h-4 w-4 mr-2" />
                                Add Money
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Money to Account</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handlePaymentSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="amount">Amount (BDT)</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="Enter amount"
                                        value={paymentData.amount}
                                        onChange={(e) => setPaymentData({ ...paymentData, amount: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="paymentMethod">Payment Method</Label>
                                    <Select
                                        value={paymentData.paymentMethod}
                                        onValueChange={(value) => setPaymentData({ ...paymentData, paymentMethod: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select payment method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bkash">Bkash</SelectItem>
                                            <SelectItem value="rocket">Rocket</SelectItem>
                                            <SelectItem value="nagad">Nagad</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="transactionId">Transaction ID</Label>
                                    <Input
                                        id="transactionId"
                                        type="text"
                                        placeholder="Enter transaction ID"
                                        value={paymentData.transactionId}
                                        onChange={(e) => setPaymentData({ ...paymentData, transactionId: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <Button type="submit" className="flex-1">
                                        Submit Payment
                                    </Button>
                                    <Button type="button" variant="outline" onClick={() => setShowPaymentDialog(false)}>
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>

            {/* Subscribe Button */}
            {!isSubscribed && (
                <Card>
                    <CardHeader>
                        <CardTitle>Get Subscription</CardTitle>
                        <CardDescription>
                            Subscribe to start applying for jobs. Monthly fee: ৳500
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <div className="flex justify-between text-sm">
                                    <span>Your Balance:</span>
                                    <span className="font-medium">৳{balance}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Required Amount:</span>
                                    <span className="font-medium">৳500</span>
                                </div>
                                {balance < 500 && (
                                    <div className="text-red-600 text-sm mt-2">
                                        ⚠️ Insufficient balance. You need ৳{500 - balance} more to subscribe.
                                    </div>
                                )}
                            </div>
                            <Button 
                                onClick={createSubscription} 
                                className="w-full"
                                disabled={balance < 500}
                            >
                                {balance < 500 ? 'Insufficient Balance' : 'Subscribe Now'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Payment History */}
            <Card>
                <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                    {payments.length === 0 ? (
                        <p className="text-muted-foreground text-center py-4">No payment history</p>
                    ) : (
                        <div className="space-y-3">
                            {payments.map((payment) => (
                                <div key={payment._id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="space-y-1">
                                        <div className="font-medium">৳{payment.amount}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {payment.paymentMethod.toUpperCase()} - {payment.transactionId}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {formatDate(payment.createdAt)}
                                        </div>
                                    </div>
                                    <Badge className={getStatusColor(payment.status)}>
                                        {payment.status}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default FinanceManagement
