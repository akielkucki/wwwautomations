'use client';

import React, {JSX} from 'react';
import { motion } from 'framer-motion';
import {AlarmClock, BanknoteIcon, CarIcon, FlameIcon, GhostIcon, LucideMail} from "lucide-react";

export default function ProblemSection(): JSX.Element {
    const painPoints = [
        {
            stat: "80%",
            problem: "of leads go cold if not answered in 5 minutes",
            solution: "and we fix that.",
            icon: FlameIcon
        },
        {
            stat: "$2,400",
            problem: "avg. monthly spend on VAs who still miss inquiries",
            solution: "and we automate better.",
            icon: BanknoteIcon
        },
        {
            stat: "67%",
            problem: "of visitors leave without taking action",
            solution: "and we convert them.",
            icon: GhostIcon
        },
        {
            stat: "3+ hrs",
            problem: "daily spent manually following up",
            solution: "and we handle it 24/7.",
            icon: AlarmClock
        },
        {
            stat: "45%",
            problem: "of inquiries get lost in email chaos",
            solution: "and we organize everything.",
            icon: LucideMail
        },
        {
            stat: "72%",
            problem: "book with faster competitors",
            solution: "AND we make you fastest.",
            icon: CarIcon
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.03,
            y: -5,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
            {/* Subtle grid overlay for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Radial gradient accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(197,164,109,0.06),transparent_60%)]"></div>

            <motion.div
                className="relative max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Header */}
                {/* @ts-ignore */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#C5A46D]/30 bg-[#C5A46D]/10 backdrop-blur-sm mb-6"
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(197, 164, 109, 0.6)'
                        }}
                    >
                        <span className="text-[#C5A46D] font-semibold text-sm tracking-wide uppercase">
                            The Reality Check
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        Your leads are
                        <motion.span
                            className="block text-[#C5A46D]"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            disappearing
                        </motion.span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        While you're stuck in manual follow-up hell,{' '}
                        <span className="text-white font-semibold">
                            competitors are booking your potential clients
                        </span>
                    </p>
                </motion.div>

                {/* Pain Points Grid */}
                <motion.div
                    className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                    variants={containerVariants}
                >
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                        <motion.div
                            key={index}
                            className="group"
                            // @ts-ignore
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="p-8 rounded-2xl bg-gray-900/30 hover:bg-gray-800/40 border border-gray-800/50 hover:border-[#C5A46D]/30 transition-all duration-300 backdrop-blur-sm h-full">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <motion.div
                                        className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-200 "
                                        whileHover={{ rotate: 5, color: '#fdd38c' }}
                                    >
                                            <Icon size={32}></Icon>
                                    </motion.div>
                                    <div className="flex-1">
                                        <motion.div
                                            className="text-4xl md:text-5xl font-black text-[#C5A46D] mb-3 leading-none"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true, amount: 0.2 }}

                                            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                        >
                                            {point.stat}
                                        </motion.div>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg mb-3 leading-relaxed">
                                    {point.problem}
                                </p>

                                <motion.p
                                    className="text-[#C5A46D] font-bold text-base"
                                    initial={{ opacity: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    {point.solution}
                                </motion.p>
                            </div>
                        </motion.div>
                        )
                    })}
                </motion.div>

                {/* Urgency CTA */}
                <motion.div
                    className="text-center"
                    //@ts-ignore
                    variants={itemVariants}
                >
                    <motion.div
                        className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#C5A46D]/20 max-w-4xl mx-auto"
                        whileHover={{
                            scale: 1.02,
                            borderColor: 'rgba(197, 164, 109, 0.4)'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h3
                            className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Every day you wait =
                            <motion.span
                                className="block text-[#C5A46D]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                            >
                                lost revenue
                            </motion.span>
                        </motion.h3>

                        <motion.p
                            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            While you're manually chasing leads, automated systems are converting them into customers
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div
                                className="text-5xl md:text-6xl font-black text-[#C5A46D]"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                $47,000/yr
                            </motion.div>
                            <div className="text-gray-400 text-base md:text-lg max-w-sm text-center sm:text-left">
                                Average revenue lost from poor lead management and slow follow-ups
                            </div>
                        </motion.div>

                        {/* Call to action */}
                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.button
                                className="px-8 py-4 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(197, 164, 109, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Stop Losing Leads Today
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 left-10 w-3 h-3 bg-[#C5A46D] rounded-full opacity-30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-20 right-16 w-2 h-2 bg-[#C5A46D] rounded-full opacity-25"
                animate={{
                    y: [-15, 15, -15],
                    x: [-8, 8, -8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="absolute top-1/2 right-8 w-1 h-12 bg-gradient-to-b from-[#C5A46D] to-transparent opacity-20"
                initial={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
        </section>
    );
}