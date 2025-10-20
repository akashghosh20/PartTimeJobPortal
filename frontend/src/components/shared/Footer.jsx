import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { 
    Facebook, 
    Twitter, 
    Linkedin, 
    Instagram, 
    Youtube,
    Mail,
    Phone,
    MapPin,
    Sun,
    Moon,
    Globe,
    ChevronDown
} from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../data/translations'
import { NEWSLETTER_API_END_POINT } from '../../utils/constant'
import axios from 'axios'
import { toast } from 'sonner'

const Footer = () => {
    const { theme, toggleTheme } = useTheme()
    const { language, changeLanguage } = useLanguage()
    const [email, setEmail] = useState('')
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
    const [showThemeDropdown, setShowThemeDropdown] = useState(false)

    const t = translations[language]?.footer || translations.en.footer
    const tNewsletter = translations[language]?.newsletter || translations.en.newsletter
    const tCommon = translations[language]?.common || translations.en.common

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${NEWSLETTER_API_END_POINT}/subscribe`, {
                email
            })
            
            if (response.data.success) {
                toast.success(tNewsletter.subscribeSuccess)
                setEmail('')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || tNewsletter.subscribeError)
        }
    }

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
    ]

    const quickLinks = [
        { name: t.browseJobs, href: '/jobs' },
        { name: t.createProfile, href: '/profile' },
        { name: t.jobAlerts, href: '/alerts' }
    ]

    const employerLinks = [
        { name: t.postJob, href: '/admin/jobs/create' },
        { name: t.findCandidates, href: '/admin/candidates' },
        { name: t.companyProfile, href: '/admin/companies' }
    ]

    const supportLinks = [
        { name: t.helpCenter, href: '/help' },
        { name: t.contactUs, href: '/contact' },
        { name: t.faq, href: '/faq' }
    ]

    const legalLinks = [
        { name: t.privacyPolicy, href: '/privacy' },
        { name: t.termsOfService, href: '/terms' },
        { name: t.cookiePolicy, href: '/cookies' }
    ]

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sitemap', href: '/sitemap' }
    ]

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {t.companyName}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {t.tagline}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                {t.description}
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>support@jobportal.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+880 1234 567890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t.quickLinks}
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Employers */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t.forEmployers}
                        </h3>
                        <ul className="space-y-2">
                            {employerLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t.support}
                        </h3>
                        <ul className="space-y-2">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.href}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t.newsletter}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t.subscribeNewsletter}
                            </p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full lg:w-auto">
                            <Input
                                type="email"
                                placeholder={tNewsletter.emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 lg:w-64"
                                required
                            />
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                                {tNewsletter.subscribe}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright, Social, Controls */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                            © 2024 {t.companyName}. {t.allRightsReserved}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 dark:text-gray-300">{t.followUs}:</span>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            aria-label={social.name}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Theme & Language Controls */}
                        <div className="flex items-center gap-4">
                            {/* Theme Toggle */}
                            <div className="relative">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowThemeDropdown(!showThemeDropdown)}
                                    className="flex items-center gap-2"
                                >
                                    {theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                    <span className="text-sm">{t.theme}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                                {showThemeDropdown && (
                                    <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                                        <button
                                            onClick={() => {
                                                toggleTheme()
                                                setShowThemeDropdown(false)
                                            }}
                                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                                        >
                                            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                            {theme === 'light' ? t.dark : t.light}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Language Toggle */}
                            <div className="relative">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                                    className="flex items-center gap-2"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span className="text-sm">{t.language}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                                {showLanguageDropdown && (
                                    <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                                        <button
                                            onClick={() => {
                                                changeLanguage('en')
                                                setShowLanguageDropdown(false)
                                            }}
                                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            {t.english}
                                        </button>
                                        <button
                                            onClick={() => {
                                                changeLanguage('bn')
                                                setShowLanguageDropdown(false)
                                            }}
                                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            {t.bangla}
                                        </button>
                                        <button
                                            onClick={() => {
                                                changeLanguage('ar')
                                                setShowLanguageDropdown(false)
                                            }}
                                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                            {t.arabic}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer