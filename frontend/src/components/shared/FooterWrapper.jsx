import React from 'react'
import Footer from './Footer'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

const FooterWrapper = () => {
    try {
        return <Footer />
    } catch (error) {
        // Fallback footer without context
        return (
            <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            JobPortal Pro
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Connecting talent with opportunity
                        </p>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            © 2024 JobPortal Pro. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterWrapper
