import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Stat = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const animation = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < value) {
                    return prevCount + 1;
                }
                clearInterval(animation);
                return prevCount;
            });
        }, 30);

        return () => clearInterval(animation);
    }, [value]);

    return (
        <div className="text-center">
            <p className="text-4xl font-bold">{count}%</p>
            <p className="text-lg">{label}</p>
        </div>
    );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5a4a3a2?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#000435] via-transparent to-[#000435] opacity-80"></div>
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          AI-Powered Smart Manufacturing Simulation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          Train, test, and optimize production using real-time digital factory intelligence — before changes hit the shop floor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto">
            Start Simulation Demo
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto">
            Book Live Demo
          </button>
        </motion.div>
        <motion.div 
            className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <Stat value={40} label="Reduction in Downtime" />
            <Stat value={30} label="Increase in Throughput" />
            <Stat value={60} label="Improvement in Quality" />
            <Stat value={25} label="Decrease in Costs" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
