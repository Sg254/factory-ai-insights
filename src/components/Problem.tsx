import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const problems = [
  { icon: <AlertTriangle className="w-8 h-8 text-red-500" />, text: 'Equipment failure causing downtime' },
  { icon: <AlertTriangle className="w-8 h-8 text-red-500" />, text: 'Manual scheduling inefficiencies' },
  { icon: <AlertTriangle className="w-8 h-8 text-red-500" />, text: 'High defect and scrap rates' },
  { icon: <AlertTriangle className="w-8 h-8 text-red-500" />, text: 'Missed delivery deadlines' },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-[#000435]">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Factories struggle with:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex items-center space-x-4 backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {problem.icon}
              <p className="text-lg">{problem.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
            className="text-3xl font-bold text-center text-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
        >
            We fix that with AI.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
