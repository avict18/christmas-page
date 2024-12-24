'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Snowflake = ({ size, left, animationDuration }: { size: number, left: string, animationDuration: number }) => (
  <motion.div
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: 'white',
      position: 'absolute',
      top: -size,
      left,
    }}
    animate={{
      y: ['0vh', '100vh'],
    }}
    transition={{
      duration: animationDuration,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
)

export default function ChristmasGreeting() {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([])

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => (
      <Snowflake
        key={i}
        size={Math.random() * 5 + 2}
        left={`${Math.random() * 100}%`}
        animationDuration={Math.random() * 10 + 5}
      />
    ))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col items-center justify-center overflow-hidden relative">
      {snowflakes}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <Image
          src="/tree.png"
          alt="Christmas Tree"
          width={150}
          height={200}
          className="object-contain"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white text-center mb-4"
      >
        Merry Christmas!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl md:text-2xl text-white text-center"
      >
        Wishing you joy, peace, and happiness this holiday season!
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full font-semibold text-lg shadow-lg"
      >
        Greetings From the Co-Founder's of Acryx
      </motion.button>
    </div>
  );
}

