import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call for tracking/submission
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-transparent text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter"
          >
            Let's build <br/>
            <span className="text-brand-teal">something robust.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 font-light max-w-md mb-12"
          >
            Ready to optimize your business in the cloud? Partner with us to architect scalable solutions tailored to your unique operational challenges.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest mb-2">Location</h4>
              <p className="text-sm">Centurion, South Africa</p>
            </div>
            <div>
              <h4 className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest mb-2">Direct Contact</h4>
              <p className="text-sm"><a href="tel:0845565797" className="hover:text-brand-teal transition-colors">084 556 5797</a></p>
              <p className="text-sm"><a href="mailto:diederik@tprod.co.za" className="hover:text-brand-teal transition-colors">diederik@tprod.co.za</a></p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card accent-glow rounded-xl p-8 md:p-12 text-white relative"
        >
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 glass-card rounded-xl"
            >
              <div className="w-20 h-20 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inquiry Received.</h3>
              <p className="text-zinc-400 max-w-sm mx-auto text-sm">
                Thank you for reaching out. A systems architect will review your request and contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white">Start a Project</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">First Name</label>
                  <input required type="text" id="firstName" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-zinc-600" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">Last Name</label>
                  <input required type="text" id="lastName" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-zinc-600" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">Work Email</label>
                <input required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-zinc-600" placeholder="john@company.com" />
              </div>

              <div className="space-y-1">
                <label htmlFor="interest" className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">Primary Interest</label>
                <select id="interest" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-teal transition-all appearance-none text-white [&>option]:bg-[#0A0A0B] [&>option]:text-white">
                  <option>Cloud Architecture</option>
                  <option>Power Platform</option>
                  <option>Fabric Data Architecture</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[9px] uppercase text-zinc-500 font-bold tracking-widest">Project Details</label>
                <textarea required id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-teal transition-all resize-none placeholder:text-zinc-600" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-brand-teal text-white py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#0491a9] transition-all disabled:opacity-70 mt-2"
              >
                {formState === 'submitting' ? 'Processing...' : 'Send Inquiry'} 
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
