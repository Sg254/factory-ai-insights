import { motion } from 'framer-motion';
import { Bot, Cpu, Factory } from 'lucide-react';

const agents = [
  {
    icon: <Bot className="w-12 h-12 text-green-400" />,
    title: 'Quality Assurance Agent',
    description: 'Detects defects & tolerance issues → Less scrap & rework',
  },
  {
    icon: <Cpu className="w-12 h-12 text-green-400" />,
    title: 'Predictive Maintenance Agent',
    description: 'Predicts failures, increases uptime, schedules maintenance',
  },
  {
    icon: <Factory className="w-12 h-12 text-green-400" />,
    title: 'Production Orchestration Agent',
    description: 'Optimizes scheduling for throughput & faster delivery',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#000435]">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-lg text-center backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{agent.icon}</div>
              <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
              <p className="text-gray-400">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
