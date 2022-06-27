import { Link } from 'react-router-dom'

import '../../styles/modules/slide-card.sass'

function SlideCard({ title, image, to }) {
  return (
    <div className="slide-card">
      <Link to={to}>
        <p>{title}</p>
        <img src={image} alt={title} />
        <div className="gradient"></div>
      </Link>
    </div>
  )
}

export default SlideCard
