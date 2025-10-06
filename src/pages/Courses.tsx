import { useState } from 'react';
import { courses } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categories = ['All', 'CBSE', 'JEE', 'NEET', 'Defence', 'UPSC', 'Law', 'International'];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white">Our Programs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Coaching Programs
            </h1>
            <p className="text-lg text-white/90">
              Expert coaching for CBSE, JEE, NEET, NDA, IAS, CLAT, SAT, IELTS and more. Choose the right path to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-secondary' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
