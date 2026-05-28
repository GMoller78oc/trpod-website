import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const categories = ["All", "Data Architecture", "Cloud Migration", "Power Platform"];

const projects = [
  {
    id: 1,
    title: "ESG Reporting",
    category: "Power Platform",
    client: "Mining",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Syncrude_mildred_lake_plant.jpg/960px-Syncrude_mildred_lake_plant.jpg",
  },
  {
    id: 2,
    title: "Legacy to Azure Transition",
    category: "Cloud Migration",
    client: "Financial Institution",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "ERP Reporting",
    category: "Data Architecture",
    client: "DRDGOLD",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Workflow Automation",
    category: "Power Platform",
    client: "Private Hospital Network",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Selected Work.
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-[10px] uppercase font-bold tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? "text-brand-teal glass-card border-brand-teal/50" 
                    : "text-zinc-500 glass-card hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/5] bg-zinc-900 border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-teal mb-1 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-lg font-medium text-white transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-xs mt-1">{project.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
