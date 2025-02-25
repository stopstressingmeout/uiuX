"use client";
import Image from "next/image";
import Link from "next/link";
import { Book, GraduationCap, Users } from "lucide-react";
import { Poppins } from "next/font/google";

// Import Poppins with desired weights and subsets.
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${poppins.className} flex min-h-screen flex-col justify-center bg-gray-50`}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              height={500}
              width={500}
              className="h-16 w-16"
            />
            <span className="text-4xl font-bold text-gray-800">uiuX</span>
          </div>
          <nav className="hidden space-x-6 md:block">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-900"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-900"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-900"
            >
              My Course
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-blue-900"
            >
              All Course
            </Link>
          </nav>
          <Link
            href="#"
            className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-300 hover:bg-blue-200"
          >
            Registration
          </Link>
        </div>
      </header>

      <main className="flex-1 justify-center flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full">
          <Image
            src="/hero.png"
            alt="University Campus"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="container relative flex h-full flex-col justify-center px-32 text-white">
            <h1 className="max-w-2xl text-5xl font-bold leading-tight drop-shadow-md">
              Success is walking from failure to failure
            </h1>
            <p className="mt-4 max-w-xl text-lg drop-shadow-sm">
              "Concentrate all your thoughts upon the work in hand. The sun's
              rays do not burn until brought to a focus." - Alexander Graham
              Bell
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex w-fit items-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
            >
              Log In
            </Link>
          </div>
        </section>

        {/* University Info Grid */}
        <section className="my-10 px-32 w-full flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-4 w-3/5">
            <div className="space-y-4 w-full">
              <Image
                src="/grid1.png"
                alt="Classroom"
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />

              <Image
                src="/grid2.png"
                alt="Library"
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="space-y-4 w-full">
              <Image
                src="/grid3.png"
                alt="Graduation"
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="/grid4.png"
                alt="Campus Life"
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-4 flex justify-center items-center flex-col w-2/5 px-10">
            <h2 className="text-6xl font-bold text-blue-900 py-5">
              United International University
            </h2>
            <p className="text-gray-600 text-2xl">
              United International University (UIU) is acclaimed for its
              educational quality, boasting notable rankings and recognitions in
              higher education, reflecting its commitment to excellence and
              research excellence on both a national and global scale.
            </p>
          </div>
        </section>

        {/* Goal Section */}
        <section className="py-10 h-[580px] w-full px-32">
          <div className="flex w-full h-full rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#125386] w-1/2 h-full flex justify-center items-center">
              <h2 className="text-6xl font-bold text-white w-full mx-10">
                You set the goal. We will mark the path.
              </h2>
            </div>
            <div className="bg-[#D9D9D9] w-1/2 h-full flex justify-center items-center">
              <p className="text-black text-base w-full mx-10">
                "Embark on a journey to redefine your career with expert
                guidance, cutting edge skills, and personalized opportunities
                that open doors to success."
              </p>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section className="bg-gradient-to-br from-[#125386] to-[#BADFF2] my-10 px-32 w-full relative">
          <Image
            src="/student.png"
            alt="Student"
            fill
            className="!h-[650px] !w-auto absolute !left-0 bottom-0 !-top-[50px]"
          />

          <div className="flex w-full h-full rounded-lg overflow-hidden">
            <div className="relative h-[600px] w-1/2">
              {/* Intentionally left blank */}
            </div>
            <div className="flex flex-col justify-center space-y-4 w-1/2 p-8">
              <h2 className="text-5xl font-bold text-white drop-shadow-md">
                An engaging platform designed to guide you every step of the
                way.
              </h2>
              <p className="text-blue-100 text-xl drop-shadow-sm">
                Dive into course materials, test your knowledge with quizzes,
                and watch your progress soar.
              </p>
              <p className="text-blue-100 text-xl drop-shadow-sm">
                Track Your Academic Journey with Us.
              </p>
              <Link
                href="#"
                className="inline-flex w-fit items-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
              >
                Log In
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="my-10 px-32 w-full">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <Book className="mx-auto h-12 w-12 text-blue-900" />
              <h3 className="text-3xl font-bold">17+</h3>
              <p className="text-gray-600">Course</p>
            </div>
            <div className="space-y-2">
              <GraduationCap className="mx-auto h-12 w-12 text-blue-900" />
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-600">Quiz</p>
            </div>
            <div className="space-y-2">
              <Users className="mx-auto h-12 w-12 text-blue-900" />
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-600">Students</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="logo"
                  height={500}
                  width={500}
                  className="h-16 w-16"
                />
                <span className="text-xl font-bold text-white">
                  United International University
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Mobile Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Get in Touch
              </h3>
              <ul className="space-y-2">
                <li>United City, Madani Ave</li>
                <li>info@uiu.com</li>
                <li>+1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Newsletter
              </h3>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
