import { motion } from 'framer-motion';

const testimonials = [
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'John Doe',
    title: 'Factory Manager',
    quote: '"This simulation tool has been a game-changer for our production line. We\'ve reduced downtime by 40% and improved our quality control significantly."'
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    name: 'Jane Smith',
    title: 'Operations Director',
    quote: '"The predictive maintenance agent is incredibly accurate. We can now schedule maintenance proactively and avoid costly breakdowns. Highly recommended!"'
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    name: 'Samuel Lee',
    title: 'Lead Engineer',
    quote: '"The ability to test changes in a digital twin before implementing them on the floor is invaluable. It has saved us countless hours and resources."'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#000435]">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center backdrop-blur-sm border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500" />
              <p className="text-gray-400 italic mb-4">{testimonial.quote}</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
