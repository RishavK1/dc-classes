import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award } from 'lucide-react';
import { Faculty } from '@/data/faculty';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface FacultyCardProps {
  faculty: Faculty;
}

export default function FacultyCard({ faculty }: FacultyCardProps) {
  return (
    <Card className="h-full hover-lift overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${faculty.photo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{faculty.name}</h3>
          <div className="flex items-center mb-2">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm">{faculty.subjects.join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm">{faculty.experience}+ Years Experience</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {faculty.badges.map((badge, idx) => (
            <Badge key={idx} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Full Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{faculty.name}</DialogTitle>
              <DialogDescription className="text-base">
                {faculty.subjects.join(', ')} | {faculty.experience}+ Years Experience
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">About</h4>
                <p className="text-muted-foreground">{faculty.bio}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Achievements</h4>
                <ul className="space-y-2">
                  {faculty.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Qualifications</h4>
                <div className="flex flex-wrap gap-2">
                  {faculty.badges.map((badge, idx) => (
                    <Badge key={idx} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
