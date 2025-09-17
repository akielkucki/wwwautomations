'use client';

import React, {useState, useEffect, JSX} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Results', href: '#results' },
        { label: 'Contact', href: '#contact' }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (href: string) => {
        setIsMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Navigation variants
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Mobile menu overlay variants
    const overlayVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    // Menu item variants
    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30,
            transition: {
                duration: 0.2
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    };

    // Hamburger line variants
    const line1Variants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 6 }
    };

    const line2Variants = {
        closed: { opacity: 1 },
        open: { opacity: 0 }
    };

    const line3Variants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -9.5 }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled || isMenuOpen
                        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50'
                        : 'bg-transparent'
                }`}
                // @ts-ignore
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#C5A46D] to-[#B8956A] rounded-lg flex items-center justify-center">
                                    <span className="text-black font-black text-xl">W</span>
                                </div>
                                <div>
                                    <div className="text-white font-black text-xl leading-none">WebAI</div>
                                    <div className="text-[#C5A46D] text-xs font-semibold tracking-wider uppercase">Solutions</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="text-white hover:text-[#C5A46D] transition-colors duration-200 font-medium relative group"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMenuClick(item.href);
                                    }}
                                >
                                    {item.label}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C5A46D] origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:block">
                            <motion.button
                                className="px-6 py-3 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px rgba(197, 164, 109, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                onClick={() => handleMenuClick('#contact')}
                            >
                                Get Started
                            </motion.button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <motion.button
                            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 relative z-50"
                            onClick={toggleMenu}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className="w-6 h-0.5 bg-white rounded-full"
                                variants={line1Variants}
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="w-6 h-0.5 bg-white rounded-full"
                                variants={line2Variants}
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="w-6 h-0.5 bg-white rounded-full"
                                variants={line3Variants}
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        // @ts-ignore
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Background */}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                        {/* Menu Content */}
                        <motion.div
                            className="relative flex flex-col items-center justify-center h-full px-6"
                            // @ts-ignore
                            variants={overlayVariants}
                        >
                            {/* Menu Items */}
                            <div className="flex flex-col items-center space-y-8 mb-12">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className="text-white hover:text-[#C5A46D] transition-colors duration-300 font-bold text-3xl md:text-4xl relative group"
                                        // @ts-ignore
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMenuClick(item.href);
                                        }}
                                    >
                                        {item.label}
                                        <motion.div
                                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#C5A46D] rounded-full"
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Mobile CTA Button */}
                            <motion.button
                                className="px-10 py-4 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                // @ts-ignore
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(197, 164, 109, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleMenuClick('#contact')}
                            >
                                Get Started Now
                            </motion.button>

                            {/* Contact Info */}
                            <motion.div
                                className="mt-12 text-center"
                                // @ts-ignore
                                variants={itemVariants}
                            >
                                <p className="text-gray-400 text-lg mb-2">Ready to transform your business?</p>
                                <p className="text-[#C5A46D] font-semibold">
                                    Web Design + AI Automation
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            className="absolute top-20 left-10 w-2 h-2 bg-[#C5A46D] rounded-full opacity-40"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute bottom-32 right-12 w-3 h-3 bg-[#C5A46D] rounded-full opacity-30"
                            animate={{
                                y: [-15, 15, -15],
                                x: [-8, 8, -8]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        <motion.div
                            className="absolute top-1/3 right-8 w-1 h-12 bg-gradient-to-b from-[#C5A46D] to-transparent opacity-20"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}