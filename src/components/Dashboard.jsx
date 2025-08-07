import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Basti_Logo from "../assets/Basti_Logo.png";
import slide1 from "../assets/img/summer-camp-bg.png";
import slide2 from "../assets/img/woman-teaching-classroom.jpg";
import slide3 from "../assets/img/school-children-dressed-uniform-have-fun-play-schoolyard.jpg";
import slide4 from "../assets/img/2.png";
import Education from "../assets/img/Education.jpg";
import Education_Pratham from "../assets/img/Education_Pratham.png";

const slides = [
  {
    image: slide1,
    text: "Empowering children through education in slum areas.",
  },
  {
    image: slide2,
    text: "Join hands to break educational barriers.",
  },
  {
    image: slide3,
    text: "Support quality learning for underserved communities.",
  },
  {
    image: slide4,
    text: "Together, let’s build a brighter future.",
  },
];

const stats = [
  {
    label: "States & Union Territories",
    value: 25,
    description: "Activities in",
  },
  {
    label: "Children Reached",
    value: 9,
    description: "Through direct programs and government partnerships",
  },
  {
    label: "Girls & Women Reached",
    value: 300,
    description: "Through mothers' groups and other programs",
  },
  {
    label: "Youth Reached",
    value: 118,
    description: "Through vocational/non-vocational courses",
  },
];

const Counter = ({ end, label, description, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger) {
      const delay = setTimeout(() => {
        let start = 0;
        const duration = 1000;
        const increment = end / (duration / 16);

        const animate = () => {
          start += increment;
          if (start < end) {
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        animate();
      }, 500); // 0.5 second delay

      return () => clearTimeout(delay);
    }
  }, [trigger, end]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-medium mt-2 text-[#414042]">{label}</p>
      <h3 className="text-5xl font-bold text-[#f97906] mt-2">{count}</h3>
      <p className="text-xl text-[#414042]">{description}</p>
    </div>
  );
};

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Auto Sliding Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-17 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 flex items-center pl-10">
              <h2 className="text-yellow-400 text-3xl sm:text-4xl font-bold max-w-md">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Programs Section */}
      <div className="pt-6 px-4 sm:px-10">
        <h1 className="text-black text-3xl sm:text-4xl font-bold text-center mb-6">
          Our Programs
        </h1>
        <img
          className="w-full h-auto object-cover rounded-xl shadow-md"
          src={Education}
          alt="Education"
        />
        <h3 className="text-black text-2xl sm:text-3xl font-bold mt-4">
          Education
        </h3>
        <p className="mt-2 text-gray-700">
          From Early Childhood Education to Elementary Education, Basti Ki
          Pathshala identifies education-related gaps and opportunities in each
          segment and develops context-based solutions. We collaborate with
          children, schools, families, and communities through direct programs
          and government partnerships.
        </p>
        <p className="inline-flex items-center mt-3 text-[#f97906] cursor-pointer font-medium">
          Read more
          <span className="ml-1">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      </div>

      {/* Reach Section */}
      <div ref={ref} className="bg-white py-16 px-4 sm:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          Reach 2023-24
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              end={stat.value}
              label={stat.label}
              description={stat.description}
              trigger={inView}
            />
          ))}
        </div>
      </div>
      <img className="w-full h-full object-cover" src={Education_Pratham} alt="Education_Pratham"/>
    </div>
  );
}
