import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, Phone, Download, Calendar, CreditCard, Award } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function Admissions() {
  const admissionSteps = [
    {
      step: 1,
      title: 'Counselling',
      description: 'Book a free counselling session to discuss your goals and course selection'
    },
    {
      step: 2,
      title: 'Registration',
      description: 'Fill the admission form with required documents and photographs'
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Complete the fee payment through cash, card, or online transfer'
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Receive study material and join your batch to begin the journey'
    }
  ];

  const documents = [
    'Recent passport-size photographs (3 copies)',
    'Photocopy of last exam marksheet',
    'Aadhar card copy',
    'Address proof',
    'Parent/Guardian contact details'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white">Admissions Open</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join DC Classes Today
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Start your journey towards success. New batches starting soon with limited seats. Book your seat now!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Phone className="mr-2" />
                Call for Admission
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Download className="mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Admission Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started at DC Classes is easy. Follow these simple steps to begin your success journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl border bg-card hover-lift">
                <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 mt-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <FileText className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Required Documents</h2>
              <p className="text-muted-foreground">
                Please bring the following documents for admission
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border">
              <ul className="space-y-3">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border bg-card text-center">
              <CreditCard className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">Flexible Payment</h3>
              <p className="text-muted-foreground text-sm">
                Pay in installments. EMI options available for select courses.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card text-center">
              <Award className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">Scholarships</h3>
              <p className="text-muted-foreground text-sm">
                Merit-based scholarships up to 50% for deserving students.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card text-center">
              <Calendar className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">Early Bird Offer</h3>
              <p className="text-muted-foreground text-sm">
                Special discounts for early admissions. Limited period offer.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-accent text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Money-Back Guarantee</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              We're so confident in our teaching that we offer a money-back guarantee for select programs if you're not satisfied with your results.
            </p>
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Batches</h2>
            <p className="text-muted-foreground">
              New batches starting soon. Book your seat before they fill up!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl border bg-card">
              <Badge className="mb-3">JEE 2026</Badge>
              <h3 className="font-bold text-lg mb-2">Two-Year Integrated</h3>
              <p className="text-sm text-muted-foreground mb-4">Starting: January 5, 2025</p>
              <Button className="w-full" size="sm">Register Now</Button>
            </div>

            <div className="p-6 rounded-xl border bg-card">
              <Badge className="mb-3">NEET 2026</Badge>
              <h3 className="font-bold text-lg mb-2">Two-Year Program</h3>
              <p className="text-sm text-muted-foreground mb-4">Starting: January 8, 2025</p>
              <Button className="w-full" size="sm">Register Now</Button>
            </div>

            <div className="p-6 rounded-xl border bg-card">
              <Badge className="mb-3">CBSE XI</Badge>
              <h3 className="font-bold text-lg mb-2">Foundation Batch</h3>
              <p className="text-sm text-muted-foreground mb-4">Starting: January 10, 2025</p>
              <Button className="w-full" size="sm">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <LeadForm />
    </div>
  );
}
