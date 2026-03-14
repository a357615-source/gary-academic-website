import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        {/* 載入專業學術字體系統 */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F8FAFC] font-['Inter'] antialiased text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}