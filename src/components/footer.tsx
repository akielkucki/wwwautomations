'use client';

import React, {JSX} from 'react';
import { motion } from 'framer-motion';

export default function Footer(): JSX.Element {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Services",
            links: [
                { label: "Web Design", href: "#web-design" },
                { label: "AI Automation", href: "#ai-automation" },
                { label: "Lead Generation", href: "#lead-generation" },
                { label: "SEO Optimization", href: "#seo" },
                { label: "Conversion Optimization", href: "#conversion" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "#blog" }
            ]
        },
        {
            title: "Resources",
            links: [
                { label: "Free Strategy Call", href: "#contact" },
                { label: "Lead Generation Guide", href: "#guide" },
                { label: "AI Automation Tips", href: "#tips" },
                { label: "Website Audit", href: "#audit" },
                { label: "FAQ", href: "#faq" }
            ]
        }
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        {
            name: "Instagram",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.509 0-4.537-2.028-4.537-4.537s2.028-4.537 4.537-4.537 4.537 2.028 4.537 4.537-2.028 4.537-4.537 4.537zm7.119 0c-2.509 0-4.537-2.028-4.537-4.537s2.028-4.537 4.537-4.537 4.537 2.028 4.537 4.537-2.028 4.537-4.537 4.537z"/>
                </svg>
            )
        },
        {
            name: "YouTube",
            href: "#",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const handleLinkClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-black text-white relative overflow-hidden w-full">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(197,164,109,0.03),transparent_70%)]"></div>

            <motion.div
                className="relative max-w-7xl mx-auto px-6 py-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    {/* Company Info */}
                    {/*@ts-ignore*/}
                    <motion.div className="lg:col-span-2" variants={itemVariants}>
                        {/* Logo */}
                        <motion.div
                            className="flex items-center mb-6"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C5A46D] to-[#B8956A] rounded-xl flex items-center justify-center">
                                    <span className="text-black font-black text-2xl">W</span>
                                </div>
                                <div>
                                    <div className="text-white font-black text-2xl leading-none">WebAI</div>
                                    <div className="text-[#C5A46D] text-sm font-semibold tracking-wider uppercase">Solutions</div>
                                </div>
                            </div>
                        </motion.div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            Transform your business with websites that convert and AI that follows up.
                            <span className="text-[#C5A46D] font-semibold block mt-2">
                                Web Design + AI Automation = More Clients
                            </span>
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-8">
                            <motion.div
                                className="flex items-center gap-3 text-gray-400"
                                whileHover={{ color: '#C5A46D' }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>hello@webaisolutions.com</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3 text-gray-400"
                                whileHover={{ color: '#C5A46D' }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(555) 123-4567</span>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-3 text-gray-400"
                                whileHover={{ color: '#C5A46D' }}
                                transition={{ duration: 0.2 }}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>New York, NY</span>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 bg-gray-900/50 hover:bg-[#C5A46D]/20 border border-gray-800 hover:border-[#C5A46D]/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#C5A46D] transition-all duration-300"
                                    // @ts-ignore
                                    variants={socialVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer Links */}
                    {footerSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            // @ts-ignore
                            variants={itemVariants}
                        >
                            <h3 className="text-white font-bold text-xl mb-6 relative">
                                {section.title}
                                <motion.div
                                    className="absolute -bottom-2 left-0 w-8 h-1 bg-[#C5A46D] rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: sectionIndex * 0.1 + 0.3, duration: 0.5 }}
                                />
                            </h3>

                            <ul className="space-y-4">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 + 0.5 }}
                                    >
                                        <motion.a
                                            href={link.href}
                                            className="text-gray-400 hover:text-[#C5A46D] transition-colors duration-200 text-base block relative group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(link.href);
                                            }}
                                        >
                                            {link.label}
                                            <motion.div
                                                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C5A46D] rounded-full group-hover:w-full transition-all duration-300"
                                            />
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-[#C5A46D]/20 mb-12"
                    // @ts-ignore
                    variants={itemVariants}
                    whileHover={{ borderColor: 'rgba(197, 164, 109, 0.4)' }}
                >
                    <div className="text-center md:text-left md:flex md:items-center md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl md:text-3xl font-black mb-2">
                                Get More Leads Weekly
                            </h3>
                            <p className="text-gray-300 text-lg">
                                Free tips on web design and AI automation delivered to your inbox
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 md:ml-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C5A46D]/50 focus:border-[#C5A46D] transition-all duration-200 md:w-64"
                            />
                            <motion.button
                                className="px-8 py-3 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-gray-800"
                    // @ts-ignore
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-gray-500 text-center md:text-left">
                            © {currentYear} WebAI Solutions. All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center gap-8 text-sm">
                            {[
                                { label: "Privacy Policy", href: "#privacy" },
                                { label: "Terms of Service", href: "#terms" },
                                { label: "Cookie Policy", href: "#cookies" }
                            ].map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-500 hover:text-[#C5A46D] transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.8 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link.href);
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>


        </footer>
    );
}