import React from "react";
import Image from 'next/image';

export default function Main() {
  const projects = [
    { id: 1, height: "200px", width: "2fr" },
    { id: 2, height: "220px", width: "1fr" },
    { id: 3, height: "100px", width: "1fr" },
    { id: 4, height: "200px", width: "1fr" },
    { id: 5, height: "150px", width: "2fr" },
    { id: 6, height: "200px", width: "1fr" },
    { id: 7, height: "230px", width: "1fr" },
    { id: 8, height: "180px", width: "2fr" },
    { id: 9, height: "110px", width: "1fr" },
  ];

  return (
    <>
      <div>
        <section className="text-center flex justify-center relative mt-8">
          <div className="text-4xl md:text-6xl font-bold w-2/4 text-white relative z-10 about-mob-head-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Explore Our <span className="relative z-10">Projects</span>
            </h1>
          </div>
          <div className="absolute bottom-[-10px] left-[50%] transform -translate-x-[50%] pointer-events-none z-0 projects-img-mob">
            <Image
              src="/label/bottom-shade.png"
              alt="inqueuestudio-linkedin"
              className="w-[125px] sm:w-[150px] md:w-[175px] object-cover"
            />
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center mt-12 mb-16">
        <div className="w-[90%] grid gap-4 projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                gridRowEnd: `span ${Math.ceil(parseInt(project.height) / 15)}`, // Adjust for height
                gridColumn: `span ${project.width}`, // Adjust for dynamic width
                backgroundColor: "#444444",
              }}
              className="rounded-lg flex justify-center items-center cursor-pointer "
              onClick={() =>
                (globalThis.location.href = `/projects/${project.id}`)
              }
            >
              <Image
                src="/icons/camera.png"
                alt={`Project ${project.id}`}
                className="w-12 h-12 opacity-50 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
