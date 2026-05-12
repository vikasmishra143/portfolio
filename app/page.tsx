"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Network,
  PhoneCall,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const skills = [
  {
    title: "Languages",
    icon: TerminalSquare,
    items: ["Python", "Kotlin", "Java"]
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    items: ["LLMs", "GenAI", "RAG", "Agentic Frameworks", "TensorFlow", "PyTorch", "AIMET", "INT8 Quantization"]
  },
  {
    title: "Edge AI",
    icon: Cpu,
    items: ["On-device Inference", "Qualcomm NPU", "Low-latency AI", "Offline AI Apps"]
  },
  {
    title: "Android",
    icon: Layers3,
    items: ["Jetpack Compose", "MVVM", "StateFlow", "LiveData", "Room", "WorkManager"]
  },
  {
    title: "Tools",
    icon: Workflow,
    items: ["Git", "Firebase", "Android Studio", "Ollama", "Postman"]
  }
];

const experienceProjects = [
  {
    name: "Indus - Educational LLM",
    event: "Showcased at India AI Summit 2026",
    icon: Microscope,
    points: [
      "Built scalable data pipelines for large-scale corpus ingestion, cleaning, and preprocessing.",
      "Developed evaluation and benchmarking systems to compare model variants across accuracy and response quality.",
      "Contributed to dataset curation, model selection, fine-tuning strategy, and training/inference integration."
    ]
  },
  {
    name: "Fraud Call Detection - Edge AI",
    event: "Showcased at IMC with Qualcomm",
    icon: ShieldCheck,
    points: [
      "Designed real-time fraud call detection on Android for live voice calls.",
      "Built audio stream processing and streaming speech-to-text inference for near real-time transcription.",
      "Optimized INT8 models with AIMET for low-latency execution on Qualcomm NPUs."
    ]
  },
  {
    name: "AutoVaani - Automotive AI Assistant",
    event: "Showcased at Qualcomm Auto Day",
    icon: PhoneCall,
    points: [
      "Built an offline, voice-enabled automotive assistant experience.",
      "Designed speech-to-intent flows that convert voice input into actionable in-vehicle commands.",
      "Delivered low-latency on-device AI inference for resource-constrained automotive environments."
    ]
  },
  {
    name: "Darpan Application",
    event: "Showcased at India AI Summit 2026",
    icon: Zap,
    points: [
      "Resolved critical memory leaks, ANRs, and concurrency issues for large-scale demonstrations.",
      "Improved runtime performance through profiling, system-level debugging, and targeted optimizations.",
      "Implemented MVVM, StateFlow, and modular design for scalable state management."
    ]
  }
];

const projectTags = [
  "Semantic search",
  "Dense embeddings",
  "Top-K retrieval",
  "Groq API integration",
  "Prompt engineering",
  "Real-time AI responses"
];

const achievements = [
  "Microsoft Certified: Azure Data Scientist Associate",
  "Best Team Award (2x)",
  "Pat on the Back Award - Technical Excellence"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{copy}</p>
    </motion.div>
  );
}

function NeuralBackdrop() {
  const nodes = [
    [14, 24],
    [32, 16],
    [54, 30],
    [72, 18],
    [85, 36],
    [21, 58],
    [42, 70],
    [67, 62],
    [88, 74]
  ];

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-grid opacity-95" />
      <motion.div
        className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-cyan/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 44, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-36 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-violet/10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-45" role="img" aria-label="">
        <defs>
          <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.28" />
          </linearGradient>
        </defs>
        {nodes.slice(0, -1).map((node, index) => {
          const next = nodes[index + 1];
          return (
            <motion.line
              key={`${node[0]}-${node[1]}`}
              x1={`${node[0]}%`}
              y1={`${node[1]}%`}
              x2={`${next[0]}%`}
              y2={`${next[1]}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay: index * 0.15, repeat: Infinity, repeatType: "reverse" }}
            />
          );
        })}
      </svg>
      {nodes.map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_22px_rgba(94,234,212,0.9)]"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 2.8, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-mono text-sm font-semibold tracking-[0.22em] text-white">
          VM<span className="text-cyan">.AI</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-cyan">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-cyan/30 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan hover:text-ink"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28">
      <NeuralBackdrop />
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan">
            <Sparkles size={16} />
            Open to full-time roles and freelance AI projects
          </div>
          <h1 className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Vikas Mishra
          </h1>
          <p className="mt-5 font-mono text-base text-slate-200 sm:text-xl">
            Associate Software Engineer | AI Engineer | Android Developer
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Building AI-powered Android applications, edge AI systems, and production-grade GenAI pipelines.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
              View Projects <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan/50 hover:bg-white/10">
              Contact Me <Mail size={18} />
            </a>
            <a href="/Vikas-Mishra-Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-violet/40 px-6 py-3 font-semibold text-violet-100 transition hover:-translate-y-1 hover:bg-violet/15">
              Download Resume <ArrowDownToLine size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass relative mx-auto aspect-[0.86] w-full max-w-[460px] overflow-hidden rounded-[2rem] p-4 sm:p-5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.22),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(139,92,246,0.28),transparent_32%)]" />
          <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink">
            <Image
              src="/vikas-mishra-profile.jpeg"
              alt="Vikas Mishra"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover object-[50%_38%] saturate-[0.94] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(94,234,212,0.22),transparent_22%),linear-gradient(120deg,rgba(5,8,22,0.15),transparent_45%)]" />

            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3 py-2 text-xs font-medium text-cyan backdrop-blur-xl">
              <BrainCircuit size={15} />
              AI Engineer
            </div>
            <div className="absolute right-4 top-4 rounded-full border border-violet/30 bg-violet/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-100 backdrop-blur-xl">
              Edge Ready
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/15 bg-ink/70 p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">Vikas Mishra</p>
                  <p className="text-xs text-slate-300">AI, Android, and Edge AI systems</p>
                </div>
                <span className="h-10 w-10 rounded-2xl border border-cyan/25 bg-cyan/10 p-2 text-cyan">
                  <Cpu size={22} />
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["RAG", "NPU", "Android"].map((label, index) => (
                  <motion.span
                    key={label}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-xs text-slate-200"
                    animate={{ opacity: [0.72, 1, 0.72] }}
                    transition={{ repeat: Infinity, duration: 2.4, delay: index * 0.24 }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeader
        eyebrow="About"
        title="Engineering production AI where mobile performance matters"
        copy="A focused software engineer building the connective tissue between GenAI systems, Android products, and offline edge inference."
      />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]"
      >
        <div className="glass rounded-3xl p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-200">
            Vikas Mishra is an Associate Software Engineer at Tech Mahindra - Makers Lab (R&amp;D), working across Android development, LLMs, GenAI, Retrieval-Augmented Generation, agentic frameworks, on-device AI inference, and Qualcomm NPU optimization. His work spans large-scale data processing, model evaluation, production Android engineering, and optimized edge deployment.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            He has delivered solutions in collaboration with Qualcomm and NVIDIA, with work showcased at India AI Summit, IMC, and Qualcomm Auto Day. His engineering focus is clear: scalable AI systems, offline-first experiences, reliable mobile architecture, and low-latency edge AI applications.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["R&D Focus", "AI systems, Android intelligence, edge deployment"],
            ["Showcases", "India AI Summit, IMC, Qualcomm Auto Day"],
            ["Collaborations", "Qualcomm and NVIDIA"],
            ["Strength", "Scalable, offline-first AI applications"]
          ].map(([label, value]) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">{label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A practical stack for GenAI, Android, and edge inference"
          copy="Organized around the systems Vikas builds: intelligent mobile applications, RAG workflows, optimized models, and clean Android architecture."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-2xl bg-cyan/10 p-3 text-cyan">
                    <Icon size={24} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeader
        eyebrow="Experience"
        title="R&D work shaped around high-visibility AI products"
        copy="Timeline-style experience across educational LLMs, real-time edge fraud detection, automotive assistants, and Android performance engineering."
      />
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-cyan">
              <BriefcaseBusiness size={18} /> Tech Mahindra - Makers Lab (R&amp;D)
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Associate Software Engineer</h3>
          </div>
          <p className="font-mono text-sm text-slate-400">March 2024 - Present</p>
        </div>
        <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan before:via-violet before:to-transparent">
          {experienceProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 bg-ink text-cyan">
                  <Icon size={19} />
                </span>
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan/30 hover:bg-white/[0.06]">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                    <span className="rounded-full bg-violet/10 px-3 py-1 text-xs text-violet-100">
                      {project.event}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Featured Project"
          title="GenAI RAG Chatbot built for relevant, fast AI answers"
          copy="A production-minded retrieval system combining dense vector search, prompt design, API orchestration, and real-time response UX."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass grid overflow-hidden rounded-3xl lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(94,234,212,0.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.2),transparent_28%)]" />
            <div className="relative grid h-full grid-cols-7 gap-2">
              {Array.from({ length: 105 }).map((_, index) => (
                <motion.span
                  key={index}
                  className={`rounded-sm ${index % 7 === 0 || index % 11 === 0 ? "bg-cyan/70" : "bg-white/[0.08]"}`}
                  animate={{
                    opacity: [0.2, index % 7 === 0 ? 0.95 : 0.45, 0.2],
                    scale: [1, index % 11 === 0 ? 1.15 : 1, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 3.4, delay: (index % 13) * 0.06 }}
                />
              ))}
            </div>
          </div>
          <div className="p-7 sm:p-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm text-cyan">
              <Network size={16} /> Retrieval-Augmented Generation
            </div>
            <h3 className="text-3xl font-semibold text-white">GenAI RAG Chatbot</h3>
            <p className="mt-4 leading-7 text-slate-300">
              A polished AI assistant architecture that retrieves context with semantic search, ranks relevant chunks through Top-K retrieval, and composes grounded prompts for real-time Groq-powered responses.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {projectTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/vikasmishra143/genai-cli" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan/50 hover:bg-cyan/10">
                <Github size={18} /> GitHub
              </a>
              <a href="#home" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AchievementsEducation() {
  return (
    <section className="section-shell py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionHeader
            eyebrow="Recognition"
            title="Achievements and certifications"
            copy="Milestones that reflect technical depth, team execution, and consistent ownership."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <Award className="mx-auto text-cyan" size={28} />
                <p className="mt-4 text-sm font-medium leading-6 text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass self-end rounded-3xl p-7"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
            <GraduationCap size={30} />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">Education</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">B.Tech in Information Technology</h3>
          <p className="mt-3 text-slate-300">AKTU - Buddha Institute of Technology</p>
          <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
            CGPA: 7.8
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks: Array<{
    label: string;
    value: string;
    href: string;
    icon: typeof Mail;
    external?: boolean;
  }> = [
    { label: "Email", value: "vikasm3004@gmail.com", href: "mailto:vikasm3004@gmail.com", icon: Mail },
    { label: "Phone", value: "+91 91401 12914", href: "tel:+919140112914", icon: PhoneCall },
    { label: "LinkedIn", value: "linkedin.com/in/vikas-mishra", href: "https://www.linkedin.com/in/vikas-mishra", icon: Linkedin, external: true },
    { label: "GitHub", value: "github.com/vikasmishra143", href: "https://github.com/vikasmishra143", icon: Github, external: true },
    { label: "Location", value: "Pune, India", href: "#", icon: MapPin }
  ];
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || "a visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        "",
        formState.message
      ].join("\n")
    );

    window.location.href = `mailto:vikasm3004@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build the next intelligent product"
        copy="Open to full-time opportunities, role transitions, and selective freelance collaborations across AI engineering, Android systems, edge AI deployment, and GenAI product development."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan/30"
            >
              <span className="rounded-2xl bg-cyan/10 p-3 text-cyan">
                <Icon size={22} />
              </span>
              <span>
                <span className="block text-sm text-slate-400">{label}</span>
                <span className="block text-sm font-medium text-white sm:text-base">{value}</span>
              </span>
            </a>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Name</span>
              <input
                required
                value={formState.name}
                onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-slate-300">Email</span>
              <input
                required
                type="email"
                value={formState.email}
                onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block space-y-2">
            <span className="text-sm text-slate-300">Message</span>
            <textarea
              required
              value={formState.message}
              onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
              className="min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/50"
              placeholder="Tell me about your AI or Android project"
            />
          </label>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow sm:w-auto">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col justify-between gap-3 text-sm text-slate-400 sm:flex-row">
        <p>(c) 2026 Vikas Mishra. Built for AI, Android, and edge intelligence.</p>
        <p className="font-mono text-cyan">Open to full-time opportunities and freelance collaborations</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AchievementsEducation />
      <Contact />
      <Footer />
    </main>
  );
}
