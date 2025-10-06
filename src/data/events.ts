export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  category: string;
  image: string;
  registrationLink?: string;
  speakers?: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "JEE 2025 Strategy Seminar",
    date: "2024-12-15",
    time: "10:00 AM - 1:00 PM",
    venue: "DC Classes Main Campus, Karnal",
    description: "Expert guidance on JEE 2025 preparation strategy, time management, and exam patterns. Free for all students and parents.",
    category: "Seminar",
    image: "/events/jee-seminar.jpg",
    registrationLink: "/events/jee-seminar",
    speakers: ["Dr. Rajesh Kumar", "Mr. Amit Verma"]
  },
  {
    id: "2",
    title: "NEET Counselling Session",
    date: "2024-12-18",
    time: "3:00 PM - 5:00 PM",
    venue: "DC Classes Auditorium",
    description: "One-on-one counselling for NEET aspirants. Discuss your preparation plan, doubts, and college selection with experts.",
    category: "Counselling",
    image: "/events/neet-counselling.jpg",
    registrationLink: "/events/neet-counselling",
    speakers: ["Dr. Priya Singh", "Prof. Meera Sharma"]
  },
  {
    id: "3",
    title: "Parent-Teacher Meet",
    date: "2024-12-20",
    time: "11:00 AM - 4:00 PM",
    venue: "All DC Classes Centers",
    description: "Discuss your child's progress, performance analysis, and future strategies. Open to all parents.",
    category: "Meeting",
    image: "/events/parent-meet.jpg",
    speakers: ["All Faculty Members"]
  },
  {
    id: "4",
    title: "NDA Free Demo Class",
    date: "2024-12-22",
    time: "9:00 AM - 12:00 PM",
    venue: "DC Classes Main Campus",
    description: "Experience NDA classroom training firsthand. Learn about the selection process and how we prepare students for defense careers.",
    category: "Demo",
    image: "/events/nda-demo.jpg",
    registrationLink: "/events/nda-demo",
    speakers: ["Col. (Retd.) Vikram Singh"]
  },
  {
    id: "5",
    title: "New Year Admission Drive",
    date: "2025-01-05",
    time: "9:00 AM - 6:00 PM",
    venue: "All Centers",
    description: "Special discounts and scholarships for new admissions. Counselling available for all courses. Limited seats!",
    category: "Admission",
    image: "/events/admission-drive.jpg",
    registrationLink: "/events/admission"
  }
];
