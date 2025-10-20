import React, { useState } from 'react'
import { Button } from './ui/button'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

const LanguageToggle = () => {
    const { language, changeLanguage } = useLanguage()
    const [showDropdown, setShowDropdown] = useState(false)

    const t = translations[language]?.footer || translations.en.footer

    const languages = [
        { code: 'en', name: t.english, flag: '🇺🇸' },
        { code: 'bn', name: t.bangla, flag: '🇧🇩' },
        { code: 'ar', name: t.arabic, flag: '🇸🇦' }
    ]

    const currentLanguage = languages.find(lang => lang.code === language)

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2"
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.name}</span>
                <ChevronDown className="h-4 w-4" />
            </Button>
            
            {showDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                changeLanguage(lang.code)
                                setShowDropdown(false)
                            }}
                            className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 ${
                                language === lang.code ? 'bg-blue-50 dark:bg-blue-900' : ''
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageToggle
