import { getDynamicData } from "@/apis/getDynamicData";

type Props = {};
export default async function DynamicData({}: Props) {
  const data = await getDynamicData();

  return (
    <>
      <div className="border border-cyan-200 px-2 py-4 text-center">
        <p>{data.id}</p>
        <p>{data.title}</p>
      </div>
    </>
  );
}
