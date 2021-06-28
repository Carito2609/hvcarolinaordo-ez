import foto from "./foto.png";
import './Header.css';

function Header() {
  return (
      <header>
          <div className="foto">
            <img src={foto} alt="Foto de Carolina Ordoñez" />
          </div>
          <div className="texto">
              <h1><span className="nombre">MARTHA CAROLINA ORDOÑEZ</span></h1>
              <h3>DESARROLLADORA WEB FRONT-END JUNIOR</h3>
               </div>
          
      </header>
    
  );
}

export default Header;