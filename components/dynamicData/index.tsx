type Props = {};
export default async function DynamicData({}: Props) {
  await sleep(2);

  return (
    <>
      <div className="border border-cyan-200 px-2 py-4 text-center">
        <p>This Dynamic data - 1</p>
        <p>This Dynamic data - 2</p>
        <p>This Dynamic data - 3</p>
      </div>
    </>
  );
}

function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 3000));
}
