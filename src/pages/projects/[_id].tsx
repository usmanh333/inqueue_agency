import ProjectDetails from "@/components/OurProjects/ProjectDetails";
import React from "react";

function DynamicProJectPage() {
  return (
    <>
      <div className="py-8 dynamic-main">
        <main className="flex flex-col gap-5 justify-center">
          <ProjectDetails />
        </main>
      </div>
    </>
  );
}

export default DynamicProJectPage;
