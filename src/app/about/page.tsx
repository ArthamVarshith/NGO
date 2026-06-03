import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpenText,
  Handshake,
  HeartPulse,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - El Roi Odenigbo Foundation',
  description:
    'Learn about El Roi Odenigbo Foundation - our journey of compassion, our commitment to empowering youth, widows, and communities across Nigeria.',
}

const commitments = [
  {
    num: '01',
    title: 'Empowering Youth & Education',
    desc: 'We believe that the foundation for a better future begins with education and opportunity. By offering educational resources, job skills training, and mentorship, we equip young people from underserved communities with the tools they need to rise above their circumstances and pursue their dreams.',
    bg: 'var(--orange-soft)',
    color: 'var(--orange)',
  },
  {
    num: '02',
    title: 'Empowering Widows & Widowers',
    desc: 'We stand by the widowed and the grieving, offering them hope through skill-building initiatives and the creation of small businesses that provide long-term financial stability. Our goal is to give widows and widowers the opportunity to care for their families with dignity and independence.',
    bg: 'var(--green-soft)',
    color: 'var(--green)',
  },
  {
    num: '03',
    title: 'Engaging for Systemic Change',
    desc: "We understand that sustainable change is achieved through collaboration. That's why we work alongside local governments, organizations, and individuals to advocate for lasting solutions that improve the overall living conditions of the underprivileged. Together, we can break the cycle of poverty and create a more inclusive society.",
    bg: 'var(--orange-soft)',
    color: 'var(--orange)',
  },
]

const services = [
  {
    num: '01',
    icon: HeartPulse,
    title: 'Health Support',
    desc: 'We focus on improving health outcomes for orphans and widows through regular health check-ups and medical assistance. By collaborating with local healthcare providers, we ensure access to necessary treatments and preventive care.',
  },
  {
    num: '02',
    icon: BookOpenText,
    title: 'Education Advancement',
    desc: 'We assist young people from deprived backgrounds by providing scholarships, tutoring programs, and vocational training to enhance their educational opportunities and employability in the future.',
  },
  {
    num: '03',
    icon: Settings,
    title: 'Skill Acquisition',
    desc: 'Through tailored skill acquisition programs, we help widows and widowers to develop sustainable skills that empower them to create small enterprises and improve their financial stability.',
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Community Engagement',
    desc: 'We actively engage with governmental bodies and organizations to advocate for policies supporting the underprivileged. By working collaboratively, we seek to enhance the impact of our initiatives and broaden our reach.',
  },
] satisfies Array<{
  num: string
  icon: LucideIcon
  title: string
  desc: string
}>

const storyHighlights = [
  'Compassion-first service',
  'Community-led execution',
  'Community-rooted impact',
]

const aboutStats = [
  { num: '3', label: 'Core Commitment Areas' },
  { num: '4', label: 'Active Programs' },
  { num: '100%', label: 'Community-Driven' },
  { num: '100%', label: 'Hope We Share' },
]

const involvementHighlights = [
  'Show up on the ground',
  'Support practical outreach',
  'Help amplify our mission',
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FadeUpObserver />

      <section className="page-hero">
        <div
          className="page-hero-blob"
          style={{
            width: 400,
            height: 400,
            background: 'rgba(232,98,42,.2)',
            top: -80,
            right: -80,
          }}
        ></div>
        <div
          className="page-hero-blob"
          style={{
            width: 300,
            height: 300,
            background: 'rgba(45,125,79,.2)',
            bottom: -60,
            left: -60,
          }}
        ></div>
        <div className="container">
          <div className="about-hero-shell fade-up">
            <div className="section-tag">Who We Are</div>
            <h1>About Us</h1>
            <p>
              Years of experience in humanitarian service, focusing on uplifting
              underprivileged communities with compassion and purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container">
          <div className="split about-story fade-up">
            <div className="about-story-copy">
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">Our Journey of Compassion</h2>
              <p className="section-desc about-story-lead">
                At El Roi Odenigbo Foundation, we bring years of experience in
                humanitarian service, focusing on uplifting underprivileged
                communities. Our dedicated team utilizes a compassionate approach,
                combining resources and expertise to create meaningful change.
              </p>
              <p className="about-story-text">
                Our staff comprises passionate team members and skilled professionals,
                each committed to making a tangible difference. Together, we strive
                to inspire hope and foster resilience among those we serve.
              </p>
              <div className="about-story-note">
                We work with care, local understanding, and practical action so
                support reaches people in ways that truly matter.
              </div>
              <Link href="/mission" className="btn btn-primary">
                Explore Our Mission
              </Link>
            </div>
            <div className="split-img about-story-image">
              <div className="split-img-label">Dedicated Team</div>
              <Image
                src="/images/Outreach_Lagos/Image_5.jpeg"
                alt="El Roi Odenigbo Foundation staff and support team"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div className="about-story-card">
                <strong>Years of lived commitment</strong>
                <span>Serving communities with empathy, consistency, and hope.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip about-stats-strip">
        <div className="container">
          <div className="stats-grid about-stats-grid">
            {aboutStats.map((s, i) => (
              <div
                className="stat-item fade-up"
                key={s.label}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section bg-off-white about-commitment-section">
        <div className="container">
          <div className="section-heading-center fade-up about-commitment-heading">
            <div className="section-tag">Our Commitment</div>
            <h2 className="section-title">Why We Do This</h2>
            <p className="section-desc">
              Three pillars that define our purpose and guide every program we run.
            </p>
          </div>
          <div className="pillars about-commitment-grid">
            {commitments.map((c, i) => (
              <div
                className="pillar about-commitment-card fade-up"
                key={c.num}
                style={{
                  background: c.bg,
                  borderTop: `4px solid ${c.color}`,
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div className="about-commitment-num" style={{ color: c.color }}>
                  {c.num}
                </div>
                <h3 className="about-commitment-title">{c.title}</h3>
                <p className="about-commitment-text">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-involvement-section">
        <div className="container">
          <div className="split reverse fade-up about-involvement">
            <div className="split-img about-involvement-image">
              <div className="split-img-label">Community Outreach</div>
              <Image
                src="/images/Outreach_Lagos/Image_7.jpeg"
                alt="Foundation volunteers handing support items to children and families during community outreach"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div className="about-involvement-card">
                <strong>Real support, directly delivered</strong>
                <span>Every act of support helps move hope into action.</span>
              </div>
            </div>
            <div className="about-involvement-copy">
              <div className="section-tag">Get Involved Today</div>
              <h2 className="section-title">Be Part of Something Bigger</h2>
              <p className="about-involvement-text">
                Every act of kindness counts, and your support can make a world of
                difference. Whether you choose to partner with us, support our
                outreach, or simply spread the word about our mission, your
                involvement helps us continue bringing hope and change to those who
                need it most.
              </p>
              <p className="about-involvement-text about-involvement-text-last">
                At El Roi Odenigbo Foundation, we&apos;re creating a brighter, more
                compassionate future, one step at a time.
              </p>

              <p className="about-involvement-callout">
                Join us today and be part of something bigger than yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white about-services-section">
        <div className="container">
          <div className="section-heading-center fade-up about-services-heading">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Our Programs & Services</h2>
            <p className="section-desc">
              Four focused programs delivering real support to the communities that
              need it most.
            </p>
          </div>
          <div className="about-services-grid">
            {services.map((s, i) => {
              const Icon = s.icon
              const accentColor = i % 2 === 0 ? 'var(--orange)' : 'var(--green)'
              const accentBg =
                i % 2 === 0 ? 'var(--orange-soft)' : 'var(--green-soft)'

              return (
                <div
                  className="card fade-up about-service-card"
                  key={s.num}
                  style={{
                    borderLeft: `4px solid ${accentColor}`,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div className="about-service-head">
                    <div
                      className="about-service-icon"
                      style={{ background: accentBg, color: accentColor }}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <div className="about-service-meta">
                      <div
                        className="about-service-num"
                        style={{ color: accentColor }}
                      >
                        {s.num}
                      </div>
                      <h3>{s.title}</h3>
                    </div>
                  </div>
                  <p className="about-service-text">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
