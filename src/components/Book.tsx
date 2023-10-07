type BookProps = {
    livros: {
        title: string,
        author: string,
        year: number,
        genre: string,
        image: string,
      }[]

}

function Book({livros}:BookProps) {
    return (
      <>
        {
          livros.map((livro) => (
            <div className="col-md-4 p-5">
              <h4>{livro.title}</h4>
              <p>Autor: {livro.author}</p>
              <p>Ano: {livro.year}</p>
              <p>Genero: {livro.genre}</p>
              <img src={livro.image}/>

            </div>
          ))
        }
      </>
    )
}

export default Book