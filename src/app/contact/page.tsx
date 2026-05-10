'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Star,
  type LucideIcon,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'

const tiers = [
  {
    label: 'Supporter',
    amount: 'Rs. 500',
    per: '/mo',
    color: 'var(--orange-light)',
    desc: 'Provides study materials for one child for an entire month.',
    cta: 'Donate Rs. 500',
    type: 'secondary',
  },
  {
    label: 'Champion',
    amount: 'Rs. 2,000',
    per: '/mo',
    color: 'var(--green)',
    desc: "Fully sponsors one woman's 3-month skill training program.",
    cta: 'Donate Rs. 2,000',
    type: 'primary',
    featured: true,
    icon: Star,
  },
  {
    label: 'Changemaker',
    amount: 'Rs. 10K',
    per: '/mo',
    color: 'var(--orange)',
    desc: 'Funds an entire village health camp serving 400+ residents.',
    cta: 'Donate Rs. 10,000',
    type: 'secondary',
  },
] satisfies Array<{
  label: string
  amount: string
  per: string
  color: string
  desc: string
  cta: string
  type: 'primary' | 'secondary'
  featured?: boolean
  icon?: LucideIcon
}>

const contactDetails = [
  {
    icon: MapPin,
    label: 'Our Office',
    value: '12, Seva Marg, Jaipur, Rajasthan - 302001',
  },
  { icon: Mail, label: 'Email Us', value: 'info@elroiodenigbo.org' },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+234 800 000 0000 (Mon-Sat, 9am-6pm)',
  },
  {
    icon: Globe,
    label: 'Social Media',
    value: '@ElRoiOdenigbo on all platforms',
  },
] satisfies Array<{
  icon: LucideIcon
  label: string
  value: string
}>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            background: 'rgba(45,125,79,.2)',
            top: -70,
            right: -70,
          }}
        ></div>
        <div
          className="page-hero-blob"
          style={{
            width: 300,
            height: 300,
            background: 'rgba(232,98,42,.18)',
            bottom: -60,
            left: -60,
          }}
        ></div>
        <div className="container fade-up">
          <div className="section-tag">Reach Out</div>
          <h1>Let&apos;s Connect</h1>
          <p>
            Whether you want to donate, volunteer, partner, or just learn more -
            we&apos;re here and happy to talk.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up">
              <h3>We&apos;d Love to Hear From You</h3>
              <p>
                Every message matters to us. Reach out and we&apos;ll get back to you
                within 48 hours on working days.
              </p>

              {contactDetails.map((d) => {
                const Icon = d.icon

                return (
                  <div className="contact-detail" key={d.label}>
                    <div className="contact-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <div className="contact-detail-text">
                      <strong>{d.label}</strong>
                      <span>{d.value}</span>
                    </div>
                  </div>
                )
              })}

              <div
                style={{
                  marginTop: 40,
                  padding: 28,
                  background: 'var(--green-soft)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <h4
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--green)',
                    marginBottom: 8,
                  }}
                >
                  <Landmark size={18} aria-hidden="true" />
                  <span>Donate via Bank Transfer</span>
                </h4>
                <p
                  style={{
                    fontSize: '.88rem',
                    color: 'var(--text-mid)',
                    lineHeight: 1.8,
                    marginBottom: 12,
                  }}
                >
                  All donations are eligible for 80G tax deduction.
                </p>
                <div
                  style={{
                    fontSize: '.88rem',
                    color: 'var(--text-dark)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span>
                    <strong>Account Name:</strong> El Roi Odenigbo Foundation
                  </span>
                  <span>
                    <strong>Account No:</strong> 1234 5678 9012
                  </span>
                  <span>
                    <strong>IFSC:</strong> SBIN0001234
                  </span>
                  <span>
                    <strong>Bank:</strong> State Bank of India
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-form fade-up" style={{ transitionDelay: '.15s' }}>
              <div className="section-tag" style={{ marginBottom: 8 }}>
                Send a Message
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: 24,
                  color: 'var(--text-dark)',
                }}
              >
                How Can We Help?
              </h3>

              {submitted ? (
                <div
                  style={{
                    padding: '20px 24px',
                    background: 'var(--green-soft)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '4px solid var(--green)',
                  }}
                >
                  <strong
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      color: 'var(--green)',
                    }}
                  >
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Message Sent!</span>
                  </strong>
                  <p
                    style={{
                      fontSize: '.9rem',
                      color: 'var(--text-mid)',
                      marginTop: 4,
                    }}
                  >
                    Thank you for reaching out. We&apos;ll get back to you within 48
                    hours.
                  </p>
                </div>
              ) : (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Rahul"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Verma"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="rahul@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reason">I&apos;m reaching out to...</label>
                    <select id="reason" name="reason" required>
                      <option value="">Select a reason</option>
                      <option value="donate">Make a Donation</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="partner">Corporate / CSR Partnership</option>
                      <option value="media">Media &amp; Press</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us a bit about your interest or enquiry..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      padding: '16px',
                    }}
                  >
                    <span>Send Message</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-heading-center fade-up">
            <div className="section-tag">Give Back</div>
            <h2 className="section-title">Choose How You Help</h2>
            <p className="section-desc">
              Every rupee is put to direct use. Choose a giving level that works for
              you.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
              marginTop: 48,
            }}
          >
            {tiers.map((t, i) => (
              <div
                className="card fade-up"
                key={t.label}
                style={{
                  padding: '36px 28px',
                  textAlign: 'center',
                  borderTop: `4px solid ${t.color}`,
                  ...(t.featured
                    ? { transform: 'scale(1.04)', boxShadow: 'var(--shadow-lg)' }
                    : {}),
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    fontSize: '.8rem',
                    fontWeight: 700,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: t.color,
                    marginBottom: 12,
                  }}
                >
                  {t.icon ? <t.icon size={16} aria-hidden="true" /> : null}
                  <span>{t.label}</span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: 'var(--text-dark)',
                  }}
                >
                  {t.amount}
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: 'var(--text-light)',
                    }}
                  >
                    {t.per}
                  </span>
                </div>
                <div
                  style={{
                    color: 'var(--text-mid)',
                    fontSize: '.88rem',
                    margin: '16px 0',
                    lineHeight: 1.7,
                  }}
                >
                  {t.desc}
                </div>
                <Link
                  href="#contactForm"
                  className={`btn btn-${t.type}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container fade-up">
          <div
            style={{
              background: 'var(--green-soft)',
              borderRadius: 'var(--radius-lg)',
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                color: 'var(--green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              <Building2 size={44} />
            </div>
            <p
              style={{
                fontWeight: 600,
                color: 'var(--green)',
                fontSize: '1.05rem',
              }}
            >
              12, Seva Marg, Jaipur, Rajasthan - 302001
            </p>
            <p style={{ color: 'var(--text-mid)', fontSize: '.9rem' }}>
              Open Monday to Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
