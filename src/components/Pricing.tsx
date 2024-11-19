import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "Up to 10 group chats",
      "1GB file storage",
      "Basic encryption",
      "7-day message history"
    ]
  },
  {
    name: "Pro",
    price: "9.99",
    popular: true,
    features: [
      "Unlimited group chats",
      "10GB file storage",
      "Advanced encryption",
      "Unlimited message history",
      "Priority support",
      "Custom themes"
    ]
  },
  {
    name: "Enterprise",
    price: "29.99",
    features: [
      "Everything in Pro",
      "100GB file storage",
      "Admin controls",
      "API access",
      "24/7 support",
      "Custom branding"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-gray-400">Start for free, upgrade as you grow</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500'
                  : 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm text-white font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-gray-400">$</span>
                  <span className="text-4xl font-bold text-white mx-1">{plan.price}</span>
                  <span className="text-gray-400">/mo</span>
                </div>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-purple-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  : 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}