import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";
import Footer from "@/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "SITARA FASHION HOUSE",
  description: "WE CARE WHAT YOU WEAR",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={satoshi.className}>
          <HolyLoader color="#868686" />
          <TopBanner />
          <Providers>
            <TopNavbar />
            {children}
          </Providers>
          <Footer />
        </body>
      </html>
    </ClerkProvider>

  );
}

// import type { Metadata, Viewport } from "next";
// import "@/styles/globals.css";
// import { satoshi } from "@/styles/fonts";
// import TopBanner from "@/components/layout/Banner/TopBanner";
// import TopNavbar from "@/components/layout/Navbar/TopNavbar";
// import Footer from "@/components/layout/Footer";
// import HolyLoader from "holy-loader";
// import Providers from "./providers";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// export const metadata: Metadata = {
//   title: "SITARA FASHION HOUSE",
//   description: "Elevating Fashion to Ethereal Heights💎",
// };

// export const viewport: Viewport = {
//   themeColor: "#000000",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (


//     <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/">
//       <html lang="en">
//         <body className={satoshi.className}>
//           <HolyLoader color="#868686" />
//           <TopBanner />
//           <Providers>
//             <TopNavbar />
            
//             {/* Clerk Authentication */}
//             {/* <div className="flex justify-end p-4">
//               <SignedOut>
//                 <SignInButton mode="modal" />
//               </SignedOut>
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </div> */}

//             {children}
//           </Providers>
//           <Footer />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }


  