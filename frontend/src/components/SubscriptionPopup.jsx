import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { AlertCircle, CreditCard, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SubscriptionPopup = ({ open, setOpen, reason, requiresPayment = false }) => {
    const navigate = useNavigate()

    const handleGoToProfile = () => {
        setOpen(false)
        navigate('/profile')
    }

    const getTitle = () => {
        if (requiresPayment) {
            return "Insufficient Balance"
        }
        return "Subscription Required"
    }

    const getMessage = () => {
        if (requiresPayment) {
            return "You don't have enough balance to apply for jobs. Please add money to your account to continue."
        }
        return "You need an active subscription to apply for jobs. Please subscribe first to start applying."
    }

    const getIcon = () => {
        if (requiresPayment) {
            return <Wallet className="h-8 w-8 text-orange-500" />
        }
        return <CreditCard className="h-8 w-8 text-blue-500" />
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        {getIcon()}
                        {getTitle()}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                            {getMessage()}
                        </p>
                    </div>
                    
                    {reason && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-gray-700">Reason:</p>
                            <p className="text-sm text-gray-600">{reason}</p>
                        </div>
                    )}

                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">
                            <strong>Monthly Subscription Fee:</strong> ৳500
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                            You can add money to your account and subscribe to start applying for jobs.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button onClick={handleGoToProfile} className="flex-1">
                            Go to Finance Management
                        </Button>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SubscriptionPopup
