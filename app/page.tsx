"use client";

// Component imports
import DocumentManager from "@/app/components/DocumentManager/DocumentManager";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 lg:gap-12 p-12 lg:p-24 transition-all bg-background text-white">
      {/* Header */}
      <Header />
      {/* Document Manager */}
      <DocumentManager />
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
