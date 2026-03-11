import "./globals.css";

export const metadata = {
  title: "王冠渝 | Gary Wang",
  description: "Personal Academic Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        {/* children 就是 page.tsx 的內容，會被放在 body 裡面 */}
        {children}
      </body>
    </html>
  );
}