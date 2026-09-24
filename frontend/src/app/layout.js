import "./globals.css";

export const metadata = {
  title: "SakhiBiz – Your Digital Business Companion",
  description:
    "SakhiBiz helps rural women micro-entrepreneurs discover government schemes and manage their business records — offline-first.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff7e5f" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
