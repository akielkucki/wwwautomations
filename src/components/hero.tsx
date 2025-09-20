'use client'; // Required for Framer Motion in Next.js App Router

import React, {JSX, useEffect} from 'react';
import {motion, useAnimation, Variant} from 'framer-motion';

export default function Hero(): JSX.Element {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        });
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const floatVariants = {
        hidden: { y: 0 },
        show: {
            y: [-10, 10, -10],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        }
    };

    const pulseVariants = {
        hidden: { scale: 1 },
        show: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
            }
        }
    };

    return (
        <section className="relative bg-black md:mt-0 mt-24 text-white min-h-screen flex items-center justify-center overflow-hidden" id={"home"}>
            {/* Subtle grid overlay for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,164,109,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,164,109,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Radial gradient for subtle depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,164,109,0.08),transparent_70%)]"></div>

            <motion.div
                className="relative max-w-6xl mx-auto px-6 text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Business focus badge */}
                {/*<motion.div*/}
                {/*    // @ts-ignore*/}
                {/*    variants={itemVariants}*/}
                {/*    className="mb-8"*/}
                {/*>*/}
                {/*    <motion.div*/}
                {/*        className="inline-flex items-center px-6 py-3 rounded-full border border-[#C5A46D]/30 bg-[#C5A46D]/10 backdrop-blur-sm"*/}
                {/*        whileHover={{*/}
                {/*            scale: 1.05,*/}
                {/*            borderColor: 'rgba(197, 164, 109, 0.6)',*/}
                {/*            backgroundColor: 'rgba(197, 164, 109, 0.15)'*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <div className="w-2 h-2 bg-[#C5A46D] rounded-full mr-3 animate-pulse"></div>*/}
                {/*        <span className="text-[#C5A46D] font-semibold text-sm tracking-wide uppercase">*/}
                {/*            Web Design + AI Automated Follow-ups*/}
                {/*        </span>*/}
                {/*    </motion.div>*/}
                {/*</motion.div>*/}

                {/* Main headline */}
                <motion.h1
                    /*@ts-ignore*/
                    variants={itemVariants}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 tracking-tight"
                >
                    Pretty Design
                    <span
                        className="block text-[#C5A46D] relative"

                    >
                        Doesn’t Pay

                    </span>
                    <span className="block text-white">the Bills</span>
                </motion.h1>

                {/* Value proposition */}
                <motion.p
                    //@ts-ignore
                    variants={itemVariants}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12 tracking-wide"
                >
                    Stop losing leads to silence.{' '}
                    <span className="text-white font-medium">
                        Our AI follows up instantly
                    </span>
                    {' '} turning more visitors into paying customers.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    //@ts-ignore
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(197, 164, 109, 0.3)",
                            backgroundColor: '#D4B877'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 bg-[#C5A46D] hover:bg-[#D4B877] text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform min-w-[200px]"
                    >
                        Get Started Now
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            borderColor: '#C5A46D',
                            color: '#C5A46D',
                            backgroundColor: 'rgba(197, 164, 109, 0.05)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-transparent border-2 border-gray-600 hover:border-[#C5A46D] text-gray-300 hover:text-[#C5A46D] font-bold text-lg rounded-xl transition-all duration-300 backdrop-blur-sm min-w-[200px]"
                    >
                        See Live Demo
                    </motion.button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    // @ts-ignore
                    variants={itemVariants}
                    className="pt-12 border-t border-gray-800"
                >
                    <motion.p
                        className="text-gray-500 text-base mb-6 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Trusted by 500+ growing businesses
                    </motion.p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                        {['TECHSTARTUP', 'DIGITALAGENCY', 'ECOMMERCE', 'CONSULTING'].map((company, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8 + i * 0.15 }}
                                whileHover={{
                                    opacity: 1,
                                    color: '#C5A46D',
                                    scale: 1.1
                                }}
                                className="text-gray-400 font-bold text-sm tracking-widest cursor-pointer transition-all duration-300"
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-20 left-10 w-3 h-3 bg-[#C5A46D] rounded-full opacity-40"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-40 right-16 w-2 h-2 bg-[#C5A46D] rounded-full opacity-30"
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                // @ts-ignore
                variants={floatVariants}
                animate="show"
                className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#C5A46D] rounded-full opacity-25"
            />

            <motion.div
                // @ts-ignore
                variants={floatVariants}
                animate="show"
                className="absolute bottom-40 right-1/3 w-4 h-4 border-2 border-[#C5A46D] rounded-full opacity-20"
                transition={{ delay: 2 }}
            />

            {/* Additional geometric elements for visual interest */}
            <motion.div
                className="absolute top-1/2 left-8 w-1 h-20 bg-gradient-to-b from-[#C5A46D] to-transparent opacity-20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2, duration: 1 }}
            />

            <motion.div
                className="absolute top-1/3 right-12 w-1 h-16 bg-gradient-to-t from-[#C5A46D] to-transparent opacity-15"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            />
        </section>
    );
}