import { useState } from "react";

function Card({ title, description }) {
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <article className="w-80 rounded-3xl border border-zinc-700 bg-zinc-800/70 p-6 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-red-500">
      <h2 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mb-6 text-zinc-300">
        {description}
      </p>

      <button
        className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
        onClick={handleLikes}
      >
        ❤️ Likes {likes}
      </button>
    </article>
  );
}

export default Card;