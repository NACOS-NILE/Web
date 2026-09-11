'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { FlickeringGrid } from './ui/flickering-grid';
import { useMediaQuery } from '@/hooks/use-media-query';

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div {...props}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}

export default function Footer() {
    const tablet = useMediaQuery("(max-width: 1024px)");

	return (
		<footer
            id="community"
			className="relative h-auto md:h-[600px] w-full bg-transparent md:[clip-path:polygon(0%_0,100%_0%,100%_100%,0_100%)]"
		>
			<div className="relative md:fixed bottom-0 h-auto md:h-[600px] w-full">
				<div className="relative md:sticky md:top-[calc(100vh-600px)] h-full overflow-hidden md:overflow-y-auto bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-0 flex flex-col justify-between">
                    
					<div className="container relative mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 sm:px-6">
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict pointer-events-none opacity-50 dark:opacity-20"
						>
							<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(39,65,147,0.1)_0,hsla(0,0%,55%,.02)_50%,transparent_80%)] absolute top-0 left-0 h-96 w-96 -translate-y-20 -rotate-45 rounded-full" />
							<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.1)_0,transparent_100%)] absolute top-0 left-0 h-96 w-40 [translate:5%_-50%] -rotate-45 rounded-full" />
						</div>

						<div className="relative z-10 flex flex-col gap-12 md:flex-row xl:mt-0">
							<AnimatedContainer className="w-full max-w-sm space-y-4 md:w-1/3">
                                <Link href="/" className="inline-block mb-2">
                                    <span className="text-2xl font-bold tracking-tight text-nacos-primary dark:text-nacos-accent-light">
                                        NACOS Nile
                                    </span>
                                </Link>
								<p className="text-gray-600 dark:text-gray-400 mt-4 text-sm md:mt-0">
                                    Nile University of Nigeria<br />
                                    Abuja, FCT, Nigeria
								</p>
								<p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                                    A vibrant community of computing students dedicated to innovation, learning, and collaboration.
								</p>
							</AnimatedContainer>
                            
                            <div className="flex flex-col sm:flex-row gap-12 w-full md:w-2/3 md:justify-end">
                                <AnimatedContainer delay={0.2} className="w-full sm:w-1/2 md:w-1/3">
                                    <div className="mb-10 md:mb-0">
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
                                        <ul className="mt-4 space-y-3 text-sm">
                                            <li>
                                                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#events" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    Events & Initiatives
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#excos" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    Executive Council
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </AnimatedContainer>

                                <AnimatedContainer delay={0.3} className="w-full sm:w-1/2 md:w-1/3">
                                    <div className="mb-10 md:mb-0">
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Join Community</h3>
                                        <ul className="mt-4 space-y-3 text-sm">
                                            <li>
                                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    Discord Server
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    WhatsApp Group
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    Twitter / X
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-nacos-primary dark:hover:text-nacos-accent transition-colors duration-300">
                                                    LinkedIn
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </AnimatedContainer>
                            </div>
						</div>
					</div>

                    <div className="relative mt-8 md:mt-16 h-64 md:h-auto w-full flex-grow flex flex-col justify-end">
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white dark:to-black z-10 from-30%" />
                        <div className="absolute inset-0 mx-6">
                            <FlickeringGrid
                                text={tablet ? "NACOS NILE" : "NACOS Nile"}
                                fontSize={tablet ? 70 : 120}
                                className="h-full w-full"
                                squareSize={2}
                                gridGap={tablet ? 2 : 3}
                                color="#6B7280"
                                maxOpacity={0.2}
                                flickerChance={0.1}
                            />
                        </div>
                        
                        <div className="relative z-20 container mx-auto max-w-6xl px-4 sm:px-6">
                            <div className="text-gray-500 dark:text-gray-400 flex flex-col items-center justify-between gap-2 border-t border-gray-200/50 dark:border-gray-800/50 pt-6 pb-8 text-sm md:flex-row">
                                <p>© {new Date().getFullYear()} NACOS Nile University of Nigeria Chapter.</p>
                                <p>All rights reserved.</p>
                            </div>
                        </div>
                    </div>

				</div>
			</div>
		</footer>
	);
}
