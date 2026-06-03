import Image from 'next/image'
import Link from 'next/link'
import { HeartHandshake, Quote, UserRound, type LucideIcon } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FadeUpObserver from './components/FadeUpObserver'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Roi Odenigbo Foundation - Compassion in Action',
  description:
    'El Roi Odenigbo Foundation brings compassion and hope to vulnerable communities through education, health support, and skills empowerment in Nigeria.',
}

const testimonials = [
  {
    quote:
      "The Foundation gave my children school supplies and food during Christmas. That day, my children smiled in a way I hadn't seen in years. We are forever grateful.",
    name: 'Grace Ameh',
    role: 'Beneficiary, Benue State',
    icon: UserRound,
    label: 'Community Beneficiary',
  },
  {
    quote:
      "After losing my husband, I didn't know how to survive. El Roi Odenigbo Foundation taught me tailoring skills and helped me start my own small business.",
    name: 'Blessing Okpara',
    role: "Women's Empowerment Graduate",
    icon: UserRound,
    label: 'Skills Empowerment',
  },
  {
    quote:
      'Supporting this Foundation changed how I see service. Every child we helped reminded me why giving back matters so deeply.',
    name: 'Emmanuel Oche',
    role: 'Program Supporter',
    icon: UserRound,
    label: 'Supporter Voice',
  },
] satisfies Array<{
  quote: string
  name: string
  role: string
  icon: LucideIcon
  label: string
}>

const heroPillars = [
  'Youth & Education',
  'Widow Support',
  'Community Outreach',
]

const programCards = [
  {
    img: '/images/Image_3.jpeg',
    tag: 'Youth & Education',
    title: 'Empowering Youth',
    desc: 'Educational resources, job skills training, and mentorship equip young people from underserved communities with tools to pursue their dreams.',
    note: 'Learning pathways that open futures',
    imagePosition: 'center center',
    alt: 'Children learning together in a classroom supported by education programs',
  },
  {
    img: '/images/Image_2.jpeg',
    tag: 'Widows & Widowers',
    title: 'Empowering the Grieving',
    desc: 'Skill-building initiatives and small business creation provide long-term financial stability for widows and widowers.',
    note: 'Dignity, resilience, and financial independence',
    imagePosition: 'center center',
    alt: 'A smiling woman building self-reliance through livelihood support',
  },
  {
    img: '/images/Outreach_Lagos/Image_4.jpeg',
    tag: 'Community',
    title: 'Systemic Change',
    desc: 'Collaborating with governments and organizations to advocate for lasting solutions that improve living conditions for the underprivileged.',
    note: 'Partnership-led solutions with lasting reach',
    imagePosition: 'center center',
    alt: 'Children, families, and volunteers gathered around outreach support supplies',
  },
]

const ctaReasons = [
  'Support education, health, and skills programs',
  'Stand with vulnerable families across Nigeria',
  'Help fund practical community outreach',
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FadeUpObserver />

      <section className="hero">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-inner">
          <div className="hero-content fade-up">
            <div className="hero-badge">
              <span></span> Non-Profit Organization - Nigeria
            </div>
            <h1 className="hero-title">
              <span>Compassion in</span>
              <span>Action,</span>
              <span className="highlight">Hope for All.</span>
            </h1>
            <p className="hero-subtitle">
              El Roi Odenigbo Foundation stands beside underprivileged communities
              across Nigeria with education support, health assistance, skills
              empowerment, and grassroots outreach that restores dignity and hope.
            </p>
            <div className="hero-actions">
              <Link href="/mission" className="btn btn-primary">
                Our Mission
              </Link>
              <Link href="/outreach" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
            <div className="hero-pillars">
              {heroPillars.map((pillar) => (
                <span className="hero-pillar" key={pillar}>
                  {pillar}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-img-wrap fade-up" style={{ animationDelay: '.2s' }}>
            <div className="hero-img-topnote">
              <span className="hero-img-topnote-dot"></span>
              <span>Benue Outreach</span>
              <span className="hero-img-topnote-sep">December 2023</span>
            </div>
            <Image
              src="/images/Image_1.jpeg"
              alt="A joyful child surrounded by her community during foundation outreach"
              width={600}
              height={440}
              style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              priority
            />
            <div className="hero-img-badge">
              <div className="hero-img-badge-icon" aria-hidden="true">
                <HeartHandshake />
              </div>
              <div className="hero-img-badge-text">
                <strong>Est. 2016</strong>
                <span>Serving Communities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '4', label: 'Active Programs' },
              { num: '3', label: 'Core Pillars of Service' },
              { num: 'Benue', label: '2023 Outreach Location' },
              { num: '100%', label: 'Community-Driven' },
            ].map((s, i) => (
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

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Programs Built for Real Change</h2>
            <p className="section-desc">
              Our initiatives focus on three core pillars that respond to urgent
              needs while building long-term change in the communities we serve.
            </p>
          </div>
          <div className="programs-grid">
            {programCards.map((card, i) => (
              <div
                className="program-card fade-up"
                key={card.title}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="program-card-img">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    width={400}
                    height={200}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: card.imagePosition,
                    }}
                  />
                </div>
                <div className="program-card-body">
                  <div className="program-card-tag">{card.tag}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <div className="program-card-note">{card.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split fade-up">
            <div className="split-img">
              <div className="split-img-label">Foundation Team</div>
              <Image
                src="/images/Outreach_Lagos/Image_3.jpeg"
                alt="Foundation team members standing together beside donated supplies"
                width={560}
                height={420}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
              />
            </div>
            <div>
              <div className="section-tag">Our Journey</div>
              <h2 className="section-title">A Foundation Built on Compassion</h2>
              <p className="section-desc">
                At El Roi Odenigbo Foundation, we bring years of experience in
                humanitarian service, focusing on uplifting underprivileged
                communities. Our dedicated team utilizes a compassionate approach,
                combining resources and expertise to create meaningful change.
              </p>
              <br />
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                Our staff comprises passionate team members and skilled professionals,
                each committed to making a tangible difference. Together, we strive
                to inspire hope and foster resilience among those we serve.
              </p>
              <br />
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="testimonial-strip">
        <div className="container">
          <div className="section-heading-center fade-up" style={{ color: 'white' }}>
            <div className="section-tag" style={{ color: 'rgba(255,255,255,.75)' }}>
              Voices
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Stories that Inspire Us
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => {
              const Icon = t.icon

              return (
                <div
                  className="testimonial-card fade-up"
                  key={t.name}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="testimonial-card-tag">{t.label}</div>
                  <p>&quot;{t.quote}&quot;</p>
                  <div className="testimonial-meta">
                    <div className="testimonial-avatar" aria-hidden="true">
                      <Quote className="testimonial-quote-icon" />
                      <Icon />
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
