import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Clock, BookOpen, Phone, Download, ArrowLeft } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import LeadForm from '@/components/LeadForm';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${course.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-3xl text-white">
            <Link to="/courses" className="inline-flex items-center text-white/90 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
            <Badge className="mb-4 bg-accent text-accent-foreground">{course.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-white/90 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="cta-button">
                <Phone className="mr-2 h-5 w-5" />
                Call for Admission
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-lg border bg-card">
                  <Clock className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold mb-1">Duration</h3>
                  <p className="text-muted-foreground">{course.duration}</p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <BookOpen className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold mb-1">Mode</h3>
                  <p className="text-muted-foreground">{course.mode}</p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Course Syllabus</h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.syllabus.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left">
                        {item.topic}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                {/* Quick Enquiry Card */}
                <div className="p-6 rounded-lg border bg-card shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Quick Enquiry</h3>
                  <div className="space-y-3">
                    <Button className="w-full cta-button" asChild>
                      <a href="tel:+919315111110">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="https://wa.me/919315111110" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className="p-6 rounded-lg bg-secondary text-white">
                  <h3 className="text-xl font-bold mb-4">Why This Course?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                      Expert faculty from top institutions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                      Comprehensive study material
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                      Regular tests & assessments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                      Doubt clearing sessions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                      Performance tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Related Courses</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
