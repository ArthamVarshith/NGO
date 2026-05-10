'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'
import TemporaryDisabledLink from '../components/TemporaryDisabledLink'

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
    q: 'How can I donate or support the Foundation?',
    a: 'You can donate financially, volunteer in the field, or partner with us to expand our reach. Visit our Contact page to get in touch - every act of kindness counts.',
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
        <div className="container fade-up">
          <div className="section-tag">Our Purpose</div>
          <h1>Our Mission</h1>
          <p>
            We exist to dismantle the barriers that keep vulnerable communities from
            thriving - through education, empowerment, health, and advocacy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split fade-up">
            <div className="split-img">
              <Image
                src="/images/mission-education.png"
                alt="Students learning together with a teacher in a classroom in Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="section-tag">The Core</div>
              <h2 className="section-title">
                Education as the Foundation of Everything
              </h2>
              <p className="section-desc">
                We believe that the foundation for a better future begins with
                education and opportunity. By offering educational resources, job
                skills training, and mentorship, we equip young people from
                underserved communities with the tools they need to rise above their
                circumstances.
              </p>
              <br />
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '.98rem',
                }}
              >
                Our approach is holistic - working with families, local leaders, and
                communities simultaneously, because lasting change extends far beyond
                the classroom walls.
              </p>
              <br />
              <br />
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--orange)',
                    }}
                  >
                    4
                  </div>
                  <div style={{ fontSize: '.85rem', color: 'var(--text-light)' }}>
                    Active community programs
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--green)',
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: '.85rem', color: 'var(--text-light)' }}>
                    Volunteer-powered service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">Strategic Focus</div>
            <h2 className="section-title">Four Pillars of Our Mission</h2>
            <p className="section-desc">
              Each pillar addresses a root cause of inequality - and together, they
              create a cycle of sustainable change.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div
                className="pillar fade-up"
                key={p.num}
                style={{ background: p.bg, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="pillar-num" style={{ color: p.color }}>
                  {p.num}
                </div>
                <h3 style={{ color: 'var(--text-dark)' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-mid)' }}>{p.desc}</p>
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
                alt="El Roi Foundation community support program in Nigeria"
                width={560}
                height={420}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="section-tag">How We Work</div>
              <h2 className="section-title">A Community-Led Approach</h2>
              <p className="section-desc">
                We understand that sustainable change is achieved through
                collaboration. That&apos;s why we work alongside local governments,
                organizations, and individuals to advocate for lasting solutions that
                improve the overall living conditions of the underprivileged.
              </p>
              <br />
              <p
                style={{
                  color: 'var(--text-mid)',
                  lineHeight: 1.8,
                  fontSize: '.98rem',
                }}
              >
                Together, we can break the cycle of poverty and create a more
                inclusive society - one where every person has access to education,
                health, and economic opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-green-soft">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">Common Questions</div>
            <h2 className="section-title">Mission FAQ</h2>
            <p className="section-desc">
              Answers to questions we hear most often from supporters and partners.
            </p>
          </div>
          <div className="accordion" style={{ maxWidth: 760, margin: '48px auto 0' }}>
            {faqs.map((faq, i) => (
              <div
                className="accordion-item fade-up"
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

      <section className="section-sm">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <h2>Support Our Mission Today</h2>
              <p>Your contribution makes a direct, measurable difference in real lives.</p>
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
                See Outreach
              </TemporaryDisabledLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
