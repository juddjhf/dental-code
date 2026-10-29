import { useState } from 'react'
import { ArrowUpRight, Dumbbell, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink className="brand" to="/" onClick={closeMenu} aria-label="IRONCORE FITNESS home">
          <span className="brand-mark"><Dumbbell size={21} strokeWidth={2.2} /></span>
          <span className="brand-copy">IRONCORE<span>FITNESS</span></span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={23} />}
        </button>
        <nav id="primary-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
          <Button className="nav-cta" to="/membership" onClick={closeMenu}>Join now <ArrowUpRight size={15} /></Button>
        </nav>
      </div>
    </header>
  )
}
