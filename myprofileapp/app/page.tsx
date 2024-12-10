import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>My Profile</title>
      </Head>

      {/* Hero Section */}
      <header className="bg-gray-800 text-white py-8 text-center">
        <Image
          src="/profile-photo.jpg" // Add your photo in the public folder
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">Your Name</h1>
        <p className="mt-2 text-lg">Full-Stack Developer | AI Enthusiast</p>
      </header>

      {/* Educational Experiences */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold text-center">Educational Experiences</h2>
        <div className="mt-6 max-w-4xl mx-auto space-y-4">
          <p className="text-lg">- B.Tech in Computer Science (Year - University)</p>
          <p className="text-lg">- Microsoft Azure Fundamentals Certified</p>
          <p className="text-lg">- Python for Data Science Certification</p>
        </div>
      </section>

      {/* Developed Projects */}
      <section className="py-10 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center">Developed Projects</h2>
        <div className="mt-6 max-w-4xl mx-auto space-y-4">
          <p className="text-lg">- **AI Chatbot**: A Python-based chatbot for customer service</p>
          <p className="text-lg">- **E-commerce Web App**: Built using Next.js and MongoDB</p>
          <p className="text-lg">- **Portfolio Website**: A responsive portfolio in React and Tailwind</p>
        </div>
      </section>

      {/* Offered Services */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-semibold text-center">Services Offered</h2>
        <div className="mt-6 max-w-4xl mx-auto space-y-4">
          <p className="text-lg">- Full-Stack Web Development (React, Next.js, Tailwind CSS)</p>
          <p className="text-lg">- Database Management (MongoDB, PostgreSQL)</p>
          <p className="text-lg">- Python Backend API Development (FastAPI)</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>Contact Me:</p>
        <p>Email: your-email@example.com</p>
        <p>Phone: +123456789</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" className="underline">Your LinkedIn Profile</a></p>
      </footer>
    </div>
  );
}
