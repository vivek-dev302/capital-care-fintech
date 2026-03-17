export type NavItem =
  | {
      label: string;
      href: string;
      items?: undefined;
    }
  | {
      label: string;
      href?: undefined;
      items: { label: string; href: string }[];
    };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Loans",
    items: [
      { label: "Personal Loan", href: "/loans" },
      { label: "Business Loan", href: "/loans" },
      { label: "In-demand Loans", href: "/#in-demand-loans" },
    ],
  },
  {
    label: "Insurance",
    items: [
      { label: "Health Insurance", href: "/insurance" },
      { label: "Life Insurance", href: "/insurance" },
      { label: "Motor Insurance", href: "/insurance" },
    ],
  },
  { label: "Credit-Score", href: "/credit-score" },
  { label: "Contact-Us", href: "/contact-us" },
  { label: "About-us", href: "/about-us" },
];

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "Loans",
    title: "Fast approvals, transparent rates.",
    description:
      "Compare loan options built for your goals — from short-term needs to long-term growth.",
    ctaLabel: "Explore loans",
    ctaHref: "/loans",
  },
  {
    eyebrow: "Insurance",
    title: "Coverage that actually fits.",
    description:
      "Pick plans with clear benefits, flexible add-ons, and support when you need it most.",
    ctaLabel: "Explore insurance",
    ctaHref: "/insurance",
  },
];

export type InDemandCard = {
  title: string;
  subtitle: string;
  href: string;
};

export const IN_DEMAND_LOANS: InDemandCard[] = [
  { title: "Personal", subtitle: "Instant to 24h", href: "/loans" },
  { title: "Education", subtitle: "Pay as you learn", href: "/loans" },
  { title: "Business", subtitle: "Grow smarter", href: "/loans" },
  { title: "Home", subtitle: "Long-term comfort", href: "/loans" },
];

export type Review = {
  name: string;
  role: string;
  quote: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Aarav",
    role: "Small business owner",
    quote:
      "The comparison was clear and the process felt calm — no surprises, no confusing fine print.",
  },
  {
    name: "Meera",
    role: "Salaried professional",
    quote:
      "I checked my credit score and explored options in minutes. The UI is simple and trustworthy.",
  },
  {
    name: "Karan",
    role: "Founder",
    quote:
      "Clean dashboard and quick support. The loan overview helped me plan cash flow properly.",
  },
];

export type Partner = { name: string };

export const PARTNERS: Partner[] = [
  { name: "CapitalCare Bank" },
  { name: "BlueShield Insurance" },
  { name: "Nimbus Payments" },
  { name: "SecureScore" },
  { name: "Atlas Lending" },
  { name: "Harbor Finance" },
];

