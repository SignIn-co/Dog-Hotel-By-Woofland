import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const BASE = '/Dog-Hotel-By-Woofland/';
const BRAND_NAME = 'Dog Hotel by Woofland';

const contact = {
  phone: '0800147369',
  email: 'info@woofland.co.nz',
};

function homeLink(hash = '') {
  return `${BASE}${hash}`;
}

function routeLink(route) {
  return `${BASE}#/${route}`;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={homeLink()} aria-label={BRAND_NAME}>
        <span className="brand-main">Dog Hotel</span>
        <span className="brand-sub">by Woofland</span>
      </a>
      <nav className="site-nav">
        <a href={homeLink('#rooms')}>Rooms</a>
        <a href={homeLink('#care')}>Care</a>
        <a href={homeLink('#faq')}>FAQ</a>
        <a className="nav-cta" href={`mailto:${contact.email}?subject=Dog Hotel by Woofland Enquiry`}>Check Availability</a>
      </nav>
    </header>
  );
}

function MiniLogoMark() {
  return (
    <svg className="mini-logo-mark" viewBox="0 0 140 150" role="img" aria-label="Woofland dog inside hotel arch">
      <path className="mini-arch" d="M30 126V58C30 25 47 12 70 12s40 13 40 46v68" />
      <g className="mini-dog">
        <path className="mini-tail" d="M36 76C20 67 19 49 29 39" />
        <path className="mini-body" d="M39 104V70c0-13 10-24 26-24h26c14 0 27 11 27 28v30h-17V83c0-4-2-7-6-7H63c-5 0-8 3-8 8v20H39Z" />
        <path className="mini-chest" d="M95 47c20 3 28 14 26 25-2 10-12 16-27 15H64c-8 0-12-4-12-10 0-12 16-31 43-30Z" />
        <path className="mini-head" d="M74 44c7-15 22-26 39-20 16 6 21 22 15 34-6 12-21 17-37 12-13-4-22-14-17-26Z" />
        <path className="mini-ear" d="M105 24c15 1 24 10 27 20-14 1-26-5-33-15 2-2 4-4 6-5Z" />
        <path className="mini-shadow" d="M65 75c22 4 42 0 56-9-3 9-12 17-28 20H63c-7 0-11-3-11-9 4-2 8-3 13-2Z" />
        <path className="mini-leg" d="M53 103h18V78H55c-2 7-3 15-2 25Z" />
        <path className="mini-leg dark" d="M95 103h18V78H98c-2 8-3 16-3 25Z" />
      </g>
    </svg>
  );
}

function DogSilhouette() {
  return (
    <svg className="dog-svg" viewBox="0 0 300 520" aria-hidden="true">
      <path className="dog-fill" d="M143 505c-18-40-16-93-12-140 3-32 5-64-5-91-9-26-29-45-45-66-18-24-28-50-18-78 11-31 42-50 76-55 30-5 59 3 83 22 28 22 46 58 43 91-3 33-25 55-53 68 33 32 50 76 50 130v119H143Z" />
      <path className="dog-fill" d="M88 159c-29 4-55-2-72-14 17-17 50-28 82-22 13 2 18 33-10 36Z" />
      <path className="rim" d="M85 146c30-24 81-30 121 2" />
      <path className="rim" d="M207 96c39 25 58 75 39 118" />
      <path className="rim" d="M138 166c-23 24-26 66-12 101" />
      <path className="rim thin" d="M169 90c-20 15-24 43-10 66" />
      <path className="rim thin" d="M212 255c30 37 43 87 40 147" />
      <path className="rim thin" d="M134 326c4 60 1 120 19 177" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual gate-visual" aria-label="Mysterious luxury dog pod with glowing mango doorway and dog silhouette">
      <div className="gate-halo" />
      <div className="gate">
        <div className="gate-inner">
          <DogSilhouette />
        </div>
      </div>
      <div className="floor-light" />
    </div>
  );
}

const rooms = [
  ['Paw Pods', 'Private, cosy sleeping pods for dogs who enjoy their own quiet space and a restful overnight routine.'],
  ['Pack Lounge', 'A more social, home-like option for dogs who settle best with human presence and a relaxed environment.'],
  ['Alpha Suites', 'Spacious overnight suites with comfort, routine, and supervision for dogs who benefit from extra room.'],
];

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <MiniLogoMark />
            <p className="eyebrow">Premium overnight dog care in Auckland</p>
            <h1>Dog Hotel</h1>
            <p className="byline">by Woofland</p>
            <span className="hero-rule" />
            <p className="tagline">Dogs deserve holidays.</p>
            <p className="lead">A calm, comfort-focused overnight stay for dogs, with private Paw Pods, a home-like Pack Lounge, spacious Alpha Suites, soft bedding, and supervised care.</p>
            <div className="actions">
              <a className="button gold" href={`mailto:${contact.email}?subject=Dog Hotel by Woofland Enquiry`}>Check Availability</a>
              <a className="button outline" href="#rooms">View Stay Options</a>
            </div>
            <p className="hero-small">Operated by Woofland in Wairau Valley, Auckland.</p>
          </div>
          <HeroVisual />
        </section>

        <section id="rooms" className="section rooms">
          <div className="section-heading">
            <p className="eyebrow">Stay options</p>
            <h2>Designed for different personalities and sleeping styles</h2>
          </div>
          <div className="room-grid">
            {rooms.map(([title, text]) => <article className="room-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="care" className="section split-section">
          <div>
            <p className="eyebrow">Care</p>
            <h2>More than a place to stay</h2>
            <p>Dog Hotel by Woofland is built around calm routines, comfort, supervision, and peace of mind. Stays are designed to feel secure and positive, whether your dog is with us for a weekend, a holiday, or a longer booking.</p>
          </div>
          <div className="feature-list">
            <div><span>01</span><p>Full supervision and thoughtful handling.</p></div>
            <div><span>02</span><p>Daily exercise, rest, and structured care.</p></div>
            <div><span>03</span><p>Private and social options depending on your dog’s needs.</p></div>
            <div><span>04</span><p>Bring your dog’s food, bedding, and essentials for a familiar stay.</p></div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <p className="eyebrow">FAQ</p>
          <h2>{BRAND_NAME} FAQs</h2>
          <div className="faq-list">
            <Faq q="Do you provide overnight care?" a="Yes. We offer both home-like stays and private pods for overnight boarding, depending on your dog’s needs." />
            <Faq q="Is the hotel fully supervised?" a="Yes. Trained team members are on hand to monitor, support, and care for dogs throughout their stay." />
            <Faq q="What should I bring for my dog’s stay?" a="Please bring your dog’s food, bed, favourite toy, and any necessary medication to help them feel at home." />
            <Faq q="How do I enquire about availability?" a="Use the enquiry buttons on this page or contact Woofland directly on 0800 147 369 or info@woofland.co.nz." />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Faq({ q, a }) {
  return <details><summary>{q}</summary><p>{a}</p></details>;
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>{BRAND_NAME}</h3>
        <p>137 Wairau Road, Wairau Valley, Auckland 0627</p>
        <p><a href={`tel:${contact.phone}`}>0800 147 369</a> · <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
      </div>
      <div className="footer-links">
        <a href={routeLink('privacy-policy')}>Privacy Policy</a>
        <a href={routeLink('terms-and-conditions')}>Terms & Conditions</a>
      </div>
    </footer>
  );
}

function LegalPage({ type }) {
  const isTerms = type === 'terms';
  return (
    <>
      <Header />
      <main className="legal-page">
        <p className="eyebrow">{isTerms ? 'Terms & Conditions' : 'Privacy Policy'}</p>
        <h1>{isTerms ? 'Dog Hotel by Woofland Terms' : 'Woofland Privacy Policy'}</h1>
        {isTerms ? <Terms /> : <Privacy />}
      </main>
      <Footer />
    </>
  );
}

function Terms() {
  return <div className="legal-box"><p>These pages are for Dog Hotel by Woofland. Final booking, care, payment, and operational terms should follow Woofland’s current official terms and conditions.</p><h2>General stay expectations</h2><ul><li>Dogs must be suitable for the environment and appropriately social or managed according to their needs.</li><li>Vaccinations, including kennel cough, should be current.</li><li>Owners should provide food, bedding, toys, and any required medication.</li><li>Bookings remain subject to availability and suitability.</li></ul></div>;
}

function Privacy() {
  return <div className="legal-box"><p><strong>Last updated:</strong> 1 April 2024</p><p>Woofland is committed to protecting your personal information and your right to privacy. For questions, please contact info@woofland.co.nz.</p><h2>Information we collect</h2><ul><li>Personal information you disclose to us, such as name, email address, phone number, and address.</li><li>Information automatically collected, such as IP address, browser type, and device type.</li><li>Information collected from other sources, such as social media platforms.</li></ul><h2>How we use information</h2><ul><li>Facilitating account creation and logon processes.</li><li>Sending marketing and promotional communications.</li><li>Responding to enquiries and offering support.</li><li>Protecting our services and maintaining security.</li></ul></div>;
}

function getRoute() {
  const hash = window.location.hash || '';
  if (hash === '#/terms-and-conditions') return 'terms';
  if (hash === '#/privacy-policy') return 'privacy';
  return 'home';
}

function App() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  if (route === 'terms') return <LegalPage type="terms" />;
  if (route === 'privacy') return <LegalPage type="privacy" />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
