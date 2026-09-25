import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
export const metadata: Metadata = {
  title: {
    default: "capybara — discover apis, bots and developer oddities",
    template: "%s · capybara",
  },
  description:
    "an independent directory for apis, discord bots, developer tools, and weird web.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
