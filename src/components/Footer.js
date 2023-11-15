
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <header className="footer">
      <Container className="d-lg-none">
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

      <Container className="footerDesktop d-none d-lg-flex">
        <Link to="/">
          <img src="../assets/img/logo.svg" alt="Logo SSBOOK"/>
        </Link>
        <p>
          Todos os direitos reservados.<br/>
          Studio Sol Books © 2023 
        </p>
      </Container>
    </header>
  )
}
