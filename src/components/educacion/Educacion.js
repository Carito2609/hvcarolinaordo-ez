import './Educacion.css';

function Educacion() {
  return (

    <div className="educacion">
        <div className="educacionx3"><h2 className="skills"><i class="fas fa-user-graduate"> FORMACION ACADEMICA</i></h2>
            <p className="year">2021 KUEPA</p>
            <p className="parrafo">Tecnica en procesamiento y digitacion de datos con enfoque en desarrollo web front-end</p>

            <p>2010 Luis Lopez de mesa</p>
            <p className="parrafo">Bachiller academica.</p>

            <p>2010 Sena Virtual</p>
            <p className="parrafo">2010 Curso ingles intermedio 110 horas.</p>
        </div>

        <div className="educacionx3"><h2 className="skills"><i class="fas fa-user-tie"> EXPERIENCIA LABORAL</i></h2>
            <p className="year">ASESORA COMERCIAL</p>
                <p className="parrafo">Soluciones horizonte, en misión para consorcio exequial.</p>

                <p>ASESORA INTEGRAL</p>
                <p className="parrafo">Activos temporal, en mision para Telefónica Movistar.</p>
        </div>

        <div><h2 className="skills" ><i class="fas fa-user-graduate"> APTITUDES</i></h2>
            <p className="cursos">HTML </p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">CSS</p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">BOOTSTRAP</p>
            <progress class="progress is-primary" value="80" max="100"></progress>
            <p className="cursos">ALGORITMIA</p>
            <progress class="progress is-primary" value="60" max="100"></progress>
        </div>

    </div>
    );
}
export default Educacion;