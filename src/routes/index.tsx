import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  UserCheck,
  Receipt,
  ArrowRight,
} from "lucide-react";
import frontYardAerial from "@/assets/work/front-yard-aerial.jpg";
import retainingWallBuild from "@/assets/work/retaining-wall-build.jpg";
import flagstonePoolPatio from "@/assets/work/flagstone-pool-patio.jpg";
import frontRetainingWall from "@/assets/work/front-retaining-wall.jpg";
import backyardSodSteps from "@/assets/work/backyard-sod-steps.jpg";
import poolsideGardenBed from "@/assets/work/poolside-garden-bed.jpg";
import glassRailingBalcony from "@/assets/work/glass-railing-balcony.jpg";
import vinylPlankTrim from "@/assets/work/vinyl-plank-trim.jpg";
import treeMulchBed from "@/assets/work/tree-mulch-bed.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Diamond Renovations — Renovations Cut to Precision | Aurora & GTA" },
      {
        name: "description",
        content:
          "Owner-run renovation crew led by Tyler. Kitchens, bathrooms, retaining walls, plumbing repairs and 24/7 emergency service across Aurora and the GTA.",
      },
      {
        property: "og:title",
        content: "Diamond Renovations — Renovations Cut to Precision",
      },
      {
        property: "og:description",
        content:
          "Fair quotes, honest timelines, and work finished the way it was promised. Free quotes across Aurora, Newmarket, Richmond Hill & the GTA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PHONE = "(647) 992-7114";
const EMAIL = "info@diamondrenovation.ca";

const GALLERY = [
  {
    src: frontYardAerial,
    title: "Front yard rebuild",
    meta: "Timber wall · beds · walkway",
    alt: "Aerial view of a finished front yard with a timber retaining wall, planted beds and a new stone walkway",
  },
  {
    src: retainingWallBuild,
    title: "Retaining wall build",
    meta: "Excavation to finished course",
    alt: "Newly built pressure-treated timber retaining wall wrapping a backyard grade",
  },
  {
    src: flagstonePoolPatio,
    title: "Flagstone pool surround",
    meta: "Laid, levelled, swept",
    alt: "Natural flagstone patio curving around the edge of a backyard pool",
  },
  {
    src: frontRetainingWall,
    title: "Street-side wall & beds",
    meta: "Grading, wall, planting",
    alt: "Long timber retaining wall holding a mulched garden bed along a residential street",
  },
  {
    src: backyardSodSteps,
    title: "Backyard reset",
    meta: "Fresh sod & cedar steps",
    alt: "Backyard with fresh sod, a timber retaining wall and new cedar steps beside a screened gazebo",
  },
  {
    src: poolsideGardenBed,
    title: "Poolside garden bed",
    meta: "Armour stone & mulch",
    alt: "Poolside garden bed edged with armour stone and finished in black mulch",
  },
  {
    src: glassRailingBalcony,
    title: "Glass balcony railing",
    meta: "Install & waterproof detail",
    alt: "Glass and aluminum balcony railing installed above a park at sunset",
  },
  {
    src: vinylPlankTrim,
    title: "Interior flooring & trim",
    meta: "Plank flooring, baseboard",
    alt: "Wide-plank vinyl flooring meeting freshly installed white baseboard trim",
  },
  {
    src: treeMulchBed,
    title: "Tree ring & cleanup",
    meta: "Small jobs, same standard",
    alt: "Freshly cut and mulched tree ring in a tidy backyard lawn",
  },
];

const FACETS: { id: string; label: string; points: string }[] = [
  { id: "f1", label: "Kitchens & Bathrooms", points: "100,20 160,70 130,70" },
  { id: "f2", label: "Retaining Walls", points: "100,20 130,70 70,70" },
  { id: "f3", label: "Landscaping", points: "100,20 70,70 40,70" },
  { id: "f4", label: "Plumbing Repairs", points: "40,70 70,70 100,180" },
  { id: "f5", label: "Fixture Fixes", points: "70,70 100,70 100,180" },
  { id: "f6", label: "Emergency Work, 24/7", points: "100,70 130,70 100,180" },
  { id: "f7", label: "Full Home Renovations", points: "130,70 160,70 100,180" },
  { id: "f8", label: "Owner On Site", points: "70,70 130,70 100,70" },
];

const SERVICES = [
  {
    title: "Kitchen & Bathroom Renovations",
    body: "Full remodels handled start to finish — the work our clients call us back for, again and again.",
  },
  {
    title: "Retaining Walls & Landscaping",
    body: "From removal to rebuild — structural work done on time, with improvements suggested along the way at no extra cost.",
  },
  {
    title: "Plumbing & Fixture Repair",
    body: "Loose faucets, leaks, and small fixes — treated with the same thoroughness as a full renovation.",
  },
  {
    title: "Emergency Repairs, 24/7",
    body: "Covered A to Z, day or night. If it can't wait, neither do we.",
  },
];

const STANDARD = [
  {
    n: "01",
    title: "Fair, honest quoting",
    body: "Clear pricing before work starts — clients describe the quote as fair and the final bill as matching it.",
  },
  {
    n: "02",
    title: "On time, every time",
    body: "Timely, punctual, and responsive are the words that come up most in our reviews — because it's the baseline, not the upsell.",
  },
  {
    n: "03",
    title: "Ideas at no extra cost",
    body: "Tyler brings suggestions to improve the project as he goes — value added, never billed.",
  },
  {
    n: "04",
    title: "Personally overseen",
    body: "Every crew member works to Tyler's own specifications, checked in on personally from first cut to final walkthrough.",
  },
];

const PROCESS = [
  {
    num: "01 · Quote",
    title: "Tell us the job",
    body: "Call, text, or send the form — Tyler gives you a fair, upfront quote with no pressure.",
  },
  {
    num: "02 · Plan",
    title: "We map the details",
    body: "Timeline, materials, and any improvement ideas are laid out before a single tool comes out.",
  },
  {
    num: "03 · Build",
    title: "The crew gets to work",
    body: "Punctual, professional, and checked in on daily to Tyler's own specifications.",
  },
  {
    num: "04 · Reveal",
    title: "Walkthrough & handoff",
    body: "We don't call it done until you do — and we're one call away for whatever comes next.",
  },
];

const REVIEWS = [
  {
    quote:
      "Needed an extremely loose faucet repaired. Tyler was timely, thorough, and did an amazing job! Highly recommend!",
    name: "Bernard Banks",
  },
  {
    quote:
      "Tyler was great to work with, did an excellent job on our bathroom reno, and was very professional! If you need a reno done, he's the guy to call!",
    name: "Braiden Hines",
  },
  {
    quote:
      "We had two retaining walls removed and replaced. The quote was fair and the job was done on time and to more than my satisfaction — he even had suggestions to improve the project at no extra cost.",
    name: "James Lawson",
  },
  {
    quote:
      "We dealt with Tyler and he was very professional and polite. Great experience — I would recommend to anyone.",
    name: "Reagan Singh",
  },
  {
    quote: "Tyler was fast, professional, and experienced. Responsiveness · Punctuality · Quality",
    name: "Neil Draper",
  },
  {
    quote:
      "If you ever need anything from A to Z — even emergencies — they've got you covered, 24 hours a day, 7 days a week.",
    name: "Sheikh Ayyaz Mahmood",
  },
];

function DiamondMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 22 9l-10 13L2 9l10-7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M2 9h20M12 2 8 9l4 13M12 2l4 7-4 13" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-brass text-brass" />
      ))}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Gem() {
  const [label, setLabel] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={wrapRef}
        className="relative mx-auto flex aspect-square items-center justify-center"
        onMouseLeave={() => setLabel(null)}
      >
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full max-w-[520px]"
          role="img"
          aria-label="Diamond diagram of our services"
        >
          <defs>
            <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--ice)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--ice)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--brass)" stopOpacity="0" />
            </linearGradient>
            <clipPath id="gemClip">
              <polygon points="100,20 160,70 100,180 40,70" />
            </clipPath>
          </defs>
          {FACETS.map((f) => (
            <polygon
              key={f.id}
              className="facet"
              points={f.points}
              onMouseMove={(e) => {
                const r = wrapRef.current?.getBoundingClientRect();
                if (!r) return;
                setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
                setLabel(f.label);
              }}
              onFocus={() => setLabel(f.label)}
              tabIndex={0}
            >
              <title>{f.label}</title>
            </polygon>
          ))}
          <g clipPath="url(#gemClip)">
            <rect className="gem-shine" x="20" y="0" width="60" height="200" fill="url(#shine)" />
          </g>
          <polygon
            points="100,20 160,70 100,180 40,70"
            fill="none"
            stroke="var(--ice)"
            strokeOpacity="0.5"
            strokeWidth="1.2"
          />
        </svg>
        {label && (
          <span
            className="gem-label pointer-events-none absolute z-10 whitespace-nowrap border border-[var(--line-strong)] bg-charcoal px-3 py-2 font-mono text-[0.72rem] tracking-wide text-foreground"
            style={{ left: pos.x + 14, top: pos.y - 8 }}
          >
            {label}
          </span>
        )}
      </div>
      <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.1em] text-platinum-dim">
        Hover a facet — every job, one standard
      </p>
    </div>
  );
}

function Index() {
  useReveal();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-[6vw] py-[1.15rem]">
          <a href="#top" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold">
            <DiamondMark className="h-5 w-5 text-ice" />
            <span>
              DIAMOND <span className="text-ice">RENOVATIONS</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-[0.88rem] text-platinum md:flex">
            {[
              ["Services", "#services"],
              ["The Standard", "#standard"],
              ["Process", "#process"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="hidden items-center gap-2 font-mono text-[0.82rem] text-platinum md:flex"
            >
              <Phone className="h-3.5 w-3.5 text-ice" />
              {PHONE}
            </a>
            <a href="#contact" className="btn btn-solid">
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-26"
        style={{ background: "var(--obsidian)" }}
      >
        <img
          src={frontYardAerial}
          alt="Completed front yard renovation with timber retaining wall, garden beds and stone walkway"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 78% 18%, oklch(0.877 0.062 210 / 0.12), transparent 60%), linear-gradient(100deg, var(--obsidian) 18%, oklch(0.145 0.006 285 / 0.82) 55%, oklch(0.145 0.006 285 / 0.62))",
          }}
        />
        <div className="wrap relative grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Aurora &amp; the Greater Toronto Area</p>
            <h1 className="my-6 text-[clamp(2.6rem,5.4vw,4.5rem)]">
              Renovations
              <br />
              <em className="facet-text">cut to precision.</em>
            </h1>
            <p className="mb-8 max-w-[38ch] text-[1.08rem] text-platinum">
              Diamond Renovations is a small, owner-run crew led by Tyler — built on fair quotes,
              honest timelines, and work that's finished the way it was promised. From a single
              loose faucet to a full backyard rebuild.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-solid">
                Request Your Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#reviews" className="btn btn-ghost">
                Read the Reviews
              </a>
            </div>
            <div className="flex flex-wrap gap-9 border-t border-border pt-6">
              {[
                ["5.0", "Average Google rating"],
                ["24/7", "Emergency response"],
                ["A–Z", "Repairs to full renovations"],
              ].map(([num, lbl]) => (
                <div key={lbl} className="flex flex-col gap-0.5">
                  <span className="font-display text-2xl font-semibold">{num}</span>
                  <span className="text-[0.76rem] tracking-wide text-platinum-dim">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-first mx-auto w-full max-w-[280px] lg:order-none lg:max-w-none">
            <Gem />
          </div>
        </div>
      </section>

      <div className="facet-divider" />

      {/* Trust bar */}
      <div className="band py-9">
        <div className="wrap flex flex-wrap justify-between gap-6">
          {[
            [<Star key="s" className="h-4.5 w-4.5 text-ice" />, "5.0 / 5", "average rating on Google"],
            [<UserCheck key="u" className="h-4.5 w-4.5 text-ice" />, "Owner-run", "— Tyler is on every job site"],
            [<Clock key="c" className="h-4.5 w-4.5 text-ice" />, "24/7", "emergency availability"],
            [<Receipt key="r" className="h-4.5 w-4.5 text-ice" />, "Fair, upfront quotes", "— no surprises"],
          ].map(([icon, bold, rest], i) => (
            <div key={i} className="flex items-center gap-3 text-[0.92rem] text-platinum">
              {icon}
              <span>
                <b className="font-bold text-foreground">{bold}</b> {rest}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">What We Do</p>
            <h2>One crew, every facet of the job.</h2>
            <p>
              Diamond Renovations handles renovation work at every scale — the same care whether
              it's a five-minute fix or a five-week build.
            </p>
          </div>
          <div className="grid-hairline reveal grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-4 bg-background px-8 py-10 transition-colors hover:bg-charcoal"
              >
                <DiamondMark className="h-8 w-8 text-ice" />
                <h3 className="text-[1.15rem]">{s.title}</h3>
                <p className="text-[0.9rem] text-platinum-dim">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standard */}
      <section id="standard" className="band section">
        <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow">The Diamond Standard</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.9rem)]">
              Pressure makes diamonds. Care makes them last.
            </h2>
            <blockquote className="mt-8 border-l-2 border-ice pl-6 font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium italic leading-snug">
              "Tyler is trustworthy and delivers as he has promised… he checks on people that he has
              working for him to ensure everything is done to his specifications."
              <cite className="mt-4 block font-mono text-[0.78rem] not-italic tracking-wide text-platinum-dim">
                — Heather Hansen, Google Review
              </cite>
            </blockquote>
          </div>
          <div className="reveal flex flex-col gap-8">
            {STANDARD.map((row, i) => (
              <div
                key={row.n}
                className={
                  i === STANDARD.length - 1
                    ? "flex gap-6"
                    : "flex gap-6 border-b border-border pb-8"
                }
              >
                <span className="w-9 flex-none pt-1 font-mono text-[0.78rem] text-ice">{row.n}</span>
                <div>
                  <h4 className="mb-1.5 text-[1.05rem]">{row.title}</h4>
                  <p className="text-[0.92rem] text-platinum-dim">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">How It Works</p>
            <h2>From first call to final walkthrough.</h2>
          </div>
          <div className="reveal grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.num} className="relative pt-7">
                <span className="absolute left-0 top-0 h-px w-10 bg-brass" />
                <span className="font-mono text-[0.78rem] tracking-[0.1em] text-brass">{p.num}</span>
                <h3 className="mb-2 mt-3 text-[1.15rem]">{p.title}</h3>
                <p className="text-[0.9rem] text-platinum-dim">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work gallery */}
      <section id="work" className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Recent Work</p>
            <h2>Jobs finished across the GTA.</h2>
            <p>
              Retaining walls, stonework, yard rebuilds, railings and interior finishing — photos
              straight from Tyler&apos;s job sites.
            </p>
          </div>
          <div className="grid-hairline reveal grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {GALLERY.map((g) => (
              <figure key={g.title} className="group relative overflow-hidden bg-background">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: "var(--ease)" }}
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 px-6 py-5"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.145 0.006 285 / 0.94), transparent)",
                  }}
                >
                  <h3 className="text-[1.02rem]">{g.title}</h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-platinum-dim">
                    {g.meta}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews */}
      <section id="reviews" className="band section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Client Reviews</p>
            <h2>What it's like to work with us.</h2>
          </div>
          <div className="grid-hairline reveal grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex min-h-[230px] flex-col justify-between gap-4 bg-background px-8 py-9"
              >
                <div className="flex flex-col gap-4">
                  <Stars />
                  <blockquote className="text-[0.95rem] leading-relaxed text-platinum">
                    "{r.quote}"
                  </blockquote>
                </div>
                <figcaption className="font-mono text-[0.76rem] tracking-wide text-platinum-dim">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="wrap">
        <div className="grid items-center gap-12 border-t border-border py-22 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <p className="eyebrow">Get Started</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)]">
              Your project deserves the same finish, every time.
            </h2>
            <p className="mt-4 max-w-[46ch] text-platinum">
              Whether it's one loose faucet or a full home renovation, request a free, no-pressure
              quote and hear back directly from Tyler.
            </p>
            <a href="#contact" className="btn btn-solid mt-7">
              Request Your Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="reveal flex flex-col gap-3.5 border border-[var(--line-strong)] bg-charcoal p-9">
            <p className="eyebrow eyebrow-brass">Emergency? We're on call</p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-display text-[1.9rem] font-semibold"
            >
              {PHONE}
            </a>
            <p className="text-[0.86rem] text-platinum-dim">
              Covered A–Z, 24 hours a day, 7 days a week — call anytime, no answering service.
            </p>
          </div>
        </div>
      </section>

      <div className="facet-divider" />

      {/* Contact */}
      <section id="contact" className="section">
        <div className="wrap grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.9rem)]">Request your free quote.</h2>
            <p className="mt-4 max-w-[46ch] text-platinum">
              Send a few details about the job and Tyler will get back to you personally — usually
              the same day.
            </p>
            <div className="mt-9 flex flex-col gap-7">
              {[
                [<Phone key="p" className="mt-0.5 h-5 w-5 flex-none text-ice" />, "Phone", `${PHONE} — 24/7 for emergencies`],
                [<Mail key="m" className="mt-0.5 h-5 w-5 flex-none text-ice" />, "Email", "hello@diamondrenovations.ca"],
                [<MapPin key="l" className="mt-0.5 h-5 w-5 flex-none text-ice" />, "Service Area", "Aurora, Newmarket, Richmond Hill & the wider GTA"],
              ].map(([icon, title, body], i) => (
                <div key={i} className="flex items-start gap-4">
                  {icon}
                  <div>
                    <h4 className="mb-1 text-[0.95rem]">{title}</h4>
                    <p className="text-[0.88rem] text-platinum-dim">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal grid grid-cols-1 gap-4 border border-border bg-charcoal p-9 sm:grid-cols-2"
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="(905) 000-0000" />
            </div>
            <div className="field sm:col-span-2">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@email.com" />
            </div>
            <div className="field sm:col-span-2">
              <label htmlFor="type">Type of Project</label>
              <select id="type" name="type" defaultValue="Kitchen or Bathroom Renovation">
                <option>Kitchen or Bathroom Renovation</option>
                <option>Retaining Wall / Landscaping</option>
                <option>Plumbing / Fixture Repair</option>
                <option>Emergency Repair</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field sm:col-span-2">
              <label htmlFor="details">Project Details</label>
              <textarea id="details" name="details" placeholder="Tell us about the job…" />
            </div>
            <button type="submit" className="btn btn-solid mt-1 justify-center sm:col-span-2">
              Request Your Free Quote
            </button>
            {sent && (
              <p
                role="status"
                className="font-mono text-[0.76rem] tracking-wide text-ice sm:col-span-2"
              >
                Thanks — Tyler will get back to you personally, usually the same day.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-border pb-10 pt-13">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-2.5 font-display text-[0.98rem] font-bold">
              <DiamondMark className="h-5 w-5 text-ice" />
              <span>
                DIAMOND <span className="text-ice">RENOVATIONS</span>
              </span>
            </div>
            <div className="flex gap-7 text-[0.82rem] text-platinum-dim">
              <a href="#services" className="hover:text-foreground">
                Services
              </a>
              <a href="#reviews" className="hover:text-foreground">
                Reviews
              </a>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
          <p className="mt-6 text-[0.78rem] text-platinum-dim">
            © 2026 Diamond Renovations. Owner-operated by Tyler. Serving Aurora & the Greater
            Toronto Area, 24/7.
          </p>
        </div>
      </footer>
    </div>
  );
}
