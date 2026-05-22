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

function HeroVisual() {
  return (
    <div className="hero-visual portal-visual" aria-label="Glowing rounded gate frame without dog">
      <svg className="portal-svg" viewBox="0 0 430 760" aria-hidden="true">
        <defs>
          <filter id="portalGlow" x="-90%" y="-70%" width="280%" height="260%">
            <feGaussianBlur stdDeviation="3.2" result="soft" />
            <feColorMatrix in="soft" type="matrix" values="1 0 0 0 1  0 0.55 0 0 0.42  0 0 0.05 0 0  0 0 0 0.92 0" result="gold" />
            <feMerge>
              <feMergeNode in="gold" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="outerAmber" x="-100%" y="-80%" width="300%" height="280%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <linearGradient id="lineGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff6bd" />
            <stop offset="10%" stopColor="#ffcf58" />
            <stop offset="50%" stopColor="#ff9f12" />
            <stop offset="90%" stopColor="#ff9b0d" />
            <stop offset="100%" stopColor="#ffd05a" />
          </linearGradient>
        </defs>
        <path className="portal-outer" d="M86 628 L86 215 C86 110 141 53 215 53 C289 53 344 110 344 215 L344 628 C344 684 300 721 215 721 C130 721 86 684 86 628 Z" />
        <path className="portal-line" d="M86 628 L86 215 C86 110 141 53 215 53 C289 53 344 110 344 215 L344 628 C344 684 300 721 215 721 C130 721 86 684 86 628 Z" />
      </svg>
      <div className="portal-floor" />
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
            <p className="eyebrow">Premium overnight dog care in Auckland</p>
            <h1>{BRAND_NAME}</h1>
            <p className="tagline">Stay. Rest. Feel at Home.</p>
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
