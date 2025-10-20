import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Textarea } from '../ui/textarea'
import { CheckCircle, XCircle, Clock, User, CreditCard } from 'lucide-react'
import { toast } from 'sonner'
import { PAYMENT_API_END_POINT } from '@/utils/constant'

const PaymentManagement = () => {
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedPayment, setSelectedPayment] = useState(null)
    const [showApprovalDialog, setShowApprovalDialog] = useState(false)
    const [showRejectionDialog, setShowRejectionDialog] = useState(false)
    const [adminNotes, setAdminNotes] = useState('')

    useEffect(() => {
        fetchPendingPayments()
    }, [])

    const fetchPendingPayments = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${PAYMENT_API_END_POINT}/pending`, {
                credentials: 'include'
            })
            const data = await response.json()
            if (data.success) {
                setPayments(data.payments)
            }
        } catch (error) {
            console.error('Error fetching payments:', error)
            toast.error('Error fetching payments')
        } finally {
            setLoading(false)
        }
    }

    const handleApprove = async (paymentId) => {
        try {
            const response = await fetch(`${PAYMENT_API_END_POINT}/approve/${paymentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ adminNotes })
            })
            const data = await response.json()
            
            if (data.success) {
                toast.success('Payment approved successfully')
                setShowApprovalDialog(false)
                setAdminNotes('')
                fetchPendingPayments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.error('Error approving payment:', error)
            toast.error('Error approving payment')
        }
    }

    const handleReject = async (paymentId) => {
        try {
            const response = await fetch(`${PAYMENT_API_END_POINT}/reject/${paymentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ adminNotes })
            })
            const data = await response.json()
            
            if (data.success) {
                toast.success('Payment rejected')
                setShowRejectionDialog(false)
                setAdminNotes('')
                fetchPendingPayments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.error('Error rejecting payment:', error)
            toast.error('Error rejecting payment')
        }
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'approved':
                return <CheckCircle className="h-4 w-4 text-green-500" />
            case 'rejected':
                return <XCircle className="h-4 w-4 text-red-500" />
            case 'pending':
                return <Clock className="h-4 w-4 text-yellow-500" />
            default:
                return <Clock className="h-4 w-4 text-gray-500" />
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800'
            case 'rejected':
                return 'bg-red-100 text-red-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
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
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Management
                    </CardTitle>
                    <CardDescription>
                        Review and approve pending payment requests
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8">Loading payments...</div>
                    ) : payments.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            No pending payments
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {payments.map((payment) => (
                                <Card key={payment._id} className="border-l-4 border-l-yellow-500">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4" />
                                                    <span className="font-medium">{payment.user.fullname}</span>
                                                    <span className="text-sm text-muted-foreground">
                                                        ({payment.user.email})
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="font-medium">৳{payment.amount}</span>
                                                    <span className="text-muted-foreground">
                                                        {payment.paymentMethod.toUpperCase()}
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        ID: {payment.transactionId}
                                                    </span>
                                                    <span className="text-muted-foreground">
                                                        {formatDate(payment.createdAt)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge className={getStatusColor(payment.status)}>
                                                    {getStatusIcon(payment.status)}
                                                    <span className="ml-1">{payment.status}</span>
                                                </Badge>
                                                {payment.status === 'pending' && (
                                                    <div className="flex gap-2">
                                                        <Button
                                                            size="sm"
                                                            onClick={() => {
                                                                setSelectedPayment(payment)
                                                                setShowApprovalDialog(true)
                                                            }}
                                                            className="bg-green-600 hover:bg-green-700"
                                                        >
                                                            Approve
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="destructive"
                                                            onClick={() => {
                                                                setSelectedPayment(payment)
                                                                setShowRejectionDialog(true)
                                                            }}
                                                        >
                                                            Reject
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Approval Dialog */}
            <Dialog open={showApprovalDialog} onOpenChange={setShowApprovalDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Approve Payment</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-sm text-green-700">
                                <strong>Amount:</strong> ৳{selectedPayment?.amount}
                            </p>
                            <p className="text-sm text-green-700">
                                <strong>Method:</strong> {selectedPayment?.paymentMethod?.toUpperCase()}
                            </p>
                            <p className="text-sm text-green-700">
                                <strong>Transaction ID:</strong> {selectedPayment?.transactionId}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="adminNotes">Admin Notes (Optional)</Label>
                            <Textarea
                                id="adminNotes"
                                placeholder="Add any notes about this approval..."
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => handleApprove(selectedPayment?._id)}
                                className="flex-1 bg-green-600 hover:bg-green-700"
                            >
                                Approve Payment
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setShowApprovalDialog(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Rejection Dialog */}
            <Dialog open={showRejectionDialog} onOpenChange={setShowRejectionDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Reject Payment</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="bg-red-50 p-3 rounded-lg">
                            <p className="text-sm text-red-700">
                                <strong>Amount:</strong> ৳{selectedPayment?.amount}
                            </p>
                            <p className="text-sm text-red-700">
                                <strong>Method:</strong> {selectedPayment?.paymentMethod?.toUpperCase()}
                            </p>
                            <p className="text-sm text-red-700">
                                <strong>Transaction ID:</strong> {selectedPayment?.transactionId}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="rejectionNotes">Rejection Reason (Required)</Label>
                            <Textarea
                                id="rejectionNotes"
                                placeholder="Explain why this payment is being rejected..."
                                value={adminNotes}
                                onChange={(e) => setAdminNotes(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => handleReject(selectedPayment?._id)}
                                className="flex-1 bg-red-600 hover:bg-red-700"
                                disabled={!adminNotes.trim()}
                            >
                                Reject Payment
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setShowRejectionDialog(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PaymentManagement
