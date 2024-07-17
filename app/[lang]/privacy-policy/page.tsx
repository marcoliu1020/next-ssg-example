type Props = { params: { lang: string } };
export default async function PrivacyPolicyPage({ params }: Props) {
  const { lang } = params;

  const headersList = {
    "Nb-Mac-Access-Key": "bf1e7c9016b14df5a23129486e78ce34",
    Businessid: "999999",
    "Accept-Language": lang,
  };

  const response = await fetch(
    "https://gw-prod.chainstar.cloud/v1/helpCenter/help/content?contentId=2520337",
    {
      method: "GET",
      headers: headersList,
      next: { revalidate: 600, tags: ["privacy-policy"] },
    },
  );

  const data = await response.json();
  const content = data?.data?.helpCenterText?.content;

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
