export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  title?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "/gallery/classroom-1.jpg",
    alt: "Modern classroom with digital boards at DC Classes",
    category: "Infrastructure",
    title: "Smart Classrooms"
  },
  {
    id: "2",
    url: "/gallery/lab-1.jpg",
    alt: "Well-equipped science laboratory",
    category: "Infrastructure",
    title: "Science Lab"
  },
  {
    id: "3",
    url: "/gallery/library-1.jpg",
    alt: "Spacious library with extensive book collection",
    category: "Infrastructure",
    title: "Library"
  },
  {
    id: "4",
    url: "/gallery/classroom-1.jpg",
    alt: "2024 batch toppers celebration",
    category: "Results",
    title: "2024 Toppers"
  },
  {
    id: "5",
    url: "/gallery/lab-1.jpg",
    alt: "Faculty training workshop",
    category: "Events",
    title: "Faculty Development"
  },
  {
    id: "6",
    url: "/gallery/library-1.jpg",
    alt: "Students in group study session",
    category: "Campus Life",
    title: "Study Sessions"
  },
  {
    id: "7",
    url: "/gallery/computer-lab.jpg",
    alt: "Career guidance seminar for students",
    category: "Events",
    title: "Career Seminar"
  },
  {
    id: "8",
    url: "/gallery/computer-lab.jpg",
    alt: "Modern computer laboratory",
    category: "Infrastructure",
    title: "Computer Lab"
  },
  {
    id: "9",
    url: "/gallery/classroom-1.jpg",
    alt: "Annual award ceremony",
    category: "Events",
    title: "Award Ceremony"
  },
  {
    id: "10",
    url: "/gallery/library-1.jpg",
    alt: "DC Classes reception area",
    category: "Infrastructure",
    title: "Reception"
  }
];
