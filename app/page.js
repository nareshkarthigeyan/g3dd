"use client";
import { useState } from "react";

export default function Home() {
  const marketplaceImgs = [
    "https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542567455-4f8b968d5d63?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090707285-92c0f5c95c5b?q=80&w=1200&auto=format&fit=crop",
  ];
  const useCaseImgs = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091014534-047f69f1f5ae?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091215831-7b5e8d9a9a6b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581090406132-7b9a1d25d7f8?q=80&w=1200&auto=format&fit=crop",
  ];
  const [activeIndustry, setActiveIndustry] = useState(null);
  const industriesInfo = {
    Aerospace: {
      blurb:
        "Lightweight brackets, ducts, and tooling with documentation and process traceability for regulated programs. High-performance parts that meet stringent aerospace standards.",
    },
    Defence: {
      blurb:
        "Ruggedized parts and on-demand spares using engineering polymers and metals for mission-readiness. Custom solutions for defense applications with security and reliability.",
    },
    Medical: {
      blurb:
        "Patient-specific models, dental fixtures, surgical guides, and biocompatible components with validated workflows. FDA-compliant materials and processes for medical applications.",
    },
    Tooling: {
      blurb:
        "Custom jigs, fixtures, and production tools with rapid turnaround. Optimize your manufacturing process with additive tooling solutions that reduce costs and lead times.",
    },
    Automotive: {
      blurb:
        "Jigs, fixtures, and prototype housings enabling faster iteration and ergonomic improvements. From concept cars to production parts with advanced materials.",
    },
    "Oil & Gas": {
      blurb:
        "Flow components and heat-resistant parts with complex internal channels for demanding environments. Corrosion-resistant materials for harsh operating conditions.",
    },
  };
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden 
    // bg-gradient-to-br from-black via-[#0f0b0b] to-[#b91c1c]
    "
    >
      {/* Hero Banner */}
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            style={{ minHeight: "100svh" }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop"
          >
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source
              src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0f0f]/30 to-[#b91c1c]/20" /> */}
          <div className="absolute -inset-32 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(185,28,28,0.35),transparent_60%)]" />
          <img
            src="/globe.svg"
            alt="texture"
            className="absolute right-[-10%] top-[-10%] w-[60rem] opacity-10 mix-blend-screen"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0f0b0b]/60 to-[#0f0b0b]" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-20">
            <div>
              <div className="text-xs font-['dena'] tracking-widest text-red-300 mb-3 uppercase">
                Contract Manufacturing
              </div>
              <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">
                Engineering your Concept to Creation
              </h1>
              <p className="text-red-50/90 font-['scrib'] text-lg md:text-xl mb-6">
                with Additive Manufacturing
              </p>
              <div className="flex flex-wrap font-['scrib'] items-center gap-3 mb-8">
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">
                  Metal
                </span>
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">
                  SLS
                </span>
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">
                  FDM
                </span>
                <span className="text-xs text-red-100/80">
                  Lead time: 3–7 days
                </span>
                <span className="text-xs text-red-100/80">ISO-grade QA</span>
              </div>
              <div className="font-['dena'] flex gap-4">
                <a
                  href="/contact"
                  className="bg-primary hover:bg-secondary text-white font-monumentExtended tracking-wide px-6 py-3 rounded-md"
                >
                  Get a Quote
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Book a Demo
                </a>
              </div>
            </div>
            <div className="md:col-start-2">
              {/* <div className="relative rounded-2xl overflow-hidden border border-red-500/20 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="aspect-video">
                  <img
                    src="https://ik.imagekit.io/0s6dxbeae/EOS%20M%20400-4.png?updatedAt=1755862153632"
                    alt="3D Printing Preview"
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/20" />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-['test'] mb-6">
                Your One-Stop Destination for Advanced Manufacturing
              </h2>
              <p className="text-gray-300 font-['scrib'] text-lg mb-6">
                Galactic 3D is your one-stop destination for advanced
                manufacturing services. As pioneers in the field, we bridge the
                gap to the future with cutting-edge technology and expert
                support. We offer customized, efficient, and high-precision
                solutions across industries, delivering unmatched quality and
                innovation with every project.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-['dena'] text-red-300 mb-4">
                  Our services span across four key verticals:
                </h3>
                <ul className="space-y-3 text-gray-300 font-['scrib']">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-primary mt-1" />
                    <span>Design, DFAM & Data Preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-primary mt-1" />
                    <span>Contract Manufacturing & Part Printing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-primary mt-1" />
                    <span>Training, Skill & Entrepreneurship Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-primary mt-1" />
                    <span>Capital Equipment Manufacturing</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-xl p-6 backdrop-blur">
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-crosshairs text-primary" />
                  </div>
                  <h3 className="text-2xl font-['dena'] mb-2">Precision</h3>
                  <p className="text-gray-300 font-['scrib']">
                    Delivering high-accuracy parts with stringent quality
                    control at every step.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 backdrop-blur">
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-lightbulb text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-['dena'] mb-2">Innovation</h3>
                  <p className="text-gray-300 font-['scrib']">
                    Leveraging cutting-edge additive manufacturing technology
                    and expertise.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-xl p-6 backdrop-blur">
                  <div className="text-4xl mb-4">
                    <i className="fa-solid fa-leaf text-green-400" />
                  </div>
                  <h3 className="text-2xl font-['dena'] mb-2">
                    Sustainability
                  </h3>
                  <p className="text-gray-300 font-['scrib']">
                    Reducing waste and energy consumption through additive
                    processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-10">
            Core Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4">
                <i className="fa-solid fa-compass-drafting" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-2">Design & DFAM</h3>
              <p className="text-gray-400 font-['scrib'] mb-4">
                Expert design for additive manufacturing and data preparation
                services.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Topology optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Lattice structures design</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>STL/CAD file preparation</span>
                </li>
              </ul>
              <a
                href="/services"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4">
                <i className="fa-solid fa-industry" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-2">
                Contract Manufacturing
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-4">
                Production-grade parts with precision and repeatability across
                metals and polymers.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Rapid prototyping to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Metal & polymer printing</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Post-processing and finishing</span>
                </li>
              </ul>
              <a
                href="/services"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4">
                <i className="fa-solid fa-chalkboard-user" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-2">
                Training & Development
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-4">
                Skill development and entrepreneurship programs for additive
                manufacturing.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Design for AM training</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Machine operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Entrepreneurship programs</span>
                </li>
              </ul>
              <a
                href="/training"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Explore Training
              </a>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4">
                <i className="fa-solid fa-cubes" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-2">Capital Equipment</h3>
              <p className="text-gray-400 font-['scrib'] mb-4">
                Procure and deploy reliable 3D printing machines with full
                support.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Machine consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Installation & calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-green-500 mt-1" />
                  <span>Maintenance support</span>
                </li>
              </ul>
              <a
                href="/machines"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                View Machines
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contract Manufacturing Offerings */}
      <section className="py-20 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['test'] mb-4">
              Transform Your Ideas into Reality
            </h2>
            <p className="text-gray-300 font-['scrib'] text-lg max-w-3xl mx-auto">
              Leveraging our cutting-edge additive manufacturing facilities, we
              deliver customized, high-quality parts with unmatched speed and
              precision.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <i className="fa-solid fa-leaf text-green-400 mr-2" />
                <span className="text-sm font-['dena']">
                  Sustainability in Manufacturing
                </span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <i className="fa-solid fa-shield-halved text-blue-400 mr-2" />
                <span className="text-sm font-['dena']">
                  Stringent Quality Control
                </span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <i className="fa-solid fa-clock text-yellow-400 mr-2" />
                <span className="text-sm font-['dena']">Rapid Turnaround</span>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                <i className="fa-solid fa-building text-purple-400 mr-2" />
                <span className="text-sm font-['dena']">
                  Advanced Facilities
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4 text-center">
                <i className="fa-solid fa-bolt text-blue-400" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-3 text-center">
                Rapid Prototyping
              </h3>
              <p className="text-gray-300 font-['scrib'] mb-4 text-center">
                Test and refine your designs quickly with our high-speed
                prototyping services. Perfect for concept validation and
                functional testing with certifications.
              </p>
              <ul className="text-gray-300 font-['scrib'] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0" />
                  <span>Concept validation in days</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0" />
                  <span>Functional testing capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-blue-400 mt-1 flex-shrink-0" />
                  <span>Certified materials available</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4 text-center">
                <i className="fa-solid fa-industry text-primary" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-3 text-center">
                Full-Scale Production
              </h3>
              <p className="text-gray-300 font-['scrib'] mb-4 text-center">
                From low-volume batch production to large-scale runs, we deliver
                end-use parts with exceptional precision, speed and durability.
              </p>
              <ul className="text-gray-300 font-['scrib'] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" />
                  <span>Scalable production volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" />
                  <span>Consistent quality across batches</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-primary mt-1 flex-shrink-0" />
                  <span>End-use grade materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-8 backdrop-blur">
              <div className="text-5xl mb-4 text-center">
                <i className="fa-solid fa-wrench text-purple-400" />
              </div>
              <h3 className="text-2xl font-['dena'] mb-3 text-center">
                Custom Manufacturing
              </h3>
              <p className="text-gray-300 font-['scrib'] mb-4 text-center">
                Tailored solutions for complex designs, intricate geometries,
                and unique industrial needs.
              </p>
              <ul className="text-gray-300 font-['scrib'] text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-1 flex-shrink-0" />
                  <span>Complex geometry support</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-1 flex-shrink-0" />
                  <span>Application-specific materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-1 flex-shrink-0" />
                  <span>Custom finishing options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">
            Industries We Serve
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-6 ">
            We support mission-critical programs across regulated and
            high-performance sectors with material traceability, process
            documentation, and dimensional reports.
          </p>
          <div className="overflow-x-auto">
            <div className="flex font-['dena'] gap-6 min-w-max py-2">
              {[
                { label: "Aerospace", icon: "fa-plane" },
                { label: "Defence", icon: "fa-shield-halved" },
                { label: "Medical", icon: "fa-heart-pulse" },
                { label: "Tooling", icon: "fa-toolbox" },
                { label: "Automotive", icon: "fa-car" },
                { label: "Oil & Gas", icon: "fa-oil-well" },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveIndustry(label)}
                  className={`shrink-0 flex flex-col items-center rounded-xl px-6 py-6 border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeIndustry === label
                      ? "bg-white/10 border-primary"
                      : "bg-dark-100/40 border-gray-800 hover:bg-white/5"
                  }`}
                  aria-pressed={activeIndustry === label}
                >
                  <div className="text-3xl mb-3">
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <span className="text-gray-200">{label}</span>
                </button>
              ))}
            </div>
            {activeIndustry && (
              <div className="mt-6 bg-white/5 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur animate-fadeIn">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-['dena'] mb-2">
                      {activeIndustry}
                    </h3>
                    <p className="text-gray-300 font-['scrib'] max-w-3xl">
                      {industriesInfo[activeIndustry]?.blurb}
                    </p>
                  </div>
                  <a
                    href="/industries"
                    className="self-start bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-2 rounded-md transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* Our Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-4 text-center">
            Our Technologies
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-12 text-center max-w-2xl mx-auto">
            State-of-the-art additive manufacturing technologies to bring your
            ideas to life
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-atom text-primary" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">DMLS</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                Direct Metal Laser Sintering
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-cube text-blue-400" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">SLS</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                Selective Laser Sintering
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-layer-group text-green-400" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">FDM</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                Fused Deposition Modeling
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-droplet text-purple-400" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">DLP</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                Digital Light Processing
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-flask text-yellow-400" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">Vacuum Casting</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                Precision Casting
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-6 text-center backdrop-blur hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">
                <i className="fa-solid fa-gears text-cyan-400" />
              </div>
              <h3 className="text-lg font-['dena'] mb-2">CNC Machining</h3>
              <p className="text-gray-400 font-['scrib'] text-xs">
                & Fabrication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-5xl font-['test']">
              Marketplace Preview
            </h2>
            <a
              href="/marketplace"
              className="text-sm font-['dena'] text-gray-400 hover:text-white"
            >
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max py-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="shrink-0 w-64 bg-red-500/10 font-['dena'] rounded-xl border border-red-500/20 overflow-hidden backdrop-blur-xl"
                >
                  <div className="aspect-video">
                    <img
                      src={marketplaceImgs[i % marketplaceImgs.length]}
                      alt={`Model ${i}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-200 font-semibold mb-1">
                      Model_{i}.stl
                    </p>
                    <p className="text-gray-400 font-['scrib'] text-sm mb-3">
                      High-precision part preview
                    </p>
                    <div className="flex flex-wrap font-['scrib'] gap-2 mb-3">
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">
                        FDM
                      </span>
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">
                        ABS
                      </span>
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">
                        0.2mm
                      </span>
                    </div>
                    <a
                      href="/marketplace"
                      className="text-sm text-red-300 hover:text-red-200"
                    >
                      View model
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Use Cases or Projects */}
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-10">
            Use Cases
          </h2>
          <div className="grid font-['dena'] grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Lightweight Fixture",
                text: "30% weight reduction for assembly fixture with SLS nylon; improved ergonomics and cycle time.",
              },
              {
                title: "Conformal Cooling Insert",
                text: "Metal-printed insert with conformal channels reduced cooling time by 42%.",
              },
              {
                title: "Medical Jig",
                text: "Patient-specific jig enabling accurate placement and faster OR setup.",
              },
              {
                title: "Drone Bracket",
                text: "High-stiffness carbon-filled part replacing CNC aluminum, cutting cost by 35%.",
              },
              {
                title: "Electronics Enclosure",
                text: "Rapid proto to production with flame-retardant material and EMI shielding.",
              },
              {
                title: "Spare Part On-Demand",
                text: "Digitized spare part inventory with print-on-demand to eliminate downtime.",
              },
            ].map(({ title, text }, i) => (
              <div
                key={i}
                className="bg-red-500/10 rounded-xl overflow-hidden border border-red-500/20 backdrop-blur-xl"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={useCaseImgs[i % useCaseImgs.length]}
                    alt={title}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-['dena'] mb-2">{title}</h3>
                  <p className="text-gray-400 font-['scrib'] mb-3">{text}</p>
                  <ul className="text-gray-500 font-['scrib'] text-sm space-y-1 list-none">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-small" />
                      <span>Lead time: 5–10 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-small" />
                      <span>Material & process verified</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Manufacturing Process */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-4 text-center">
            We Bring Your Ideas to Life
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-12 text-center max-w-2xl mx-auto">
            Our streamlined process ensures quality from design to delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center backdrop-blur">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-['dena'] mb-2">Design-DFAM</h3>
                <p className="text-gray-400 font-['scrib'] text-sm">
                  Optimize your design for additive manufacturing
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <i className="fa-solid fa-chevron-right text-2xl text-blue-500/50" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6 text-center backdrop-blur">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-['dena'] mb-2">Prototyping</h3>
                <p className="text-gray-400 font-['scrib'] text-sm">
                  Rapid prototyping and testing phase
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <i className="fa-solid fa-chevron-right text-2xl text-purple-500/50" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-6 text-center backdrop-blur">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-500">
                  <span className="text-2xl font-bold text-yellow-400">3</span>
                </div>
                <h3 className="text-xl font-['dena'] mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-400 font-['scrib'] text-sm">
                  Rigorous testing and validation
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <i className="fa-solid fa-chevron-right text-2xl text-yellow-500/50" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 text-center backdrop-blur">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-['dena'] mb-2">Production</h3>
                <p className="text-gray-400 font-['scrib'] text-sm">
                  Full-scale manufacturing
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <i className="fa-solid fa-chevron-right text-2xl text-red-500/50" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-6 text-center backdrop-blur">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
                <span className="text-2xl font-bold text-green-400">5</span>
              </div>
              <h3 className="text-xl font-['dena'] mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 font-['scrib'] text-sm">
                Fast and reliable shipping
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Galactic */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-8">
            Why Choose Galactic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                Made in India, global clients
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Trusted by teams across industries for quality, reliability, and
                speed.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-globe text-blue-400 mt-1" />
                  <span>Serving aerospace, medical, defence</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-truck-fast text-blue-400 mt-1" />
                  <span>Fast logistics and delivery</span>
                </li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                Metal, SLS, and FDM
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Multiple technologies under one roof for the right process per
                part.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-atom text-blue-400 mt-1" />
                  <span>Certified materials and parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-flask text-blue-400 mt-1" />
                  <span>Material testing on request</span>
                </li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">
                End-to-End Services
              </h3>
              <p className="text-gray-400 font-['scrib'] mb-3">
                Design, manufacturing, post-processing, and QA—handled
                seamlessly.
              </p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-screwdriver-wrench text-blue-400 mt-1" />
                  <span>Machining, surface finishing, painting</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check-double text-blue-400 mt-1" />
                  <span>Dimensional reports and documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-4 text-center">
            Facilities Designed for the Future
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-12 text-center max-w-3xl mx-auto">
            Our advanced manufacturing facilities are equipped with cutting-edge
            technology and expert staff, ensuring superior quality and
            efficiency at every step of the process.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Metal Capabilities */}
            <div className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 border border-gray-500/30 rounded-xl p-8 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">
                  <i className="fa-solid fa-atom text-gray-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-['dena']">Metal</h3>
                  <p className="text-sm text-gray-400 font-['scrib']">
                    Build Size: Up to 250×250×300mm
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-blue-300">
                    Titanium
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    Ti64AL4V, Ti64 Eli, Gr 5 & 23
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-blue-300">
                    Aluminum
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    AlSi10Mg, AlF357, Al6061
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-blue-300">
                    Stainless Steel
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    SS 316L, 17-4ph
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-blue-300">
                    Tool Steel
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    MS1, HX, Hayens 282
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-blue-300">
                    Cobalt Chrome & Nickel Alloy
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    MP1, IN718, 625, 939
                  </p>
                </div>
              </div>
            </div>

            {/* Polymer Capabilities */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-8 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">
                  <i className="fa-solid fa-cube text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-['dena']">Polymer</h3>
                  <p className="text-sm text-gray-400 font-['scrib']">
                    Build Size: Up to 250×250×250mm
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-purple-300">
                    Polyamide-12
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    PA 2200, 2202, 2210 FR, 3200 GF
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-purple-300">
                    Polyamide-11
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    PA 1100, 1101, 1102
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-purple-300">
                    FDM Materials
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    PLA, ABS, TPU, PEEK, TPE, PETG, PP
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-purple-300">
                    Resins
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    NYLON, AQUA, Transparent
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h4 className="font-['dena'] text-sm mb-2 text-purple-300">
                    Vacuum Casting
                  </h4>
                  <p className="text-xs text-gray-400 font-['scrib']">
                    PU-ABS, PC, PP, Rubber
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Features */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <i className="fa-solid fa-compass-drafting text-2xl text-primary mb-2" />
              <p className="text-sm font-['dena']">Design Lab</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <i className="fa-solid fa-industry text-2xl text-primary mb-2" />
              <p className="text-sm font-['dena']">Production Facilities</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <i className="fa-solid fa-wrench text-2xl text-primary mb-2" />
              <p className="text-sm font-['dena']">Post-Processing</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <i className="fa-solid fa-box text-2xl text-primary mb-2" />
              <p className="text-sm font-['dena']">Material Management</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <i className="fa-solid fa-shield-halved text-2xl text-primary mb-2" />
              <p className="text-sm font-['dena']">Quality Control</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 rounded-xl p-6 text-center">
            <p className="text-gray-300 font-['scrib'] mb-2">
              <i className="fa-solid fa-certificate text-yellow-400 mr-2" />
              Standards we comply to:{" "}
              <span className="font-['dena'] text-white">
                ISO Certification Under Progress
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">
            Quick Contact
          </h2>
          <p className="text-gray-400 font-['scrib'] mb-6">
            Share your requirements—we typically respond within 24 hours. NDAs
            available upon request.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500/5 p-6 rounded-xl border border-red-500/20 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Name
              </label>
              <input type="text" className="input-primary" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Email
              </label>
              <input type="email" className="input-primary" required />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                Message
              </label>
              <textarea rows={5} className="input-primary" required />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">
                File Upload
              </label>
              <input
                type="file"
                multiple
                accept=".stl,.obj,.step,.stp,.igs,.iges,.zip"
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
              />
              <p className="text-xs font-['scrib'] text-gray-400">
                Optional: upload CAD/STL files.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300 font-['dena']"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
