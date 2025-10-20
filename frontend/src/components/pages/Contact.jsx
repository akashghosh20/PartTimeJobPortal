import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../shared/Navbar'
import FooterWrapper from '../shared/FooterWrapper'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { 
    Mail, 
    Phone, 
    MapPin, 
    Clock, 
    Send,
    MessageSquare,
    Headphones,
    HelpCircle
} from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Contact form submitted:', formData)
        toast.success('Thank you for your message! We\'ll get back to you within 24 hours.')
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            inquiryType: 'general'
        })
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: ['support@jobportal.com', 'info@jobportal.com'],
            description: 'Send us an email and we\'ll respond within 24 hours'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: ['+880 1234 567890', '+880 9876 543210'],
            description: 'Mon-Fri from 9am to 6pm (GMT+6)'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            details: ['123 Business District', 'Dhaka 1205, Bangladesh'],
            description: 'Come say hello at our office'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
            description: 'We\'re here to help during business hours'
        }
    ]

    const faqs = [
        {
            question: 'How do I create an account?',
            answer: 'Simply click the "Sign Up" button on our homepage and follow the registration process. It takes less than 5 minutes!'
        },
        {
            question: 'Is JobPortal Pro free to use?',
            answer: 'Yes, our basic services are free for job seekers. We also offer premium features for enhanced visibility and job matching.'
        },
        {
            question: 'How do I apply for jobs?',
            answer: 'Browse our job listings, click on any job that interests you, and hit the "Apply Now" button. Make sure your profile is complete!'
        },
        {
            question: 'Can I post jobs as an employer?',
            answer: 'Absolutely! Employers can create an account and post unlimited job listings. Contact our sales team for enterprise solutions.'
        },
        {
            question: 'How do I reset my password?',
            answer: 'Click "Forgot Password" on the login page and enter your email address. We\'ll send you a reset link.'
        },
        {
            question: 'What if I can\'t find a specific job?',
            answer: 'Use our advanced search filters or set up job alerts. You can also contact our support team for personalized assistance.'
        }
    ]

    const supportOptions = [
        {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Get instant help from our support team',
            action: 'Start Chat',
            available: true
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Send us a detailed message',
            action: 'Send Email',
            available: true
        },
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our team',
            action: 'Call Now',
            available: true
        },
        {
            icon: HelpCircle,
            title: 'Help Center',
            description: 'Browse our knowledge base',
            action: 'Visit Help Center',
            available: true
        }
    ]

    return (
        <>
            <Helmet>
                <title>Contact Us - JobPortal Pro | Get Help & Support</title>
                <meta name="description" content="Get in touch with JobPortal Pro support team. Find contact information, submit inquiries, and get help with your job search or employer needs." />
                <meta name="keywords" content="contact, support, help, job portal, customer service, assistance, inquiry" />
                <meta property="og:title" content="Contact Us - JobPortal Pro" />
                <meta property="og:description" content="Get in touch with JobPortal Pro support team. Find contact information and get help with your job search." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us - JobPortal Pro" />
                <meta name="twitter:description" content="Get in touch with JobPortal Pro support team. Find contact information and get help with your job search." />
                <link rel="canonical" href="https://jobportal.com/contact" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            We're here to help! Get in touch with our support team for any questions, 
                            concerns, or assistance you might need.
                        </p>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                return (
                                    <Card key={index} className="text-center">
                                        <CardHeader>
                                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <CardTitle className="text-xl">{info.title}</CardTitle>
                                            <CardDescription>{info.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                                                    {detail}
                                                </p>
                                            ))}
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Support Options */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Send us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="billing">Billing Question</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="feedback">Feedback</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="mt-1"
                                            placeholder="Please describe your inquiry in detail..."
                                        />
                                    </div>
                                    
                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                        <Send className="h-4 w-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            {/* Support Options */}
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Other Ways to Get Help
                                </h2>
                                <div className="space-y-4">
                                    {supportOptions.map((option, index) => {
                                        const Icon = option.icon
                                        return (
                                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                                                            <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                                {option.title}
                                                            </h3>
                                                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                                                {option.description}
                                                            </p>
                                                            <Button 
                                                                variant="outline" 
                                                                className="text-blue-600 border-blue-600 hover:bg-blue-50"
                                                            >
                                                                {option.action}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Quick answers to common questions
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Visit Our Office
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Located in the heart of Dhaka's business district
                            </p>
                        </div>
                        
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600 dark:text-gray-300">
                                    Interactive map would be integrated here
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    123 Business District, Dhaka 1205, Bangladesh
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterWrapper />
            </div>
        </>
    )
}

export default Contact
