export default function Projects() {
  const projects = [
    { id: 1, title: "Projet 1", description: "Description du projet 1" },
    { id: 2, title: "Projet 2", description: "Description du projet 2" },
    { id: 3, title: "Projet 3", description: "Description du projet 3" },
  ];

  return (
    <div className="max-w-[60%] mx-auto mt-10">
      <h2 className="text-center">Mes projets</h2>
      <div className="mt-5 flex justify-center gap-10">
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={`/projects/${project.id}`}>Voir plus</a>
          </div>
        ))}
      </div>
    </div>
  );
}
