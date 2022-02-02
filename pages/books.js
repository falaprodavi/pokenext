import styles from '../styles/Home.module.css'

export async function getStaticProps() {

    const data = await fetch('https://agencianatural.com.br/niteroilivros/public/api/books')

    const books = await data.json()

    return {
        props: { books },
    }
}

export default function Books({books}) {
  return (<div>
    <h1>PokeNext</h1>
    <ul>
        {books.map((book) => (
            <li key={book.id}>Título: {book.titullo}
            <p>{book.autoria}<br/>
            Páginas {book.paginas}<br/>
            Edição {book.paginas}<br/>
            Ano {book.ano}</p>
            </li>
            
        ))}
    </ul>

  </div>
  )
}
