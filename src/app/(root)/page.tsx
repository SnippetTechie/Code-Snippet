import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Snippet",
  description: "Run and share code snippets online",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-450 mx-auto p-2 sm:p-3 md:p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-3 xl:gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}