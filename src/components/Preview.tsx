import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Image, Smile, Send } from 'lucide-react';

export default function Preview() {
  return (
    <div className="py-24 bg-[#0a0a1a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience Stellar Chat</h2>
          <p className="text-gray-400">See how Nebula Chat transforms your conversations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 backdrop-blur-sm overflow-hidden"
        >
          <div className="border-b border-purple-500/20 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="bg-purple-500/10 rounded-2xl p-4 inline-block">
                    <p className="text-gray-300">Hey! Check out this new feature! 🚀</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 justify-end">
                <div className="flex-1 text-right">
                  <div className="bg-pink-500/10 rounded-2xl p-4 inline-block">
                    <p className="text-gray-300">Wow, this looks amazing! Love the new design ✨</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-[#1a1a2e] rounded-lg p-3 flex items-center space-x-3">
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-gray-300 placeholder-gray-500"
                />
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}