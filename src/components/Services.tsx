import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cloud, Cog, Database, Network, ArrowRight, CheckCircle2, Code } from 'lucide-react';

const services = [
  {
    id: "fabric",
    icon: <Database size={28} />,
    title: "Fabric Data Architecture",
    shortDesc: "Unify analytics with Microsoft Fabric",
    description: "Design and implement robust data fabrics to unify your analytics estate. We leverage Microsoft Fabric's OneLake to seamlessly integrate disparate data sources, empowering intelligent decision-making and real-time visualization without data movement.",
    color: "bg-brand-navy",
    iconBg: "bg-brand-teal/20 text-brand-teal",
    features: [
      "OneLake Architecture Design",
      "Synapse Data Engineering",
      "DirectLake Power BI Integration",
      "Real-time Analytics Governance"
    ],
    highlight: true
  },
  {
    id: "power",
    icon: <Cog size={28} />,
    title: "Power Platform Development",
    shortDesc: "Empower operations with custom Microsoft solutions",
    description: "Transform business operations by eliminating manual repetitive tasks. We build intelligent, automated workflows and custom business applications using Power Automate, Power Apps, and Power BI tailored to your unique operational challenges.",
    color: "bg-brand-red",
    iconBg: "bg-brand-red/20 text-brand-red",
    features: [
      "Custom Power Apps Development",
      "Automated Workflows (Power Automate)",
      "Interactive Power BI Dashboards",
      "ESG Performance Reporting"
    ],
    highlight: false
  },
  {
    id: "cloud",
    icon: <Cloud size={28} />,
    title: "Cloud Solutions & Strategy",
    shortDesc: "End-to-end cloud consulting & migration",
    description: "We provide strategic end-to-end cloud consulting, migrating legacy infrastructure and engineering scalable cloud-native architectures. We ensure your transition is secure, cost-optimized, and aligned with your business roadmap.",
    color: "bg-brand-teal",
    iconBg: "bg-blue-500/20 text-blue-500",
    features: [
      "Strategic Migration Planning",
      "Cloud Infrastructure Architecture",
      "Platform Modernization",
      "Security & Cost Optimization"
    ],
    highlight: false
  },
  {
    id: "custom",
    icon: <Code size={28} />,
    title: "Custom Application Development",
    shortDesc: "Bespoke software for unique challenges",
    description: "We design and engineer specialized, high-performance custom applications for the modern enterprise. From complex internal tools to full-scale commercial platforms, we build secure, robust software that perfectly aligns with your operations.",
    color: "bg-brand-teal",
    iconBg: "bg-purple-500/20 text-purple-400",
    features: [
      "Full-stack Web Applications",
      "Enterprise Systems Integration",
      "Legacy System Modernization",
      "High-performance Architectures"
    ],
    highlight: false
  },
  {
    id: "crm",
    icon: <Network size={28} />,
    title: "Cloud CRM & Administration",
    shortDesc: "Expert Salesforce and CRM optimization",
    description: "Maximize your customer relationship management investments. We provide expert administration, custom configurations, and seamless integrations for leading cloud platforms like Salesforce within your broader IT ecosystem.",
    color: "bg-brand-navy",
    iconBg: "bg-zinc-800 text-zinc-300",
    features: [
      "Salesforce Administration",
      "CRM Workflow Automation",
      "Third-party System Integration",
      "Data Deduplication & Cleansing"
    ],
    highlight: false
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-transparent relative z-10 selection:bg-brand-teal/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Intelligent Systems &<br/>
              <span className="text-brand-teal">Data Engineering.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400 font-light max-w-2xl"
            >
              We engineer scalable cloud architecture and data solutions designed to eliminate operational bottlenecks and drive sustainable business growth.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
          {/* Interactive Navigation List */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = activeService.id === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setActiveService(service)}
                  className={`group relative cursor-pointer p-6 rounded-xl transition-all duration-500 border ${
                    isActive 
                      ? 'glass-card accent-glow border-brand-teal/30 shadow-lg shadow-brand-teal/5' 
                      : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {/* Highlight Badge for Fabric */}
                  {service.highlight && (
                    <div className="absolute -top-3 -right-2 bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm shadow-lg shadow-brand-teal/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                      Featured
                    </div>
                  )}

                  <div className="flex items-start gap-5">
                    <div className={`shrink-0 w-14 h-14 rounded glass-card flex items-center justify-center transition-colors duration-500 ${
                      isActive ? service.iconBg : 'bg-transparent text-zinc-400'
                    }`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-sm md:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-300 mb-1 ${
                        isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs transition-colors duration-300 ${
                        isActive ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className={`shrink-0 mt-3 transition-transform duration-500 ${
                      isActive ? 'text-brand-teal translate-x-1' : 'text-zinc-600 group-hover:translate-x-1 group-hover:text-zinc-400'
                    }`}>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-7/12 relative">
            <div className="absolute inset-0 glass-card rounded-xl overflow-hidden border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full p-10 md:p-14 flex flex-col"
                >
                  <div className={`mb-10 w-20 h-20 rounded ${activeService.iconBg} flex items-center justify-center border border-white/10`}>
                    <div className="scale-[1.5]">
                      {activeService.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {activeService.title}.
                  </h3>
                  
                  <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 flex-1">
                    {activeService.description}
                  </p>

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5">Key Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeService.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                          className="flex items-center gap-3 text-zinc-300 text-sm font-medium bg-white/5 px-4 py-3 rounded border border-white/10 shadow-sm"
                        >
                          <CheckCircle2 size={16} className="text-brand-teal shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                  >
                    <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-teal transition-colors uppercase tracking-[0.2em] text-xs border-b border-brand-teal pb-1">
                      Start Your Project <ArrowRight size={14} />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
