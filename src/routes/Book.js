
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function App() {
  const {id} = useParams();
  {/* book {id} */}
  return (
    <main className="bookPage">
      <img className="d-lg-none" src="../assets/img/image_test.png"/>

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
                O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne
              </h1>
              <h3>
                Julia Quinn
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
              <p>
                Simon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em arrumar um bom partido para suas filhas.
              </p>
              <p>
                Simon, porém, tem o firme propósito de nunca se casar. Assim, para se livrar das garras dessas mulheres, precisa de um plano infalível.
              </p>
              <p>
                É quando entra em cena Daphne Bridgerton, a irmã mais nova de seu melhor amigo. Apesar de espirituosa e dona de uma personalidade marcante, todos os homens que se interessam por ela são velhos demais, pouco inteligentes ou destituídos de qualquer tipo de charme. E os que têm potencial para ser bons maridos só a veem como uma boa amiga.
              </p>
              <p>
                A ideia de Simon é fingir que a corteja. Dessa forma, de uma tacada só, ele conseguirá afastar as jovens obcecadas por um marido e atrairá vários pretendentes para Daphne. Afinal, se um duque está interessado nela, a jovem deve ter mais atrativos do que aparenta.
              </p>

            </div>
          </div>
        </Container>
      </section>

      
      <div className="bookPageDesktop d-none d-lg-block">
        <Container>
          <div className="row">
            <div className="col-4">
              <img className="bookPageDesktop__image" src="../assets/img/image_test.png"/>
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
              <h1>O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne</h1>
              <h2>Julia Quinn</h2>

              <div className="bookPageDesktop__content">
                <p>
                  Simon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em arrumar um bom partido para suas filhas.
                </p>
                <p>
                  Simon, porém, tem o firme propósito de nunca se casar. Assim, para se livrar das garras dessas mulheres, precisa de um plano infalível.
                </p>
                <p>
                  É quando entra em cena Daphne Bridgerton, a irmã mais nova de seu melhor amigo. Apesar de espirituosa e dona de uma personalidade marcante, todos os homens que se interessam por ela são velhos demais, pouco inteligentes ou destituídos de qualquer tipo de charme. E os que têm potencial para ser bons maridos só a veem como uma boa amiga.
                </p>
                <p>
                  A ideia de Simon é fingir que a corteja. Dessa forma, de uma tacada só, ele conseguirá afastar as jovens obcecadas por um marido e atrairá vários pretendentes para Daphne. Afinal, se um duque está interessado nela, a jovem deve ter mais atrativos do que aparenta.
                </p>

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
}

export default App;
