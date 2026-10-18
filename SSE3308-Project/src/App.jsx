import { useState } from 'react'
import './App.css'

const airLevels = {
  Good: {
    label: 'Good air day',
    title: 'Enjoy the outdoors, and stay informed.',
    advice:
      'Go about your usual routine. Check your local air-quality updates in case conditions change.',
  },
  Elevated: {
    label: 'Air quality is elevated',
    title: 'Take it a little easier outside.',
    advice:
      'Consider shorter, less strenuous outdoor activities. Children, older adults, and people with heart or lung conditions may want to spend less time outdoors.',
  },
  Poor: {
    label: 'Poor air quality',
    title: 'Move strenuous activities indoors.',
    advice:
      'Keep outdoor time brief, especially for sensitive groups. If the air is smoky, close windows and doors where possible and follow local health advice.',
  },
  'Very poor': {
    label: 'Very poor air quality',
    title: 'Reduce your exposure as much as you can.',
    advice:
      'Stay indoors in cleaner air where possible, avoid strenuous outdoor activity, and follow updates from your local health and environment authorities.',
  },
}

const hazeFacts = [
  {
    number: '01',
    title: 'Tiny particles, big impact',
    description:
      'Haze can contain fine particles that travel deep into the lungs. The smallest particles are known as PM2.5.',
    icon: '◌',
  },
  {
    number: '02',
    title: 'Everyone can be affected',
    description:
      'Irritated eyes, a scratchy throat, coughing, or shortness of breath can happen when air quality worsens.',
    icon: '＋',
  },
  {
    number: '03',
    title: 'Some people need extra care',
    description:
      'Children, older adults, pregnant people, and those with heart or lung conditions may be more sensitive.',
    icon: '♡',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
      <path d="M25.7 5.8C15 5.5 7.2 9.1 6 17c-.8 5.1 2.6 8.9 7.1 8.3 8.3-1.1 12.8-9.4 12.6-19.5Z" fill="currentColor" />
      <path d="M7 27c2.1-5.5 6.1-9.7 12.3-13" stroke="#F8F6ED" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function App() {
  const [airLevel, setAirLevel] = useState('Elevated')
  const guidance = airLevels[airLevel]

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Airwise home">
          <span className="brand-mark"><LeafIcon /></span>
          <span>airwise<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#understand">Understand haze</a>
          <a href="#your-day">Your day</a>
          <a href="#protect">How to protect yourself</a>
        </nav>
        <a className="header-link" href="#your-day">
          Make a plan <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A little clarity for hazy days</p>
            <h1>When the air gets hazy, <span>know what to do.</span></h1>
            <p className="hero-description">
              Understand what haze means, check your local air-quality updates, and take simple steps to look after yourself and the people around you.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#your-day">Find your next step <ArrowIcon /></a>
              <a className="text-link" href="#understand">Get to know haze <span>↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-icon">i</span>
              <p>Air quality changes from place to place. Always check guidance from your local authorities.</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a hazy city skyline" role="img">
            <div className="sun-halo" />
            <div className="sun" />
            <div className="cloud cloud-one" />
            <div className="cloud cloud-two" />
            <div className="distant-city">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
            <div className="near-city">
              <i /><i /><i /><i /><i />
            </div>
            <div className="art-caption">
              <span className="caption-pulse" />
              <span>Pause. Check. Protect.</span>
            </div>
            <div className="particle particle-one" />
            <div className="particle particle-two" />
            <div className="particle particle-three" />
          </div>
        </section>

        <section className="ticker" aria-label="Haze reminder">
          <div className="ticker-inner">
            <span>KNOW YOUR AIR</span><b>✳</b>
            <span>LOOK OUT FOR EACH OTHER</span><b>✳</b>
            <span>SMALL STEPS MAKE A DIFFERENCE</span><b>✳</b>
            <span>KNOW YOUR AIR</span>
          </div>
        </section>

        <section className="understand section-wrap section-pad" id="understand">
          <div className="section-intro">
            <p className="eyebrow">The essentials</p>
            <h2>First, a little about <span>haze.</span></h2>
            <p>Haze is more than a blurry skyline. Here are three things worth knowing before you head out.</p>
          </div>
          <div className="fact-grid">
            {hazeFacts.map((fact) => (
              <article className="fact-card" key={fact.number}>
                <div className="fact-topline"><span>{fact.number}</span><span className="fact-icon" aria-hidden="true">{fact.icon}</span></div>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </article>
            ))}
          </div>
          <p className="source-note">Haze can have different causes and conditions. Use your local air-quality index and health advisories for the most relevant information.</p>
        </section>

        <section className="daily-guide" id="your-day">
          <div className="daily-inner section-wrap">
            <div className="daily-copy">
              <p className="eyebrow">A simple check-in</p>
              <h2>What does the air look like <span>where you are?</span></h2>
              <p>Choose the category shown by your local air-quality service for a few sensible next steps.</p>
              <a className="text-link dark-link" href="#resources">Find trusted resources <span>↗</span></a>
            </div>
            <div className="guide-card">
              <div className="guide-card-heading">
                <div>
                  <span className="guide-label">YOUR LOCAL AIR QUALITY</span>
                  <p>Select a category</p>
                </div>
                <span className="guide-sparkle" aria-hidden="true">✳</span>
              </div>
              <div className="level-options" role="group" aria-label="Select local air quality category">
                {Object.keys(airLevels).map((level) => (
                  <button
                    className={`level-option${airLevel === level ? ' is-selected' : ''}`}
                    type="button"
                    key={level}
                    aria-pressed={airLevel === level}
                    onClick={() => setAirLevel(level)}
                  >
                    <span className="level-dot" />{level}
                  </button>
                ))}
              </div>
              <div className="recommendation" aria-live="polite">
                <span className="recommendation-label">{guidance.label}</span>
                <h3>{guidance.title}</h3>
                <p>{guidance.advice}</p>
              </div>
              <p className="guide-footnote">Categories and thresholds vary by location. This guide is general information, not medical advice.</p>
            </div>
          </div>
        </section>

        <section className="protect section-wrap section-pad" id="protect">
          <div className="section-intro protect-intro">
            <p className="eyebrow">Keep it simple</p>
            <h2>Four ways to <span>look after yourself.</span></h2>
          </div>
          <div className="action-list">
            <article className="action-row">
              <span className="action-number">01</span>
              <div><h3>Check before you go</h3><p>Look up your local AQI or PSI and any official health advisories before planning outdoor activities.</p></div>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="action-row">
              <span className="action-number">02</span>
              <div><h3>Adjust your plans</h3><p>When air quality is poor, reduce time and exertion outdoors. Move exercise indoors if you can.</p></div>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="action-row">
              <span className="action-number">03</span>
              <div><h3>Make indoor air more comfortable</h3><p>On smoky days, keep windows and doors closed where possible. Follow local advice about ventilation and air cleaners.</p></div>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </article>
            <article className="action-row">
              <span className="action-number">04</span>
              <div><h3>Notice how you feel</h3><p>Get medical help if you have severe or worsening symptoms, or follow your clinician’s advice for an existing condition.</p></div>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-inner section-wrap">
            <div className="faq-heading">
              <p className="eyebrow">Good to know</p>
              <h2>A few common <span>questions.</span></h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>Where can I check the air quality?</summary>
                <p>Use the official air-quality or environment agency for your area. AQI and PSI scales can differ, so follow the local scale and its health advice.</p>
              </details>
              <details>
                <summary>Who should take extra precautions?</summary>
                <p>Children, older adults, pregnant people, and people with heart or lung conditions can be more sensitive to air pollution. Ask a healthcare professional for advice tailored to you.</p>
              </details>
              <details>
                <summary>Does a face covering protect me from haze?</summary>
                <p>Protection depends on the type of mask and how well it fits. Check guidance from your local health authority for recommendations during haze events.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="resources section-wrap" id="resources">
          <div className="resource-callout">
            <div>
              <p className="eyebrow">Go a little further</p>
              <h2>Good information helps us <span>breathe easier.</span></h2>
              <p>For current conditions, use official local updates. For health guidance, start with trusted public-health sources.</p>
            </div>
            <div className="resource-links">
              <a href="https://www.who.int/health-topics/air-pollution" target="_blank" rel="noreferrer">WHO air pollution <ArrowIcon /></a>
              <a href="https://www.airnow.gov/" target="_blank" rel="noreferrer">AirNow: air quality basics <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><LeafIcon /></span><span>airwise<span className="brand-period">.</span></span></a>
        <p>Clear information for hazy days.</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
