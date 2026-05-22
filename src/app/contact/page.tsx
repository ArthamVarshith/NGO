'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Our Office',
    value: 'No. 6, Gospel Light Avenue, Area Gariki, Abuja, FCT, Nigeria.',
  },
  { icon: Building2, label: 'Foundation Lead', value: 'Mrs. Helen Uluh' },
  {
    icon: UserRound,
    label: 'Secretary',
    value: 'Mrs Vivian Nnalue',
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

      <section className="page-hero contact-hero">
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
        <div className="container">
          <div className="contact-hero-shell fade-up">
            <div className="section-tag">Reach Out</div>
            <h1>Let&apos;s Connect</h1>
            <p>
              Connect with El Roi Odenigbo Foundation for partnerships, outreach
              support, or general enquiries. We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up contact-info-column">
              <h3 className="contact-info-title">We&apos;d Love to Hear From You</h3>
              <p className="contact-info-intro">
                Every message matters to us. Reach out to El Roi Odenigbo
                Foundation and our team will respond as soon as possible.
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
            </div>

            <div
              className="contact-form contact-form-shell fade-up"
              style={{ transitionDelay: '.15s' }}
            >
              <div className="section-tag contact-form-tag">
                Send a Message
              </div>
              <h3 className="contact-form-title">How Can We Help?</h3>

              {submitted ? (
                <div className="contact-form-success">
                  <strong className="contact-form-success-title">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>Message Sent!</span>
                  </strong>
                  <p className="contact-form-success-text">
                    Thank you for reaching out to El Roi Odenigbo Foundation.
                    We&apos;ll get back to you soon.
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
                        placeholder="Helen"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Uluh"
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
                      placeholder="name@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234 801 234 5678"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reason">I&apos;m reaching out to...</label>
                    <select id="reason" name="reason" required>
                      <option value="">Select a reason</option>
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
                    className="btn btn-primary contact-form-submit"
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
                maxWidth: 560,
                textAlign: 'center',
              }}
            >
              El Roi Odenigbo Foundation, No. 6, Gospel Light Avenue, Area Gariki,
              Abuja, FCT, Nigeria.
            </p>
            <p style={{ color: 'var(--text-mid)', fontSize: '.9rem' }}>
              Foundation lead: Mrs. Helen Uluh | Secretary: Mrs Vivian Nnalue
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
