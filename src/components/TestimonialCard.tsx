import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full glass-card">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div 
            className="w-16 h-16 rounded-full bg-cover bg-center mr-4"
            style={{ backgroundImage: `url(${testimonial.photo})` }}
          />
          <div>
            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.course}</p>
          </div>
        </div>

        <div className="flex mb-3">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>

        <div className="relative">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
          <p className="text-muted-foreground italic pl-6 leading-relaxed">
            {testimonial.text}
          </p>
        </div>

        {testimonial.videoUrl && (
          <div className="mt-4">
            <a 
              href={testimonial.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:underline"
            >
              Watch Video Testimonial →
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
