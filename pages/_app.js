import "../styles/globals.css";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "../components/Footer";
function _app({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Divzoon</title>
        <meta
          property='og:Divzoon'
          content='Divzoon Your Trusted  Development Partner '
          key='Divzoon'
        />
        <meta name="description" content="Divzoon is a software company with talented Developers available for dedicated and fixed time/cost projects. Hire web developers and app developers from Divzoon who have proven expertise in trending technologies, and develop custom and responsive websites, apps, and eCommerce solutions."/>
        <meta name="description" content="Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions."/>
        <meta name="description" content="We deliver your project just in time We take an agile approach to both our work and our practice."/>
        <meta name="description" content="Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users."/>
        <meta name="description" content="We shape brands through exploration, applying in-depth research to challenge assumptions at every turn."/>
        <meta name="description" content="Our web developers create custom web application solutions we deliver web presence to help you grow your business using the best web technologies ."/>
        <meta name="description" content="Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement."/>



       
        <link rel='shortcut icon' href='favico.ico' />
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
      <Footer />
    </>
  );
}

export default _app;
