import { useState } from 'react';
import { toppers } from '@/data/toppers';
import TopperCard from '@/components/TopperCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Results() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedExam, setSelectedExam] = useState<string>('All');

  const years: (number | 'all')[] = ['all', ...Array.from(new Set(toppers.map(t => t.year))).sort((a, b) => b - a)];
  const exams = ['All', ...Array.from(new Set(toppers.map(t => t.exam)))];

  const filteredToppers = toppers.filter(topper => {
    const yearMatch = selectedYear === 'all' || topper.year === selectedYear;
    const examMatch = selectedExam === 'All' || topper.exam === selectedExam;
    return yearMatch && examMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Pride</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Results That Speak Volumes
            </h1>
            <p className="text-lg text-white/90">
              Our students consistently achieve top ranks in competitive exams across India. Their success is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">IIT/NIT Selections</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">350+</div>
              <div className="text-sm">AIIMS/Medical</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm">NDA/Defence</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm">CBSE XII Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Year Filter */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Filter by Year</h3>
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  onClick={() => setSelectedYear(year)}
                  className={selectedYear === year ? 'bg-secondary' : ''}
                >
                  {year === 'all' ? 'All Years' : year}
                </Button>
              ))}
            </div>
          </div>

          {/* Exam Filter */}
          <div className="mb-12">
            <h3 className="font-bold mb-3">Filter by Exam</h3>
            <div className="flex flex-wrap gap-2">
              {exams.map((exam) => (
                <Button
                  key={exam}
                  variant={selectedExam === exam ? 'default' : 'outline'}
                  onClick={() => setSelectedExam(exam)}
                  className={selectedExam === exam ? 'bg-secondary' : ''}
                >
                  {exam}
                </Button>
              ))}
            </div>
          </div>

          {/* Toppers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredToppers.map((topper) => (
              <TopperCard key={topper.id} topper={topper} />
            ))}
          </div>

          {filteredToppers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
