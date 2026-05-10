import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Heart,
  Mail,
  MapPin,
  Phone,
  Users,
} from 'lucide-react'
import TemporaryDisabledLink from './TemporaryDisabledLink'

const pageLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/contact', label: 'Contact' },
]

const programLinks = [
  { href: '/about', label: 'Youth & Education' },
  { href: '/about', label: 'Widows Empowerment' },
  { href: '/mission', label: 'Health Support' },
  { href: '/mission', label: 'Skill Acquisition' },
]

const focusAreas = ['Education', 'Health', 'Skills', 'Outreach']

const communityLinks = [
  { href: '/outreach', label: 'Community Outreach', icon: Users },
  { href: '/outreach', label: 'Program Gallery', icon: Camera },
  { href: '/contact', label: 'Support the Mission', icon: Heart },
  { href: '/contact', label: 'Partner With Us', icon: BriefcaseBusiness },
]

export default function Footer() {
  const isTemporarilyDisabled = (href: string) =>
    href === '/contact' || href === '/outreach'

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
        <TemporaryDisabledLink className="footer-top-link">
          Connect With Us
          <ArrowRight size={18} />
        </TemporaryDisabledLink>
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
          <div className="footer-socials">
            {communityLinks.map(({ label, icon: Icon }) => (
              <TemporaryDisabledLink
                key={label}
                className="footer-social-btn"
              >
                <Icon size={18} />
              </TemporaryDisabledLink>
            ))}
          </div>
        </div>

        <div className="footer-col fade-up" style={{ transitionDelay: '.08s' }}>
          <h4>Pages</h4>
          {pageLinks.map((link) => (
            isTemporarilyDisabled(link.href) ? (
              <TemporaryDisabledLink
                key={link.href}
                className="footer-col-link"
              >
                {link.label}
              </TemporaryDisabledLink>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="footer-col fade-up" style={{ transitionDelay: '.16s' }}>
          <h4>Programs</h4>
          {programLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-col fade-up" style={{ transitionDelay: '.24s' }}>
          <h4>Contact</h4>
          <div className="footer-contact-list">
            <a href="mailto:info@elroiodenigbo.org" className="footer-contact-item">
              <Mail size={16} />
              <span>info@elroiodenigbo.org</span>
            </a>
            <a href="tel:+2348000000000" className="footer-contact-item">
              <Phone size={16} />
              <span>+234 800 000 0000</span>
            </a>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>Benue State, Nigeria</span>
            </div>
          </div>
          <p className="footer-contact-note">
            Open to outreach partnerships, volunteer requests, and community support.
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
