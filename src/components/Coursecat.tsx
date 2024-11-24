import React from "react";
import Image from "next/image";

const categories = [
  { image: "/Card1.svg", title: "Design & Development", description: "50+ Courses Available" },
  { image: "/Card2.svg", title: "Marketing", description: "50+ Courses Available" },
  { image: "/Card3.svg", title: "Development", description: "50+ Courses Available" },
  { image: "/Card4.svg", title: "Communication", description: "50+ Courses Available" },
  { image: "/Card5.svg", title: "Digital Marketing", description: "50+ Courses Available" },
  { image: "/Card6.svg", title: "Self Development", description: "50+ Courses Available" },
  { image: "/Card7.svg", title: "Business", description: "50+ Courses Available" },
  { image: "/Card8.svg", title: "Finance", description: "50+ Courses Available" },
  { image: "/Card9.svg", title: "Consulting", description: "50+ Courses Available" },
];

const CourseCat = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
    
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-bold text-[#000000]">Explore Courses By Category</h2>
        <p className="text-[18px] text-gray-600 mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-[32px] p-6 bg-[#F7F7F7] rounded-lg transition-all hover:shadow-lg"
          >
         
            <div className="category-image">
              <Image
                src={category.image}
                alt={category.title}
                width={100}
                height={100}
                className="mb-4"
              />
            </div>

            
            <div className="category-text">
              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

   
      <div className="text-center mt-12">
        <button className="px-6 py-3 text-black border-2 border-black bg-white rounded-md transition-colors hover:bg-gray-200">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default CourseCat;
