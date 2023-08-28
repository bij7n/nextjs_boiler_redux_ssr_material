import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";
import Head from "next/head";
import { NextSeo } from "next-seo";
import type { ReactNode } from "react";
import { forwardRef } from "react";

import EmptyLayout from "./EmptyLayout";
import MainLayout from "./MainLayout";

type Meta = {
  metaTitle?: string;
  url?: string;
  type?: string;
  image?: string;
  video?: string;
  description?: string;
  siteName?: string;
  locale?: string;
  robots?: boolean;
  keywords?: string;
};

interface Props extends BoxProps {
  children: ReactNode;
  meta?: Meta;
  title: string;
  variant?: "main" | "noLayout";
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = "", meta, variant, ...other }, ref) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta httpEquiv="content-language" content="fa" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="theme-color" content="#262626" />
        <meta name="description" content="توضیحات" />
        <meta name="keywords" content={meta?.keywords ? meta.keywords : "کلمات"} />
      </Head>
      <NextSeo
        title={title}
        description={meta?.description ? meta.description : "توضیحات"}
        canonical={meta?.url ? meta.url : "https://www.example.com"}
        openGraph={{
          title: meta?.metaTitle ? meta.metaTitle : "پینورست",
          description: meta?.description ? meta.description : "توضیحات",
          url: meta?.url ? meta.url : "https://www.example.com",
          locale: "fa-IR",
          site_name: "پینورست",
        }}
      />

      <Box ref={ref} {...other}>
        {variant === "noLayout" ? <EmptyLayout>{children} </EmptyLayout> : <MainLayout>{children}</MainLayout>}
      </Box>
    </>
  );
});

Page.displayName = "Page";

export default Page;
