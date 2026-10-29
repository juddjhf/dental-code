import { useState } from 'react'
import { Check, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import MembershipCard from '../components/MembershipCard'
import Modal from '../components/Modal'
import { memberships } from '../data/memberships'

function MembershipModal({ plan, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  return (
    <Modal open={Boolean(plan)} onClose={onClose} title={submitted ? 'A strong start.' : `Let’s talk ${plan?.name.toLowerCase()}.`}>
      {submitted ? <div className="modal-success" role="status"><span className="success-icon"><Check size={22} /></span><p>Your demo enquiry is ready. No payment was taken and no message was sent.</p><Button onClick={onClose}>Got it</Button></div> : (
        <>
          <p className="modal-intro">Explore the {plan?.name} plan at <strong>{plan?.price}/month</strong>. Our team can help you decide if it’s right for you.</p>
          <form className="form-grid" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <label>Your name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label className="form-full">Phone number<input name="phone" type="tel" autoComplete="tel" pattern="\+?[0-9][0-9\s]{6,16}[0-9]" required placeholder="+91 98765 43210" /></label>
            <Button className="form-full" type="submit">Request a conversation <span>↗</span></Button>
          </form>
          <p className="form-disclaimer">Demo only. No payment is processed and your details are not sent or stored.</p>
        </>
      )}
    </Modal>
  )
}

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const closeModal = () => setSelectedPlan(null)
  return (
    <>
      <section className="membership-page-hero section-dark">
        <span className="eyebrow">A PLAN THAT FITS YOUR LIFE</span>
        <h1>YOUR PACE.<br /><span>YOUR MEMBERSHIP.</span></h1>
        <p>Start where you are. We’ll be right here when you’re ready for what’s next.</p>
      </section>
      <section className="membership-page section-pad section-dark">
        <div className="section-inner">
          <div className="membership-grid">
            {memberships.map((plan) => <MembershipCard key={plan.name} plan={plan} onChoose={setSelectedPlan} />)}
          </div>
          <div className="membership-footnote"><HelpCircle size={18} /><p>All prices shown are illustrative demo pricing, easy to update. No payment is taken through this website.</p></div>
        </div>
      </section>
      <section className="membership-faq"><span className="eyebrow">STILL DECIDING?</span><h2>NO PRESSURE.<br /><span>JUST GOOD ADVICE.</span></h2><p>Not sure which plan works for you? That’s a good conversation to have.</p><Button to="/contact" variant="dark">Ask us anything <span>↗</span></Button><Link to="/about" className="text-link">Get to know IRONCORE</Link></section>
      <MembershipModal plan={selectedPlan} onClose={closeModal} />
    </>
  )
}
