import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
              About Me
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-cyan-500 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aspiring software engineer with strong fundamentals in programming and problem-solving. Eager to contribute to innovative projects, learn emerging technologies, and grow professionally in a collaborative work environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Karimnagar, Telangana, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Award size={20} className="text-purple-400" />
                  <span>Passionate about innovation & quality</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-l-cyan-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <GraduationCap className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Bachelor of Technology (CSE)</h4>
                    <p className="text-gray-400">Sree Chaitanya Institute of Technological Sciences</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">Dec 2021 - Jul 2025</span>
                      <span className="text-sm text-gray-400 font-semibold">70%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-purple-500">
                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Intermediate (MPC)</h4>
                    <p className="text-gray-400">Alphores Junior College, Karimnagar</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-purple-400 bg-purple-400/10 px-2 py-1 rounded">Jun 2019 - Mar 2021</span>
                      <span className="text-sm text-gray-400 font-semibold">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
