import { motion } from 'framer-motion';
import { Zap, BarChart, ShieldCheck, Truck, Tv, Users } from 'lucide-react';

const benefits = [
  { icon: <Zap className="w-8 h-8 text-blue-400" />, text: 'Predict equipment failures early' },
  { icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, text: 'Reduce defects with real-time inspection' },
  { icon: <BarChart className="w-8 h-8 text-blue-400" />, text: 'Optimize scheduling automatically' },
  { icon: <Truck className="w-8 h-8 text-blue-400" />, text: 'Improve delivery performance' },
  { icon: <Tv className="w-8 h-8 text-blue-400" />, text: 'Live monitoring dashboard' },
  { icon: <Users className="w-8 h-8 text-blue-400" />, text: 'Train workforce using simulations' },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            What You Gain
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex items-center space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {benefit.icon}
              <p className="text-lg">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
