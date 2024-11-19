import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Shield, Share2 } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Hero() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  const handleSignUp = () => {
    setAuthView('signup');
    setIsAuthOpen(true);
  };

  const handleLogin = () => {
    setAuthView('login');
    setIsAuthOpen(true);
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-20">
        {/* Animated stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Where Conversations Reach the Cosmos
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Secure, Instant, and Stellar Communication
            </p>

            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignUp}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                Try Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogin}
                className="px-8 py-3 bg-transparent border-2 border-purple-500 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Log In
              </motion.button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Messaging</h3>
              <p className="text-gray-400">Instant communication with delivery and read receipts</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">End-to-End Encryption</h3>
              <p className="text-gray-400">Your conversations remain private and secure</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Share2 className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">File Sharing</h3>
              <p className="text-gray-400">Share files up to 10MB with encryption</p>
            </div>
          </motion.div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />
    </>
  );
}