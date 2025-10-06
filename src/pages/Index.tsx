import HeroCarousel from '@/components/HeroCarousel';
import StatsCounter from '@/components/StatsCounter';
import CourseCard from '@/components/CourseCard';
import TopperCard from '@/components/TopperCard';
import FacultyCard from '@/components/FacultyCard';
import TestimonialCard from '@/components/TestimonialCard';
import LeadForm from '@/components/LeadForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { courses } from '@/data/courses';
import { toppers } from '@/data/toppers';
import { faculty } from '@/data/faculty';
import { testimonials } from '@/data/testimonials';
import { galleryImages } from '@/data/gallery';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Index() {
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '10,000+ successful students in top institutions across India'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'IIT/AIIMS alumni with 15+ years of teaching experience'
    },
    {
      icon: Target,
      title: 'Personalized Attention',
      description: 'Small batch sizes ensuring individual focus on each student'
    },
    {
      icon: TrendingUp,
      title: 'Regular Assessment',
      description: 'Weekly tests and performance tracking for continuous improvement'
    }
  ];

  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Why Choose DC Classes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why DC Classes is the Right Choice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              25+ years of excellence in coaching. Join thousands of successful students who achieved their dreams with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-2xl glass-card hover-lift">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results / Toppers */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Pride</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students consistently achieve top ranks in competitive exams. Their success is our mission.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="pb-12"
          >
            {toppers.map((topper) => (
              <SwiperSlide key={topper.id}>
                <TopperCard topper={topper} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link 
              to="/results"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold"
            >
              View All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Courses for Every Aspirant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From CBSE foundation to competitive exam preparation, we offer specialized coaching for all major exams.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link 
              to="/courses"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold"
            >
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Expert Mentors</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn from the Best
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our faculty comprises experienced educators from IIT, AIIMS, and top institutions with proven teaching excellence.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="pb-12"
          >
            {faculty.map((member) => (
              <SwiperSlide key={member.id}>
                <FacultyCard faculty={member} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link 
              to="/faculty"
              className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold"
            >
              Meet All Faculty →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Student Feedback</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real students who achieved their dreams with DC Classes.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 }
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            loop
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4">Campus Life</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our World-Class Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art classrooms, labs, and facilities designed for optimal learning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image) => (
              <div 
                key={image.id} 
                className="relative h-48 rounded-lg overflow-hidden hover-lift"
              >
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <div id="lead-form">
        <LeadForm />
      </div>
    </>
  );
}
