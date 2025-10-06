export interface Topper {
  id: string;
  name: string;
  exam: string;
  rank: string | number;
  year: number;
  photo: string;
  course: string;
  testimonial?: string;
}

export const toppers: Topper[] = [
  {
    id: "1",
    name: "Aditya Sharma",
    exam: "JEE Advanced",
    rank: "AIR 47",
    year: 2024,
    photo: "/toppers/student-1.jpg",
    course: "2-Year Classroom Program",
    testimonial: "DC Classes gave me the perfect environment and guidance to achieve my IIT dream. The faculty's dedication is unmatched."
  },
  {
    id: "2",
    name: "Priya Mehra",
    exam: "NEET",
    rank: "AIR 124",
    year: 2024,
    photo: "/toppers/student-2.jpg",
    course: "2-Year Integrated Program",
    testimonial: "The structured approach and regular tests at DC Classes helped me stay ahead. Thank you for making my MBBS dream come true!"
  },
  {
    id: "3",
    name: "Rahul Singh",
    exam: "JEE Main",
    rank: "99.8 %ile",
    year: 2024,
    photo: "/toppers/student-1.jpg",
    course: "1-Year Intensive",
    testimonial: "Best decision to join DC Classes. The doubt-clearing sessions and mock tests were game-changers for me."
  },
  {
    id: "4",
    name: "Ananya Kapoor",
    exam: "NEET",
    rank: "AIR 387",
    year: 2023,
    photo: "/toppers/student-2.jpg",
    course: "2-Year Program",
    testimonial: "The biology faculty at DC Classes is phenomenal. Their teaching made complex topics so easy to understand."
  },
  {
    id: "5",
    name: "Vikrant Chauhan",
    exam: "NDA",
    rank: "AIR 15",
    year: 2024,
    photo: "/toppers/student-1.jpg",
    course: "1-Year NDA Program",
    testimonial: "From written exam to SSB, DC Classes prepared me for everything. Proud to serve my nation!"
  },
  {
    id: "6",
    name: "Sneha Verma",
    exam: "CBSE XII",
    rank: "98.6%",
    year: 2024,
    photo: "/toppers/student-2.jpg",
    course: "CBSE XI-XII Program",
    testimonial: "Scored district topper in boards thanks to DC Classes. The teachers go beyond syllabus to ensure conceptual clarity."
  },
  {
    id: "7",
    name: "Arjun Malhotra",
    exam: "UPSC CSE",
    rank: "AIR 234",
    year: 2023,
    photo: "/toppers/student-1.jpg",
    course: "IAS Foundation + Mains",
    testimonial: "DC Classes provided the perfect strategy for UPSC. Current affairs classes and answer writing practice were excellent."
  },
  {
    id: "8",
    name: "Riya Bansal",
    exam: "CLAT",
    rank: "AIR 56",
    year: 2024,
    photo: "/toppers/student-2.jpg",
    course: "1-Year CLAT Program",
    testimonial: "Got admission in NLSIU Bangalore. DC Classes made my law career dream a reality. Forever grateful!"
  }
];
