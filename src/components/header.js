
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(){
  return(
    <header className="header">
      <Container>
        <Link to="/">
          <picture>
            <source srcset="../assets/img/logo.svg" media="(orientation: portrait)"/>
            <img src="../assets/img/logo.svg" />
          </picture>
        </Link>

        <Link to="/">
          <picture>
            <source srcset="../assets/img/profile_picture.png" media="(orientation: portrait)"/>
            <img src="../assets/img/profile_picture.png" />
          </picture>
        </Link>

      </Container>
    </header>
  )
}
