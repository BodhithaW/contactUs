'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import the LocationMap component with no SSR
const LocationMap = dynamic(() => import('@/components/LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading map...</div>
    </div>
  ),
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.png"
            alt="Students at university campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="contact-hero-overlay" />
        </div>

        
        
        <div className="contact-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-1 text-white mb-4"
          >
            Contact <span className="text-cyan-400">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg text-white max-w-2xl"
          >
            Connect with Excellence! Reach out to ESOFT Metro Campus today – where all your questions find answers,
            and your future begins. Your life-changing journey towards knowledge, innovation and success starts with
            a simple touch.
          </motion.p>
        </div>
      </div>


  {/* BUILDS Section */}
  <section className="bg-gradient-to-b from-[#E6F7F7] to-white py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* BUILDS Logo and Text */}
        <div className="mb-16">
          <h1 className="text-[#00BFB3] text-6xl md:text-7xl font-bold tracking-wider mb-2">BUILDS</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <h2 className="text-[#333333] text-2xl md:text-3xl font-medium">Your Career With Us</h2>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#00BFB3] group transition-all duration-300">
                <FaFacebook className="text-gray-600 group-hover:text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#00BFB3] group transition-all duration-300">
                <FaInstagram className="text-gray-600 group-hover:text-white w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#00BFB3] group transition-all duration-300">
                <FaYoutube className="text-gray-600 group-hover:text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Image and Head Office Section with Green Line */}
        <div className="relative mb-16 overflow-visible">
          {/* Green Line */}
          <div 
            className="absolute bg-[#00BFB3]" 
            style={{ 
              width: '100vw',
              height: '300px',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '50%',
              marginTop: '-150px',
              zIndex: 0
            }}
          ></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            {/* Students Image Section */}
            <div className="relative overflow-hidden rounded-2xl md:w-2/3">
              <Image
                src="/images/student-group.png"
                alt="Students studying together"
                width={1200}
                height={500}
                className="w-full h-[400px] object-cover"
                priority
              />
            </div>

            {/* Head Office Section */}
            <div className="md:w-1/3 pl-8">
              <h3 className="text-xl font-semibold mb-6">
                Head <span className="text-[#00BFB3]">Office</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[#666666] text-sm mb-2">Address</p>
                  <p className="text-[#333333] font-medium leading-relaxed">
                    Head Office (Block E)<br />
                    ESOFT Metro Campus No.03,<br />
                    De Fonseka Place, Colombo 4 Srilanka
                  </p>
                </div>
                <div>
                  <p className="text-[#666666] text-sm mb-2">Call Us on</p>
                  <p className="text-[#333333] font-medium">+94 117 572 572</p>
                </div>
                <div>
                  <p className="text-[#666666] text-sm mb-2">Email</p>
                  <p className="text-[#333333] font-medium">info@esoft.lk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Certificate and Transcript */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Certificate and <span className="text-[#00BFB3]">Transcript</span>
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[#666666] text-sm mb-2">Address</p>
                <p className="text-[#333333] font-medium leading-relaxed">
                  Registrar<br />
                  ESOFT Metro Campus<br />
                  No.03, De Fonseka Place,<br />
                  Colombo 4, Srilanka
                </p>
              </div>
              <div>
                <p className="text-[#666666] text-sm mb-2">Email</p>
                <p className="text-[#333333] font-medium">verifications@esoft.lk</p>
              </div>
              <div>
                <p className="text-[#666666] text-sm mb-2">Call Us on</p>
                <p className="text-[#333333] font-medium">+94 117 572 572</p>
              </div>
            </div>
          </div>

          {/* Complaints and Student Feedback */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Complaints and <span className="text-[#00BFB3]">Student Feedback</span>
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[#666666] text-sm mb-2">Address</p>
                <p className="text-[#333333] font-medium leading-relaxed">
                  SRU Division<br />
                  ESOFT Metro Campus<br />
                  No.03, De Fonseka Place,<br />
                  Colombo 4, Srilanka
                </p>
              </div>
              <div>
                <p className="text-[#666666] text-sm mb-2">Call Us on</p>
                <p className="text-[#333333] font-medium">+94 117 677 888</p>
              </div>
              <div>
                <p className="text-[#666666] text-sm mb-2">Email</p>
                <p className="text-[#333333] font-medium">SRU@esoft.lk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Map Section */}
  <section className="py-16 bg-white relative">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003087] mb-8">
          Our <span className="text-[#00BFB3]">Locations</span>
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '500px' }}>
          <LocationMap />
        </div>
      </div>
    </div>
  </section>



  {/* Contact Form Section */}
  <section className="section w-full">
    <div className="container mx-auto px-4 w-full">
      <div className="w-full bg-[#0F0B1F] rounded-[50px]">
        <ContactForm />
      </div>
    </div>
  </section>

</div>
);
} 