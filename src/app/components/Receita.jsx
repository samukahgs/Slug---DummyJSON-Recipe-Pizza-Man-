import Link from "next/link";

export default function Receita({ receita }) {
  return (
    <article>
      <img
        src={receita.image}
        alt={receita.name}
        width={300}
      />

      <h2>{receita.name}</h2>

      <Link href={`/receitas/${receita.id}`}>
        Saiba mais
      </Link>
    </article>
  );
}