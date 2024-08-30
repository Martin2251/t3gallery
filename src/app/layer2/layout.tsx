import { GeistSans } from "geist/font/sans";

export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <div>
        <div className="w-full">first layout</div>
        {children}
      </div>
    );
  }