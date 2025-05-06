export default function Home() {
  const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Le Meilleur des Mondes", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" } // Nouveau livre
    { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry" } 
  ];
  return (
    <div>
      <h1>Catalogue de livres</h1>
      <ul>
        {books.map((book, i) => (
          <li key={i}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
}