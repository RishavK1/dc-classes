export interface Testimonial {
  id: string;
  name: string;
  course: string;
  text: string;
  rating: number;
  year: number;
  videoUrl?: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Harsh Gupta",
    course: "JEE 2024",
    text: "DC Classes is not just an institute, it's a family. The teachers genuinely care about each student's success. Their problem-solving sessions and regular feedback helped me immensely. I secured AIR 234 in JEE Advanced!",
    rating: 5,
    year: 2024,
    photo: "/toppers/student-1.jpg"
  },
  {
    id: "2",
    name: "Sakshi Yadav",
    course: "NEET 2024",
    text: "I was an average student but DC Classes transformed my preparation. The biology faculty made every topic crystal clear. The test series exactly matched the actual NEET pattern. Thank you DC Classes for AIR 456!",
    rating: 5,
    year: 2024,
    photo: "/toppers/student-2.jpg"
  },
  {
    id: "3",
    name: "Kabir Sharma",
    course: "CBSE XII 2024",
    text: "Scored 97.4% in boards. The teaching methodology at DC Classes is outstanding. Regular tests kept me disciplined and focused. Highly recommend for CBSE students!",
    rating: 5,
    year: 2024,
    photo: "/toppers/student-1.jpg"
  },
  {
    id: "4",
    name: "Ishita Malhotra",
    course: "NDA 2023",
    text: "From a scared aspirant to confident NDA qualifier - that's what DC Classes did for me. Col. Vikram Singh's mentorship during SSB preparation was invaluable. Living my dream now!",
    rating: 5,
    year: 2023,
    photo: "/toppers/student-2.jpg"
  },
  {
    id: "5",
    name: "Rohan Kapoor",
    course: "IAS Foundation 2023",
    text: "The UPSC guidance at DC Classes is comprehensive. Current affairs classes, answer writing practice, and mock interviews - everything was top-notch. Made it to the final list!",
    rating: 5,
    year: 2023,
    photo: "/toppers/student-1.jpg"
  },
  {
    id: "6",
    name: "Anjali Verma",
    course: "CLAT 2024",
    text: "Best decision to join DC Classes for CLAT. The logical reasoning and legal aptitude classes were exceptional. Got admission in my dream law school - NLUD!",
    rating: 5,
    year: 2024,
    photo: "/toppers/student-2.jpg"
  }
];
