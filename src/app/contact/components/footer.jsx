import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="mt-16 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl py-5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              f
            </div>
            <span className="text-white font-medium">ferthoz</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#" className="hover:text-white transition-colors">Projects</Link>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <Link href="#" className="hover:text-white">in</Link>
            <Link href="#" className="hover:text-white">𝕏</Link>
            <Link href="#" className="hover:text-white">📧</Link>
            <Link href="#" className="hover:text-white">B</Link>
          </div>
    </div>
  )
}

export default Footer