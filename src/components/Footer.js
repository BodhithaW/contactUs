'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0F0B1F] text-white">
      {/* ESULife and Social Links Top Bar */}
      <div className="bg-[#00BFB3] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* ESU Life Logo */}
            <div className="text-xl md:text-2xl font-bold">
              #ESULife
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="w-8 h-8 bg-[#0F0B1F] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0F0B1F] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0F0B1F] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0F0B1F] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0F0B1F] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Contact Details */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">CONTACT DETAILS</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Hotline Number</p>
                <p>+94 117 572 572</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>info@esoft.lk</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Head Office (Block E)</p>
                <p>ESOFT Metro Campus No.03,</p>
                <p>De Fonseka Place,</p>
                <p>Colombo 4, Sri Lanka.</p>
              </div>
              <div className="pt-6 md:pt-10">
                <div className="flex items-center justify-center sm:justify-start gap-5">
                  <h4 className="text-sm font-bold">AWARDS</h4>
                  <div className="flex">
                    <Image
                      src="/images/bestweb.png"
                      alt="Award"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#00BFB3] transition-colors">Home</Link></li>
              <li><Link href="/student-life" className="hover:text-[#00BFB3] transition-colors">Student Life</Link></li>
              <li><Link href="/about-us" className="hover:text-[#00BFB3] transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#00BFB3] transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#00BFB3] transition-colors">Careers</Link></li>
              <li><Link href="/news-events" className="hover:text-[#00BFB3] transition-colors">News & Events</Link></li>
              <li><Link href="/blogs" className="hover:text-[#00BFB3] transition-colors">Blogs</Link></li>
              <li><Link href="/csr" className="hover:text-[#00BFB3] transition-colors">CSR</Link></li>
            </ul>
          </div>

          {/* Column 3 - Important Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-6">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-[#00BFB3] transition-colors">Courses</Link></li>
              <li><Link href="/faculties" className="hover:text-[#00BFB3] transition-colors">Faculties</Link></li>
              <li><Link href="/transfer-programmes" className="hover:text-[#00BFB3] transition-colors">Transfer Programmes</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#00BFB3] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/payment-policy" className="hover:text-[#00BFB3] transition-colors">Payment Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#00BFB3] transition-colors">Refund Policy</Link></li>
              <li><Link href="/quality-policy" className="hover:text-[#00BFB3] transition-colors">Quality Policy</Link></li>
              <li><Link href="/referrals" className="hover:text-[#00BFB3] transition-colors">Referrals</Link></li>
            </ul>
          </div>

          {/* Column 4 - ESU Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/esu2.png"
              alt="ESU Logo"
              width={400}
              height={800}
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#00BFB3] border-t border-[#0F0B1F] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs sm:text-sm">
            Copyright © 2024 ESU METRO CAMPUS. All rights reserved. Website Designed And Developed By{' '}
            <Link href="#" className="hover:underline">Web Lankan</Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 