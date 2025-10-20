import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import AdminJobs from './AdminJobs'
import AdminJobsTable from './AdminJobsTable'
import Companies from './Companies'
import CompaniesTable from './CompaniesTable'
import Applicants from './Applicants'
import ApplicantsTable from './ApplicantsTable'
import CompanyCreate from './CompanyCreate'
import CompanySetup from './CompanySetup'
import PostJob from './PostJob'
import PaymentManagement from './PaymentManagement'
import { 
    Briefcase, 
    Building2, 
    Users, 
    UserCheck, 
    Plus, 
    Settings, 
    CreditCard,
    BarChart3
} from 'lucide-react'

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('jobs')

    const tabs = [
        { id: 'jobs', label: 'Jobs', icon: Briefcase },
        { id: 'companies', label: 'Companies', icon: Building2 },
        { id: 'applicants', label: 'Applicants', icon: Users },
        { id: 'payments', label: 'Payments', icon: CreditCard },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 }
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'jobs':
                return <AdminJobs />
            case 'companies':
                return <Companies />
            case 'applicants':
                return <Applicants />
            case 'payments':
                return <PaymentManagement />
            case 'analytics':
                return (
                    <div className="max-w-6xl mx-auto my-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>Analytics Dashboard</CardTitle>
                                <CardDescription>
                                    View system statistics and insights
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-8 text-muted-foreground">
                                    Analytics dashboard coming soon...
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )
            default:
                return <AdminJobs />
        }
    }

    return (
        <div>
            <Navbar />
            
            {/* Admin Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-6xl mx-auto">
                    <div className="flex space-x-1 p-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <Button
                                    key={tab.id}
                                    variant={activeTab === tab.id ? 'default' : 'ghost'}
                                    onClick={() => setActiveTab(tab.id)}
                                    className="flex items-center gap-2"
                                >
                                    <Icon className="h-4 w-4" />
                                    {tab.label}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Content */}
            {renderContent()}
        </div>
    )
}

export default AdminDashboard
