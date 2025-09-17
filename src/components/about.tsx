'use client';

import React, {JSX, useState} from 'react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    message?: string;
}

export default function CTAContactSection(): JSX.Element {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Validation functions
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Company validation
        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            const data = await fetch("https://akielkucki.app.n8n.cloud/webhook-test/5872ed7b-26d7-430e-b4ae-c6450312b1a0", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    phone: formData.phone,
                    message: formData.message
                })
            });


            // Here you would typically send the data to your backend
            console.log('Form submitted:', data.json());

            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    if (isSubmitted) {
        return (
            <section className="bg-black text-white py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                <motion.div
                    className="relative max-w-4xl mx-auto px-6 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A46D] rounded-full mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Thank You!
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Your message has been sent successfully. We'll get back to you within 24 hours with a customized strategy for your business.
                    </p>

                    <motion.button
                        className="px-8 py-4 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold text-lg rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                    >
                        Send Another Message
                    </motion.button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="bg-black text-white py-24 lg:py-32 relative overflow-hidden" id={"contact"}>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(197,164,109,0.05),transparent_70%)]"></div>

            <motion.div
                className="relative max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - CTA Content */}
                    {/* @ts-ignore*/}
                    <motion.div className="lg:pr-8" variants={itemVariants}>
                        <motion.div
                            className="inline-flex items-center px-4 py-2 rounded-full border border-[#C5A46D]/30 bg-[#C5A46D]/10 backdrop-blur-sm mb-6"
                            whileHover={{
                                scale: 1.05,
                                borderColor: 'rgba(197, 164, 109, 0.6)'
                            }}
                        >
                            <span className="text-[#C5A46D] font-semibold text-sm tracking-wide uppercase">
                                Ready to Get Started?
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Stop Losing Leads.
                            <motion.span
                                className="block text-[#C5A46D] mt-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Start Converting.
                            </motion.span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            Get a website that works as hard as you do. Our{' '}
                            <span className="text-[#C5A46D] font-semibold">
                                web design + AI automation system
                            </span>
                            {' '}turns visitors into clients automatically.
                        </p>

                        {/* Benefits List */}
                        <motion.div
                            className="space-y-4 mb-8"
                            variants={containerVariants}
                        >
                            {[
                                "Custom website that converts visitors to leads",
                                "AI automation that follows up instantly",
                                "24/7 lead nurturing while you sleep",
                                "Higher close rates from pre-qualified prospects"
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4"
                                    // @ts-ignore
                                    variants={itemVariants}
                                >
                                    <div className="w-6 h-6 bg-[#C5A46D] rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 text-lg">{benefit}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-r from-[#C5A46D]/10 to-[#C5A46D]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#C5A46D]/20"
                            whileHover={{ borderColor: 'rgba(197, 164, 109, 0.4)' }}
                        >
                            <p className="text-[#C5A46D] font-bold text-lg mb-2">
                                Free Strategy Call Included
                            </p>
                            <p className="text-gray-300">
                                We'll analyze your current setup and show you exactly how to 3x your leads in the next 90 days.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Contact Form */}
                    <motion.div
                        className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800/50"
                        // @ts-ignore
                        variants={formVariants}
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Get Your Free Strategy Call
                            </h3>
                            <p className="text-gray-400">
                                Fill out the form below and we'll be in touch within 24 hours
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6" >
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.name
                                            ? 'border-red-500 focus:ring-red-500/50'
                                            : 'border-gray-700 focus:border-[#C5A46D] focus:ring-[#C5A46D]/50'
                                    }`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && (
                                    <motion.p
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.name}
                                    </motion.p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.email
                                            ? 'border-red-500 focus:ring-red-500/50'
                                            : 'border-gray-700 focus:border-[#C5A46D] focus:ring-[#C5A46D]/50'
                                    }`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <motion.p
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.email}
                                    </motion.p>
                                )}
                            </div>

                            {/* Company Field */}
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.company
                                            ? 'border-red-500 focus:ring-red-500/50'
                                            : 'border-gray-700 focus:border-[#C5A46D] focus:ring-[#C5A46D]/50'
                                    }`}
                                    placeholder="Your company name"
                                />
                                {errors.company && (
                                    <motion.p
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.company}
                                    </motion.p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        errors.phone
                                            ? 'border-red-500 focus:ring-red-500/50'
                                            : 'border-gray-700 focus:border-[#C5A46D] focus:ring-[#C5A46D]/50'
                                    }`}
                                    placeholder="+1 (555) 123-4567"
                                />
                                {errors.phone && (
                                    <motion.p
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.phone}
                                    </motion.p>
                                )}
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 resize-vertical ${
                                        errors.message
                                            ? 'border-red-500 focus:ring-red-500/50'
                                            : 'border-gray-700 focus:border-[#C5A46D] focus:ring-[#C5A46D]/50'
                                    }`}
                                    placeholder="Tell us about your business and what challenges you're facing with lead generation..."
                                />
                                {errors.message && (
                                    <motion.p
                                        className="text-red-400 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                                    isSubmitting
                                        ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                                        : 'bg-[#C5A46D] hover:bg-[#D4B877] text-black'
                                }`}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                        Sending Message...
                                    </div>
                                ) : (
                                    'Get My Free Strategy Call'
                                )}
                            </motion.button>
                        </form>
                        <h2 className={"flex justify-center items-center text-[#C5A46D] font-bold pt-2.5"}>Our AI replies instantly and effortlessly</h2>
                        <p className="text-xs text-gray-500 text-center mt-6">
                            By submitting this form, you agree to our privacy policy and terms of service. We'll never share your information.
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-24 left-12 w-4 h-4 bg-[#C5A46D] rounded-full opacity-30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-32 right-16 w-3 h-3 bg-[#C5A46D] rounded-full opacity-25"
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </section>
    );
}