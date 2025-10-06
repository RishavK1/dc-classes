import { faculty } from '@/data/faculty';
import FacultyCard from '@/components/FacultyCard';
import { Badge } from '@/components/ui/badge';

export default function Faculty() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white">Expert Mentors</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn from the Best
            </h1>
            <p className="text-lg text-white/90">
              Our faculty comprises experienced educators from IIT, AIIMS, and top institutions with proven teaching excellence and dedication to student success.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member) => (
              <FacultyCard key={member.id} faculty={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              What Makes Our Faculty Special
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Alumni of IIT, AIIMS, and premier institutions with outstanding academic credentials
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold text-lg mb-2">Teaching Experience</h3>
                <p className="text-muted-foreground text-sm">
                  15+ years of experience in coaching students for competitive exams
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold text-lg mb-2">Innovative Methods</h3>
                <p className="text-muted-foreground text-sm">
                  Unique teaching techniques and shortcuts to simplify complex concepts
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-bold text-lg mb-2">Personal Attention</h3>
                <p className="text-muted-foreground text-sm">
                  Individual focus on each student's strengths and areas of improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
