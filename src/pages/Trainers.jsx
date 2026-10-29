import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import TrainerCard from '../components/TrainerCard'
import { imageUrl } from '../data/programs'
import { trainers } from '../data/trainers'

export default function Trainers() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="page-hero-image"><img src={imageUrl('photo-1534438327276-14e5300c3a48', 2000)} alt="Personal training in the gym" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content"><span className="eyebrow">IN YOUR CORNER</span><h1>GOOD PEOPLE.<br /><span>GOOD COACHING.</span></h1><p>Expertise matters. So does how it feels to show up.</p></div>
      </section>
      <section className="all-trainers section-pad">
        <div className="section-inner">
          <div className="section-heading reveal"><div><span className="eyebrow">THE PEOPLE BEHIND THE PROGRESS</span><h2>MEET YOUR CREW.</h2></div><p>Our coaches bring knowledge, encouragement, and a little fun to every session.</p></div>
          <div className="trainer-grid">{trainers.map((trainer) => <TrainerCard key={trainer.name} trainer={trainer} />)}</div>
          <p className="demo-caption">Fictional trainer profiles created for this website demo.</p>
        </div>
      </section>
      <section className="trainer-quote"><span className="eyebrow">MORE THAN A REP COUNTER</span><p>“Good coaching helps you discover what you’re capable of — one session at a time.”</p><Link className="text-link" to="/contact">Meet the team <ArrowRight size={16} /></Link></section>
    </>
  )
}
