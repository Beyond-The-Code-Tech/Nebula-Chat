import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github } from 'lucide-react';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'signup';
};

export default function AuthModal({ isOpen, onClose, initialView = 'login' }: AuthModalProps) {
  const [view, setView] = useState(initialView);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md p-6 bg-[#0f172a] rounded-2xl shadow-xl border border-purple-500/20"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold text-white mb-6">
            {view === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 bg-white text-gray-800 rounded-lg p-3 font-medium hover:bg-gray-100 transition-colors">
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-400 bg-[#0f172a]">Or continue with</span>
              </div>
            </div>

            <form className="space-y-4">
              {view === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      className="w-full bg-[#1a1a2e] text-white rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="johndoe"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    className="w-full bg-[#1a1a2e] text-white rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    className="w-full bg-[#1a1a2e] text-white rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-3 font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                {view === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <p className="text-center text-gray-400">
              {view === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                {view === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}