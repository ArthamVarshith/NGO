import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, CheckCircle2, HeartHandshake } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'
import TemporaryDisabledLink from '../components/TemporaryDisabledLink'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outreach - El Roi Odenigbo Foundation',
  description:
    'See our on-the-ground outreach work - from health camps and education drives to our December 2023 charity outreach in Benue, Nigeria.',
}

const programs = [
  {
    img: '/images/mission-education.png',
    tag: 'Education',
    title: 'Mobile Tuition & Scholarships',
    desc: 'Providing scholarships, tutoring programs, and educational materials to young people from deprived backgrounds across underserved communities.',
  },
  {
    img: '/images/team-foundation.png',
    tag: 'Empowerment',
    title: "Widows' Skill Workshops",
    desc: 'Bi-weekly sessions on tailoring, small business development, and financial literacy to help widows and widowers achieve long-term stability.',
  },
  {
    img: '/images/outreach-distribution.png',
    tag: 'Health',
    title: 'Health Check-up Camps',
    desc: 'Regular health check-ups and medical assistance for orphans and widows, in collaboration with local healthcare providers and clinics.',
  },
  {
    img: '/images/mission-education.png',
    tag: 'Community',
    title: 'Food & Essentials Distribution',
    desc: 'Distribution of food, clothing, and essential supplies to vulnerable families and children during festive seasons and emergencies.',
  },
  {
    img: '/images/team-foundation.png',
    tag: 'Advocacy',
    title: 'Government Engagement',
    desc: 'Working alongside local governments and organizations to advocate for policies that improve living conditions for the underprivileged.',
  },
  {
    img: '/images/outreach-distribution.png',
    tag: 'Youth',
    title: 'Mentorship & Job Skills',
    desc: 'Equipping young people with job skills training and mentorship programs, giving them the tools to pursue their dreams and break the poverty cycle.',
  },
]

const outreachReport = [
  'We are deeply humbled and grateful to share the success of our recent charity outreach in Benue, Nigeria. Thanks to your generous contributions, we were able to bring much-needed assistance, hope, and joy to vulnerable communities in the region.',
  'Our team had the privilege of visiting several underserved areas, where we were warmly received by the families and children who benefit from our outreach programs. The experience was heartwarming as we spent time connecting with these communities, hearing their stories, and offering support in any way we could. Our outreach provided essential supplies such as food, clothing, healthcare services, educational materials, and toys - resources that are critical to improving their well-being and future prospects.',
  "The gratitude and excitement we saw on the faces of the children and families were truly priceless. Many were receiving these gifts for the first time, and the impact was immeasurable. The children's laughter and eagerness to learn with the new school supplies reminded us of the importance of our work, and the families expressed heartfelt thanks for the resources that will help them move forward with greater hope.",
  'This outreach was only possible through your compassion and generosity. Your support has directly improved the lives of these families, giving them not only the essentials they need but also the hope and encouragement to keep going. We are proud to have made such a positive impact in Benue, and we are so grateful to have you as part of this transformative journey.',
  'As we continue our mission to bring support to vulnerable communities, we look forward to more opportunities to share love, hope, and resources with those who need it most. Together, we can continue making a meaningful difference in the lives of people across Nigeria.',
  'Thank you for your continued support and partnership. We could not do this work without you, and together, we will keep creating brighter futures.',
]

export default function OutreachPage() {
  return (
    <>
      <Navbar />
      <FadeUpObserver />

      <section className="page-hero">
        <div
          className="page-hero-blob"
          style={{
            width: 380,
            height: 380,
            background: 'rgba(232,98,42,.18)',
            top: -70,
            right: -70,
          }}
        ></div>
        <div
          className="page-hero-blob"
          style={{
            width: 300,
            height: 300,
            background: 'rgba(45,125,79,.18)',
            bottom: -50,
            left: -50,
          }}
        ></div>
        <div className="container fade-up">
          <div className="section-tag">On the Ground</div>
          <h1>Our Outreach</h1>
          <p>
            Field initiatives that meet vulnerable communities where they are -
            delivering hope, resources, and lasting change.
          </p>
        </div>
      </section>

      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '6+', label: 'Active Programs' },
              { num: 'Benue', label: 'Dec 2023 Outreach Location' },
              { num: '100%', label: 'Community-Focused' },
              { num: '∞', label: 'Lives We Touch' },
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

      <section className="section">
        <div className="container">
          <div className="split fade-up">
            <div className="split-img">
              <Image
                src="/images/outreach-distribution.png"
                alt="Charity outreach in Benue, Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="section-tag">Field Report</div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--orange-soft)',
                  color: 'var(--orange)',
                  borderRadius: 50,
                  padding: '4px 14px',
                  fontSize: '.8rem',
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                <CalendarDays size={16} aria-hidden="true" />
                <span>December 25, 2023</span>
              </div>
              <h2 className="section-title">Charity Outreach Report - Benue, Nigeria</h2>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                  fontSize: '.97rem',
                  marginBottom: 16,
                }}
              >
                {outreachReport[0]}
              </p>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                  fontSize: '.97rem',
                  marginBottom: 16,
                }}
              >
                {outreachReport[1]}
              </p>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                  fontSize: '.97rem',
                  marginBottom: 28,
                }}
              >
                {outreachReport[2]}
              </p>
              <TemporaryDisabledLink className="btn btn-primary">
                Support the Next Outreach
              </TemporaryDisabledLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-green-soft">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">Full Report</div>
            <h2 className="section-title">A Message of Gratitude</h2>
            <p className="section-desc">
              From the El Roi Odenigbo Foundation team, with heartfelt appreciation.
            </p>
          </div>
          <div
            className="fade-up"
            style={{
              maxWidth: 800,
              margin: '48px auto 0',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: '48px 56px',
              boxShadow: 'var(--shadow-lg)',
              borderTop: '4px solid var(--orange)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <span style={{ display: 'flex', color: 'var(--orange)' }} aria-hidden="true">
                <HeartHandshake size={32} />
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)' }}>
                  El Roi Odenigbo Foundation
                </div>
                <div style={{ fontSize: '.85rem', color: 'var(--text-light)' }}>
                  Charity Outreach Report - December 25, 2023
                </div>
              </div>
            </div>
            {outreachReport.slice(3).map((para, i) => (
              <p
                key={para}
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.85,
                  fontSize: '.97rem',
                  marginBottom: i < outreachReport.slice(3).length - 1 ? 18 : 28,
                }}
              >
                {para}
              </p>
            ))}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
              <p style={{ fontWeight: 700, color: 'var(--green)', fontSize: '.95rem' }}>
                With heartfelt appreciation,
              </p>
              <p
                style={{
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  fontSize: '1rem',
                  marginTop: 4,
                }}
              >
                El Roi Odenigbo Foundation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">All Programs</div>
            <h2 className="section-title">How We Reach Communities</h2>
            <p className="section-desc">
              Each outreach initiative is designed to address real needs on the
              ground, from health and education to skills and advocacy.
            </p>
          </div>
          <div className="outreach-grid">
            {programs.map((p, i) => (
              <div
                className="outreach-card fade-up"
                key={p.title}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="outreach-card-img">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={160}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="outreach-card-body">
                  <div className="outreach-card-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
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
                src="/images/team-foundation.png"
                alt="Volunteers at work"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="section-tag">Get Involved</div>
              <h2 className="section-title">Volunteer With Us on the Ground</h2>
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '.97rem',
                  marginBottom: 24,
                }}
              >
                Our volunteers are the heartbeat of every outreach event. Whether
                you&apos;re a healthcare worker, teacher, or simply someone who cares
                - there&apos;s a meaningful role for you at El Roi Odenigbo Foundation.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {[
                  'Help distribute food, clothing, and essential supplies',
                  'Provide health check-ups and medical assistance',
                  'Teach skills and mentor young people in communities',
                  'Advocate for policy changes that uplift the vulnerable',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        background: 'var(--orange-soft)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--orange)',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <CheckCircle2 size={16} />
                    </span>
                    <span style={{ color: 'var(--text-mid)', fontSize: '.95rem' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <TemporaryDisabledLink className="btn btn-primary">
                Register as Volunteer
              </TemporaryDisabledLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2>Every Act of Kindness Counts</h2>
              <p>
                Your support helps us continue bringing hope and change to those who
                need it most.
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
                Volunteer
              </TemporaryDisabledLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
