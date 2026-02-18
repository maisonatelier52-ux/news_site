import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 font-serif bg-gray-50">
      <div className="text-center px-5 lg:px-70 lg:mt-1">
        {/* 404 Illustration */}
        <Image
          src="/images/not-found.webp"
          alt="Astronaut illustration"
          width={800}
          height={600}
          className="mx-auto mb-8 w-full sm:w-80 md:w-96 lg:w-1/2"
          priority
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Something's wrong here...
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-sm sm:text-base max-w-md mx-auto">
          It looks like nothing was found at this location. The page you were
          looking for does not exist or was loading incorrectly.
        </p>

        {/* Home Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm sm:text-base"
        >
          ← Go back to Home
        </a>
      </div>
    </div>
  );
}