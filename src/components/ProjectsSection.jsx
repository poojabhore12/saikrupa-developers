import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

export default function ProjectsSection() {

  const projects = [
    {
      title: "Ongoing Projects",
      image: project1
    },
    {
      title: "Completed Projects",
      image: project2
    },
    {
      title: "Upcoming Projects",
      image: project3
    }
  ];

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6 text-center mb-12">

        <h2 className="text-3xl font-bold">
          Our Projects
        </h2>

      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div key={index} className="rounded-xl overflow-hidden shadow-lg">

            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}