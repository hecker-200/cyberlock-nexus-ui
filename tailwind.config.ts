
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					black: "#080813",
					blue: "#00A6ED",
					green: "#39FF14",
					silver: "#C0C0C0",
					darkblue: "#0A192F",
					highlight: "#FF3864"
				}
			},
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				rajdhani: ["Rajdhani", "sans-serif"]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px #00A6ED, 0 0 15px #00A6ED, 0 0 20px #00A6ED'
					},
					'50%': { 
						textShadow: '0 0 10px #00A6ED, 0 0 25px #00A6ED, 0 0 35px #00A6ED'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14'
					},
					'50%': { 
						boxShadow: '0 0 15px #39FF14, 0 0 25px #39FF14'
					}
				},
				'circuit-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
					'100%': { transform: 'rotateY(360deg) rotateX(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 15s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 15s linear infinite',
			},
			backgroundImage: {
				'circuit-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwTDUwIDBMNTAgNTBMMCA1MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwQTZFRCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPHBhdGggZD0iTTEyLjUgMEwxMi41IDUwIiBzdHJva2U9IiMwMEE2RUQiIHN0cm9rZS13aWR0aD0iMC4yIi8+CjxwYXRoIGQ9Ik0yNSAwTDI1IDUwIiBzdHJva2U9IiMwMEE2RUQiIHN0cm9rZS13aWR0aD0iMC4yIi8+CjxwYXRoIGQ9Ik0zNy41IDBMMzcuNSA1MCIgc3Ryb2tlPSIjMDBBNkVEIiBzdHJva2Utd2lkdGg9IjAuMiIvPgo8cGF0aCBkPSJNMCAxMi41TDUwIDEyLjUiIHN0cm9rZT0iIzAwQTZFRCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KPHBhdGggZD0iTTAgMjVMNTAgMjUiIHN0cm9rZT0iIzAwQTZFRCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KPHBhdGggZD0iTTAgMzcuNUw1MCAzNy41IiBzdHJva2U9IiMwMEE2RUQiIHN0cm9rZS13aWR0aD0iMC4yIi8+Cjwvc3ZnPg==')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
