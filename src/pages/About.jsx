import { ArrowRight, Heart, Target, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { imageUrl } from '../data/programs'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-image"><img src={imageUrl('photo-1517836357463-d25dfeac3438', 2000)} alt="Training at IRONCORE FITNESS" /></div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content"><span className="eyebrow">WHO WE ARE</span><h1>MADE FOR<br /><span>YOUR STRONG.</span></h1><p>We’re here for the everyday athlete in all of us.</p></div>
      </section>
      <section className="about-story section-pad">
        <div className="section-inner about-story-grid">
          <div className="about-story-image reveal"><img src={imageUrl('photo-1571019613454-1cb2f99b2d8b', 1100)} alt="Coach supporting a member through training" /></div>
          <div className="about-story-copy reveal">
            <span className="eyebrow">STRONGER, TOGETHER</span>
            <h2>FITNESS THAT<br /><span>FEELS LIKE YOU.</span></h2>
            <p className="lead">IRONCORE was built around a simple idea: getting stronger should make life feel bigger.</p>
            <p>Not louder. Not more complicated. Just more you. We bring together considered training, supportive coaches, and a space where every kind of progress belongs. Whether today is your first day or your thousandth, there’s room for you here.</p>
            <Button to="/programs" icon>Find your program</Button>
          </div>
        </div>
      </section>
      <section className="values-section section-pad section-dark">
        <div className="section-inner">
          <div className="section-heading"><div><span className="eyebrow">WHAT WE BELIEVE</span><h2>HOW WE SHOW UP.</h2></div></div>
          <div className="values-grid">
            <article><Heart /><span>01 / PEOPLE FIRST</span><h3>Good energy<br />is everything.</h3><p>Progress feels better when you don’t have to do it alone.</p></article>
            <article><Target /><span>02 / INTENTION ALWAYS</span><h3>Train with<br />a reason.</h3><p>Thoughtful coaching helps every rep take you somewhere.</p></article>
            <article><UsersRound /><span>03 / ALL IN, ALL OF US</span><h3>Your pace.<br />Your place.</h3><p>There’s no one way to be strong, and no wrong place to begin.</p></article>
          </div>
        </div>
      </section>
      <section className="about-cta section-pad"><div className="section-inner about-cta-row"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>COME FIND YOUR<br /><span>PEOPLE.</span></h2></div><Link className="button button--primary" to="/contact">Come say hello <ArrowRight size={16} /></Link></div></section>
    </>
  )
}
