import { GeistSans } from "geist/font/sans";

export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en" className={`${GeistSans.variable}`}>
        <div className="w-full">first layout</div>
        <body>{children}</body>
      </html>
    );
  }