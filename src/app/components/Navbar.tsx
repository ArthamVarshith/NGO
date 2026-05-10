'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import TemporaryDisabledLink from './TemporaryDisabledLink'

export default function Navbar() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 20)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMenu = () => menuRef.current?.classList.add('open')
  const closeMenu = () => menuRef.current?.classList.remove('open')

  const isActive = (href: string) =>
    pathname === href ? 'nav-link active' : 'nav-link'

  return (
    <>
      <nav className="navbar" ref={navRef} id="navbar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" style={{ gap: 0 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                overflow: 'hidden',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/logo.png"
                alt="El Roi Odenigbo Foundation Logo"
                width={56}
                height={56}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  letterSpacing: '-.01em',
                  lineHeight: 1.2,
                }}
              >
                El Roi<span style={{ color: 'var(--orange)' }}>.</span>
              </span>
              <span
                style={{
                  fontSize: '.68rem',
                  fontWeight: 600,
                  color: 'var(--text-light)',
                  letterSpacing: '.03em',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                }}
              >
                Odenigbo Foundation
              </span>
            </div>
          </Link>

          <div className="nav-links">
            <Link href="/about" className={isActive('/about')}>
              About
            </Link>
            <Link href="/mission" className={isActive('/mission')}>
              Mission
            </Link>
            <TemporaryDisabledLink className={isActive('/outreach')}>
              Outreach
            </TemporaryDisabledLink>
            <TemporaryDisabledLink className={isActive('/contact')}>
              Contact
            </TemporaryDisabledLink>
          </div>
          <TemporaryDisabledLink className="btn btn-primary nav-cta">
            Donate Now
          </TemporaryDisabledLink>
          <button
            type="button"
            className="nav-hamburger"
            id="hamburger"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" ref={menuRef} id="mobileMenu">
        <button
          type="button"
          className="mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={24} aria-hidden="true" />
        </button>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#000',
            marginBottom: 8,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="El Roi Odenigbo Foundation"
            width={72}
            height={72}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/mission" onClick={closeMenu}>
          Mission
        </Link>
        <TemporaryDisabledLink className="mobile-menu-link">
          Outreach
        </TemporaryDisabledLink>
        <TemporaryDisabledLink className="mobile-menu-link">
          Contact
        </TemporaryDisabledLink>
        <TemporaryDisabledLink className="btn btn-primary">
          Donate Now
        </TemporaryDisabledLink>
      </div>
    </>
  )
}
