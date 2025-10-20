import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../shared/Navbar'
import FooterWrapper from '../shared/FooterWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
    FileText, 
    Shield, 
    Users, 
    Lock, 
    AlertTriangle,
    CheckCircle,
    XCircle
} from 'lucide-react'

const TermsAndConditions = () => {
    const sections = [
        {
            id: 'acceptance',
            title: '1. Acceptance of Terms',
            content: `By accessing and using JobPortal Pro ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
        },
        {
            id: 'definitions',
            title: '2. Definitions',
            content: `For the purposes of these Terms and Conditions:
            • "Service" refers to the JobPortal Pro platform and all associated features
            • "User" refers to any individual who accesses or uses the Service
            • "Job Seeker" refers to users looking for employment opportunities
            • "Employer" refers to companies or individuals posting job opportunities
            • "Content" refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials`
        },
        {
            id: 'user-accounts',
            title: '3. User Accounts and Registration',
            content: `To access certain features of the Service, you must register for an account. You agree to:
            • Provide accurate, current, and complete information during registration
            • Maintain and update your account information
            • Maintain the security of your password and account
            • Accept responsibility for all activities under your account
            • Notify us immediately of any unauthorized use of your account`
        },
        {
            id: 'acceptable-use',
            title: '4. Acceptable Use Policy',
            content: `You agree not to use the Service to:
            • Post false, misleading, or fraudulent information
            • Violate any applicable laws or regulations
            • Infringe on intellectual property rights
            • Harass, abuse, or harm other users
            • Use automated systems to access the Service
            • Attempt to gain unauthorized access to any part of the Service
            • Transmit viruses, malware, or other harmful code`
        },
        {
            id: 'job-postings',
            title: '5. Job Postings and Applications',
            content: `Employers agree to:
            • Post only legitimate job opportunities
            • Comply with all applicable employment laws
            • Not discriminate based on protected characteristics
            • Respond to applications in a timely manner
            • Maintain confidentiality of applicant information
            
            Job Seekers agree to:
            • Provide accurate information in applications
            • Not apply for jobs they are not qualified for
            • Respect employer privacy and confidentiality
            • Not share job posting information without permission`
        },
        {
            id: 'subscription',
            title: '6. Subscription and Payment Terms',
            content: `• Monthly subscription fee: 500 BDT
            • Payment must be made in advance
            • Subscription automatically renews unless cancelled
            • Refunds are not provided for unused subscription time
            • We reserve the right to change pricing with 30 days notice
            • Payment methods: Bkash, Rocket, Nagad (subject to admin approval)
            • Subscription can be cancelled at any time
            • Access to job applications requires active subscription`
        },
        {
            id: 'privacy',
            title: '7. Privacy and Data Protection',
            content: `We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and protect your information. By using the Service, you agree to the collection and use of information in accordance with our Privacy Policy.`
        },
        {
            id: 'intellectual-property',
            title: '8. Intellectual Property Rights',
            content: `• The Service and its original content, features, and functionality are owned by JobPortal Pro
            • You may not reproduce, distribute, modify, or create derivative works
            • User-generated content remains the property of the user
            • By posting content, you grant us a license to use, display, and distribute it
            • We respect intellectual property rights and will respond to valid DMCA notices`
        },
        {
            id: 'disclaimers',
            title: '9. Disclaimers and Limitations',
            content: `THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            • WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
            • WARRANTIES REGARDING THE ACCURACY OR RELIABILITY OF JOB POSTINGS
            • WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE
            
            WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.`
        },
        {
            id: 'termination',
            title: '10. Termination',
            content: `We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination:
            • Your right to use the Service ceases immediately
            • We may delete your account and data
            • You remain liable for all charges incurred up to the termination date`
        },
        {
            id: 'governing-law',
            title: '11. Governing Law',
            content: `These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Dhaka, Bangladesh.`
        },
        {
            id: 'changes',
            title: '12. Changes to Terms',
            content: `We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new Terms.`
        }
    ]

    const prohibitedActivities = [
        'Posting fake or misleading job opportunities',
        'Discriminatory hiring practices',
        'Spam or unsolicited communications',
        'Harassment or abusive behavior',
        'Violation of intellectual property rights',
        'Attempting to circumvent security measures',
        'Sharing false information about qualifications',
        'Using the platform for illegal activities'
    ]

    const userRights = [
        'Access to job listings with active subscription',
        'Create and manage your profile',
        'Apply for relevant job opportunities',
        'Receive job alerts and notifications',
        'Contact support for assistance',
        'Cancel subscription at any time',
        'Request data deletion',
        'File complaints about violations'
    ]

    return (
        <>
            <Helmet>
                <title>Terms and Conditions - JobPortal Pro | Legal Terms</title>
                <meta name="description" content="Read JobPortal Pro's terms and conditions. Understand your rights and responsibilities when using our job portal platform." />
                <meta name="keywords" content="terms and conditions, legal terms, user agreement, job portal terms, service agreement" />
                <meta property="og:title" content="Terms and Conditions - JobPortal Pro" />
                <meta property="og:description" content="Read JobPortal Pro's terms and conditions. Understand your rights and responsibilities when using our job portal platform." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms and Conditions - JobPortal Pro" />
                <meta name="twitter:description" content="Read JobPortal Pro's terms and conditions. Understand your rights and responsibilities when using our job portal platform." />
                <link rel="canonical" href="https://jobportal.com/terms" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Terms and Conditions</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Please read these terms carefully before using our service. 
                            By using JobPortal Pro, you agree to be bound by these terms.
                        </p>
                        <div className="flex justify-center">
                            <Badge variant="secondary" className="bg-white/20 text-white">
                                <FileText className="h-4 w-4 mr-2" />
                                Last Updated: December 2024
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* Quick Overview */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-6 w-6 text-green-600" />
                                        <CardTitle>Your Rights</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {userRights.slice(0, 4).map((right, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{right}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="h-6 w-6 text-red-600" />
                                        <CardTitle>Prohibited Activities</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {prohibitedActivities.slice(0, 4).map((activity, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                <span>{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <Lock className="h-6 w-6 text-blue-600" />
                                        <CardTitle>Subscription Terms</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span>Monthly Fee:</span>
                                            <span className="font-semibold">500 BDT</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Payment Methods:</span>
                                            <span>Bkash, Rocket, Nagad</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Auto-renewal:</span>
                                            <span>Yes</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Cancellation:</span>
                                            <span>Anytime</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="space-y-8">
                            {sections.map((section, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                                            {section.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="prose prose-gray dark:prose-invert max-w-none">
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Questions About These Terms?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            If you have any questions about these Terms and Conditions, please contact us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Contact Us
                            </a>
                            <a 
                                href="/privacy" 
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </section>

                {/* Legal Notice */}
                <section className="py-8 bg-gray-100 dark:bg-gray-700">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            By using JobPortal Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                            If you do not agree to these terms, please do not use our service.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            © 2024 JobPortal Pro. All rights reserved.
                        </p>
                    </div>
                </section>

                <FooterWrapper />
            </div>
        </>
    )
}

export default TermsAndConditions
