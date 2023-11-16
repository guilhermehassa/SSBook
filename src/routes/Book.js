
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
const queryClient = new QueryClient();

const Book = () => {
  const {id} = useParams();

  const { data, isLoading, error } = useQuery('book', async () => {
    const response = await axios.get('https://us-central1-ss-devops.cloudfunctions.net/GraphQL', {
      params: {
        query: `
          query book{
            book(id:${id}){
              cover, name, author{name}, description 
            }
          }
        `,
      },
    });

    return response.data.data;
  });

  if (isLoading) {
    return (
      <div class="spinner-grow" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const formatedDescription = data.book.description.split('\n');
  return (
    <main className="bookPage">
      <img className="d-lg-none" src={data.book.cover}/>

      <section className="bookPage__breadcrumb d-lg-none">
        <Container>
          <div className="bookPage__breadcrumb___buttons">
            <Link to="/">
              <img src="../assets/img/breadcrumb_arrow.svg"/>
            </Link>
            <Link>
              <img src="../assets/img/breadcrumb_bullets.svg"/>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bookPage__content d-lg-none">
        <Container>
          <div className="row">
            <div className="col-10">
              <h1>
                {data.book.name}
              </h1>
              <h3>
                {data.book.author.name}
              </h3>
              
            </div>
            <div className="col-2">
              <Link>
                <img src="../assets/img/empty_heart.svg" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {formatedDescription.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}

            </div>
          </div>
        </Container>
      </section>

      
      <div className="bookPageDesktop d-none d-lg-block">
        <Container>
          <div className="row">
            <div className="col-4">
              <img className="bookPageDesktop__image" src={data.book.cover}/>
              <div className="bookPageDesktop__buttons">
                <Link>
                  <img src="../assets/img/coracao.svg" />
                  <span>Favoritar</span>
                </Link>
                <Link>
                  <img src="../assets/img/share.svg" />
                  <span>Compartilhar</span>
                </Link>
                <Link>
                  <img src="../assets/img/save.svg" />
                  <span>Salvar em uma lista</span>
                </Link>
              </div>
            </div>
            <div className="col-8">
              <h1>{data.book.name}</h1>
              <h2>{data.book.author.name}</h2>

              <div className="bookPageDesktop__content">
                
                {formatedDescription.map((paragrafo, index) => (
                  <p key={index}>{paragrafo}</p>
                ))}

                <h2>
                  Sobre o Autor
                </h2>

                <p>
                  JULIA QUINN começou a trabalhar em seu primeiro romance um mês de - pois de terminar a faculdade e nunca mais parou de escrever. Seus livros foram traduzidos para 37 idiomas e, no Brasil, venderam mais de 2,5 milhões de exemplares. A série Os Bridgertons foi adaptada pela Netflix e se tornou um sucesso instantâneo, quebrando os recordes de audiência da plataforma. Julia foi a autora mais jovem a ser incluída na Galeria da Fama dos Escritores Românticos dos Estados Unidos.
                </p>

              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Book />
  </QueryClientProvider>
);

export default App;