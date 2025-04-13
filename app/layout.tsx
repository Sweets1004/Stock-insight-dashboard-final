export const metadata = {
  title: 'Stock Insight Dashboard',
  description: 'Top 5 stock tips and market news, updated daily',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
