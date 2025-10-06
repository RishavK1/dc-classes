import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function Contact() {
  const centers = [
    {
      name: 'Main Campus',
      address: 'Sector 12, Model Town, Karnal, Haryana - 132001',
      phone: '+91 93151 11110',
      email: 'info@dcclasses.com',
      timings: 'Mon-Sat: 7:00 AM - 9:00 PM | Sun: 8:00 AM - 6:00 PM'
    },
    {
      name: 'Model Town Branch',
      address: 'Near Bus Stand, Model Town, Karnal - 132001',
      phone: '+91 93151 11111',
      email: 'modeltown@dcclasses.com',
      timings: 'Mon-Sat: 8:00 AM - 8:00 PM | Sun: Closed'
    },
    {
      name: 'Panipat Center',
      address: 'GT Road, Near City Park, Panipat - 132103',
      phone: '+91 93151 11112',
      email: 'panipat@dcclasses.com',
      timings: 'Mon-Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact DC Classes
            </h1>
            <p className="text-lg text-white/90">
              Have questions? We're here to help. Reach out to us through any of our centers or drop a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl border bg-card text-center">
              <Phone className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <a href="tel:+919315111110" className="text-secondary hover:underline">
                +91 93151 11110
              </a>
            </div>

            <div className="p-6 rounded-xl border bg-card text-center">
              <Mail className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <a href="mailto:info@dcclasses.com" className="text-secondary hover:underline">
                info@dcclasses.com
              </a>
            </div>

            <div className="p-6 rounded-xl border bg-card text-center">
              <MapPin className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">Sector 12, Model Town, Karnal</p>
            </div>
          </div>

          {/* Centers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((center, idx) => (
              <div key={idx} className="p-6 rounded-xl border bg-card hover-lift">
                <h3 className="font-bold text-lg mb-4">{center.name}</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{center.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <a href={`tel:${center.phone}`} className="text-secondary hover:underline">
                      {center.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <a href={`mailto:${center.email}`} className="text-secondary hover:underline">
                      {center.email}
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{center.timings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Find Us on Map</h2>
            <p className="text-muted-foreground">
              Visit our main campus in Karnal
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden h-96 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5!2d76.9847!3d29.6857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzA4LjUiTiA3NsKwNTknMDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="DC Classes Main Campus Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <LeadForm />
    </div>
  );
}
