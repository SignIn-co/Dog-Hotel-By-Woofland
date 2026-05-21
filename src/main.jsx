import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const BASE = '/Dog-Hotel-By-Woofland/';
const BRAND_NAME = 'Dog Hotel by Woofland';
const HERO_IMAGE = `${BASE}images/dog-hotel-hero.png`;

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
      <nav>
        <a href={homeLink('#rooms')}>Rooms</a>
        <a href={homeLink('#care')}>Care</a>
        <a href={homeLink('#faq')}>FAQ</a>
        <a className="button dark" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
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
        <span>{BRAND_NAME}. Premium overnight dog care in Auckland.</span>
      </div>
    </footer>
  );
}

const rooms = [
  {
    title: 'Paw Pod',
    label: 'Private Dog Pods',
    text: 'A calm, secure, and hygienic private space for dogs who prefer their own room. Each Paw Pod includes soft bedding, air conditioning, and continuous air quality monitoring, with staff present in the building day and night.',
    features: ['Private space', 'Soft bedding', 'Air conditioning', 'Air quality monitoring'],
  },
  {
    title: 'Pack Lounge',
    label: 'Home-like Stay',
    text: 'A spacious home-style lounge for suitable social dogs. With couches, soft beds, a calm atmosphere, and full supervision, dogs can rest, play, and enjoy human interaction throughout the day. At night, a caregiver stays and sleeps with them for comfort and safety.',
    features: ['Cage-free', 'Crate-free', 'Caregiver overnight', 'Home-like comfort'],
  },
  {
    title: 'Alpha Suite',
    label: 'Spacious Suite',
    text: 'A spacious, premium option for families with multiple dogs or dogs who enjoy extra room. Alpha Suites include large windows, soft bedding, privacy, and a calm climate-controlled environment, making them suitable for longer stays.',
    features: ['Extra space', 'Large windows', 'Privacy', 'Longer stays'],
  },
];

function HeroVisual() {
  return (
    <div className="hero-visual">
      <img className="hero-image" src={HERO_IMAGE} alt="Dog Hotel by Woofland luxury glowing doorway with a mysterious dog silhouette" />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Premium overnight dog care in Auckland</p>
            <h1>{BRAND_NAME}</h1>
            <p className="tagline">Stay. Rest. Feel at Home.</p>
            <p className="lead">A warmer, more comfortable overnight stay for dogs, with private Paw Pods, a home-like Pack Lounge, spacious Alpha Suites, calm routines, soft bedding, and supervised care.</p>
            <div className="actions">
              <a className="button gold" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
              <a className="button light" href="#rooms">View Stay Options</a>
            </div>
            <p className="note">{BRAND_NAME} is operated by Woofland in Wairau Valley, Auckland. Suitable for holidays, business trips, weekend stays, emergency stays, and longer bookings, depending on availability and suitability.</p>
          </div>
          <HeroVisual />
        </section>

        <section id="care" className="section center intro-section">
          <p className="eyebrow">Your dog’s holiday destination</p>
          <h2>Comfort, routine, and supervision</h2>
          <p className="section-lead">Dogs need more than a place to sleep. They need a calm environment, familiar routines, soft rest spaces, and people who understand how to help them settle while they are away from home.</p>
          <div className="three-grid">
            <Feature title="Staff present day and night" text="Your dog is supported by Woofland’s team, with staff present in the building and routines designed around comfort and safety." />
            <Feature title="Real home-like options" text="Dogs are not all the same. Some need a private pod, some settle better in a social lounge, and some need more space." />
            <Feature title="Comfort-focused environment" text="Soft bedding, air conditioning, air quality monitoring, calm rest areas, and structured routines help dogs settle." />
          </div>
        </section>

        <section id="rooms" className="section room-section">
          <p className="eyebrow">Choose the right room</p>
          <h2>Paw Pod, Pack Lounge, or Alpha Suite</h2>
          <p className="section-lead left">Different dogs settle in different ways. {BRAND_NAME} offers private, social, and suite-style options so the stay can match your dog’s personality and needs.</p>
          <div className="room-grid">
            {rooms.map((room) => <RoomCard room={room} key={room.title} />)}
          </div>
        </section>

        <section className="section dark-section">
          <p className="eyebrow gold-text">What makes it hotel-style</p>
          <h2>Premium in the ways that matter to dogs</h2>
          <div className="included-grid">
            {[
              'Three stay options: Paw Pod, Pack Lounge, and Alpha Suite',
              'Soft bedding and comfortable rest spaces',
              'Air conditioning and monitored air quality in Paw Pods',
              'Cage-free and crate-free Pack Lounge for suitable social dogs',
              'Caregiver sleeping with Pack Lounge dogs overnight',
              'Daycare and daytime activity options, depending on suitability and availability',
              'Selected pick-up and drop-off may be available for eligible bookings',
              'Located at Woofland in Wairau Valley, Auckland',
            ].map((item) => <div className="included" key={item}>✓ {item}</div>)}
          </div>
        </section>

        <section id="faq" className="section center faq-section">
          <p className="eyebrow">Questions</p>
          <h2>{BRAND_NAME} FAQs</h2>
          <div className="faq-list">
            <Faq q="Does Dog Hotel by Woofland offer dog hotel care in Auckland?" a="Yes. Dog Hotel by Woofland offers overnight dog hotel-style care in Auckland for owners who want a warm, structured, and comfort-focused stay for their dogs." />
            <Faq q="Is dog hotel care the same as dog boarding?" a="They are similar because both include overnight accommodation. Dog hotel care usually describes a more comfort-focused and personal style of overnight stay, with stronger attention to routine, rest, bedding, supervision, and environment." />
            <Faq q="Which option is best for my dog?" a="It depends on your dog’s personality, routine, social comfort, and booking needs. Paw Pods suit dogs who prefer privacy, Pack Lounge suits suitable social dogs, and Alpha Suites suit dogs who need more room or families with multiple dogs." />
            <Faq q="Can my dog attend daycare and stay overnight?" a="Yes, depending on suitability, booking type, availability, and your dog’s comfort. Daytime activity and overnight rest can work together for many dogs." />
            <Faq q="Does Dog Hotel by Woofland offer transport for bookings?" a="Selected pick-up and drop-off may be available for eligible bookings, depending on location, route, schedule, and availability." />
          </div>
        </section>

        <section className="cta">
          <p className="eyebrow gold-text">Where dogs go on holiday</p>
          <h2>Contact Dog Hotel by Woofland to find the right overnight care option.</h2>
          <p>We will help you choose between Paw Pod, Pack Lounge, and Alpha Suite based on your dog’s routine, comfort, and suitability.</p>
          <a className="button gold" href="mailto:info@woofland.co.nz?subject=Dog Hotel by Woofland Enquiry">Check Availability</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Feature({ title, text }) {
  return <div className="feature-card"><h3>{title}</h3><p>{text}</p></div>;
}

function RoomCard({ room }) {
  return (
    <article className="room-card">
      <p className="eyebrow">{room.label}</p>
      <h3>{room.title}</h3>
      <p>{room.text}</p>
      <ul>{room.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
    </article>
  );
}

function Faq({ q, a }) {
  return <div className="faq"><h3>{q}</h3><p>{a}</p></div>;
}

function LegalPage({ type }) {
  const isTerms = type === 'terms';
  return (
    <>
      <Header />
      <main className="legal-page">
        <p className="eyebrow">{BRAND_NAME} legal</p>
        <h1>{isTerms ? 'Terms & Conditions' : 'Privacy Policy'}</h1>
        <p className="lead">This page is for {BRAND_NAME} and should use the same legal content as Woofland.</p>
        <div className="legal-box">
          <h2>{isTerms ? 'Terms & Conditions' : 'Privacy Policy'}</h2>
          <p>The full legal wording should be copied from Woofland’s current {isTerms ? 'Terms & Conditions' : 'Privacy Policy'} page so the policy remains exactly the same across both websites.</p>
          <p>Until the final wording is added, please contact {BRAND_NAME} for the current policy details.</p>
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
