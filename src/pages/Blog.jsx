export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Article de présentation",
      summary:
        "Article où je vais me présenter, et présenter le sujet du blog.",
    },
    {
      id: 2,
      title: "Ce que je sais sur l'ia.",
      summary: "Expliquez mon nouvel intérêt pour l'intelligence artificielle.",
    },
    {
      id: 3,
      title: "Comment je me forme seul avec l'intelligence artificielle.",
      summary:
        "J'explique mon parcours dans l'apprentissage du dévellopement web.",
    },
  ];
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.summary}</p>
            <a
              href={`/blog/${article.id}`}
              className="text-blue-500 hover:underline"
            >
              Lire article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
