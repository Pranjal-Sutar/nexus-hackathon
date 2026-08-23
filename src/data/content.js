import { Code2, Cpu, Globe2, Layers3, Sparkles, Trophy, Users } from "lucide-react";

export const navItems = [
  "About",
  "Timeline",
  "Rules",
  "Sponsors",
  "Judges",
  "Challenges",
  "Prizes",
  "FAQ",
];

export const heroMeta = [
  { label: "DATE", value: "24 - 25 OCT 2026" },
  { label: "LOCATION", value: "MUMBAI · INDIA" },
  { label: "PRIZE POOL", value: "₹2,00,000+" },
];

export const featureCards = [
  { Icon: Code2, label: "BUILD", text: "Turn ideas into working prototypes." },
  { Icon: Users, label: "CONNECT", text: "Find people who think differently." },
  { Icon: Trophy, label: "COMPETE", text: "Push your limits and win big." },
];

export const timelineItems = [
  { time: "09:00", title: "ARRIVAL", description: "Check in. Meet your team. Enter the Nexus." },
  { time: "10:00", title: "IDEATION", description: "Find the problem worth solving." },
  { time: "12:00", title: "BUILD", description: "The clock starts. Make it real." },
  { time: "18:00", title: "MIDNIGHT RUN", description: "Keep building. Keep pushing." },
  { time: "09:00", title: "SUBMISSION", description: "Ship your final creation." },
  { time: "11:00", title: "DEMO DAY", description: "Show the world what you built." },
];

export const rulesItems = [
  {
    title: "Eligibility.",
    text: "Open to all currently enrolled college students, teams of 2–4 members.",
  },
  {
    title: "Original work only.",
    text: "All code must be written during the 24-hour window. Prior designs and open-source libraries are allowed and must be credited.",
  },
  {
    title: "Team registration.",
    text: "Every member must register individually and be added to a single team before the event starts.",
  },
  {
    title: "Submission.",
    text: "Projects must be submitted with a public GitHub repository and a working demo before the deadline. Late submissions are not accepted.",
  },
  {
    title: "Conduct.",
    text: "Participants are expected to follow the code of conduct at all times; harassment of any kind will result in disqualification.",
  },
  {
    title: "Judging.",
    text: "Projects are scored on innovation, technical execution, design and presentation by the judging panel. Decisions are final.",
  },
];

export const sponsorTiers = [
  {
    label: "TITLE SPONSOR",
    rowClass: "tier-title",
    sponsors: ["YOUR LOGO HERE"],
  },
  {
    label: "GOLD SPONSORS",
    rowClass: "tier-gold",
    sponsors: ["SPONSOR", "SPONSOR", "SPONSOR"],
  },
  {
    label: "SILVER SPONSORS",
    rowClass: "tier-silver",
    sponsors: ["SPONSOR", "SPONSOR", "SPONSOR", "SPONSOR"],
  },
];

export const judges = [
  { name: "A. SHARMA", role: "Engineering Lead, Fintech" },
  { name: "R. MEHTA", role: "Founder, AI Startup" },
  { name: "K. IYER", role: "Product Design Mentor" },
  { name: "S. RAO", role: "Open Source Maintainer" },
];

export const challenges = [
  { Icon: Cpu, number: "01", title: "AI / ML", text: "Build intelligent systems that solve real problems." },
  { Icon: Globe2, number: "02", title: "WEB3", text: "Create the next generation of connected experiences." },
  { Icon: Layers3, number: "03", title: "FINTECH", text: "Reimagine the way people interact with finance." },
  { Icon: Sparkles, number: "04", title: "OPEN INNOVATION", text: "No rules. Just an idea worth building." },
];

export const prizeBreakdown = [
  { place: "01", amount: "₹1,00,000", label: "GRAND PRIZE" },
  { place: "02", amount: "₹50,000", label: "RUNNER UP" },
  { place: "03", amount: "₹25,000", label: "SECOND RUNNER UP" },
];

export const faqItems = [
  {
    question: "Who can participate?",
    answer: "Students, developers, designers and creators ready to build are welcome. See Rules & Eligibility for full details.",
  },
  {
    question: "Do I need a team?",
    answer: "You can arrive with a team or find your teammates during the event.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, ideas and enough energy to build for 24 hours.",
  },
  {
    question: "Is there a registration fee?",
    answer: "Registration is completely free.",
  },
];

// TODO: replace with your live registration form/typeform URL
export const registrationUrl = "https://forms.gle/replace-with-your-registration-form";