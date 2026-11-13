import Image from "next/image";

const EMAIL = "vikasm3004@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/vikas-mishra-2a589a215";
const GITHUB = "https://github.com/vikasmishra143";
const RESUME = "/Vikas_Mishra_GenAI_Engineer.pdf";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

const facts = [
  { label: "Now", value: "Associate Data Engineer, Tech Mahindra Makers Lab (R&D)" },
  { label: "Since", value: "March 2024, Pune" },
  { label: "Worked with", value: "Qualcomm and NVIDIA engineering teams" },
  { label: "Shown at", value: "India AI Summit 2026, IMC 2025, Qualcomm Auto Day" }
];

type Work = {
  kind: string;
  title: string;
  context: string;
  summary: string;
  points: string[];
  tags: string[];
  href?: string;
  hrefLabel?: string;
};

const work: Work[] = [
  {
    kind: "Automotive",
    title: "Indus Auto",
    context: "On-device LLM for car infotainment",
    summary:
      "A voice assistant that lives inside the car. The language model runs on the infotainment unit itself, so it keeps working without a network connection.",
    points: [
      "Understands Indic languages and natural speech, similar to Siri.",
      "Controls the car by voice: AC temperature and other in-car settings.",
      "Runs fully on the device, with no cloud dependency."
    ],
    tags: ["On-device LLM", "Indic languages", "Infotainment", "Android"]
  },
  {
    kind: "Language model",
    title: "Indus",
    context: "Educational Indic LLM, shown at India AI Summit 2026",
    summary:
      "Data and evaluation work behind a sovereign, education-focused language model.",
  points: [
      "Built the pipelines that ingest, clean and tokenize a large text corpus, including OCR-based extraction and synthetic data generation.",
      "Curated instruction-response datasets for supervised fine-tuning and domain adaptation.",
      "Designed evaluation sets and semantic-similarity metrics for multilingual models, and ran model selection and benchmarking."
    ],
    tags: ["Fine-tuning data", "Evaluation", "Multilingual", "OCR", "Synthetic data"]
  },
  {
    kind: "Edge AI",
    title: "Fraud Call Detection",
    context: "Edge AI on Qualcomm NPU, shown at IMC 2025",
    summary:
      "Real-time scam detection that runs on the phone while a call is happening, so audio never leaves the device.",
    points: [
      "Streaming speech-to-text feeding a transformer classifier that scores fraud intent.",
      "Quantized the models to INT8 with AIMET for Qualcomm NPUs, cutting size and latency against CPU.",
      "Built the Android audio pipeline and risk scoring around it."
    ],
    tags: ["AIMET", "INT8", "Qualcomm NPU", "Speech-to-text", "Android"]
  },
  {
    kind: "Automotive",
    title: "AutoVaani",
    context: "Offline in-vehicle assistant, shown at Qualcomm Auto Day",
    summary:
      "An offline in-vehicle assistant: a small quantized language model running inside the memory and power limits of embedded hardware.",
    points: [
      "Fit a small language model into infotainment hardware limits and integrated it into the app.",
      "Speech-to-intent flow that turns spoken requests into actionable in-vehicle commands.",
      "Owned the path from model conversion to on-device testing."
    ],
    tags: ["Quantization", "On-device LLM", "Embedded", "Android"]
  },
  {
    kind: "Android",
    title: "Darpan",
    context: "Android application, shown at India AI Summit 2026",
    summary:
      "Stabilised a large demo application before it went in front of big audiences.",
    points: [
      "Fixed memory leaks, ANRs and concurrency issues found through profiling.",
      "Moved state handling to MVVM with StateFlow for predictable behaviour."
    ],
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Profiling"]
  },
  {
    kind: "Side project",
    title: "Document Q&A with RAG",
    context: "Personal project",
    summary:
      "A retrieval pipeline end to end: ingestion, chunking, dense embeddings, FAISS search and grounded answers through the Groq API.",
    points: [
      "Tuned chunk size, embedding model and prompts to improve retrieval quality and answer grounding."
    ],
    tags: ["LangChain", "FAISS", "Embeddings", "Groq"],
    href: GITHUB + "/genai-cli",
    hrefLabel: "Source on GitHub"
  }
];

const roles = [
  {
    when: "Sep 2026 to present",
    title: "Associate Data Engineer",
    text: "Building Indus Auto, an on-device LLM assistant for car infotainment that understands Indic languages and controls in-car functions by voice."
  },
  {
    when: "Mar 2024 to Aug 2026",
    title: "Associate Software Engineer",
    text: "Data pipelines and evaluation for Indus, the Fraud Call Detection edge pipeline, AutoVaani, and Android work on Darpan. Awarded Best Team (twice) and Pat on the Back."
  }
];

const stack = [
  {
    label: "Language models",
    value:
      "Supervised fine-tuning with LoRA and QLoRA, domain adaptation, dataset curation, evaluation and benchmarking, tool calling, prompt engineering"
  },
  {
    label: "Retrieval and agents",
    value: "LangChain, LangGraph, LlamaIndex, FAISS, ChromaDB, hybrid search and reranking, RAGAS"
  },
  {
    label: "On-device",
    value:
      "AIMET, INT8 quantization, Qualcomm NPU, llama.cpp and GGUF, ONNX Runtime, TFLite, Android and automotive integration"
  },
  {
    label: "Serving and ops",
    value: "FastAPI, vLLM, Docker, MLflow, Azure ML, Git"
  },
  {
    label: "Languages and mobile",
    value: "Python, Kotlin, Java, SQL, Jetpack Compose, MVVM, StateFlow, Room, WorkManager"
  }
];

const recognition = [
  "Best Team Award, twice, Tech Mahindra",
  "Pat on the Back Award, Tech Mahindra",
  "Microsoft Certified: Azure Data Scientist Associate",
  "Microsoft Certified: Azure AI Engineer Associate"
];

export default function Home() {
  return (
    <main>
      <header className="wrap flex items-center justify-between py-6">
        <a href="#top" className="font-serif text-xl">
          Vikas Mishra
        </a>
        <nav className="hidden gap-7 sm:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="label link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="wrap pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="grid items-end gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="rise">
            <p className="label mb-6">Pune, India · Open to full-time roles</p>
            <h1 className="font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
              I build language models that run on the device, <em className="text-accent">offline</em>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted">
              Generative AI and on-device LLM engineer. I work on the whole path: the data a model is
              fine-tuned on, the quantization that makes it fit a Qualcomm NPU, and the Android code
              that puts it in a phone or a car.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base">
              <a href={RESUME} download className="link">
                Download resume
              </a>
              <a href={"mailto:" + EMAIL} className="link">
                Email me
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link">
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="link">
                GitHub
              </a>
            </div>
          </div>
          <figure className="rise mx-auto w-full max-w-[320px] md:mx-0 md:justify-self-end">
            <div className="border border-line bg-wash p-2">
              <Image
                src="/vikas-mishra-profile.jpeg"
                alt="Vikas Mishra"
                width={960}
                height={1280}
                priority
                sizes="(max-width: 768px) 80vw, 320px"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="label mt-3">Tech Mahindra Makers Lab, Pune</figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd className="mt-2 text-base leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="work" className="wrap py-16 md:py-24">
        <div className="mb-10 flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="font-serif text-3xl md:text-4xl">Selected work</h2>
          <span className="label">{work.length} projects</span>
        </div>
        <ol>
          {work.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-4 border-b border-line py-10 first:pt-0 md:grid-cols-[170px_1fr_1.5fr] md:gap-10"
            >
              <div>
                <p className="label">{String(index + 1).padStart(2, "0") + " · " + item.kind}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.context}</p>
              </div>
              <div>
                <p>{item.summary}</p>
                <ul className="mt-4 space-y-2 text-[15px] text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="label mt-5">{item.tags.join("  /  ")}</p>
                {item.href ? (
                  <p className="mt-4 text-sm">
                    <a href={item.href} target="_blank" rel="noreferrer" className="link">
                      {item.hrefLabel}
                    </a>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="experience" className="wrap py-16 md:py-24">
        <div className="mb-10 border-b border-line pb-4">
          <h2 className="font-serif text-3xl md:text-4xl">Experience</h2>
        </div>
        <p className="label mb-8">Tech Mahindra, Makers Lab (R&amp;D)</p>
        <ol className="space-y-10">
          {roles.map((role) => (
            <li key={role.title} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <p className="label pt-1">{role.when}</p>
              <div>
                <h3 className="font-serif text-2xl">{role.title}</h3>
                <p className="mt-2 max-w-2xl text-muted">{role.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="stack" className="wrap py-16 md:py-24">
        <div className="mb-10 border-b border-line pb-4">
          <h2 className="font-serif text-3xl md:text-4xl">Stack</h2>
        </div>
        <dl className="divide-y divide-line">
          {stack.map((row) => (
            <div key={row.label} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-10">
              <dt className="label pt-1">{row.label}</dt>
              <dd className="max-w-3xl">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="font-serif text-3xl">Recognition</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {recognition.map((item) => (
              <li key={item} className="py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl">Education</h2>
          <div className="mt-6 border-y border-line py-3">
            <p>B.Tech, Information Technology</p>
            <p className="text-muted">Buddha Institute of Technology (AKTU), 2019 to 2023</p>
            <p className="text-muted">CGPA 7.8</p>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap py-16 md:py-28">
        <p className="label mb-6">Contact</p>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          {"If you are building something that has to run on the device, let's talk."}
        </h2>
        <p className="mt-8">
          <a href={"mailto:" + EMAIL} className="link font-serif text-2xl md:text-3xl">
            {EMAIL}
          </a>
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-base">
          <li>
            <a href="tel:+919140112914" className="link">
              +91 91401 12914
            </a>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="link">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="link">
              GitHub
            </a>
          </li>
          <li>
            <a href={RESUME} download className="link">
              Resume (PDF)
            </a>
          </li>
        </ul>
      </section>

      <footer className="wrap border-t border-line py-8">
        <p className="label">Vikas Mishra · Pune, India · 2026</p>
      </footer>
    </main>
  );
}
