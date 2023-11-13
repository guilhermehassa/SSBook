
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <header className="footer">
      <Container>
        <nav>
          <ul>
            <li className="active">
              <Link to='/'>
                <img
                  src='../assets/img/casinha.svg'
                />
                <p>Início</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img
                  src='../assets/img/adicionar.svg'
                />
                <p>Adicionar</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img
                  src='../assets/img/lupa.svg'
                />
                <p>Buscar</p>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img
                  src='../assets/img/coracao.svg'
                />
                <p>Favoritos</p>
              </Link>
            </li>
          </ul>
        </nav>

      </Container>
    </header>
  )
}
