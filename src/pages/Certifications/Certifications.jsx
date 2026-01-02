import React from "react";

export default function Certifications() {
  // 🥇 Highlight top-tier certificates first
  const certificates = [
    // --- TOP PRIORITY: AI & INDUSTRY CERTIFICATIONS ---
    {
      title: "Microsoft Azure Fundamentals",
      image: "/certifications/azure certificate.jpg",
      link: "https://www.udemy.com/certificate/UC-29087223-8034-4908-81f5-1a4a53d4e96a/",
    },
    {
      title: "Google Data Analytics",
      image: "/certifications/data analytics.jpeg",
    },
  ];

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
          Here are some of my verified certification showcasing my expertise in{" "}
        
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-105"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-t-2xl w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {cert.title}
                  </h2>
                  <p className="text-blue-400 text-sm group-hover:underline">
                    Click to verify credentials
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
