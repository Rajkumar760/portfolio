import HeroImg from "@/assets/images/hero.jpeg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Aspiring AI Engineer | Innovator | Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Saravanan profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Raj kumar R</span>, a
                passionate Computer Science student graduate and python developer at{" "}
                <span className="font-bold">Velammal Engineering College</span>. I am passionate about in
                <span className="font-bold"> Software Development , Artificial Intelligence </span>{" "}
                and <span className="font-bold">Machine Learning </span> and I thrive on building intelligent, real-world solutions that combine robust programming with modern AI techniques.
              </p>
              <p className="text-white">
                I have worked on projects in computer vision, natural language processing, generative AI, and AI-powered chatbots, strengthening my ability to translate complex ideas into practical, user-focused applications. With hands-on experience in AI, automation, IoT, and backend development, I have honed my skills in problem-solving, system design, and building scalable, efficient solutions..
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner and innovator, driven by curiosity and a passion for building solutions that matter. I am eager to contribute to technology-driven projects and gain hands-on experience in solving real-world challenges.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Raj kumar R
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
            
                       
                        height="20"
                        width="auto"
                      />
                      
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
