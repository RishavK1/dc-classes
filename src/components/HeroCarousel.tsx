import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
}

const slides: Slide[] = [
  {
    image: '/hero/hero1.webp',
    title: 'A Name of Trust Since 1999',
    subtitle: 'CBSE, JEE, NEET, NDA, IAS/IPS & More. Proven Results. Expert Faculty. Personal Mentoring.',
    cta1: 'Book Free Counselling',
    cta2: 'Call Now'
  },
  {
    image: '/hero/hero2.webp',
    title: 'Results That Speak',
    subtitle: '25+ Years of Excellence. 10,000+ Selections. Your Success is Our Mission.',
    cta1: 'View Our Toppers',
    cta2: 'Talk to Counsellor'
  },
  {
    image: '/hero/hero3.webp',
    title: 'Expert Faculty. Modern Infrastructure',
    subtitle: 'IIT/AIIMS Alumni. State-of-the-art Classrooms. Comprehensive Study Material.',
    cta1: 'Explore Courses',
    cta2: 'Join Demo Class'
  },
  {
    image: '/hero/hero4.webp',
    title: 'New Batch Admissions Open!',
    subtitle: 'Limited Seats. Early Bird Discounts. Scholarship Available for Meritorious Students.',
    cta1: 'Apply Now',
    cta2: 'Download Brochure'
  }
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[650px] md:h-[750px] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-accent !opacity-100',
        }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Parallax Effect */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
              />
              
              {/* Modern Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              
              {/* Floating Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full"
                  animate={{ 
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-4xl">
                    {/* Trust Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full px-4 py-2 mb-6"
                    >
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-white">Since 1999 • 10,000+ Selections</span>
                    </motion.div>

                    {/* Main Heading with Gradient Text */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle with Glass Effect */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8 max-w-2xl"
                    >
                      <p className="text-lg md:text-xl text-white leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </motion.div>

                    {/* CTAs with Modern Design */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Button 
                        size="lg" 
                        className="group bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                      >
                        {slide.cta1}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="group text-lg px-10 py-7 rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 font-semibold"
                      >
                        <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        {slide.cta2}
                      </Button>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap gap-6 mt-10"
                    >
                      <div className="flex items-center gap-2 text-white/90">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Expert Faculty</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <BookOpen className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Proven Results</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Personal Mentoring</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
