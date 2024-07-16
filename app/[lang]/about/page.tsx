type Props = { params: { lang: string } };
export default function About({ params }: Props) {
  const { lang } = params;

  return <div>About page lang={lang}</div>;
}
