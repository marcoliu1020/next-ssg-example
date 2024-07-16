import { getArticles } from "@/apis/getArticles";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <>
      <div className="">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="space-y-4 border border-zinc-400 bg-zinc-600 px-2 py-4"
          >
            <h2 className="text-xl font-bold">
              {index + 1} - {article.title}
            </h2>
            <p>{article.content}</p>
          </article>
        ))}
      </div>
    </>
  );
}
