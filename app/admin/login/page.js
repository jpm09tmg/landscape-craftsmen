'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { User, Lock, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
	const router = useRouter()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	async function onSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		setError('')

		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			})

			const data = await response.json()

			if (response.ok) {
				// Login successful - redirect to dashboard
				router.push('/admin')
			} else {
				// Login failed - show error
				setError(data.error || 'Login failed')
			}
		} catch (error) {
			setError('Network error. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen w-full bg-white">
			{/* Header bar */}
			<div className="w-full h-[90px] bg-[#74A744] flex items-center justify-center">
				<div className="w-[160px] h-[60px] flex items-center justify-center">
					<Link href="/" className="block hover:opacity-80 transition-opacity">
						<Image src="/headlogo.png" alt="Landscape Craftsmen" width={160} height={60} className="object-contain" />
					</Link>
				</div>
			</div>

			{/* Centered card */}
			<div className="max-w-[490px] mx-auto mt-20 p-0">
				<div className="bg-[#EAF3E0] shadow-[0px_4px_6px_#00000040] rounded-sm border border-gray-200">
					<div className="px-8 pt-8 pb-2">
						<h1 className="text-[28px] text-[#171717] font-normal">Sign In</h1>
						<div className="mt-2 h-px w-full bg-[#D1D5DB]" />
					</div>

					<form onSubmit={onSubmit} className="px-8 pb-8 pt-2">
						{/* Error Message */}
						{error && (
							<div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
								{error}
							</div>
						)}

						{/* Username */}
						<label className="block text-neutral-700 text-lg mb-2">Username</label>
						<div className="relative mb-6">
							<User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-700" />
							<input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full h-[42px] rounded-md border border-neutral-300 bg-white pl-10 pr-3 text-[#171717] placeholder:text-[#ADAEBC] outline-none"
								placeholder="Username"
								required
								disabled={isLoading}
							/>
						</div>

						{/* Password */}
						<label className="block text-neutral-700 text-lg mb-2">Password</label>
						<div className="relative mb-8">
							<Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-700" />
							<input
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full h-[42px] rounded-md border border-neutral-300 bg-white pl-10 pr-10 text-[#171717] placeholder:text-[#ADAEBC] outline-none"
								placeholder="Password"
								required
								disabled={isLoading}
							/>
							<button
								type="button"
								onClick={() => setShowPassword((v) => !v)}
								className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
								aria-label="Toggle password visibility"
								disabled={isLoading}
							>
								{showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full h-[44px] bg-[#74A744] text-white rounded hover:bg-[#5F9136] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isLoading ? 'Signing In...' : 'Sign In'}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}