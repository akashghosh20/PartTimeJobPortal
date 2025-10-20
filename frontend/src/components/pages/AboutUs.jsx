import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../shared/Navbar'
import FooterWrapper from '../shared/FooterWrapper'
import { 
    Users, 
    Target, 
    Award, 
    Globe, 
    Heart, 
    TrendingUp,
    CheckCircle,
    Star,
    Building2,
    UserCheck
} from 'lucide-react'

const AboutUs = () => {
    const stats = [
        { number: '10,000+', label: 'Active Job Seekers', icon: Users },
        { number: '500+', label: 'Companies', icon: Building2 },
        { number: '25,000+', label: 'Jobs Posted', icon: Target },
        { number: '95%', label: 'Success Rate', icon: Award }
    ]

    const values = [
        {
            icon: Heart,
            title: 'Passion for Excellence',
            description: 'We are passionate about connecting the right talent with the right opportunities, ensuring mutual success for both job seekers and employers.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Our platform serves job seekers and employers worldwide, breaking down geographical barriers to create a truly global job market.'
        },
        {
            icon: UserCheck,
            title: 'Trust & Transparency',
            description: 'We maintain the highest standards of trust and transparency in all our interactions, ensuring a safe and reliable platform for everyone.'
        },
        {
            icon: TrendingUp,
            title: 'Innovation',
            description: 'We continuously innovate our platform with cutting-edge technology to provide the best user experience and job matching algorithms.'
        }
    ]

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
            description: '15+ years in HR and recruitment technology'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
            description: 'Expert in AI and machine learning for job matching'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Product',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
            description: 'Product strategy and user experience specialist'
        },
        {
            name: 'David Kim',
            role: 'Head of Engineering',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            description: 'Full-stack development and system architecture'
        }
    ]

    return (
        <>
            <Helmet>
                <title>About Us - JobPortal Pro | Connecting Talent with Opportunity</title>
                <meta name="description" content="Learn about JobPortal Pro, the leading job portal platform connecting thousands of job seekers with top companies worldwide. Discover our mission, values, and team." />
                <meta name="keywords" content="about us, job portal, career platform, recruitment, job search, employment, talent acquisition" />
                <meta property="og:title" content="About Us - JobPortal Pro" />
                <meta property="og:description" content="Learn about JobPortal Pro, the leading job portal platform connecting thousands of job seekers with top companies worldwide." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us - JobPortal Pro" />
                <meta name="twitter:description" content="Learn about JobPortal Pro, the leading job portal platform connecting thousands of job seekers with top companies worldwide." />
                <link rel="canonical" href="https://jobportal.com/about" />
            </Helmet>
            
            <div className="min-h-screen bg-white dark:bg-gray-900">
                <Navbar />
                
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">About JobPortal Pro</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            We're revolutionizing the way people find jobs and companies discover talent. 
                            Our mission is to create meaningful connections that drive career success.
                        </p>
                        <div className="flex justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
                                <p className="text-lg">
                                    "Connecting talent with opportunity, one job at a time."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300">
                                            {stat.label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    To democratize access to career opportunities by creating a platform 
                                    that connects talented individuals with companies that value their skills, 
                                    regardless of location, background, or experience level.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Equal Opportunity</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Ensuring fair access to opportunities for all</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Quality Matches</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Advanced algorithms for better job-candidate matching</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Continuous Support</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Ongoing assistance throughout the job search process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                    To become the world's most trusted career platform, where every job seeker 
                                    finds their dream role and every company discovers their perfect candidate, 
                                    creating a more connected and prosperous global workforce.
                                </p>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        Our Impact
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Since our founding, we've helped over 50,000 professionals find their 
                                        ideal careers and enabled 1,000+ companies to build stronger teams.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                These principles guide everything we do and shape our company culture.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <div key={index} className="text-center">
                                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                The passionate professionals behind JobPortal Pro, dedicated to your success.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join thousands of job seekers who have found their dream careers through our platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/signup" 
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get Started Today
                            </a>
                            <a 
                                href="/contact" 
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>

                <FooterWrapper />
            </div>
        </>
    )
}

export default AboutUs
