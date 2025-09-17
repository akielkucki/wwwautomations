'use client';

import React, {JSX} from 'react';
import {motion} from 'framer-motion';
import {BotIcon, ChartAreaIcon, TargetIcon} from 'lucide-react';

export default function SolutionSection(): JSX.Element {
    const solutions = [
        {
            title: "AI Follow-Ups & Automation",
            benefit: "Your leads get answered instantly, every time.",
            description: "No more missed opportunities. Our AI responds in under 60 seconds, nurtures leads through personalized sequences, and books consultations while you sleep.",
            icon: <BotIcon/>,
            features: ["Instant lead response", "24/7 automated nurturing", "Smart booking system"]
        },
        {
            title: "High-Converting Websites",
            benefit: "Every visitor becomes a potential client.",
            description: "Psychology-driven design that guides visitors to one action: contacting you. Built for conversion, not just aesthetics.",
            icon: <TargetIcon/>,
            features: ["Conversion-optimized design", "Strategic call-to-actions", "Mobile-first approach"]
        },
        {
            title: "SEO That Actually Ranks",
            benefit: "Your ideal clients find you first, not your competitors.",
            description: "Technical SEO, content strategy, and local optimization that puts you at the top when prospects search for your services.",
            icon: <ChartAreaIcon/>,
            features: ["Local SEO dominance", "Content that converts", "Technical optimization"]
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

    const itemVariants = {
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

    const solutionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        },
        hover: {
            x: 8,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // @ts-ignore
    return (
        <section className="bg-black text-white py-24 lg:py-32 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(197,164,109,0.05),transparent_70%)]"></div>

            <motion.div
                className="relative max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Header */}
                {/*@ts-ignore*/}
                <motion.div className="text-center mb-20" variants={itemVariants}>
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full border border-[#C5A46D]/30 bg-[#C5A46D]/10 backdrop-blur-sm mb-6"
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(197, 164, 109, 0.6)'
                        }}
                    >
                        <span className="text-[#C5A46D] font-semibold text-sm tracking-wide uppercase">
                            Web Design + AI Automation
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        The Complete
                        <motion.span
                            className="block text-[#C5A46D]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Client-Getting System
                        </motion.span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Stop patching problems. Start with a system that{' '}
                        <span className="text-white font-semibold">actually works</span>
                        {' '}— from first click to signed contract.
                    </p>
                </motion.div>

                {/* Solutions List */}
                <motion.div
                    className="max-w-6xl mx-auto space-y-16 mb-24"
                    variants={containerVariants}
                >
                    {solutions.map((solution, index) => (

                        <motion.div
                            key={index}
                            className="group"
                            // @ts-ignore
                            variants={solutionVariants}
                            whileHover="hover"
                        >
                            <div className="flex items-start gap-8 p-8 rounded-3xl bg-gray-900/20 hover:bg-gray-800/30 border border-gray-800/30 hover:border-[#C5A46D]/20 transition-all duration-300 backdrop-blur-sm">
                                <motion.div
                                    className="text-6xl mt-2 group-hover:scale-110 transition-all duration-300"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <div className={"hidden lg:flex"}>
                                    {solution.icon}
                                        </div>
                                </motion.div>

                                <div className="flex-1">
                                    <motion.h3
                                        className="text-3xl md:text-4xl font-black mb-4 group-hover:text-[#C5A46D] transition-colors duration-300"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        {solution.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-xl md:text-2xl text-[#C5A46D] font-bold mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.2 }}
                                    >
                                        {solution.benefit}
                                    </motion.p>

                                    <motion.p
                                        className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                    >
                                        {solution.description}
                                    </motion.p>

                                    <motion.div
                                        className="flex flex-wrap gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 + 0.6 }}
                                    >
                                        {solution.features.map((feature, featureIndex) => (
                                            <motion.span
                                                key={featureIndex}
                                                className="px-5 py-3 bg-[#C5A46D]/10 text-[#C5A46D] rounded-full text-base border border-[#C5A46D]/20 font-medium"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: 'rgba(197, 164, 109, 0.15)',
                                                    borderColor: 'rgba(197, 164, 109, 0.4)'
                                                }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: index * 0.2 + 0.7 + featureIndex * 0.1,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                ✓ {feature}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Connector line */}
                            {index < solutions.length - 1 && (
                                <motion.div
                                    className="mt-12 ml-20 h-px bg-gradient-to-r from-[#C5A46D]/20 via-[#C5A46D]/10 to-transparent"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Results Section */}
                <motion.div
                    className="text-center"
                    // @ts-ignore
                    variants={itemVariants}
                >
                    <motion.div
                        className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-[#C5A46D]/20 max-w-5xl mx-auto"
                        whileHover={{
                            scale: 1.02,
                            borderColor: 'rgba(197, 164, 109, 0.4)'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            The Result:
                            <motion.span
                                className="block text-[#C5A46D] mt-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                            >
                                More Clients, Less Stress
                            </motion.span>
                        </motion.h3>

                        <motion.p
                            className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            No more chasing leads. No more wondering if your website works.
                            Just qualified prospects booking calls with you automatically.
                        </motion.p>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8 lg:gap-12"
                            variants={containerVariants}
                        >
                            {[
                                { stat: "3x", label: "More qualified leads" },
                                { stat: "90%", label: "Faster response time" },
                                { stat: "24/7", label: "Automated follow-up" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    // @ts-ignore
                                    variants={statsVariants}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="text-5xl md:text-6xl font-black text-[#C5A46D] mb-4 group-hover:scale-110 transition-transform duration-200"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            delay: 0.8 + index * 0.2,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        {item.stat}
                                    </motion.div>
                                    <p className="text-gray-400 text-lg font-medium">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 30 }}
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
                                Get Your Complete System
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-24 right-12 w-4 h-4 bg-[#C5A46D] rounded-full opacity-30"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-32 left-16 w-3 h-3 bg-[#C5A46D] rounded-full opacity-25"
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <motion.div
                className="absolute top-1/3 left-8 w-1 h-16 bg-gradient-to-b from-[#C5A46D] to-transparent opacity-20"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 1.2 }}
            />

            <motion.div
                className="absolute bottom-1/4 right-8 w-2 h-8 bg-gradient-to-t from-[#C5A46D] to-transparent opacity-15"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            />
        </section>
    );
}