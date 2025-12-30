import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Free Plan',
    price: '$0',
    features: ['Access demo simulation', 'Basic analytics', 'Email support'],
    buttonText: 'Try Free',
    featured: false,
  },
  {
    name: 'Pro Plan',
    price: '$99',
    features: [
      'Full simulation access',
      'Advanced analytics',
      'Priority email support',
      '10 user seats',
    ],
    buttonText: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom simulations',
      'On-premise deployment',
      'Dedicated support',
      'Unlimited user seats',
    ],
    buttonText: 'Contact Sales',
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Pricing Tiers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 bg-opacity-40 p-8 rounded-lg text-center backdrop-blur-md border border-gray-700 ${tier.featured ? 'border-blue-500 scale-105' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold mb-4">{tier.price}</p>
              <ul className="text-left space-y-2 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-bold transition-transform duration-300 transform hover:scale-105 ${tier.featured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
