// tailwind.config.js
import {heroui} from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
        './node_modules/@virtue-digital-indonesia/ahu-frontend-common/dist/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: 'Inter, Times New Roman, serif'
            }
        }
    },
    darkMode: ['class'],
    plugins: [
        heroui(),
        require('tailwind-scrollbar')
    ]
}