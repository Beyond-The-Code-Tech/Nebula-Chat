import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Lock, Palette, Cloud, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Privacy First",
    description: "End-to-end encryption ensures your conversations remain secure"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Stellar Performance",
    description: "Real-time responsiveness and seamless transitions"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Cosmic Design",
    description: "A visually stunning interface that redefines messaging"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Storage",
    description: "Access your messages from any device, anytime"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Chats",
    description: "Create and manage group conversations effortlessly"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Cross Platform",
    description: "Available on all your devices with perfect sync"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Nebula Chat?</h2>
          <p className="text-gray-400">Experience the next generation of messaging</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}