
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="header">
      <Container>
        <Link to="/">
          <img src="../assets/img/logo.svg" alt="Logo SSBOOK"/>
        </Link>
        <form className="d-none d-lg-flex" >
          <input type="text" placeholder="Busque um livro" className="header__input-text" />
          <button type="submit" className="header__input-submit">
            <img src="../assets/img/lupa.svg" aria-hidden="true" />
          </button>

        </form>
        <div className="d-none d-lg-flex header__buttons">
          <Link className="header__input-button" to="#">
            <img src="../assets/img/adicionar.svg" aria-hidden="true" />
            <span>Adicionar</span>
          </Link>
          <Link className="header__input-button" to="#">
            <img src="../assets/img/coracao.svg" aria-hidden="true" />
            <span>Favoritos</span>
          </Link>
        </div>

        

        <Link to="/" className="header__profile">
          <picture>
            <source srcSet="../assets/img/profile_picture.png" media="(orientation: portrait)"/>
            <img src="../assets/img/profile_picture.png" alt="Foto de perfil Jucireide" />
          </picture>

          <span className="d-none d-lg-block">
            Jucicreide
          </span>
        </Link>

      </Container>
    </header>
  )
}
