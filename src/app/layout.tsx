import type { Metadata } from 'next';
import './styles/';

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
      <body>{children}</body>
    </html>
  );
}
