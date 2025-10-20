import React from 'react'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="flex items-center gap-2"
        >
            {theme === 'light' ? (
                <>
                    <Moon className="h-4 w-4" />
                    <span className="hidden sm:inline">Dark</span>
                </>
            ) : (
                <>
                    <Sun className="h-4 w-4" />
                    <span className="hidden sm:inline">Light</span>
                </>
            )}
        </Button>
    )
}

export default ThemeToggle
