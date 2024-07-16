export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "zh-CN" }, { lang: "zh-HK" }];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
