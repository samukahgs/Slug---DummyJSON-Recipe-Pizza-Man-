import Receita from "./components/Receita.jsx";

export default async function Home() {
  const response = await fetch(
    "https://dummyjson.com/recipes?limit=10"
  );

  const data = await response.json();

  return (
    <main>
      <h1>Receitas</h1>

      <div className="receitas">
        {data.recipes.map((receita) => (
          <Receita key={receita.id} receita={receita} />
        ))}
      </div>
    </main>
  );
}