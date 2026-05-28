import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y, opacity }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-brand-teal text-xs font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-brand-teal inline-block"></span>
              Digital Transformation Agency
            </p>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient mb-8 leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            OPERATE <br/>
            INTELLIGENTLY <br/>
            IN THE CLOUD.
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We deliver robust cloud architectures and comprehensive Microsoft Power Platform solutions to eliminate bottlenecks and unlock the true value of your data.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-brand-teal text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest hover:bg-[#0491a9] transition-all hover:gap-4 hover:shadow-lg hover:shadow-brand-teal/20"
            >
              Explore Solutions <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 glass-card text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
