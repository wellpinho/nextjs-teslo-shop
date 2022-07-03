import Head from "next/head";

import { Navbar, SideMenu } from "../ui";

interface IProps {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children?: React.ReactNode;
}

export const ShopLayout = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}: IProps) => {
  return (
    <>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}

        <title>{title}</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      {/* TODO: sidebar */}
      <SideMenu />

      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      <footer>{/* TODO: my custom footer */}</footer>
    </>
  );
};
