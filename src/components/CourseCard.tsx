import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '@/data/courses';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="h-full hover-lift overflow-hidden group">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${course.thumbnail})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          {course.category}
        </Badge>
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold text-foreground mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          {course.duration}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4 mr-2" />
          {course.mode}
        </div>

        {/* Highlights */}
        <div className="space-y-1 pt-2">
          {course.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start text-sm">
              <span className="text-secondary mr-2">✓</span>
              <span className="text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/courses/${course.slug}`} className="w-full">
          <Button className="w-full group">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
