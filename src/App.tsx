/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { motion } from 'motion/react';

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
            alt="Data and Cloud" 
            className="rounded-[2rem] shadow-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">
            The trusted catalyst for business innovation.
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                To deliver robust cloud architectures and comprehensive Microsoft Power Platform solutions that eliminate operational bottlenecks, visualize critical data, and drive sustainable growth for our clients, with a specialized focus on the rigorous environments of the Mining and Healthcare sectors.
              </p>
            </div>
            
            <div className="p-6 glass-card rounded-2xl border-l-4 border-l-brand-teal">
              <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
              <p className="text-zinc-400 font-light">
                Empowering organizations to operate seamlessly and intelligently in the cloud. We partner with businesses to modernize IT infrastructure and unlock the true value of their data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Layout>
      <Hero />
      <Clients />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </Layout>
  );
}
