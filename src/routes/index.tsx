import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import type { ReactNode, ElementType } from "react";
import heroPortrait from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// TODO: replace with your Google Drive resume link (use the "share" link, anyone-with-link viewer)
const RESUME_URL = "https://drive.google.com/file/d/1ng774k_zIlT-2qQM1hHSFm8pfkKxRAyi/view?usp=sharing";



const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    n: "01",
    name: "Crystie Hunter",
    tag: "OSINT Tool",
    year: "2025",
    desc: "OSINT investigation tool for gathering and analyzing publicly available digital footprints. Built with a modern, responsive UI and deployed on Vercel.",
    tech: ["React", "JavaScript", "API Integration", "Vercel"],
    href: "https://crystiehunter-tool-osint.vercel.app/",
  },
  {
    n: "02",
    name: "Smart Shopping Cart",
    tag: "AI / Computer Vision",
    year: "2024",
    desc: "AI-powered shopping cart with real-time object detection and barcode scanning to remove billing queues. Built on Raspberry Pi with a React frontend.",
    tech: ["React", "Python", "OpenCV", "Node.js", "MongoDB", "Raspberry Pi"],
    href: "https://github.com/YJGohel03/Smart_shoppingCart-v2.0",
  },
  {
    n: "03",
    name: "Ahmedabad Metro",
    tag: "Transit Web App",
    year: "2024",
    desc: "Route planning app for Ahmedabad Metro with station search, fare estimation, live schedules and interactive route maps.",
    tech: ["React", "JavaScript", "REST APIs"],
    href: "https://ahmedabad-metro.vercel.app/",
  },
  {
    n: "04",
    name: "Currency Exchange",
    tag: "Finance Utility",
    year: "2023",
    desc: "Real-time exchange rates, historical trends and quick conversions between currency pairs with saved favorites.",
    tech: ["React", "JavaScript", "REST APIs"],
    href: "https://currency-converter-nu-olive.vercel.app/",
  },
  {
    n: "05",
    name: "Expense Tracker",
    tag: "Personal Finance",
    year: "2023",
    desc: "Track daily expenses with add, edit and delete flows plus visual charts to reveal spending patterns.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "https://expense-tracker-virid-mu.vercel.app/",
  },
  {
    n: "06",
    name: "Weather Checker",
    tag: "Utility App",
    year: "2023",
    desc: "Real-time weather app pulling data from OpenWeatherMap based on user location or search input.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap"],
    href: "https://weather-check-nu.vercel.app/",
  },
];

const experience = [
  {
    period: "2026 — Now",
    role: "Freelance Web Developer",
    company: "Independent · Ahmedabad",
    bullets: [
      "Built responsive websites with React, WordPress and Shopify for direct clients.",
      "Integrated APIs and dynamic functionality; focused on performance and SEO.",
      "Delivered UI/UX design work to improve engagement and accessibility.",
    ],
  },
  {
    period: "2025 — 2025",
    role: "Junior Web Developer",
    company: "4Devnet Pvt. Ltd.",
    bullets: [
      "Developed responsive websites with WordPress, Shopify, HTML, CSS and jQuery.",
      "Implemented eCommerce features and on-page SEO optimizations.",
      "Owned frontend customization, updates and performance improvements.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Developer Intern",
    company: "SMAPACA Pvt. Ltd.",
    bullets: [
      "Contributed to an AI-based Smart Shopping Cart with React, Python and OpenCV.",
      "Built responsive frontend interfaces and integrated real-time detection logic.",
      "Assisted API integration, testing and optimization of the checkout flow.",
    ],
  },
];

const certifications: { name: string; href: string }[] = [
  { name: "Foundations of Log Analysis for Cyber Defense", href: "https://drive.google.com/file/d/1jJbgt5CKHmE2RYg3cj8ecsZdS5ptERK-/view?usp=drive_link" },
  { name: "TATA — Cybersecurity Analyst Job Simulation (Forage)", href: "https://drive.google.com/file/d/1OKkkXgxYj90_mUI63mAVQXUxkOTIZU8q/view?usp=sharing" },
  { name: "Accenture — Developer & Technology (Forage)", href: "https://drive.google.com/file/d/1RJBAQ29Ld2SEIc8kh00Vgpfj-M5-Nei9/view?usp=sharing" },
  { name: "Accenture — Software Engineering (Forage)", href: "https://drive.google.com/file/d/1RKQyTn1yWPgftz3Rj0_oeHSgyfTYB7G1/view?usp=sharing" },
  { name: "AI Master Class using Python", href: "https://drive.google.com/file/d/1gpTI0-VZ53-d-7BfGecdIJOmOusSPYQ_/view?usp=sharing" },
  { name: "Master Class on Embedded C Programming", href: "https://drive.google.com/file/d/1fbsGCZ3XegfkFrpeCwagdiusrhq0olno/view?usp=sharing" },
];

const skills = {
  Languages: ["JavaScript", "HTML5", "CSS3", "C", "C++"],
  Frameworks: ["React.js", "Python", "Embedded C", "AI/ML Basics"],
  Practices: ["Responsive UI", "UI/UX Design", "API Integration", "Object Detection", "SEO"],
  Tools: ["VS Code", "Git", "GitHub", "Vercel", "WordPress", "Shopify"],
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl italic">
            Yash<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:yashgohel04@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section id="top" className="grain relative overflow-hidden pt-32 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for freelance — Q1 2026
            </div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              Frontend developer
              <br />
              crafting <em className="text-primary">calm,</em>
              <br />
              precise interfaces.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m <span className="text-foreground">Yash Gohel</span> — a Frontend Developer and Cyber Security postgrad from Ahmedabad. I build responsive React applications, AI-integrated tools, and UI/UX experiences that feel effortless to use.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:yashgohel04@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" aria-hidden />
              <img
                src={heroPortrait}
                alt="Yash Gohel portrait"
                width={1024}
                height={1280}
                className="relative w-full rounded-xl border border-border object-cover"
              />
              <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Ahmedabad, IN</span>
                <span>Frontend · UI/UX · Sec</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 overflow-hidden border-y border-border/60 py-6">
          <div className="flex gap-16 whitespace-nowrap font-display text-2xl italic text-muted-foreground/70 md:text-4xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-16">
                <span>React.js</span><span className="text-primary">✦</span>
                <span>UI/UX Design</span><span className="text-primary">✦</span>
                <span>Cyber Security</span><span className="text-primary">✦</span>
                <span>AI Integration</span><span className="text-primary">✦</span>
                <span>WordPress</span><span className="text-primary">✦</span>
                <span>Shopify</span><span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Selected Work" title="Projects, shipped." count={projects.length} />
        <div className="mt-16 divide-y divide-border">
          {projects.map((p) => (
            <article key={p.n} className="grid grid-cols-12 gap-4 py-8 md:gap-8 md:py-10">
              <div className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">{p.n}</div>
              <div className="col-span-10 md:col-span-4">
                <a
                  href={p.href}
                  target={p.href && p.href !== "#" ? "_blank" : undefined}
                  rel={p.href && p.href !== "#" ? "noopener noreferrer" : undefined}
                  className="group/link inline-flex items-start gap-2 hover:text-primary"
                >
                  <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                  <ArrowUpRight className="mt-2 h-4 w-4 opacity-60 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                </a>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</p>
              </div>
              <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-5">{p.desc}</p>
              <div className="col-span-12 flex flex-wrap items-start justify-between gap-4 md:col-span-2 md:flex-col md:items-end">
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="About" title="A quick intro." />
          </div>
          <div className="space-y-6 md:col-span-8">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              I care about interfaces that feel <em className="text-primary">quiet</em> — fast to load, easy to read, and honest about what they do.
            </p>
            <p className="text-muted-foreground">
              I&apos;m currently pursuing an M.Tech in Cyber Security at Indus University while freelancing as a frontend developer. Previously I built an AI-based Smart Shopping Cart at SMAPACA and shipped eCommerce sites at 4Devnet. My work sits at the intersection of clean React frontends, thoughtful UX and, increasingly, secure engineering.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 md:grid-cols-4">
              <Stat k="3+" v="Years building" />
              <Stat k="15+" v="Projects shipped" />
              <Stat k="6" v="Certifications" />
              <Stat k="1" v="AI product" />
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{group}</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <li key={s} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Experience" title="Where I've worked." />
        <div className="mt-16 space-y-2">
          {experience.map((e) => (
            <div key={e.role} className="grid grid-cols-12 gap-4 border-t border-border py-8 md:gap-8">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl">{e.role}</h3>
                <p className="mt-1 text-sm text-primary">{e.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-border" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Education</h4>
          <div className="mt-4 grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
            <div>
              <p className="font-display text-lg">M.Tech, Cyber Security</p>
              <p className="text-muted-foreground">Indus University · 2025 – Present</p>
            </div>
            <div>
              <p className="font-display text-lg">B.E, Information Technology</p>
              <p className="text-muted-foreground">SAL College of Engineering · 2021 – 2025</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-12">
          <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Certifications</h4>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-border py-3 transition-colors hover:border-primary"
                >
                  <span className="text-muted-foreground transition-colors group-hover:text-foreground">{c.name}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
            Have a project?
            <br />
            <em className="text-primary">Let&apos;s build it.</em>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="yashgohel04@gmail.com" href="mailto:yashgohel04@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 99980 56076" href="tel:+919998056076" />
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Based in" value="Ahmedabad, India" />
            </div>
            <div className="space-y-4">
              <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="github.com/yashgohel" href="https://github.com/YJGohel03" />
              <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="linkedin.com/yashgohel" href="https://linkedin.com/in/yash-gohel-3a8424312" />
            </div>
          </div>
        </div>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Yash Gohel. All rights reserved.</p>
            <p>Designed & built with care in Ahmedabad.</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

function SectionHeader({ eyebrow, title, count }: { eyebrow: string; title: string; count?: number }) {
  return (
    <div>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        {eyebrow}
        {count !== undefined && <span className="text-primary">({String(count).padStart(2, "0")})</span>}
      </div>
      <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-display text-3xl">{k}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{v}</p>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const Wrap: ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:border-primary"
    >
      <div className="flex items-center gap-4">
        <span className="text-primary">{icon}</span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className="mt-1 text-base">{value}</p>
        </div>
      </div>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />}
    </Wrap>
  );
}
