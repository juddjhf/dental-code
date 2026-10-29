import { Check } from 'lucide-react'
import Button from './Button'

export default function MembershipCard({ plan, onChoose }) {
  return (
    <article className={`membership-card ${plan.featured ? 'featured' : ''}`}>
      {plan.featured && <span className="plan-badge">MEMBERS’ FAVOURITE</span>}
      <p className="plan-name">{plan.name}</p>
      <h3>{plan.price}<span> / month</span></h3>
      <p className="plan-description">{plan.description}</p>
      <div className="plan-divider" />
      <ul>{plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
      <Button variant={plan.featured ? 'primary' : 'outline-dark'} className="plan-button" onClick={() => onChoose(plan)}>
        Choose plan <span aria-hidden="true">↗</span>
      </Button>
      <p className="plan-note">Illustrative demo pricing · No payment taken</p>
    </article>
  )
}
