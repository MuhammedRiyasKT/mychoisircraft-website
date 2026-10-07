"use client"

import Image from "next/image"
import { Check, Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram } from "lucide-react"

interface FooterProps {
  setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const quickLinks =[
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  const services =[
    "ERP Systems",
    "Web Development",
    "Mobile Apps",
    "E-Commerce",
    "Digital Marketing",
    "Cloud Solutions",
  ]

  const socialLinks =[
    { Icon: Mail, href: "mailto:choisircraft@gmail.com", name: "Email" },
    { Icon: Phone, href: "https://api.whatsapp.com/send/?phone=919495257093", name: "WhatsApp" },
    { Icon: Linkedin, href: "#", name: "LinkedIn" },
    { Icon: Instagram, href: "#", name: "Instagram" },
  ]

  return (
    <footer className="relative bg-white/40 backdrop-blur-2xl border-t border-white/60 shadow-[0_-8px_30px_rgba(14,158,96,0.05)] text-gray-800 pt-20 overflow-hidden">
      
      {/* Decorative Background Blobs for Glass Effect */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#0e9e60]/10 blur-[100px]" />
        <div className="absolute bottom-[0%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#0e9e60]/10 blur-[100px]" />
      </div>

      {/* Top glowing accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0e9e60]/30 to-transparent"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6 cursor-pointer" onClick={() => setCurrentPage("home")}>
                <Image
                  src="/choisircraft_logo_transparent.png"
                  alt="Choisir Craft Logo"
                  width={150}
                  height={75}
                  className="h-12 w-auto drop-shadow-sm"
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Transforming businesses with cutting-edge technology solutions and innovative digital experiences that drive growth.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-white/60 border border-white/60 shadow-sm backdrop-blur-md text-[#0e9e60] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#0e9e60] hover:text-white hover:border-[#0e9e60] hover:shadow-[0_8px_20px_rgba(14,158,96,0.3)]"
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-[#0e9e60] rounded-full mr-3"></span>
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className="flex items-center text-gray-600 font-medium hover:text-[#0e9e60] transition-all duration-300 group w-full"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-[#0e9e60] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform -translate-x-6 group-hover:translate-x-0 transition-all duration-300">{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-[#0e9e60] rounded-full mr-3"></span>
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center text-gray-600 font-medium group cursor-default hover:text-[#0e9e60] transition-colors duration-300">
                    <div className="w-6 h-6 rounded-full bg-white/50 border border-white/60 shadow-sm flex items-center justify-center mr-3 group-hover:bg-[#0e9e60] transition-colors duration-300">
                      <Check className="w-3.5 h-3.5 text-[#0e9e60] group-hover:text-white transition-colors duration-300" />
                    </div>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-[#0e9e60] rounded-full mr-3"></span>
                Get in Touch
              </h4>
              <div className="space-y-5">
                {/* Phone Section */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-11 h-11 bg-white/60 border border-white/60 shadow-sm backdrop-blur-md text-[#0e9e60] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e9e60] group-hover:text-white group-hover:border-[#0e9e60] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-gray-700 font-medium group-hover:text-[#0e9e60] transition-colors duration-300">+91 94952 57093</p>
                  </div>
                </div>
                {/* Email Section */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-11 h-11 bg-white/60 border border-white/60 shadow-sm backdrop-blur-md text-[#0e9e60] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e9e60] group-hover:text-white group-hover:border-[#0e9e60] transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-gray-700 font-medium group-hover:text-[#0e9e60] transition-colors duration-300">choisircraft@gmail.com</p>
                  </div>
                </div>
                {/* Location Section */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-11 h-11 bg-white/60 border border-white/60 shadow-sm backdrop-blur-md text-[#0e9e60] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e9e60] group-hover:text-white group-hover:border-[#0e9e60] transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-gray-700 font-medium group-hover:text-[#0e9e60] transition-colors duration-300">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/60 bg-white/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
              <p className="text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Choisir Craft. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-[#0e9e60] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-[#0e9e60] transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}