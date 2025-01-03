import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const poppins = Poppins({
 subsets: ["latin"],
 weight:["100","200","300","400","500","600","700","800","900"]
});



export const metadata: Metadata = {
  title: "Food Lovers",
  description: "Food Ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${poppins.className} } antialiased`}
      >
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
