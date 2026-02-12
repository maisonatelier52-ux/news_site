// import React from "react";
// import { Merriweather } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const merriweather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
//   style: ["normal", "italic"],
// });

// export const metadata = {
//   metadataBase: new URL("https://www.courtnews.org"),
//   // metadataBase: new URL("news-site-hazel.vercel.app"),

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${merriweather.variable} antialiased w-full overflow-x-hidden`}>
//         <Header />
//         <main className="w-full">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import React from "react";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"], // Only necessary weights
  display: "swap", // Improves performance
});

export const metadata = {
  metadataBase: new URL("https://www.courtnews.org"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} font-merriweather antialiased w-full overflow-x-hidden`}
      >
        <Header />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
