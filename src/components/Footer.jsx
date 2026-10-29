import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

const footerLinks = [
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Our trainers', '/trainers'],
  ['Membership', '/membership'],
  ['Get in touch', '/contact'],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark"><span className="brand-cross">+</span></span>
            <span className="brand-copy">IRONCORE<span>FITNESS</span></span>
          </Link>
          <p>Stronger is a feeling. Come find yours.</p>
          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Camera size={18} />
          </a>
        </div>
        <div className="footer-column">
          <h3>EXPLORE</h3>
          {footerLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
        <div className="footer-column">
          <h3>FIND US</h3>
          <p><MapPin size={16} /> 42, Indiranagar, Bengaluru, Karnataka 560038</p>
          <a href="tel:+918012345678"><Phone size={15} /> +91 80 1234 5678</a>
          <a href="mailto:hello@ironcore.fit">hello@ironcore.fit <ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-column">
          <h3>HOURS</h3>
          <p>Monday – Friday<br /><span>6:00 am – 10:00 pm</span></p>
          <p>Saturday – Sunday<br /><span>7:00 am – 8:00 pm</span></p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} IRONCORE FITNESS. DEMO WEBSITE.</span>
        <span>TRAIN WITH INTENTION. LIVE WITH STRENGTH.</span>
      </div>
    </footer>
  )
}
