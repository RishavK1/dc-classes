import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const courses = [
  { name: 'IX, X (All Subjects)', href: '/courses/ix-x-all-subjects' },
  { name: 'XI, XII (CBSE)', href: '/courses/xi-xii-cbse' },
  { name: 'IIT-JEE', href: '/courses/iit-jee' },
  { name: 'SAT', href: '/courses/sat-preparation' },
  { name: 'CLAT', href: '/courses/clat-preparation' },
  { name: 'IPM', href: '/courses/ipm-preparation' },
  { name: 'IAS/IPS/HCS', href: '/courses/ias-ips-hcs' },
  { name: 'CUET', href: '/courses/cuet-preparation' },
  { name: 'IELTS', href: '/courses/ielts-preparation' },
  { name: 'Study Visas', href: '/courses/study-visas' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919315111110" className="flex items-center hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 93151 11110
            </a>
            <a href="mailto:info@dcclasses.com" className="flex items-center hover:text-accent transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@dcclasses.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="cta-button text-xs"
              asChild
            >
              <a href="tel:+919315111110">Apply Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/hero/dc-logo1.webp" 
                alt="DC Classes Logo" 
                className="w-12 h-12 mr-3 object-contain"
              />
              <div>
                <div className="font-bold text-xl text-primary">DC Classes</div>
                <div className="text-xs text-muted-foreground">Since 1999</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${isActive('/') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                Home
              </Link>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[700px] grid-cols-2 gap-3 p-4">
                        {courses.map((course) => (
                          <NavigationMenuLink key={course.href} asChild>
                            <Link
                              to={course.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {course.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link 
                to="/results" 
                className={`font-medium transition-colors ${isActive('/results') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                Results
              </Link>
              
              <Link 
                to="/faculty" 
                className={`font-medium transition-colors ${isActive('/faculty') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                Faculty
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${isActive('/about') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                About
              </Link>
              
              <Link 
                to="/admissions" 
                className={`font-medium transition-colors ${isActive('/admissions') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                Admissions
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${isActive('/contact') ? 'text-secondary' : 'text-foreground hover:text-secondary'}`}
              >
                Contact
              </Link>

              <Button className="cta-button" asChild>
                <a href="tel:+919315111110">Call Now</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-muted-foreground">Courses</div>
                    <div className="pl-4 space-y-2">
                      {courses.map((course) => (
                        <Link
                          key={course.href}
                          to={course.href}
                          className="block text-sm hover:text-secondary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link to="/results" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Results
                  </Link>
                  
                  <Link to="/faculty" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Faculty
                  </Link>
                  
                  <Link to="/about" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </Link>
                  
                  <Link to="/admissions" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Admissions
                  </Link>
                  
                  <Link to="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>

                  <Button className="cta-button w-full" asChild>
                    <a href="tel:+919315111110">Call Now</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
