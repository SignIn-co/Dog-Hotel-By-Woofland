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

function SittingDog() {
  return (
    <svg className="dog-svg" viewBox="0 0 420 620" aria-hidden="true">
      <defs>
        <filter id="softRim" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#d58616" floodOpacity="0.34" />
        </filter>
      </defs>
      <g filter="url(#softRim)">
        <path className="dog-fill" d="M221 535c-51 0-88-27-104-76-11-35-10-83 3-128 11-39 29-72 48-95 7-8 7-18 0-25-16-16-26-35-29-57-4-30 8-58 35-78 22-17 49-23 80-18 21 4 38 11 51 23 13 11 27 26 40 45 10 15 19 31 28 49 18 37 28 82 28 126 0 44-9 84-27 120-18 35-43 62-75 82-24 15-50 23-78 32z" />
        <path className="dog-fill" d="M154 158c-8-34 4-65 33-85 22-16 50-23 82-18 34 6 64 25 88 57 14 18 21 34 22 48 1 11-4 20-15 26-16 9-35 9-59 2-21-6-41-15-62-27-20-11-36-15-48-11-14 4-28 7-41 8z" />
        <path className="dog-fill" d="M151 130c-28-8-55-3-80 16-17 13-29 27-36 41-5 12-2 20 10 24 20 6 47 0 80-18 21-11 36-25 46-43 4-8-3-16-20-20z" />
        <path className="dog-fill" d="M315 151c14-31 39-46 74-45 18 1 31 7 38 18 7 11 6 23-4 36-16 20-39 33-71 40-26 6-43-2-37-49z" />
        <path className="dog-fill" d="M96 440c-23 26-36 56-38 89-2 27 8 45 30 54 15 6 32 5 49-2 11-5 12-15 2-28-10-13-14-32-11-57 3-26 8-51 16-76 7-22 2-29-15-21-11 5-22 19-33 41z" />
        <path className="dog-fill" d="M290 476c3 35 10 62 21 81 10 17 25 27 45 31 16 2 30 0 42-8 10-7 9-16-3-26-13-11-21-27-24-49-3-24-4-49-4-75 0-22-8-32-25-30-28 4-45 29-52 76z" />
        <path className="dog-fill" d="M145 536c32 10 69 12 112 6 7-1 10 3 9 10-4 18-16 32-36 40-22 9-50 10-85 1-16-4-25-12-26-23-2-17 7-28 26-34z" />
        <path className="rim" d="M104 192c34-9 69-28 105-57 34 26 70 46 108 60" />
        <path className="rim" d="M174 77c35-28 87-30 130-3" />
        <path className="rim" d="M257 55c32 7 59 27 82 59" />
        <path className="rim" d="M349 120c21-8 44-10 68-6" />
        <path className="rim thin" d="M324 150c20 22 48 25 85 10" />
        <path className="rim thin" d="M189 242c45 20 89 20 133 0" />
        <path className="rim thin" d="M117 356c38 13 79 17 123 12" />
      </g>
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Glowing dog hotel doorway with a dark sitting dog silhouette">
      <div className="gate-halo" />
      <div className="gate">
        <div className="gate-inner">
          <SittingDog />
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
