import React from "react";

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
          <div className="text-4xl md:text-6xl font-bold w-2/4 text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Explore Our Projects
            </h1>
          </div>
          <div className="flex justify-end absolute bottom-[-7px] left-0 right-[29%] z-0">
            <img
              src="/label/bottom-shade.png"
              alt="inqueuestudio-linkedin"
              className="w-[27%] object-cover"
            />
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center mt-12 mb-16">
        <div
          className="w-[80%] grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // Exactly 3 items in a row
            gridAutoRows: "10px", // For dynamic height scaling
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                gridRowEnd: `span ${Math.ceil(parseInt(project.height) / 10)}`, // Adjust for height
                gridColumn: `span ${project.width}`, // Adjust for dynamic width
                backgroundColor: "#444444",
              }}
              className="rounded-lg flex justify-center items-center cursor-pointer"
              onClick={()=>globalThis.location.href = `/projects/${project.id}`}
            >
              <img
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
