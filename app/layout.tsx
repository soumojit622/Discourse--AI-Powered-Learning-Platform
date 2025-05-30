import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discourse | AI-Powered Learning Platform",
  description:
    "Discourse is a real-time AI-driven LMS that transforms online education with interactive teaching, intelligent content delivery, and personalized learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#fe5933",
          colorText: "#000000",
        },
        elements: {
          formButtonPrimary: {
            color: "#ffffff",
          },
          card: {
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
          headerTitle: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#000000",
          },
          footer: {
            fontSize: "0.875rem",
            textAlign: "center",
            color: "#000000",
          },
        },
      }}
    >
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
