import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import '@/styles/reset.scss';
import '@/styles/global.scss';
import '@/styles/themes.scss';

export const metadata: Metadata = {
  title: 'ACM UCLA Membership Portal',
  description:
    "The ACM Student Chapter at UCLA is UCLA's largest tech community. Create an account today to find your community!",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
