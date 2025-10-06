import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy } from 'lucide-react';
import { Topper } from '@/data/toppers';

interface TopperCardProps {
  topper: Topper;
}

export default function TopperCard({ topper }: TopperCardProps) {
  return (
    <Card className="h-full hover-lift overflow-hidden">
      <div className="relative">
        {/* Topper Photo */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${topper.photo})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          
          {/* Rank Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold flex items-center shadow-lg">
              <Trophy className="w-5 h-5 mr-2" />
              {topper.rank}
            </div>
          </div>
          
          {/* Year Badge */}
          <Badge className="absolute top-4 left-4 bg-white/90 text-primary">
            {topper.year}
          </Badge>
        </div>

        <CardContent className="p-6 relative">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {topper.name}
            </h3>
            <div className="flex items-center justify-center text-secondary font-semibold mb-3">
              <Award className="w-4 h-4 mr-1" />
              {topper.exam}
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {topper.course}
            </p>
            
            {topper.testimonial && (
              <blockquote className="text-sm text-muted-foreground italic border-l-4 border-accent pl-3 mt-4">
                "{topper.testimonial}"
              </blockquote>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
