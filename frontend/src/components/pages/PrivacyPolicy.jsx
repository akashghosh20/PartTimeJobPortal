import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../shared/Navbar'
import FooterWrapper from '../shared/FooterWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
    Shield, 
    Lock, 
    Eye, 
    Database, 
    UserCheck,
    AlertCircle,
    CheckCircle,
    Mail
} from 'lucide-react'

const PrivacyPolicy = () => {
    const sections = [
        {
            id: 'introduction',
            title: '1. Introduction',
            content: `JobPortal Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our job portal platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`
        },
        {
            id: 'information-collection',
            title: '2. Information We Collect',
            content: `We collect information you provide directly to us, such as when you create an account, post a job, apply for a job, or contact us for support.

            Personal Information:
            • Name, email address, phone number
            • Professional information (resume, work experience, skills)
            • Profile photos and biographical information
            • Payment information (processed securely through third-party providers)
            
            Automatically Collected Information:
            • IP address and device information
            • Browser type and version
            • Pages visited and time spent on our platform
            • Search queries and job application history
            • Cookies and similar tracking technologies`
        },
        {
            id: 'information-use',
            title: '3. How We Use Your Information',
            content: `We use the information we collect to:
            • Provide, maintain, and improve our services
            • Process job applications and match candidates with employers
            • Send you job alerts and relevant opportunities
            • Communicate with you about your account and our services
            • Process payments and manage subscriptions
            • Analyze usage patterns to improve user experience
            • Comply with legal obligations and enforce our terms
            • Prevent fraud and ensure platform security`
        },
        {
            id: 'information-sharing',
            title: '4. Information Sharing and Disclosure',
            content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

            With Employers:
            • When you apply for a job, we share your application and profile information with the employer
            • Your contact information may be shared with employers for legitimate business purposes
            
            With Service Providers:
            • Payment processors for subscription management
            • Email service providers for communications
            • Analytics services to understand platform usage
            • Cloud storage providers for data security
            
            Legal Requirements:
            • When required by law or legal process
            • To protect our rights and prevent fraud
            • In case of business transfers or mergers`
        },
        {
            id: 'data-security',
            title: '5. Data Security',
            content: `We implement appropriate technical and organizational measures to protect your personal information:

            Security Measures:
            • Encryption of data in transit and at rest
            • Regular security audits and assessments
            • Access controls and authentication systems
            • Secure data centers with physical security
            • Regular backups and disaster recovery procedures
            
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`
        },
        {
            id: 'data-retention',
            title: '6. Data Retention',
            content: `We retain your personal information for as long as necessary to:
            • Provide our services to you
            • Comply with legal obligations
            • Resolve disputes and enforce agreements
            • Improve our services and user experience
            
            Account Deletion:
            • You may request deletion of your account at any time
            • We will delete your personal information within 30 days of request
            • Some information may be retained for legal or business purposes
            • Anonymized data may be retained for analytics and research`
        },
        {
            id: 'cookies',
            title: '7. Cookies and Tracking Technologies',
            content: `We use cookies and similar technologies to enhance your experience:

            Types of Cookies:
            • Essential cookies for platform functionality
            • Analytics cookies to understand usage patterns
            • Preference cookies to remember your settings
            • Marketing cookies for relevant job recommendations
            
            Cookie Management:
            • You can control cookies through your browser settings
            • Disabling cookies may affect platform functionality
            • We use third-party analytics services that may set their own cookies`
        },
        {
            id: 'user-rights',
            title: '8. Your Rights and Choices',
            content: `You have the following rights regarding your personal information:

            Access and Portability:
            • Request a copy of your personal information
            • Receive your data in a portable format
            • Access your account information at any time
            
            Correction and Updates:
            • Update your profile information
            • Correct inaccurate personal information
            • Modify your communication preferences
            
            Deletion and Restriction:
            • Request deletion of your account and data
            • Restrict processing of your information
            • Object to certain uses of your data
            
            Communication Preferences:
            • Opt out of marketing communications
            • Manage job alert settings
            • Control notification preferences`
        },
        {
            id: 'international-transfers',
            title: '9. International Data Transfers',
            content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers:

            Safeguards:
            • Standard contractual clauses for data protection
            • Adequacy decisions by relevant authorities
            • Binding corporate rules for data protection
            • Regular assessments of transfer mechanisms`
        },
        {
            id: 'children-privacy',
            title: '10. Children\'s Privacy',
            content: `Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.`
        },
        {
            id: 'changes',
            title: '11. Changes to This Privacy Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            • Posting the updated policy on our website
            • Sending email notifications to registered users
            • Displaying prominent notices on our platform
            
            Your continued use of our services after changes constitutes acceptance of the updated policy.`
        },
        {
            id: 'contact',
            title: '12. Contact Information',
            content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

            Email: privacy@jobportal.com
            Phone: +880 1234 567890
            Address: 123 Business District, Dhaka 1205, Bangladesh
            
            Data Protection Officer:
            Email: dpo@jobportal.com
            
            We will respond to your inquiries within 30 days.`
        }
    ]

    const dataTypes = [
        { type: 'Personal Information', description: 'Name, email, phone number', icon: UserCheck },
        { type: 'Professional Data', description: 'Resume, work experience, skills', icon: Database },
        { type: 'Usage Analytics', description: 'Platform interactions and preferences', icon: Eye },
        { type: 'Payment Information', description: 'Subscription and billing data', icon: Lock }
    ]

    const userControls = [
        'Update profile information',
        'Manage communication preferences',
        'Control job alert settings',
        'Download your data',
        'Delete your account',
        'Opt out of marketing emails',
        'Manage cookie preferences',
        'Request data correction'
    ]

    return (
        <>
            <Helmet>
                <title>Privacy Policy - JobPortal Pro | Data Protection & Privacy</title>
                <meta name="description" content="Learn how JobPortal Pro protects your privacy and handles your personal data. Read our comprehensive privacy policy and data protection practices." />
                <meta name="keywords" content="privacy policy, data protection, personal information, GDPR, privacy rights, data security" />
                <meta property="og:title" content="Privacy Policy - JobPortal Pro" />
                <meta property="og:description" content="Learn how JobPortal Pro protects your privacy and handles your personal data. Read our comprehensive privacy policy." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy - JobPortal Pro" />
                <meta name="twitter:description" content="Learn how JobPortal Pro protects your privacy and handles your personal data. Read our comprehensive privacy policy." />
                <link rel="canonical" href="https://jobportal.com/privacy" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Your privacy is important to us. Learn how we collect, use, and protect your personal information 
                            when you use our job portal platform.
                        </p>
                        <div className="flex justify-center">
                            <Badge variant="secondary" className="bg-white/20 text-white">
                                <Shield className="h-4 w-4 mr-2" />
                                Last Updated: December 2024
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* Data Types Overview */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Types of Data We Collect
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                We collect only the information necessary to provide our services effectively
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {dataTypes.map((data, index) => {
                                const Icon = data.icon
                                return (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                                                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <CardTitle className="text-lg">{data.type}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {data.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* User Controls */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Your Privacy Controls
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                You have full control over your personal information
                            </p>
                        </div>
                        
                        <Card>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {userControls.map((control, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300">{control}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                Need Help with Your Privacy?
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                                Contact our privacy team for assistance with your data rights and privacy concerns.
                                            </p>
                                            <a 
                                                href="mailto:privacy@jobportal.com" 
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                privacy@jobportal.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Questions About Your Privacy?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            We're here to help with any privacy-related questions or concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Contact Privacy Team
                            </a>
                            <a 
                                href="/terms" 
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </section>

                <FooterWrapper />
            </div>
        </>
    )
}

export default PrivacyPolicy
