'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'

const faqs = [
  {
    q: 'How does El Roi Odenigbo Foundation choose which communities to serve?',
    a: 'We focus on the most vulnerable - orphans, widows, and youth from underprivileged backgrounds across Nigeria. Our team conducts on-the-ground assessments before launching any program to ensure we are reaching those who need support most.',
  },
  {
    q: 'How do you measure the impact of your programs?',
    a: 'We track outcomes through field reports, beneficiary feedback, and regular reviews by program leads. Our December 2023 outreach in Benue is a recent example of impact documentation we share publicly.',
  },
  {
    q: 'How can I support the Foundation?',
    a: 'You can partner with us, share our mission, or reach out through our Contact page to learn how to contribute to our work.',
  },
  {
    q: 'Can organizations partner with El Roi Odenigbo Foundation?',
    a: 'Absolutely. We welcome partnerships with local governments, NGOs, corporate sponsors, and faith-based organizations. Reach out via our Contact page to explore how we can collaborate.',
  },
]

const pillars = [
  {
    num: '01',
    bg: 'var(--orange-soft)',
    color: 'var(--orange)',
    title: 'Youth & Education Access',
    desc: 'Scholarships, tutoring programs, and vocational training enhance educational opportunities and employability for young people from deprived backgrounds.',
  },
  {
    num: '02',
    bg: 'var(--green-soft)',
    color: 'var(--green)',
    title: "Widows' Economic Empowerment",
    desc: 'Skill acquisition programs help widows and widowers develop sustainable skills, empowering them to create small enterprises and improve financial stability.',
  },
  {
    num: '03',
    bg: 'var(--orange-soft)',
    color: 'var(--orange)',
    title: 'Community Health Support',
    desc: 'Regular health check-ups and medical assistance for orphans and widows, collaborating with local healthcare providers to ensure access to necessary care.',
  },
  {
    num: '04',
    bg: 'var(--green-soft)',
    color: 'var(--green)',
    title: 'Advocacy & Systemic Change',
    desc: 'Engaging with governmental bodies and organizations to advocate for policies supporting the underprivileged and broadening the reach of our initiatives.',
  },
]

const missionHighlights = [
  'Educational access',
  'Skills development',
  'Long-term empowerment',
]

const missionStats = [
  { value: '4', label: 'Active community programs', color: 'var(--orange)' },
  { value: '100%', label: 'Community-powered service', color: 'var(--green)' },
]

const missionApproachHighlights = [
  'Local partnerships',
  'Advocacy with action',
  'Community-centered solutions',
]

export default function MissionPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <Navbar />
      <FadeUpObserver />

      <section className="page-hero">
        <div
          className="page-hero-blob"
          style={{
            width: 360,
            height: 360,
            background: 'rgba(45,125,79,.2)',
            top: -60,
            right: -60,
          }}
        ></div>
        <div
          className="page-hero-blob"
          style={{
            width: 280,
            height: 280,
            background: 'rgba(232,98,42,.18)',
            bottom: -50,
            left: -50,
          }}
        ></div>
        <div className="container">
          <div className="mission-hero-shell fade-up">
            <div className="section-tag">Our Purpose</div>
            <h1>Our Mission</h1>
            <p>
              We exist to dismantle the barriers that keep vulnerable communities from
              thriving - through education, empowerment, health, and advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="section mission-core-section">
        <div className="container">
          <div className="split fade-up mission-core">
            <div className="split-img mission-core-image">
              <div className="split-img-label">Learning in Action</div>
              <Image
                src="/images/Image_3.jpeg"
                alt="Students learning together with a teacher in a classroom in Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div className="mission-core-card">
                <strong>Education opens every door</strong>
                <span>Support that begins in the classroom can reshape whole futures.</span>
              </div>
            </div>
            <div className="mission-core-copy">
              <div className="section-tag">The Core</div>
              <h2 className="section-title">
                Education as the Foundation of Everything
              </h2>
              <p className="section-desc mission-core-lead">
                We believe that the foundation for a better future begins with
                education and opportunity. By offering educational resources, job
                skills training, and mentorship, we equip young people from
                underserved communities with the tools they need to rise above their
                circumstances.
              </p>
              <p className="mission-core-text">
                Our approach is holistic - working with families, local leaders, and
                communities simultaneously, because lasting change extends far beyond
                the classroom walls.
              </p>
              <div className="mission-core-stats">
                {missionStats.map((stat) => (
                  <div key={stat.label} className="mission-core-stat">
                    <div className="mission-core-stat-value" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="mission-core-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white mission-pillars-section">
        <div className="container">
          <div className="section-heading-center fade-up mission-pillars-heading">
            <div className="section-tag">Strategic Focus</div>
            <h2 className="section-title">Four Pillars of Our Mission</h2>
            <p className="section-desc">
              Each pillar addresses a root cause of inequality - and together, they
              create a cycle of sustainable change.
            </p>
          </div>
          <div className="pillars mission-pillars-grid">
            {pillars.map((p, i) => (
              <div
                className="pillar fade-up mission-pillar-card"
                key={p.num}
                style={{
                  background: p.bg,
                  borderTop: `4px solid ${p.color}`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="mission-pillar-num" style={{ color: p.color }}>
                  {p.num}
                </div>
                <h3 className="mission-pillar-title">{p.title}</h3>
                <p className="mission-pillar-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-approach-section">
        <div className="container">
          <div className="split reverse fade-up mission-approach">
            <div className="split-img mission-approach-image">
              <div className="split-img-label">Field Collaboration</div>
              <Image
                src="/images/Outreach_Lagos/Image_1.jpeg"
                alt="El Roi Foundation community support program in Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div className="mission-approach-card">
                <strong>Partnerships that last</strong>
                <span>We listen locally, respond practically, and build trust through action.</span>
              </div>
            </div>
            <div className="mission-approach-copy">
              <div className="section-tag">How We Work</div>
              <h2 className="section-title">A Community-Led Approach</h2>
              <p className="section-desc mission-approach-lead">
                We understand that sustainable change is achieved through
                collaboration. That&apos;s why we work alongside local governments,
                organizations, and individuals to advocate for lasting solutions that
                improve the overall living conditions of the underprivileged.
              </p>
              <p className="mission-approach-text">
                Together, we can break the cycle of poverty and create a more
                inclusive society - one where every person has access to education,
                health, and economic opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-green-soft mission-faq-section">
        <div className="container">
          <div className="section-heading-center fade-up mission-faq-heading">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">Mission FAQ</h2>
            <p className="section-desc">
              Answers to questions we hear most often from supporters and partners.
            </p>
          </div>
          <div className="accordion mission-faq-accordion">
            {faqs.map((faq, i) => (
              <div
                className="accordion-item fade-up mission-faq-item"
                key={faq.q}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <button
                  className={`accordion-btn${openIndex === i ? ' open' : ''}`}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <span className="accordion-icon" aria-hidden="true">
                    <Plus size={20} />
                  </span>
                </button>
                <div className={`accordion-body${openIndex === i ? ' open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
