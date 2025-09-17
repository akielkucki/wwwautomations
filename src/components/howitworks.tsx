'use client';

import React, {JSX} from 'react';
import { motion } from 'framer-motion';

export default function HowItWorksSection(): JSX.Element {
    const steps = [
        {
            number: "01",
            title: "We Build Your Site",
            description: "Get a conversion-focused website designed to turn visitors into leads. Mobile-optimized, fast-loading, and built with your ideal client in mind.",
            details: ["Custom design & development", "Mobile-first approach", "Speed optimized", "SEO foundation"],
            icon: "🎨",
            timeline: "2-3 weeks"
        },
        {
            number: "02",
            title: "AI Automation Handles Leads",
            description: "Our smart systems kick in immediately. Every visitor gets engaged, every lead gets followed up, every opportunity gets maximized.",
            details: ["Instant lead capture", "AI-powered responses", "Automated nurturing", "Smart scheduling"],
            icon: "⚡",
            timeline: "24/7 automated"
        },
        {
            number: "03",
            title: "You Close Deals & Focus on Business",
            description: "Show up to pre-qualified calls with prospects who are already sold on working with you. Spend your time growing, not chasing.",
            details: ["Pre-qualified prospects", "Booked consultations", "Higher close rates", "More free time"],
            icon: "💰",
            timeline: "Ongoing results"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    };

    const timelineVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const connectorVariants = {
        hidden: { scaleY: 0 },
        visible: {
            scaleY: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="bg-black text-white py-24 lg:py-32 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.02)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,164,109,0.04),transparent_70%)]"></div>

            <motion.div
                className="relative max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Header */}
                {/*@ts-ignore*/}
                <motion.div className="text-center mb-20" variants={stepVariants}>
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#C5A46D]/30 bg-[#C5A46D]/10 backdrop-blur-sm mb-6"
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(197, 164, 109, 0.6)'
                        }}
                    >
                        <span className="text-[#C5A46D] font-semibold text-sm tracking-wide uppercase">
                            Simple 3-Step Process
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        How It
                        <motion.span
                            className="block text-[#C5A46D]"
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Works
                        </motion.span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Simple process. Powerful results.{' '}
                        <span className="text-white font-semibold">No complexity, no confusion.</span>
                    </p>
                </motion.div>

                {/* Steps Flow */}
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-20 last:mb-0"
                            // @ts-ignore
                            variants={stepVariants}
                        >
                            {/* Connector line */}
                            {index > 0 && (
                                <motion.div
                                    className="hidden lg:block absolute -top-20 left-[60px] w-1 h-20 bg-gradient-to-b from-[#C5A46D]/30 to-[#C5A46D]/10"
                                    // @ts-ignore
                                    variants={connectorVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.3 }}
                                />
                            )}

                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
                                {/* Step Number & Icon */}
                                <div className="flex-shrink-0 flex items-center gap-8 relative z-10">
                                    <motion.div
                                        className="w-24 h-24 bg-gradient-to-br from-[#C5A46D] to-[#B8956A] rounded-full flex items-center justify-center text-2xl font-black text-black shadow-2xl relative z-10"
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0 20px 40px rgba(197, 164, 109, 0.4)"
                                        }}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}

                                        transition={{
                                            delay: index * 0.3 + 0.2,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    <motion.div
                                        className="text-6xl relative z-10"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        initial={{ opacity: 0, rotate: -10 }}
                                        whileInView={{ opacity: 1, rotate: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}

                                        transition={{ delay: index * 0.3 + 0.4 }}
                                    >

                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}

                                        transition={{ delay: index * 0.2 + 0.1 }}
                                    >
                                        <h3 className="text-3xl md:text-4xl font-black mb-3 text-white">
                                            {step.title}
                                        </h3>
                                        <div className="text-[#C5A46D] font-bold text-lg mb-4">
                                            Timeline: {step.timeline}
                                        </div>
                                    </motion.div>

                                    <motion.p
                                        className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}

                                        transition={{ delay: index * 0.3 + 0.1 }}
                                    >
                                        {step.description}
                                    </motion.p>

                                    <motion.div
                                        className="flex flex-wrap gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}

                                        transition={{ delay: index * 0.3 + 0.7 }}
                                    >
                                        {step.details.map((detail, detailIndex) => (
                                            <motion.span
                                                key={detailIndex}
                                                className="px-5 py-3 bg-[#C5A46D]/10 text-[#C5A46D] rounded-full text-base border border-[#C5A46D]/20 font-medium"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                                                    borderColor: 'rgba(197, 164, 109, 0.4)'
                                                }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: index * 0.3 + 1 + detailIndex * 0.1,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                ✓ {detail}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Flow Arrow for mobile */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    className="flex justify-center lg:hidden mt-12 mb-8"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.3 + 1 }}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-1 h-8 bg-gradient-to-b from-[#C5A46D] to-[#C5A46D]/50"></div>
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-[#C5A46D]"></div>
                                        <div className="w-1 h-8 bg-gradient-to-b from-[#C5A46D]/50 to-[#C5A46D]"></div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Timeline Summary */}
                <motion.div
                    className="mt-32 text-center"
                    //@ts-ignore
                    variants={timelineVariants}
                >
                    <motion.div
                        className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-[#C5A46D]/20 max-w-6xl mx-auto"
                        whileHover={{
                            scale: 1.02,
                            borderColor: 'rgba(197, 164, 109, 0.4)'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl lg:text-5xl font-black mb-12 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Your Business
                            <motion.span
                                className="block text-[#C5A46D] mt-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                            >
                                Client Ready
                            </motion.span>
                        </motion.h3>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8 mb-12"
                            variants={containerVariants}
                        >
                            {[
                                { phase: "Week 1-3", description: "Website built & launched", delay: 0.6 },
                                { phase: "Day 1", description: "AI automation goes live", delay: 0.8 },
                                { phase: "Ongoing", description: "Qualified calls booked", delay: 1.0 }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-[#C5A46D]/10 group hover:border-[#C5A46D]/30 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: item.delay }}
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                    }}
                                >
                                    <motion.div
                                        className="text-3xl md:text-4xl font-black text-[#C5A46D] mb-4 group-hover:scale-110 transition-transform duration-200"
                                        initial={{ scale: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            delay: item.delay + 0.2,

                                        }}
                                    >
                                        {item.phase}
                                    </motion.div>
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10"
                            initial={{ opacity: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            Most clients see their first qualified leads within{' '}
                            <span className="text-[#C5A46D] font-bold">48 hours</span>
                            {' '}of launch.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <motion.button
                                className="px-10 py-5 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold text-xl rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(197, 164, 109, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your 3-Step Process
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 left-10 w-4 h-4 bg-[#C5A46D] rounded-full opacity-30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-2/3 right-16 w-3 h-3 bg-[#C5A46D] rounded-full opacity-25"
                animate={{
                    y: [-25, 25, -25],
                    x: [-10, 10, -10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#C5A46D] rounded-full opacity-20"
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />

            <motion.div
                className="absolute top-1/4 right-8 w-1 h-20 bg-gradient-to-b from-[#C5A46D] to-transparent opacity-15"
                initial={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
            />
        </section>
    );
}