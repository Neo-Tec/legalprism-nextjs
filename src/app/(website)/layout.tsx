import "../../styles/scss/style.scss";

import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/nav/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Law Firm - Free Bootstrap 4 Template by Colorlib</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="css/animate.css" />

        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />

        <link rel="stylesheet" href="css/flaticon.css" />
        {/* <link rel="stylesheet" href="css/style.css" /> */}

        <Script src="js/jquery.min.js"></Script>
        <Script src="js/jquery-migrate-3.0.1.min.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/jquery.easing.1.3.js"></Script>
        <Script src="js/jquery.waypoints.min.js"></Script>
        <Script src="js/jquery.stellar.min.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/jquery.animateNumber.min.js"></Script>
        <Script src="js/scrollax.min.js"></Script>
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></Script>
        {/* <Script src="js/google-map.js"></Script> */}
        <Script src="js/main.js"></Script>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
