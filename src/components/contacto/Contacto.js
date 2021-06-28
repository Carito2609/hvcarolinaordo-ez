import linkedin from "./linkedin.png"
import github from "./github.png"
import './Contacto.css';

function Contacto() {
  return (
    
          <div className="contacto">
            <h2>PERFIL PROFESIONAL</h2>
            
            <p>Técnica en procesamiento y digitación de datos con enfoque en desarrollo web front end, con experiencia laboral superior a 9 años en el sector de servicios y telecomunicaciones; ejecutando funciones relacionadas con el servicio y atención al cliente, coordinación de servicios, asesoría comercial, venta de productos y servicios, cumplimiento en meta de ventas, atención a PQRS y servicio técnico. Con interés ocupacional en adquirir experiencia laboral en el área de formación. Con conocimientos y manejo de herramientas ofimáticas en nivel básico. </p>
           
            <h2>INFORMACION DE CONTACTO</h2>   
           
            <div className="info"><i class="fas fa-envelope"></i>carolina.ordonez20@gmail.com</div>
            <div className="info"><i class="fas fa-phone-alt"></i>3012429149</div>
            <div className="info"><i class="fas fa-map-marker-alt"></i>Tv. 74 b # 40 k 35 sur Bogotá D.C.</div>
            
            <h2>REFERENCIAS</h2> 
           
            <div className="ref"><i class="fas fa-address-card"></i><span className="rnom">Sandro Alfonso Lozano </span><p className="rcargo">Soporte y Gestor de Proyectos A/V</p><p>   Cel:311 8834007</p></div>
            <div className="ref"><i class="fas fa-address-card"></i><span className="rnom">Diego Perilla </span><p className="rcargo">Administrador de Empresas</p><p>   Cel:3004999932</p></div>
            <br></br>

            <a href="https://www.linkedin.com/checkpoint/lg/login?trk=reset_password"><img src={linkedin} alt="imagen linkedin" width="100px"></img></a>
            <a href="https://github.com/"><img src={github} alt="imagen github"  width="100px"></img></a>

          </div>
   );
}

export default Contacto;