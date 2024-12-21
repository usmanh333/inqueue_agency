import Image from 'next/image';

export default function ProjectDetails() {
  const projects = [
    { id: 1, height: "200px", width: "1" },
    { id: 2, height: "200px", width: "1" },
    { id: 3, height: "100px", width: "1" },
    { id: 4, height: "150px", width: "1" },
    { id: 5, height: "150px", width: "1" },
    { id: 6, height: "100px", width: "1" }, // Full row
    { id: 7, height: "160px", width: "2" },
    { id: 8, height: "110px", width: "1" },
    { id: 9, height: "110px", width: "1" },
  ];

  return (
    <>
      {/* Section 1 */}
      <div className="flex flex-col items-center mt-12 mb-16">
        <div
          className="w-full px-4 grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 items per row by default
            gridAutoRows: "10px", // Dynamic height scaling
          }}
        >
          <div
            style={{
              gridRowEnd: `span 20`, // Adjust dynamically to fill height
              gridColumn: `span 2`, // Span full width of two columns
              backgroundColor: "#323232",
            }}
            className="rounded-2xl border border-[#FFFFFF] flex justify-center items-center cursor-pointer"
          >
            <Image
              src="/icons/camera.png"
              alt="Project 1"
              className="w-12 h-12 opacity-50 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div >
        <div className="flex justify-center">
          <div className="w-[60%]  rounded-3xl">
            <div className="flex justify-between gap-4 mt-6 mb-10">
              <div className="w-[30%]">
                <div className="h-16 bg-[#F0B705] rounded-t-xl py-5 px-10">
                  <h1 className="text-xl font-[600] text-black">
                    Project Name
                  </h1>
                </div>
                <div className="h-16 bg-[#323232] rounded-b-xl py-3.5">
                  <div className="flex justify-evenly">
                    <div>
                      <h1 className="text-sm font-medium text-white">
                        Project Name
                      </h1>
                      <h1 className="text-xs font-medium text-[#A8A8A8]">
                        Project Name
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-sm font-medium text-white">
                      Date
                      </h1>
                      <h1 className="text-xs font-medium text-[#A8A8A8]">
                        xyz xyz
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[60%]">
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center mt-12 mb-16">
        <div
          className="w-[60%] grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 items per row by default
            gridAutoRows: "10px", // Dynamic height scaling
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                gridRowEnd: `span ${Math.ceil(parseInt(project.height) / 10)}`,
                gridColumn: index === 6 ? "span 2" : `span ${project.width}`, // Full width for the 6th item
                backgroundColor: "#444444",
              }}
              className="rounded-lg flex justify-center items-center cursor-pointer"
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
