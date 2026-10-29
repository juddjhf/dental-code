import { useState } from 'react'
import { Check, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="contact-heading">
        <div className="section-inner">
          <span className="eyebrow">WE’RE EASY TO TALK TO</span>
          <h1>LET’S START<br /><span>A CONVERSATION.</span></h1>
          <p>Come see the space, meet the crew, or just ask a question. We’re here.</p>
        </div>
      </section>
      <section className="contact-section section-pad">
        <div className="section-inner contact-layout">
          <div className="contact-details reveal">
            <span className="eyebrow">COME FIND US</span>
            <h2>GOOD THINGS<br />HAPPEN <span>HERE.</span></h2>
            <div className="contact-detail"><MapPin /><div><strong>THE GYM</strong><p>42, Indiranagar, Bengaluru,<br />Karnataka 560038</p></div></div>
            <div className="contact-detail"><Clock3 /><div><strong>OPENING HOURS</strong><p>Mon – Fri · 6:00 am – 10:00 pm<br />Sat – Sun · 7:00 am – 8:00 pm</p></div></div>
            <div className="contact-detail"><Phone /><div><strong>GIVE US A CALL</strong><a href="tel:+918012345678">+91 80 1234 5678</a></div></div>
            <div className="contact-detail"><Mail /><div><strong>SEND A NOTE</strong><a href="mailto:hello@ironcore.fit">hello@ironcore.fit</a></div></div>
            <div className="map-placeholder" role="img" aria-label="Map placeholder showing IRONCORE FITNESS in Indiranagar, Bengaluru"><MapPin size={28} /><strong>IRONCORE FITNESS</strong><span>INDIRANAGAR, BENGALURU</span></div>
            <p className="map-note">Map placeholder for demo · 42, Indiranagar, Bengaluru</p>
          </div>
          <div className="contact-form-panel reveal">
            {submitted ? (
              <div className="contact-success" role="status">
                <span className="success-icon"><Check size={22} /></span><span className="eyebrow">ALL SET</span>
                <h2>THANKS FOR<br /><span>REACHING OUT.</span></h2>
                <p>Your demo form passed validation. Nothing has been sent or stored because this site has no backend connected.</p>
                <Button variant="outline-dark" onClick={() => setSubmitted(false)}>Send another demo enquiry</Button>
              </div>
            ) : (
              <>
                <span className="eyebrow">DROP US A LINE</span>
                <h2>WHAT’S ON<br /><span>YOUR MIND?</span></h2>
                <p className="form-panel-intro">Tell us what you’re looking for and we’ll help you find your next step.</p>
                <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                  <label htmlFor="contact-name">YOUR NAME</label><input id="contact-name" name="name" autoComplete="name" required minLength="2" placeholder="How should we say hello?" />
                  <label htmlFor="contact-email">EMAIL ADDRESS</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                  <label htmlFor="contact-phone">PHONE NUMBER</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" required pattern="\+?[0-9][0-9\s]{6,16}[0-9]" placeholder="+91 98765 43210" />
                  <label htmlFor="contact-enquiry">WHAT CAN WE HELP WITH?</label><textarea id="contact-enquiry" name="enquiry" rows="4" required minLength="10" placeholder="Classes, memberships, getting started — anything at all." />
                  <Button type="submit">Send demo enquiry <span>↗</span></Button>
                  <p className="form-disclaimer">Demo form only. Your information is not sent or stored.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
