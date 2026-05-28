import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

const clients = [
  { name: "Discovery Health" },
  { name: "Valterra Platinum" },
  { name: "DRDGOLD" }
];

export default function Clients() {
  return (
    <section className="py-20 px-6 md:px-12 relative border-y border-white/5 bg-[#0A0A0B]/50 backdrop-blur-sm z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-5/12 space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded glass-card border-brand-teal/30 text-brand-teal text-[9px] uppercase tracking-[0.2em] font-bold">
            <ShieldCheck size={12} />
            Domain Expertise
          </div>
          <h3 className="text-5xl font-bold text-gradient tracking-tighter leading-none mb-2">25+ Years</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Of specialized systems experience in the Mining and Healthcare sectors. We architect intelligent, high-performance data and operational platforms capable of withstanding the demanding requirements of these critical industries.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-7/12 w-full"
        >
          <div className="flex items-center gap-4 mb-8">
            <h4 className="text-[9px] uppercase text-zinc-500 font-bold tracking-[0.2em] whitespace-nowrap">
              Trusted by industry leaders
            </h4>
            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {clients.map((client, i) => (
              <motion.div 
                key={client.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="glass-card flex items-center justify-center p-6 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest text-center group-hover:text-white transition-colors">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
