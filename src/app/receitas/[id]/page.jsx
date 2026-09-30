export default async function ReceitaDetalhes({ params }) {
  const { id } = await params;


  const response = await fetch(
    `https://dummyjson.com/recipes/${id}`
  );

  const receita = await response.json();

  return (
    <main>
      <h1>{receita.name}</h1>

      <img
        src={receita.image}
        alt={receita.name}
        width={500}
      />

      <section>
        <h2>Ingredientes</h2>

        <ul>
          {receita.ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Preparo</h2>

        <ol>
          {receita.instructions.map((instrucao, index) => (
            <li key={index}>{instrucao}</li>
          ))}
        </ol>
      </section>

      <p>Categoria: {receita.cuisine}</p>
      <p>Dificuldade: {receita.difficulty}</p>
      <p>Tempo de preparo: {receita.prepTimeMinutes} minutos</p>
      <p>Tempo de cozimento: {receita.cookTimeMinutes} minutos</p>
      <p>Porções: {receita.servings}</p>
      <p>Calorias: {receita.caloriesPerServing}</p>
    </main>
  );
}