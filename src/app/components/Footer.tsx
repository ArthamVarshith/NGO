import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Heart,
  MapPin,
} from 'lucide-react'

const pageLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/contact', label: 'Contact' },
]

const focusAreas = ['Education', 'Health', 'Skills', 'Outreach']

export default function Footer() {
  return (
    <footer>
      <div className="footer-top fade-up">
        <div className="footer-top-copy">
          <div className="footer-eyebrow">Keep Hope Moving</div>
          <h2 className="footer-title">
            Building dignity, opportunity, and practical support for vulnerable
            communities.
          </h2>
        </div>
        <Link href="/contact" className="footer-top-link">
          Connect With Us
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="footer-inner">
        <div className="footer-brand fade-up">
          <Link href="/" className="footer-brand-link">
            <div className="footer-logo-box">
              <Image
                src="/images/logo.png"
                alt="El Roi Odenigbo Foundation Logo"
                width={60}
                height={60}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="footer-brand-text">
              <div className="footer-brand-name">
                El Roi<span>.</span>
              </div>
              <div className="footer-brand-subtitle">Odenigbo Foundation</div>
            </div>
          </Link>
          <p>
            El Roi Odenigbo Foundation - bringing compassion and hope to vulnerable
            communities through education, health, and skills empowerment.
          </p>
          <div className="footer-pills" aria-label="Foundation focus areas">
            {focusAreas.map((item) => (
              <span key={item} className="footer-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-col fade-up" style={{ transitionDelay: '.08s' }}>
          <h4>Pages</h4>
          {pageLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col fade-up" style={{ transitionDelay: '.24s' }}>
          <h4>Contact</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <MapPin size={16} />
              </span>
              <span className="footer-contact-text">
                No. 6, Gospel Light Avenue, Area Gariki, Abuja, FCT, Nigeria
              </span>
            </div>
          </div>
          <p className="footer-contact-note">
            Contact Mrs. Helen Uluh. Secretary: Mrs Vivian Nnalue.
          </p>
        </div>
      </div>

      <div className="footer-bottom fade-up">
        <p>&copy; {new Date().getFullYear()} El Roi Odenigbo Foundation. All rights reserved.</p>
        <p className="footer-bottom-note">
          <span>Made with</span>
          <Heart size={16} fill="currentColor" />
          <span>for vulnerable communities.</span>
        </p>
      </div>
    </footer>
  )
}
