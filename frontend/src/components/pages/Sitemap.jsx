import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../shared/Navbar'
import FooterWrapper from '../shared/FooterWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
    Globe, 
    FileText, 
    Users, 
    Building2, 
    Briefcase,
    User,
    Shield,
    Mail,
    Phone,
    MapPin
} from 'lucide-react'

const Sitemap = () => {
    const siteStructure = [
        {
            category: 'Main Pages',
            icon: Globe,
            pages: [
                { name: 'Home', url: '/', description: 'Landing page with job search and featured opportunities' },
                { name: 'Browse Jobs', url: '/browse', description: 'Browse all available job listings' },
                { name: 'Jobs', url: '/jobs', description: 'Search and filter job opportunities' },
                { name: 'About Us', url: '/about', description: 'Learn about our company and mission' },
                { name: 'Contact', url: '/contact', description: 'Get in touch with our support team' }
            ]
        },
        {
            category: 'User Account',
            icon: User,
            pages: [
                { name: 'Login', url: '/login', description: 'Sign in to your account' },
                { name: 'Sign Up', url: '/signup', description: 'Create a new account' },
                { name: 'Profile', url: '/profile', description: 'Manage your profile and settings' },
                { name: 'Finance Management', url: '/profile#finance', description: 'Manage subscription and payments' }
            ]
        },
        {
            category: 'Employer Section',
            icon: Building2,
            pages: [
                { name: 'Companies', url: '/admin/companies', description: 'Manage company profiles' },
                { name: 'Create Company', url: '/admin/companies/create', description: 'Add new company' },
                { name: 'Company Setup', url: '/admin/companies/:id', description: 'Configure company settings' },
                { name: 'Post Job', url: '/admin/jobs/create', description: 'Create new job listing' },
                { name: 'Job Management', url: '/admin/jobs', description: 'Manage job postings' },
                { name: 'Applicants', url: '/admin/jobs/:id/applicants', description: 'Review job applications' },
                { name: 'Payment Management', url: '/admin/payments', description: 'Manage payment approvals' }
            ]
        },
        {
            category: 'Legal & Support',
            icon: Shield,
            pages: [
                { name: 'Terms & Conditions', url: '/terms', description: 'Terms of service and usage' },
                { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy policy' },
                { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and management' },
                { name: 'Help Center', url: '/help', description: 'Frequently asked questions' },
                { name: 'FAQ', url: '/faq', description: 'Common questions and answers' }
            ]
        }
    ]

    const quickLinks = [
        { name: 'Find Jobs', url: '/jobs', icon: Briefcase },
        { name: 'Post Jobs', url: '/admin/jobs/create', icon: FileText },
        { name: 'About Us', url: '/about', icon: Users },
        { name: 'Contact', url: '/contact', icon: Mail }
    ]

    const contactInfo = [
        { icon: Mail, text: 'support@jobportal.com', url: 'mailto:support@jobportal.com' },
        { icon: Phone, text: '+880 1234 567890', url: 'tel:+8801234567890' },
        { icon: MapPin, text: '123 Business District, Dhaka 1205, Bangladesh', url: '#' }
    ]

    return (
        <>
            <Helmet>
                <title>Sitemap - JobPortal Pro | Site Navigation & Structure</title>
                <meta name="description" content="Explore JobPortal Pro's complete sitemap. Find all pages, sections, and navigation links for easy site exploration." />
                <meta name="keywords" content="sitemap, navigation, site structure, job portal, website map, pages" />
                <meta property="og:title" content="Sitemap - JobPortal Pro" />
                <meta property="og:description" content="Explore JobPortal Pro's complete sitemap. Find all pages, sections, and navigation links." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sitemap - JobPortal Pro" />
                <meta name="twitter:description" content="Explore JobPortal Pro's complete sitemap. Find all pages, sections, and navigation links." />
                <link rel="canonical" href="https://jobportal.com/sitemap" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Site Map</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Navigate through all sections of our job portal platform. 
                            Find exactly what you're looking for with our comprehensive site structure.
                        </p>
                        <div className="flex justify-center">
                            <Badge variant="secondary" className="bg-white/20 text-white">
                                <Globe className="h-4 w-4 mr-2" />
                                Complete Site Navigation
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Quick Access
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Most popular pages and features
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {quickLinks.map((link, index) => {
                                const Icon = link.icon
                                return (
                                    <Card key={index} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6 text-center">
                                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {link.name}
                                            </h3>
                                            <a 
                                                href={link.url}
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                Visit Page →
                                            </a>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Site Structure */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Complete Site Structure
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                All pages and sections organized by category
                            </p>
                        </div>
                        
                        <div className="space-y-8">
                            {siteStructure.map((category, categoryIndex) => {
                                const Icon = category.icon
                                return (
                                    <Card key={categoryIndex}>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3 text-xl">
                                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                                                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                {category.category}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {category.pages.map((page, pageIndex) => (
                                                    <div key={pageIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                            <a 
                                                                href={page.url}
                                                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                            >
                                                                {page.name}
                                                            </a>
                                                        </h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                                            {page.description}
                                                        </p>
                                                        <div className="mt-2">
                                                            <code className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                                {page.url}
                                                            </code>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Contact Information
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Get in touch with us for any questions or support
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contactInfo.map((contact, index) => {
                                const Icon = contact.icon
                                return (
                                    <Card key={index}>
                                        <CardContent className="p-6 text-center">
                                            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <a 
                                                href={contact.url}
                                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                {contact.text}
                                            </a>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* SEO Information */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">SEO & Technical Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Site Details</h3>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                            <li>• Total Pages: 25+</li>
                                            <li>• Last Updated: December 2024</li>
                                            <li>• Mobile Responsive: Yes</li>
                                            <li>• Dark Mode Support: Yes</li>
                                            <li>• Multi-language: English, বাংলা, العربية</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                            <li>• Job Search & Filtering</li>
                                            <li>• User Profiles & Applications</li>
                                            <li>• Employer Dashboard</li>
                                            <li>• Payment Management</li>
                                            <li>• Real-time Notifications</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <FooterWrapper />
            </div>
        </>
    )
}

export default Sitemap
