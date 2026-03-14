/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#E0F7FF] flex flex-col items-center justify-center p-6 font-sans overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-200/50 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full text-center z-10"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[#00AEEF] to-[#00D4FF] shadow-lg shadow-blue-200"
        >
          <Mail className="w-8 h-8 text-white" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
          Something Amazing
          <span className="block bg-gradient-to-r from-[#00AEEF] to-[#00D4FF] bg-clip-text text-transparent">
            Is Coming Soon
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-[#666666] text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="relative flex flex-col sm:flex-row items-center gap-3 p-2 bg-white rounded-2xl shadow-xl shadow-blue-100/50"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 bg-transparent border-none focus:ring-0 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#00D4FF] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Notify Me'
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-white rounded-2xl shadow-xl shadow-blue-100/50 text-[#00AEEF] font-semibold"
              >
                🎉 You're on the list! We'll be in touch soon.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-[#999999]">
          No spam, ever. Unsubscribe at any time.
        </p>
      </motion.div>

      {/* Footer Branding (Optional) */}
      <div className="absolute bottom-8 text-xs text-[#CCCCCC] tracking-widest uppercase">
        © 2026 Amazing Co.
      </div>
    </div>
  );
}
