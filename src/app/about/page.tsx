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
import TemporaryDisabledLink from '../components/TemporaryDisabledLink'
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
        <div className="container fade-up">
          <div className="section-tag">Who We Are</div>
          <h1>About Us</h1>
          <p>
            Years of experience in humanitarian service, focusing on uplifting
            underprivileged communities with compassion and purpose.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split fade-up">
            <div>
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">Our Journey of Compassion</h2>
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
                  fontSize: '.98rem',
                }}
              >
                Our staff comprises passionate volunteers and skilled professionals,
                each committed to making a tangible difference. Together, we strive
                to inspire hope and foster resilience among those we serve.
              </p>
              <br />
              <br />
              <Link href="/mission" className="btn btn-primary">
                Explore Our Mission
              </Link>
            </div>
            <div className="split-img">
              <Image
                src="/images/team-foundation.png"
                alt="El Roi Odenigbo Foundation staff and volunteer team"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '3', label: 'Core Commitment Areas' },
              { num: '4', label: 'Active Programs' },
              { num: '100%', label: 'Volunteer-Powered' },
              { num: '∞', label: 'Hope We Share' },
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
            <div className="section-tag">Our Commitment</div>
            <h2 className="section-title">Why We Do This</h2>
            <p className="section-desc">
              Three pillars that define our purpose and guide every program we run.
            </p>
          </div>
          <div className="pillars" style={{ marginTop: 56 }}>
            {commitments.map((c, i) => (
              <div
                className="pillar fade-up"
                key={c.num}
                style={{ background: c.bg, transitionDelay: `${i * 0.12}s` }}
              >
                <div className="pillar-num" style={{ color: c.color }}>
                  {c.num}
                </div>
                <h3 style={{ color: 'var(--text-dark)', marginBottom: 12 }}>
                  {c.title}
                </h3>
                <p style={{ color: 'var(--text-mid)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split reverse fade-up">
            <div className="split-img">
              <Image
                src="/images/outreach-distribution.png"
                alt="Community outreach and support distribution in Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="section-tag">Get Involved Today</div>
              <h2 className="section-title">Be Part of Something Bigger</h2>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  marginBottom: 20,
                }}
              >
                Every act of kindness counts, and your support can make a world of
                difference. Whether you choose to volunteer, donate, or simply spread
                the word about our mission, your involvement helps us continue
                bringing hope and change to those who need it most.
              </p>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  marginBottom: 32,
                }}
              >
                At El Roi Odenigbo Foundation, we&apos;re creating a brighter, more
                compassionate future, one step at a time.
              </p>
              <p
                style={{
                  color: 'var(--text-dark)',
                  lineHeight: 1.8,
                  fontSize: '1rem',
                  marginBottom: 32,
                  fontWeight: 700,
                }}
              >
                Join us today and be part of something bigger than yourself.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <TemporaryDisabledLink className="btn btn-primary">
                  Donate Now
                </TemporaryDisabledLink>
                <TemporaryDisabledLink className="btn btn-secondary">
                  Volunteer
                </TemporaryDisabledLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">What We Offer</div>
            <h2 className="section-title">Our Programs & Services</h2>
            <p className="section-desc">
              Four focused programs delivering real support to the communities that
              need it most.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 28,
              marginTop: 56,
            }}
          >
            {services.map((s, i) => {
              const Icon = s.icon

              return (
                <div
                  className="card fade-up"
                  key={s.num}
                  style={{
                    padding: '36px 32px',
                    borderLeft:
                      '4px solid ' +
                      (i % 2 === 0 ? 'var(--orange)' : 'var(--green)'),
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          i % 2 === 0
                            ? 'var(--orange-soft)'
                            : 'var(--green-soft)',
                        color: i % 2 === 0 ? 'var(--orange)' : 'var(--green)',
                      }}
                    >
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '.75rem',
                          fontWeight: 700,
                          letterSpacing: '.08em',
                          color: i % 2 === 0 ? 'var(--orange)' : 'var(--green)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.num}
                      </div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '.93rem',
                      color: 'var(--text-mid)',
                      lineHeight: 1.75,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2>Get Involved Today</h2>
              <p>
                Every act of kindness counts. Join us and be part of something
                bigger than yourself.
              </p>
            </div>
            <div className="cta-banner-actions">
              <TemporaryDisabledLink className="btn btn-white">
                Donate Now
              </TemporaryDisabledLink>
              <TemporaryDisabledLink
                className="btn"
                style={{
                  background: 'rgba(255,255,255,.15)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,.4)',
                }}
              >
                Our Outreach
              </TemporaryDisabledLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
