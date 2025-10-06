import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Users, FileText, Play, BookOpen } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 4000,
    label: 'Happy Students',
    suffix: ''
  },
  {
    icon: FileText,
    value: 18000,
    label: 'Mock Tests',
    suffix: ''
  },
  {
    icon: Play,
    value: 800,
    label: 'Video Lectures',
    suffix: ''
  },
  {
    icon: BookOpen,
    value: 3000,
    label: 'Practice Papers',
    suffix: ''
  }
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-r from-secondary to-secondary/80"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {isVisible && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  )}
                </div>
                <p className="text-white/90 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
