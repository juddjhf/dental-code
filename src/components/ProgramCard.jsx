import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { imageUrl } from '../data/programs'

export default function ProgramCard({ program, index = 0 }) {
  return (
    <article className="program-card">
      <div className="program-image-wrap">
        <img src={imageUrl(program.image, 720)} alt={`${program.title} training`} loading="lazy" />
        <span className="program-number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="program-card-content">
        <span className="eyebrow">{program.category}</span>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <Link className="text-link" to="/programs">View program <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  )
}
