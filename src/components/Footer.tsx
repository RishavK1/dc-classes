import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-2">
                <span className="text-primary font-bold">DC</span>
              </div>
              <div>
                <div className="font-bold text-lg">DC Classes</div>
                <div className="text-xs text-white/70">Since 1999</div>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              A trusted name in education for over 25 years. Providing quality coaching for CBSE, JEE, NEET, NDA, IAS, and more.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-white/80 hover:text-accent transition-colors">All Courses</Link></li>
              <li><Link to="/results" className="text-white/80 hover:text-accent transition-colors">Our Results</Link></li>
              <li><Link to="/faculty" className="text-white/80 hover:text-accent transition-colors">Faculty</Link></li>
              <li><Link to="/admissions" className="text-white/80 hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses/jee-preparation" className="text-white/80 hover:text-accent transition-colors">JEE Preparation</Link></li>
              <li><Link to="/courses/neet-preparation" className="text-white/80 hover:text-accent transition-colors">NEET Preparation</Link></li>
              <li><Link to="/courses/cbse-11-12" className="text-white/80 hover:text-accent transition-colors">CBSE XI-XII</Link></li>
              <li><Link to="/courses/nda-preparation" className="text-white/80 hover:text-accent transition-colors">NDA Coaching</Link></li>
              <li><Link to="/courses/ias-ips-preparation" className="text-white/80 hover:text-accent transition-colors">IAS/IPS</Link></li>
              <li><Link to="/courses/clat-preparation" className="text-white/80 hover:text-accent transition-colors">CLAT</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Main Campus: Sector 12, Model Town, Karnal, Haryana - 132001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+919315111110" className="text-white/80 hover:text-accent transition-colors">
                  +91 93151 11110
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@dcclasses.com" className="text-white/80 hover:text-accent transition-colors">
                  info@dcclasses.com
                </a>
              </li>
            </ul>

            {/* Google Map */}
            <div className="mt-4 rounded-lg overflow-hidden h-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5!2d76.9847!3d29.6857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzA4LjUiTiA3NsKwNTknMDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="DC Classes Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© 2024 DC Classes. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
