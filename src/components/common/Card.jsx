import '../../styles/modules/card.sass'

function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default Card
