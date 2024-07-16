import { getCovers } from "@/apis/getCovers";

type Props = {
  lang: string;
};
export default async function Covers({ lang }: Props) {
  const covers = await getCovers({ lang });

  return (
    <>
      <div className="">
        {covers.map((cover) => (
          <figure
            key={cover.id}
            className="space-y-4 border border-zinc-400 bg-zinc-600 px-2 py-4"
          >
            <img src={cover.webImage} alt={cover.name} />

            <figcaption className="text-xl font-bold">{cover.name}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
