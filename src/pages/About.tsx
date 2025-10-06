import { Badge } from '@/components/ui/badge';
import { Award, Users, Target, TrendingUp, Heart, BookOpen } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality education and results'
    },
    {
      icon: Heart,
      title: 'Student-First',
      description: 'Every decision we make prioritizes student success and well-being'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods with modern techniques'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive environment where students thrive together'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white">Since 1999</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              A Name of Trust for 25+ Years
            </h1>
            <p className="text-lg text-white/90">
              DC Classes has been shaping futures and building careers since 1999. With a legacy of excellence, we continue to be Karnal's most trusted coaching institute.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1999 with a vision to provide quality education to students in Karnal and surrounding regions, DC Classes started as a small coaching center with just 20 students. Today, we stand proud as one of North India's premier coaching institutes with 15,000+ successful alumni.
                </p>
                <p>
                  Our journey has been marked by consistent results, dedicated faculty, and an unwavering commitment to student success. From CBSE board preparation to competitive exams like JEE, NEET, NDA, and IAS, we have expanded our offerings while maintaining the personalized attention that defines us.
                </p>
                <p>
                  What started as a dream has now become a legacy - a legacy built on trust, hard work, and thousands of success stories. Every rank achieved, every selection letter received, and every dream fulfilled adds to our proud history.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(/about/founding-year.jpg)' }} />
                <div className="h-64 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(/about/campus-1.jpg)' }} />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(/about/classroom-modern.jpg)' }} />
                <div className="h-48 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url(/about/students-group.jpg)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with knowledge, skills, and confidence to excel in their chosen career paths. We strive to make quality education accessible while maintaining excellence in teaching and results.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border">
              <Target className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as India's leading coaching institute where students achieve their academic dreams through innovative teaching, personalized attention, and a supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at DC Classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-2xl glass-card hover-lift">
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-2xl bg-cover bg-center border-4 border-accent" style={{ backgroundImage: 'url(/about/director.jpg)' }} />
              </div>
              <div className="md:col-span-2">
                <Badge className="mb-4">Director's Message</Badge>
                <h2 className="text-2xl font-bold mb-4">A Message from Our Founder</h2>
                <div className="space-y-4 text-muted-foreground italic">
                  <p>
                    "When I started DC Classes in 1999, my vision was simple - to provide quality education that transforms lives. Today, seeing thousands of our students succeed in their chosen careers fills my heart with pride and gratitude."
                  </p>
                  <p>
                    "Our success is not measured by the number of students we teach, but by the dreams we help fulfill. Every topper, every selection, every success story is a testament to the dedication of our faculty and the hard work of our students."
                  </p>
                  <p className="font-semibold not-italic">
                    "Join us in this journey of excellence. Your success is our mission."
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-bold">Dr. Deepak Chaudhary</p>
                  <p className="text-sm text-muted-foreground">Founder & Director, DC Classes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <LeadForm />
    </div>
  );
}
