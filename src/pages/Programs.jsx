import { Dumbbell } from 'lucide-react'
import ProgramCard from '../components/ProgramCard'
import Button from '../components/Button'
import { imageUrl, programs } from '../data/programs'

export default function Programs() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="page-hero-image"><img src={imageUrl('photo-1583454110551-21f2fa2afe61', 2000)} alt="Strength training in a modern gym" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content"><span className="eyebrow">FIND YOUR WAY IN</span><h1>MOVE WITH<br /><span>INTENTION.</span></h1><p>Good training starts with a program that meets you where you are.</p></div>
      </section>
      <section className="all-programs section-pad">
        <div className="section-inner">
          <div className="section-heading reveal"><div><span className="eyebrow">A LITTLE SOMETHING FOR EVERY BODY</span><h2>MAKE IT YOURS.</h2></div><p>Small group, one-to-one, high energy, or slow and steady. This is your training, your way.</p></div>
          <div className="program-grid all-program-grid">
            {programs.map((program, index) => <ProgramCard key={program.title} program={program} index={index} />)}
          </div>
        </div>
      </section>
      <section className="program-bottom-cta"><div><Dumbbell size={24} /><span>NOT SURE WHERE TO BEGIN?</span><p>Let’s find a starting point that feels right for you.</p></div><Button to="/contact" variant="outline-light">Talk to a coach <span>↗</span></Button></section>
    </>
  )
}
