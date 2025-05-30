'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <div className="bg-[#0F0B1F] text-white border-b border-gray-700">
        <div className="container mx-auto px-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end py-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex justify-between items-center h-10`}>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-xs">
              <Link href="/" className="hover:text-[#00BFB3]">HOME</Link>
              <div className="relative group">
                <button 
                  className="flex items-center hover:text-[#00BFB3] text-xs"
                  onMouseEnter={() => setIsAboutUsOpen(true)}
                  onMouseLeave={() => setIsAboutUsOpen(false)}
                >
                  ABOUT US
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAboutUsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-[#0F0B1F] shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsAboutUsOpen(true)}
                    onMouseLeave={() => setIsAboutUsOpen(false)}
                  >
                    <Link href="/about/overview" className="block px-4 py-2 hover:bg-[#00BFB3] text-xs">Overview</Link>
                    <Link href="/about/mission" className="block px-4 py-2 hover:bg-[#00BFB3] text-xs">Mission & Vision</Link>
                    <Link href="/about/leadership" className="block px-4 py-2 hover:bg-[#00BFB3] text-xs">Leadership</Link>
                  </div>
                )}
              </div>
              <Link href="/student-life" className="hover:text-[#00BFB3]">STUDENTS LIFE</Link>
              <Link href="/careers" className="hover:text-[#00BFB3]">CAREERS</Link>
              <Link href="/news-events" className="hover:text-[#00BFB3]">NEWS & EVENTS</Link>
              <Link href="/blogs" className="hover:text-[#00BFB3]">BLOGS</Link>
              <Link href="/research" className="hover:text-[#00BFB3]">RESEARCH</Link>
              <Link href="/scholarship" className="hover:text-[#00BFB3]">SCHOLARSHIP</Link>
              <Link href="/csr" className="hover:text-[#00BFB3]">CSR</Link>
              <Link href="/contact-us" className="hover:text-[#00BFB3]">CONTACT US</Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 mt-4 md:mt-0">
              <Link href="/payments" className="flex items-center hover:text-[#00BFB3] text-xs">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                PAYMENTS
              </Link>
              <Link href="/students" className="flex items-center hover:text-[#00BFB3] text-xs">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                STUDENTS
              </Link>
              <Link href="/alumni" className="flex items-center hover:text-[#00BFB3] text-xs">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                ALUMNI
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#003087] text-white">
        <div className="container mx-auto px-4">
          <nav className="flex flex-col md:flex-row items-center justify-between py-4 md:h-20 space-y-4 md:space-y-0">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/esu1.png"
                alt="ESOFT Logo"
                width={120}
                height={40}
                className="w-auto h-10"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
              <Link href="/courses" className="hover:text-cyan-400 transition-colors">
                COURSES
              </Link>
              <Link href="/faculties" className="hover:text-cyan-400 transition-colors">
                FACULTIES
              </Link>
              <Link href="/transfer-programmes" className="hover:text-cyan-400 transition-colors">
                TRANSFER PROGRAMMES
              </Link>
              <Link href="/branch-network" className="hover:text-cyan-400 transition-colors">
                BRANCH NETWORK
              </Link>
              <Link href="/international-placements" className="hover:text-cyan-400 transition-colors">
                INTERNATIONAL PLACEMENTS
              </Link>
            </div>

            {/* Register Button */}
            <Link
              href="/register"
              className="bg-[#00BFB3] hover:bg-[#00a89d] text-white px-6 py-2 rounded-md transition-colors"
            >
              Register Online
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
} 