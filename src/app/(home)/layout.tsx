import type { Metadata } from "next";
import "../globals.css"
import NavBar from '@/app/ui/home/nav-bar'
import Footer from '@/app/ui/home/footer'

export const metadata: Metadata = {
  title: {
      default: "Prompt Smith",
      template: "%s | Prompt Smith",
  },
  description: "Save your generated AI trending with Prompt Smith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
