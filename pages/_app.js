import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/Footer.css";
import "@/styles/common.css";
import { MotionLazyContainer } from "@/theme/animate";
import { HydrationProvider, Client } from "react-hydration-provider";
import { SettingsProvider } from "@/theme/hooks/SettingsContext";
import Head from "next/head";
import { useEffect, useState } from "react";
import Script from "next/script";
import  Router  from "next/router";
import Loading from "./loading";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url, { shallow }) => {
      setLoading(true);
    });

  Router.events.on("routeChangeComplete", (url, { shallow }) => {
      setTimeout(() => {
        setLoading(false);
      },[4000]);
    });


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Dancing+Script:wght@700&family=Kavivanar:wght@700&family=Poppins:wght@200&family=Playfair+Display&family=Ubuntu:wght@400&display=swap" rel="stylesheet" />

      </Head>

      {/* <Script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js" /> */}
      {/* <Script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places`}
      /> */}

      <SettingsProvider>
        <MotionLazyContainer>
          <HydrationProvider>
            <Client>
              <Layout loading={loading}>
                <NextNProgress
                  color='red'
                  startPosition={0.3}
                  stopDelayMs={200}
                  height={3.2}
                  showOnShallow={true}
                />
                <Component {...pageProps} />
              </Layout>
            </Client>
          </HydrationProvider>
        </MotionLazyContainer>
      </SettingsProvider>
    </>
  );
}
