
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code, Brain, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExternalLink = (platform, url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 Link Not Available",
        description: `${platform} profile link will be added soon!`,
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Jeremy Mattathias Mboe - AI Engineering Student | Computer Vision & Diffusion Models</title>
        <meta name="description" content="Portfolio of Jeremy Mattathias Mboe, an Artificial Intelligence Engineering student passionate about applying AI and Diffusion Models to real-world problems, especially in the medical domain." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/e8cad1da-6e95-423d-b390-ee95f3d685ac/9d2404fb9fa7e056296e1056a3697da5.jpg" 
              alt="Jeremy Mattathias Mboe - AI Engineering Student"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white/20 object-cover"
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Jeremy Mattathias Mboe
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
          >
            Artificial Intelligence Engineering Student | Computer Vision & Diffusion Models
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Passionate about applying AI and Diffusion Models to real-world problems, especially in the medical domain.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-[#1e3a8a] hover:bg-white/90 font-semibold px-8 shadow-lg"
              onClick={() => scrollToSection('cv')}
            >
              View CV
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold px-8"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold px-8"
              onClick={() => handleExternalLink('GitHub', 'https://github.com/proprophet2503')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold px-8"
              onClick={() => handleExternalLink('LinkedIn', 'https://www.linkedin.com/in/jeremymboe/')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              About Me
            </motion.h2>
            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                I am currently pursuing a Bachelor's degree in <strong>Artificial Intelligence Engineering at Institut Teknologi Sepuluh Nopember (ITS)</strong>, where I maintain a GPA of 3.86. My academic journey began in August 2024, and I am deeply engaged in coursework that spans Linear Algebra, Calculus, Physics, Programming, and foundational AI concepts.
              </p>
              <p className="text-lg leading-relaxed">
                My research interests lie at the intersection of <strong>Diffusion Models and Computer Vision</strong>, with a particular focus on applying these technologies to solve real-world challenges. I am especially passionate about <strong>applications in the Health and Medical world</strong>, where AI has the potential to revolutionize diagnostics, treatment planning, and patient care.
              </p>
              <p className="text-lg leading-relaxed">
                Through hands-on experience with frameworks like <strong>PyTorch, TensorFlow, and OpenCV</strong>, I have developed expertise in building and deploying machine learning models. My participation in AI and Deep Learning competitions, including <strong>Gemastik 2025</strong> and <strong>Electrolympic UPNVJ</strong>, has sharpened my problem-solving skills and deepened my understanding of cutting-edge AI techniques, particularly in medical AI and healthcare applications.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond technical skills, I bring strong capabilities in <strong>research, mathematics, and physics</strong>, complemented by proficiency in English. I am committed to continuous learning and contributing to the advancement of AI technologies that make a meaningful impact on society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Curriculum Vitae
            </motion.h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Personal Information */}
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <Mail className="mr-3 h-6 w-6" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">Name:</span>
                    <span>Jeremy Mattathias Mboe</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span>Surabaya, Indonesia</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <span>+62 89668439166</span>
                  </div>
                  <div className="flex items-start">
                    <Github className="mr-2 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <a href="https://github.com/proprophet2503" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e3a8a] hover:underline transition-colors">
                      github.com/proprophet2503
                    </a>
                  </div>
                  <div className="flex items-start md:col-span-2">
                    <Linkedin className="mr-2 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    <a href="https://www.linkedin.com/in/jeremymboe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1e3a8a] hover:underline transition-colors">
                      linkedin.com/in/jeremymboe
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Artificial Intelligence Engineering</h4>
                    <p className="text-gray-600 font-medium">Institut Teknologi Sepuluh Nopember (ITS)</p>
                    <p className="text-gray-500">August 2024 - Present</p>
                    <p className="text-[#1e3a8a] font-semibold mt-2">GPA: 3.86 / 4.00</p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Calculus</li>
                        <li>Linear Algebra</li>
                        <li>Databases</li>
                        <li>Data Mining</li>
                        <li>Machine Learning</li>
                        <li>Probability and Statistics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Avalon AI Member</h4>
                    <p className="text-gray-600 font-medium">Computer Vision and Diffusion Models Division</p>
                    <p className="text-gray-500 mb-3">Present</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Mathematics (Calculus, Linear Algebra, and Probability & Statistics) Training</li>
                      <li>Foundational Models Training</li>
                      <li>CV and Diffusion Models Project</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Gemastik 2025 - Data Mining Competition</h4>
                    <p className="text-gray-600 font-medium">Oil Palm Tree Health Detection Project</p>
                    <p className="text-gray-500 mb-3">2025</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Developed YOLOv8s-based detection system for oil palm tree health assessment</li>
                      <li>Implemented ResNet-18 classification model for disease categorization</li>
                      <li>Applied NDVI masking techniques for enhanced vegetation analysis</li>
                      <li>Collaborated with team members on data preprocessing and model optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">IRIS ITS - Programming Internship</h4>
                    <p className="text-gray-600 font-medium">Software Development Intern</p>
                    <p className="text-gray-500 mb-3">2024</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Gained practical experience in software development methodologies</li>
                      <li>Worked on real-world programming projects and applications</li>
                      <li>Collaborated with senior developers on code reviews and best practices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Schematics 2025 - Data Management</h4>
                    <p className="text-gray-600 font-medium">Data Management Team Member</p>
                    <p className="text-gray-500 mb-3">2025</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Managed and organized large-scale competition datasets</li>
                      <li>Ensured data quality and integrity throughout the event</li>
                      <li>Coordinated with technical teams for seamless data operations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <Code className="mr-3 h-6 w-6" />
                  Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">Python</span>
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">C++</span>
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">SQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">AI/ML Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">PyTorch</span>
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">TensorFlow</span>
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">OpenCV</span>
                      <span className="px-4 py-2 bg-[#1e3a8a] text-white rounded-full text-sm font-medium">Scikit-Learn</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Research</span>
                      <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Mathematics</span>
                      <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Physics</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">English (Proficient)</span>
                      <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Indonesian (Native)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certificates */}
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <Award className="mr-3 h-6 w-6" />
                  Certificates & Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="mr-3 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">1st Place - Electrolympic UPNVJ Scientific Paper</h4>
                      <p className="text-gray-600">Awarded for the TB Cough Detection Model Project Paper</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="mr-3 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">TensorFlow Machine Learning & Deep Learning Certification</h4>
                      <p className="text-gray-600">Completed comprehensive training in ML/DL using TensorFlow framework</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="mr-3 h-5 w-5 text-[#1e3a8a] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">2nd Place - Parahyangan University Physics Competition (2022)</h4>
                      <p className="text-gray-600">Achieved second place in regional physics competition</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Projects Portfolio
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Oil Palm Tree Health Detection */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Oil Palm Tree Health Detection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Advanced computer vision system for detecting and classifying oil palm tree health status using deep learning techniques.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">YOLOv8s</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">ResNet-18</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">NDVI Masking</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Gemastik Data Mining 2025</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/proprophet2503/Deteksi-dan-Klasifikasi-Kesehatan-Pohon-Sawit-Menggunakan-Deep-Learning-pada-Citra-Udara', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://huggingface.co/spaces/jeremymboe/PalmTree_Detection_HealthClassification_BIGTOR', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    HF Spaces
                  </Button>
                </div>
              </motion.div>

              {/* TB Cough Detection Model */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">TB Cough Detection Model</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Medical AI system for detecting tuberculosis through cough sound analysis using advanced signal processing and deep learning.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">LSTM</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Direction of Arrival</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Inverse Beamforming</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Gemastik IoT & PPL 2025</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/proprophet2503/TB-Cough-Detection-Model', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </motion.div>

              {/* Student Stress Classification */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Student Stress Classification</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Machine learning system for classifying student stress levels using Support Vector Machines with a modified flexible pinball loss function and behavioral data analysis.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">SVM</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Scikit-Learn</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Python</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Ongoing Research Project</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/proprophet2503/Stress-Level-Classification-with-Pinball-Loss', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </motion.div>

              {/* Object Detection for Visually Impaired */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-[#1e3a8a] mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Object Detection for Visually Impaired Education</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Assistive technology project using computer vision to help visually impaired students identify and learn about objects in their environment.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">YOLO</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">OpenCV</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">PyTorch</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Ongoing Development</p>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://github.com/proprophet2503/Object-Detection-for-Visually-Impaired-Education', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Project Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Final Project
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl shadow-2xl p-10 text-white"
            >
              <div className="flex items-center mb-6">
                <Code className="h-10 w-10 mr-4" />
                <h3 className="text-3xl font-bold">Football Match Data Analysis System</h3>
              </div>
              
              <p className="text-xl mb-6 text-white/90">
                A comprehensive web-based AI system designed to analyze 45-minute football match videos with advanced computer vision and machine learning techniques.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">Key Features</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Real-time player movement tracking and trajectory analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Automated event detection (goals, fouls, passes, shots)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Comprehensive statistical analysis and metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Visual summaries and heatmap generation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Computer Vision</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Deep Learning</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Object Tracking</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Web Development</span>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Data Visualization</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3">Project Impact</h4>
                <p className="text-white/90">
                  This system aims to democratize advanced football analytics, making professional-grade match analysis accessible to coaches, analysts, and teams at all levels. By automating the analysis of 45-minute match videos, it saves countless hours of manual review while providing deeper insights into player performance, team tactics, and match dynamics.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dream Job Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Dream Career Path
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-12">
              I aspire to contribute to the advancement of artificial intelligence in healthcare, where technology meets human compassion to save lives and improve patient outcomes.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <Brain className="h-12 w-12 text-[#1e3a8a] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Engineer</h3>
                <p className="text-gray-600">
                  Developing cutting-edge AI solutions that solve complex real-world problems, with a focus on medical applications and healthcare innovation.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              >
                <Code className="h-12 w-12 text-[#1e3a8a] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Researcher</h3>
                <p className="text-gray-600">
                  Conducting groundbreaking research in Diffusion Models and computer vision, pushing the boundaries of what's possible in medical AI.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Focus Areas</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <Heart className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Medical AI</h4>
                  <p className="text-gray-600 text-sm">
                    Applying AI to revolutionize healthcare delivery and patient care
                  </p>
                </div>
                <div>
                  <Brain className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Diffusion Models Research</h4>
                  <p className="text-gray-600 text-sm">
                    Developing advanced generative models for applications in the Health and Medical world
                  </p>
                </div>
                <div>
                  <Code className="h-8 w-8 text-[#1e3a8a] mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Diagnostic Decision Support</h4>
                  <p className="text-gray-600 text-sm">
                    Creating AI systems that assist healthcare professionals in making accurate diagnoses
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl font-bold mb-2">Jeremy Mattathias Mboe</p>
            <p className="text-white/80 mb-6">AI Engineering Student | Computer Vision & Diffusion Models</p>
            
            <div className="flex justify-center gap-6 mb-8">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => handleExternalLink('GitHub', 'https://github.com/proprophet2503')}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:text-white hover:bg-white/10"
                onClick={() => handleExternalLink('LinkedIn', 'https://www.linkedin.com/in/jeremymboe/')}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-white/60 text-sm">
                Built for Web Programming Class Project
              </p>
              <p className="text-white/60 text-sm mt-2">
                © 2026 Jeremy Mattathias Mboe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
