import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Plan | Code Snippet",
  description: "Upgrade to Pro for enhanced features and capabilities",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
