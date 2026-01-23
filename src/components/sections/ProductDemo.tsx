'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const demoSteps = [
  { type: 'thinking', text: 'Accessing medical databases...' },
  { type: 'thinking', text: 'Cross-referencing NCCN guidelines...' },
  { type: 'thinking', text: 'Analyzing biomarker profile...' },
  { type: 'result', text: 'Treatment plan generated with 3 evidence-based options' },
]

export function ProductDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSteps, setShowSteps] = useState(false)

  useEffect(() => {
    // Start animation after mount
    const startTimer = setTimeout(() => setShowSteps(true), 800)

    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!showSteps) return

    if (currentStep < demoSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }

    // Reset and loop
    const resetTimer = setTimeout(() => {
      setCurrentStep(0)
      setShowSteps(false)
      setTimeout(() => setShowSteps(true), 1000)
    }, 4000)
    return () => clearTimeout(resetTimer)
  }, [currentStep, showSteps])

  return (
    <div className="relative">
      {/* Glow effect behind the window */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-purple-50/30 rounded-3xl blur-2xl scale-105" />

      {/* macOS-style window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden"
      >
        {/* Window Chrome */}
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
          </div>
        </div>

        {/* Window Content */}
        <div className="p-8 min-h-[280px] flex flex-col">
          {/* User Prompt Chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-end mb-8"
          >
            <div className="bg-[#081923] text-white text-sm font-medium px-5 py-2.5 rounded-full max-w-xs">
              Create treatment plan for Cholangiocarcinoma case
            </div>
          </motion.div>

          {/* AI Response Area */}
          <div className="space-y-3">
            {/* Typing Indicator */}
            <AnimatePresence>
              {showSteps && currentStep < demoSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-1.5 mb-3"
                >
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step Messages */}
            <AnimatePresence mode="sync">
              {showSteps && demoSteps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={
                    step.type === 'result'
                      ? 'text-[#0055FF] font-medium text-sm'
                      : 'text-gray-500 text-sm'
                  }
                >
                  {step.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
