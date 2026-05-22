import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeUpObserver from '../components/FadeUpObserver'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outreach - El Roi Odenigbo Foundation',
  description:
    'See our on-the-ground outreach work across Lagos, Suleja, and Yelwa with photos and video from El Roi Odenigbo Foundation.',
}

const outreachEvents = [
  {
    tag: 'Humanitarian Relief',
    title: "El-roi Odenigbo Foundation's Outreach to Yelwa Community",
    location: 'Yelwa Community, Nigeria',
    mediaLabel: '13 Photos + 1 Video',
    description:
      'Support and relief outreach for displaced persons and vulnerable families affected by tragedy.',
    body: [
      'In response to the tragic massacre of innocent lives in Yelwa community last year, the El-roi Odenigbo Foundation visited the affected area to offer support and relief. Our team met with the displaced persons at the IDP camp, where we distributed food and essential supplies to the victimized community.',
      'This outreach was part of our commitment to serving vulnerable populations and promoting community resilience. We recognize the immense challenges faced by the Yelwa community and are dedicated to providing humanitarian aid and support.',
      'During our visit, we engaged with community leaders, assessed needs, and provided critical assistance to those affected. Our goal is to empower communities, promote healing, and foster sustainable development.',
      'We acknowledge the resilience of the Yelwa community and commend their strength in the face of adversity. We remain committed to partnering with local stakeholders to rebuild and restore hope.',
      'Through initiatives like this, the El-roi Odenigbo Foundation continues to demonstrate its mission to serve and uplift communities in need. We appreciate the opportunity to make a positive impact and look forward to future collaborations.',
    ],
    closing: 'Thank you.',
    video: '/videos/Yelwa_video.mp4',
    images: [
      '/images/Outreach_Yelwa/Image_1.jpeg',
      '/images/Outreach_Yelwa/Image_2.jpeg',
      '/images/Outreach_Yelwa/Image_3.jpeg',
      '/images/Outreach_Yelwa/Image_4.jpeg',
      '/images/Outreach_Yelwa/Image_5.jpeg',
      '/images/Outreach_Yelwa/Image_6.jpeg',
      '/images/Outreach_Yelwa/Image_7.jpeg',
      '/images/Outreach_Yelwa/Image_8.jpeg',
      '/images/Outreach_Yelwa/Image_9.jpeg',
      '/images/Outreach_Yelwa/Image_10.jpeg',
      '/images/Outreach_Yelwa/Image_11.jpeg',
      '/images/Outreach_Yelwa/Image_12.jpeg',
      '/images/Outreach_Yelwa/Image_13.jpeg',
    ],
  },
  {
    tag: 'Campaign',
    title: 'Lagos Outreach Campaign',
    location: 'Lagos, Nigeria',
    description: 'Your Gift Can Transform a Life Today',
    body: [
      "This season, we're reaching out to help those who need us most, but we can't do it alone. The challenges facing struggling families in Lagos are immense, and our upcoming outreach aims to provide the essentials, hope, and a brighter future they desperately need. From food and shelter to healthcare and education, every donation goes directly toward offering life-changing support to those who need it most.",
      'Your generosity, no matter how big or small, will make an immediate and lasting difference. With your help, we can ease the burden of countless families, offer a sense of security, and bring hope to those who feel forgotten. Together, we have the power to change lives and create brighter futures for those in need.',
    ],
    quote:
      'Join us in bringing hope and joy to the lives of orphans. These children deserve more than just survival. They deserve love, opportunity, and a chance to thrive. Your support can give them the foundation they need to build a brighter tomorrow.',
    closing:
      "Please, consider donating today. One gift. One life. A lifetime of impact. Let's make a difference, together.",
    images: [
      '/images/Outreach_Lagos/Image_1.jpeg',
      '/images/Outreach_Lagos/Image_2.jpeg',
      '/images/Outreach_Lagos/Image_3.jpeg',
      '/images/Outreach_Lagos/Image_4.jpeg',
      '/images/Outreach_Lagos/Image_5.jpeg',
      '/images/Outreach_Lagos/Image_6.jpeg',
      '/images/Outreach_Lagos/Image_7.jpeg',
    ],
  },
  {
    tag: 'Photo Gallery',
    title: 'Outreach Events at Suleja',
    location: 'Suleja, Niger State, Nigeria',
    description:
      'A visual gallery from our outreach events in Suleja, capturing community moments and our team on the ground.',
    images: [
      '/images/Outreach_Suleja/Image_1.jpeg',
      '/images/Outreach_Suleja/Image_2.jpeg',
      '/images/Outreach_Suleja/Image_3.jpeg',
      '/images/Outreach_Suleja/Image_4.jpeg',
      '/images/Outreach_Suleja/Image_5.jpeg',
      '/images/Outreach_Suleja/Image_6.jpeg',
      '/images/Outreach_Suleja/Image_7.jpeg',
      '/images/Outreach_Suleja/Image_8.jpeg',
      '/images/Outreach_Suleja/Image_9.jpeg',
      '/images/Outreach_Suleja/Image_10.jpeg',
      '/images/Outreach_Suleja/Image_11.jpeg',
    ],
  },
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
        <div className="container">
          <div className="outreach-hero-shell fade-up">
            <div className="section-tag">On the Ground</div>
            <h1>Our Outreach</h1>
            <p>
              Field initiatives, reports, and event moments that show how we meet
              vulnerable communities where they are across Nigeria.
            </p>
          </div>
        </div>
      </section>

      <div className="stats-strip outreach-stats-strip">
        <div className="container">
          <div className="stats-grid outreach-stats-grid">
            {[
              { num: '3', label: 'Outreach features' },
              { num: '31', label: 'Total photos on this page' },
              { num: '1', label: 'Video on this page' },
              { num: 'Lagos, Suleja, Yelwa', label: 'Locations covered' },
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

      <section className="section outreach-events-section">
        <div className="container">
          <div className="section-heading-center fade-up outreach-events-heading">
            <div className="section-tag">Recent Events</div>
            <h2 className="section-title">Outreach Moments on the Ground</h2>
            <p className="section-desc">
              Photo stories from our field visits and community outreach activities.
            </p>
          </div>

          {outreachEvents.map((event) => (
            <article key={event.title} className="outreach-event-card fade-up">
              <div className="outreach-event-copy">
                <div className="outreach-event-meta">
                  <span className="outreach-event-tag">{event.tag}</span>
                  <span className="outreach-event-count">
                    {'mediaLabel' in event && event.mediaLabel
                      ? event.mediaLabel
                      : `${event.images.length} Photos`}
                  </span>
                </div>
                <h3>{event.title}</h3>
                <p className="outreach-event-location">{event.location}</p>
                <p className="outreach-event-description">{event.description}</p>
                {'body' in event && event.body
                  ? event.body.map((paragraph) => (
                      <p key={paragraph} className="outreach-event-body">
                        {paragraph}
                      </p>
                    ))
                  : null}
                {'quote' in event && event.quote ? (
                  <blockquote className="outreach-event-quote">
                    {event.quote}
                  </blockquote>
                ) : null}
                {'closing' in event && event.closing ? (
                  <p className="outreach-event-closing">{event.closing}</p>
                ) : null}
              </div>

              {'video' in event && event.video ? (
                <div className="outreach-event-video-block">
                  <div className="outreach-event-video">
                    <video
                      controls
                      preload="metadata"
                      playsInline
                      className="outreach-event-video-player"
                    >
                      <source src={event.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ) : null}

              <div className="outreach-event-grid">
                {event.images.map((src, index) => (
                  <div
                    key={src}
                    className={`outreach-event-photo${
                      !('video' in event && event.video) && index === 0
                        ? ' outreach-event-photo-featured'
                        : ''
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${event.title} in ${event.location} - photo ${index + 1}`}
                      width={1200}
                      height={900}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
