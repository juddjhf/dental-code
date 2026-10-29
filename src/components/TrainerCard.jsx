import { Camera } from 'lucide-react'
import { imageUrl } from '../data/programs'

export default function TrainerCard({ trainer }) {
  return (
    <article className="trainer-card">
      <div className="trainer-photo">
        <img src={imageUrl(trainer.image, 720)} alt={trainer.name} loading="lazy" />
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={`${trainer.name} on Instagram`}>
          <Camera size={17} />
        </a>
      </div>
      <div className="trainer-card-content">
        <div className="trainer-meta"><span>{trainer.role}</span><span>{trainer.experience}</span></div>
        <h3>{trainer.name}</h3>
        <p>{trainer.bio}</p>
      </div>
    </article>
  )
}
