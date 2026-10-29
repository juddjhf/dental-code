import { useState } from 'react'
import { ArrowDown, ArrowRight, Check, ChevronDown, Clock3, Dumbbell, MoveUpRight, Sparkles, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import MembershipCard from '../components/MembershipCard'
import Modal from '../components/Modal'
import ProgramCard from '../components/ProgramCard'
import TrainerCard from '../components/TrainerCard'
import { imageUrl, programs } from '../data/programs'
import { trainers } from '../data/trainers'
import { memberships } from '../data/memberships'
import { testimonials } from '../data/testimonials'

const faqs = [
  { question: 'I’m new to the gym. Where should I start?', answer: 'Start with a complimentary conversation with our coaching team. We’ll learn what you’re working toward and help you find a class or training plan that feels right.' },
  { question: 'Do I need to book group classes?', answer: 'Classes can be booked in advance, and Pro and Elite members receive class access as part of their membership. Our team can help you find a session that fits your week.' },
  { question: 'Can I try the gym before joining?', answer: 'Absolutely. Get in touch to arrange a visit, meet the coaches, and see the space for yourself before making a decision.' },
]

const classes = [
  ['MON', 'Strength fundamentals', '07:00 AM', 'Arjun'],
  ['TUE', 'Move & restore', '08:00 AM', 'Maya'],
  ['WED', 'HIIT circuit', '06:30 PM', 'Kabir'],
  ['THU', 'Barbell club', '07:00 AM', 'Arjun'],
  ['SAT', 'Community conditioning', '09:00 AM', 'Maya'],
]

function SectionHeading({ eyebrow, title, copy, link, to = '/programs' }) {
  return (
    <div className="section-heading reveal">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-side">
        {copy && <p>{copy}</p>}
        {link && <Link className="text-link" to={to}>{link} <ArrowRight size={16} /></Link>}
      </div>
    </div>
  )
}

function EnquiryModal({ plan, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Modal open={Boolean(plan)} onClose={onClose} title={submitted ? 'You’re one step closer.' : `Let’s talk ${plan?.name.toLowerCase()}.`}>
      {submitted ? (
        <div className="modal-success" role="status">
          <span className="success-icon"><Check size={22} /></span>
          <p>Your demo enquiry is ready. No payment was taken and no message was sent.</p>
          <Button onClick={onClose}>Got it</Button>
        </div>
      ) : (
        <>
          <p className="modal-intro">Tell us a little about yourself and our team can help you explore the {plan?.name} plan. <strong>{plan?.price}/month</strong> · Illustrative demo pricing.</p>
          <form className="form-grid" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <label>Your name<input name="name" autoComplete="name" required placeholder="e.g. Aanya Sharma" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label className="form-full">Phone number<input name="phone" type="tel" autoComplete="tel" pattern="\+?[0-9][0-9\s]{6,16}[0-9]" required placeholder="+91 98765 43210" /></label>
            <Button className="form-full" type="submit">Request a conversation <ArrowRight size={16} /></Button>
          </form>
          <p className="form-disclaimer">Demo only. This form does not send or store your information.</p>
        </>
      )}
    </Modal>
  )
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const closeModal = () => setSelectedPlan(null)

  return (
    <>
      <section className="hero">
        <img className="hero-image" src={imageUrl('photo-1534438327276-14e5300c3a48', 2200)} alt="Premium strength training space at IRONCORE FITNESS" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-kicker"><span /> BUILT FOR WHAT’S NEXT</span>
          <h1>BUILD YOUR<br />STRENGTH.<br /><span>DEFINE YOUR LIMITS.</span></h1>
          <p>Train smarter, move stronger, and reach your fitness goals with expert coaching and a community built to push you forward.</p>
          <div className="hero-actions">
            <Button to="/programs" icon>Explore programs</Button>
            <Button to="/contact" variant="ghost">Start your journey <ArrowRight size={17} /></Button>
          </div>
          <div className="hero-proof">
            <div><UsersRound /><span>EXPERT COACHES<small>Here for your next rep</small></span></div>
            <div><Dumbbell /><span>BUILT TO PERFORM<small>Room to move, space to grow</small></span></div>
            <div><Sparkles /><span>MADE FLEXIBLE<small>Training that fits your life</small></span></div>
          </div>
        </div>
        <div className="hero-side-note">EST. FOR THE EVERYDAY ATHLETE — BLR, INDIA</div>
        <a className="hero-scroll" href="#intro"><ArrowDown size={16} /> SCROLL TO EXPLORE</a>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>

      <section id="intro" className="intro-section section-pad">
        <div className="intro-visual reveal">
          <img src={imageUrl('photo-1517836357463-d25dfeac3438', 1100)} alt="Athlete training with focus" loading="lazy" />
          <div className="intro-stamp"><span>GOOD<br />ENERGY.<br /><b>REAL<br />PROGRESS.</b></span></div>
          <div className="intro-caption">A SPACE TO SHOW UP AS YOU ARE.</div>
        </div>
        <div className="intro-copy reveal">
          <span className="eyebrow">MORE THAN A WORKOUT</span>
          <h2>FIND YOUR<br /><span>STRONG.</span></h2>
          <p className="lead">We believe fitness should add to your life, not take it over.</p>
          <p>IRONCORE is a place to get curious, build consistency, and feel good in your own strength. With expert coaches and a genuinely welcoming community, your next chapter starts wherever you are today.</p>
          <Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link>
          <div className="intro-stat-row">
            <div><strong>01</strong><span>GOOD PEOPLE.<br />REAL COACHING.</span></div>
            <div><strong>∞</strong><span>ROOM TO GROW.<br />NO FINISH LINE.</span></div>
          </div>
        </div>
      </section>

      <section className="programs-section section-pad section-dark">
        <div className="section-inner">
          <SectionHeading eyebrow="FIND YOUR WAY IN" title={<>TRAIN FOR<br /><span>YOUR LIFE.</span></>} copy="Different goals, different starting points. Find a way to move that feels like yours." link="Explore all programs" />
          <div className="program-grid home-program-grid">
            {programs.slice(0, 3).map((program, index) => <ProgramCard key={program.title} program={program} index={index} />)}
          </div>
        </div>
      </section>

      <section className="facilities-section section-pad">
        <div className="section-inner">
          <SectionHeading eyebrow="A PLACE THAT MOVES YOU" title={<>ROOM TO DO<br /><span>YOUR THING.</span></>} copy="Thoughtful details. Serious kit. Space to train your way." />
          <div className="facility-gallery reveal">
            <figure className="facility-large"><img src={imageUrl('photo-1534258936925-c58bed479fcb', 1300)} alt="Open gym floor with room for functional movement" loading="lazy" /><figcaption>01 / OPEN FLOOR, OPEN POSSIBILITIES</figcaption></figure>
            <figure><img src={imageUrl('photo-1583454110551-21f2fa2afe61', 900)} alt="Strength training equipment" loading="lazy" /><figcaption>02 / BUILT FOR THE BIG LIFTS</figcaption></figure>
            <figure><img src={imageUrl('photo-1576678927484-cc907957088c', 900)} alt="Modern gym equipment" loading="lazy" /><figcaption>03 / EVERY DETAIL, CONSIDERED</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="trainers-section section-pad">
        <div className="section-inner">
          <SectionHeading eyebrow="IN YOUR CORNER" title={<>GOOD COACHES.<br /><span>BETTER DAYS.</span></>} copy="Real people, thoughtful coaching, and just the right nudge when you need it." link="Meet your coaches" to="/trainers" />
          <div className="trainer-grid">
            {trainers.map((trainer) => <TrainerCard key={trainer.name} trainer={trainer} />)}
          </div>
        </div>
      </section>

      <section className="membership-section section-pad section-dark">
        <div className="section-inner">
          <SectionHeading eyebrow="YOUR KIND OF COMMITMENT" title={<>A PLAN THAT<br /><span>MEETS YOU HERE.</span></>} copy="No pressure to be anyone but you. Choose the membership that fits your now." link="Membership details" to="/membership" />
          <div className="membership-grid">
            {memberships.map((plan) => <MembershipCard key={plan.name} plan={plan} onChoose={setSelectedPlan} />)}
          </div>
          <p className="pricing-note"><Clock3 size={15} /> Transparent, illustrative demo pricing. No joining fees shown.</p>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="section-inner">
          <SectionHeading eyebrow="THE FEELING IS REAL" title={<>SMALL WINS.<br /><span>BIG ENERGY.</span></>} />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial-card" key={item.name}>
                <div className="quote-mark">“</div>
                <p>{item.quote}</p>
                <footer><span className="avatar-initials">{item.initials}</span><span><strong>{item.name}</strong><small>{item.detail}</small></span></footer>
              </blockquote>
            ))}
          </div>
          <p className="demo-caption">Illustrative member stories created for this demo.</p>
        </div>
      </section>

      <section className="schedule-section section-pad section-lime">
        <div className="section-inner schedule-layout">
          <div className="schedule-intro reveal">
            <span className="eyebrow">ON THE FLOOR THIS WEEK</span>
            <h2>GOOD PLANS.<br /><span>GOOD SWEAT.</span></h2>
            <p>A few ways to get moving. Find your class, bring your energy, and we’ll take it from there.</p>
            <Button to="/contact" variant="dark">Ask about classes <ArrowRight size={16} /></Button>
          </div>
          <div className="schedule-table reveal">
            {classes.map(([day, name, time, coach]) => (
              <div className="schedule-row" key={day}>
                <span className="schedule-day">{day}</span><strong>{name}</strong><span className="schedule-time">{time}</span><span className="schedule-coach">{coach}</span>
              </div>
            ))}
            <p className="schedule-note">Sample weekly timetable · Ask our team for current class availability.</p>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="section-inner faq-layout">
          <div className="faq-intro reveal">
            <span className="eyebrow">GOOD QUESTION</span>
            <h2>LET’S CLEAR<br /><span>THAT UP.</span></h2>
            <p>Still wondering if IRONCORE is for you? We’re happy to help you figure it out.</p>
            <Link className="text-link" to="/contact">Talk to our team <ArrowRight size={16} /></Link>
          </div>
          <div className="faq-list reveal">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'open' : ''}`} key={faq.question}>
                <button type="button" aria-expanded={activeFaq === index} onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                  <span>{faq.question}</span><ChevronDown size={18} />
                </button>
                {activeFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img src={imageUrl('photo-1534438327276-14e5300c3a48', 2000)} alt="" aria-hidden="true" loading="lazy" />
        <div className="final-cta-shade" />
        <div className="final-cta-content reveal">
          <span className="eyebrow">YOUR MOVE</span>
          <h2>YOUR NEXT CHAPTER<br /><span>STARTS HERE.</span></h2>
          <p>Come as you are. Leave a little stronger.</p>
          <Button to="/contact" icon>Come say hello</Button>
        </div>
        <span className="cta-mark"><MoveUpRight size={70} strokeWidth={0.8} /></span>
      </section>
      <EnquiryModal plan={selectedPlan} onClose={closeModal} />
    </>
  )
}
