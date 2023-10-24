import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SITE_URL } from "@lib/constants";

export function Seo({
  href = "",
  keywords = " ",
  title = "",
  ogTitle = "",
  description = ""
}) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index" key="index" />
      <link rel="icon" href={href} />
      <link rel="canonical" href={SITE_URL + router.asPath.toString()} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} key={"description"} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content={"website"} />
      <meta
        property="og:site_name"
        content={"Winning Numbers For Today | Friday Winning Numbers"}
      />
      <meta property="og:image" content="/assets/images/afriluck.svg" />
      <meta property="og:image:url" content="/assets/images/afriluck.svg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/assets/images/afriluck.svg" />
    </Head>
  );
}
