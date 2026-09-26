import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
export const metadata: Metadata = {
  title: {
    default: "capibara — discover apis, bots and developer oddities",
    template: "%s · capibara",
  },
  description:
    "an independent directory for apis, discord bots, developer tools, browser extensions, useful websites, and browser games.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('capybara-theme')==='dark'?'dark':'light'}catch{}` }} />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
