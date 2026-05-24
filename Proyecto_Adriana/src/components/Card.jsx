import { useState } from 'react'

function Card({ title, description }) {
  const [likes, setLikes] = useState(0)

  const handleLikes = () => {
    setLikes(likes + 1)
  }

  return (
    <article className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <button
        className="like-button"
        onClick={handleLikes}
      >
        Likes {likes}
      </button>
    </article>
  )
}

export default Card