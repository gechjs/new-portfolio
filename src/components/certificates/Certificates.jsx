import { Carousel } from "@/components/ui/carousel";
import { useState } from "react";
import evangadiBootcamp from "../../assets/certeficate/evangadi_bootcamp_certeficate.jpeg";
import evangadiInternship from "../../assets/certeficate/evangadi_internship.jpeg";
import geezai from "../../assets/certeficate/geezai.jpeg";
import udacityAI from "../../assets/certeficate/udacity_ai_certeficate.jpeg";

const certificates = [
  { id: 1, img: evangadiBootcamp, title: "Evangadi Bootcamp" },
  { id: 2, img: evangadiInternship, title: "Evangadi Internship" },
  { id: 3, img: geezai, title: "Geezai Certificate" },
  { id: 4, img: udacityAI, title: "Udacity AI Nanodegree" },
];

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="Certificates" className="bg-black text-white py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Certificates & Achievements
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            A glimpse of my professional milestones
          </p>
        </div>

        {/* Carousel with fixed 100x100 images */}
        <div className="h-[200px]"> {/* container height fixed to 100px */}
          <Carousel
            slides={certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="w-[600px] h-[500px] flex-shrink-0 border rounded-md overflow-hidden bg-card text-card-foreground relative"
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="object-cover w-full h-full"
                />
                {/* Optional tiny caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] p-0.5 text-center truncate">
                  {cert.title}
                </div>
              </div>
            ))}
            // If your Carousel supports onSlideChange, use it:
            // onSlideChange={(index) => setCurrentSlide(index)}
          />
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-4 text-gray-400 text-sm">
          {currentSlide + 1} / {certificates.length}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
