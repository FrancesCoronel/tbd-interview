"use client";

// Component imports
import Footer from "@/app/components/Footer";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const Home = () => {
  const loaded = true;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 lg:gap-12 p-12 lg:p-24 transition-all bg-background text-white">
      {/* Display a header section */}
      <header className="flex flex-col items-center justify-center">
        <h1
          className="text-6xl font-bold text-center font-display text-primary"
          tabIndex={0}
          aria-label="The Los Alamos Research App (LARA)"
        >
          The Los Alamos Research App (LARA)
        </h1>
      </header>
      {/* Conditional rendering: Show loading spinner if data is not yet loaded, else show content */}
      {!loaded ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Footer section with credits */}
          <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
