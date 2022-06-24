import '../../styles/modules/card.sass'

function Card({ title, image }) {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={image} alt={title} />
      <div className="gradient"></div>
    </div>
  )
}

export default Card
