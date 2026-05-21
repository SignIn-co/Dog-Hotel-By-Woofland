import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const BASE = '/Dog-Hotel-By-Woofland/';
const BRAND_NAME = 'Dog Hotel by Woofland';

const contact = {
  address: '137 Wairau Road, Wairau Valley, Auckland 0627',
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
        <a className="nav-cta" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{BRAND_NAME}</h3>
          <p>DogHotel.co.nz is operated by Woofland in Wairau Valley, Auckland.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>137 Wairau Road, Wairau Valley,<br />Auckland 0627</p>
          <p><strong>Call:</strong><br /><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
          <p><strong>Email:</strong><br /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div>
          <h4>Legal</h4>
          <a href={routeLink('terms-and-conditions')}>Terms & Conditions</a>
          <a href={routeLink('privacy-policy')}>Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Woofland. All rights reserved.</span>
        <span>Premium overnight dog care in Auckland.</span>
      </div>
    </footer>
  );
}

const rooms = [
  {
    title: 'Paw Pod',
    label: 'Private Dog Pods',
    text: 'A calm, secure, and hygienic private space for dogs who prefer their own room. Each Paw Pod includes soft bedding, air conditioning, and continuous air quality monitoring.',
    features: ['Private space', 'Soft bedding', 'Air conditioning', 'Air quality monitoring'],
  },
  {
    title: 'Pack Lounge',
    label: 'Home-like Stay',
    text: 'A spacious home-style lounge for suitable social dogs. With couches, soft beds, a calm atmosphere, and full supervision. At night, a caregiver stays and sleeps with them.',
    features: ['Cage-free', 'Crate-free', 'Caregiver overnight', 'Home-like comfort'],
  },
  {
    title: 'Alpha Suite',
    label: 'Spacious Suite',
    text: 'A spacious, premium option for families with multiple dogs or dogs who enjoy extra room. Alpha Suites include large windows, soft bedding, privacy, and climate-controlled comfort.',
    features: ['Extra space', 'Large windows', 'Privacy', 'Longer stays'],
  },
];

function CodeBuiltHeroArt() {
  return (
    <div className="hero-art" aria-label="Glowing dog hotel doorway with a mysterious dog silhouette">
      <div className="ambient-halo" />
      <div className="door-pod">
        <div className="dog-silhouette">
          <span className="dog-body" />
          <span className="dog-chest" />
          <span className="dog-neck" />
          <span className="dog-head" />
          <span className="dog-muzzle" />
          <span className="dog-ear" />
          <span className="dog-highlight head-line" />
          <span className="dog-highlight back-line" />
        </div>
      </div>
      <div className="floor-glow" />
    </div>
  );
}

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
              <a className="button gold" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
              <a className="button outline" href="#rooms">View Stay Options</a>
            </div>
            <p className="hero-small">Operated by Woofland in Wairau Valley, Auckland.</p>
          </div>
          <CodeBuiltHeroArt />
        </section>

        <section id="care" className="section intro">
          <div className="section-title">
            <p className="eyebrow">Your dog’s holiday destination</p>
            <h2>Luxury in the ways that matter to dogs.</h2>
            <p>Not fake luxury. Real comfort. Calm spaces, soft rest areas, thoughtful routines, supervision, and the right environment for each dog.</p>
          </div>
          <div className="three-grid">
            <Feature number="01" title="Staff present day and night" text="Your dog is supported by Woofland’s team, with routines designed around comfort, safety, and settling well overnight." />
            <Feature number="02" title="Home-like options" text="Some dogs prefer their own room, some relax better socially, and some need extra space. The stay can match your dog." />
            <Feature number="03" title="Comfort-focused environment" text="Soft bedding, air conditioning, air quality monitoring, calm rest areas, and structured routines help dogs settle." />
          </div>
        </section>

        <section id="rooms" className="section rooms">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choose the right room</p>
              <h2>Paw Pod, Pack Lounge, or Alpha Suite</h2>
            </div>
            <p>Different dogs settle in different ways. Dog Hotel by Woofland offers private, social, and suite-style options so the stay can match your dog’s personality and needs.</p>
          </div>
          <div className="room-grid">
            {rooms.map((room, index) => <RoomCard room={room} key={room.title} featured={index === 1} />)}
          </div>
        </section>

        <section className="split-section">
          <div className="split-copy">
            <p className="eyebrow">Where dogs go on holiday</p>
            <h2>Daytime care and overnight rest, together.</h2>
            <p>Suitable dogs can combine daytime activity, enrichment, social care, and overnight rest, depending on suitability and availability.</p>
            <div className="included-list">
              <span>Soft bedding and calm rest spaces</span>
              <span>Caregiver overnight for Pack Lounge</span>
              <span>Selected pick-up and drop-off may be available</span>
              <span>Located at Woofland in Wairau Valley, Auckland</span>
            </div>
          </div>
          <div className="mini-visual" aria-hidden="true">
            <div className="mini-door"><span /></div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <p className="eyebrow">Questions</p>
          <h2>{BRAND_NAME} FAQs</h2>
          <div className="faq-list">
            <Faq q="Does Dog Hotel by Woofland offer dog hotel care in Auckland?" a="Yes. Dog Hotel by Woofland offers overnight dog hotel-style care in Auckland for owners who want a warm, structured, and comfort-focused stay for their dogs." />
            <Faq q="Is dog hotel care the same as dog boarding?" a="They are similar because both include overnight accommodation. Dog hotel care usually describes a more comfort-focused and personal style of overnight stay." />
            <Faq q="Which option is best for my dog?" a="It depends on your dog’s personality, routine, social comfort, and booking needs. Paw Pods suit dogs who prefer privacy, Pack Lounge suits suitable social dogs, and Alpha Suites suit dogs who need more room." />
            <Faq q="Can my dog attend daycare and stay overnight?" a="Yes, depending on suitability, booking type, availability, and your dog’s comfort. Daytime activity and overnight rest can work together for many dogs." />
          </div>
        </section>

        <section className="cta">
          <p className="eyebrow">Stay. Rest. Feel at Home.</p>
          <h2>Contact Dog Hotel by Woofland to find the right overnight care option.</h2>
          <p>We will help you choose between Paw Pod, Pack Lounge, and Alpha Suite based on your dog’s routine, comfort, and suitability.</p>
          <a className="button gold" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Feature({ number, title, text }) {
  return <article className="card"><span className="card-number">{number}</span><h3>{title}</h3><p>{text}</p></article>;
}

function RoomCard({ room, featured }) {
  return (
    <article className={featured ? 'room-card featured' : 'room-card'}>
      <p className="room-label">{room.label}</p>
      <h3>{room.title}</h3>
      <p>{room.text}</p>
      <ul>{room.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
    </article>
  );
}

function Faq({ q, a }) {
  return <details><summary>{q}</summary><p>{a}</p></details>;
}

function LegalPage({ type }) {
  const isTerms = type === 'terms';
  return (
    <>
      <Header />
      <main className="legal-page">
        <p className="eyebrow">{BRAND_NAME} legal</p>
        <h1>{isTerms ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
        <div className="modal-box legal-box">
          <h2>{isTerms ? 'Terms & Conditions' : 'Privacy Policy'}</h2>
          <p>This page should use the exact same {isTerms ? 'Terms & Conditions' : 'Privacy Policy'} content as Woofland.</p>
          <p><strong>Contact:</strong> {contact.email} | {contact.phone}</p>
        </div>
      </main>
      <Footer />
    </>
  );
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
