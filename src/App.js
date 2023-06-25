import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ background: 'red', color: 'white', padding: '70px' }}>
  <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
    <li style={{ marginRight: '30px' }}>
      <a href="#biografia" style={{ color: 'white', textDecoration: 'none' }}>Biografía</a>
    </li>
    <li style={{ marginRight: '30px' }}>
      <a href="#influencia" style={{ color: 'white', textDecoration: 'none' }}>Influencia</a>
    </li>
    <li>
      <a href="#discografia" style={{ color: 'white', textDecoration: 'none' }}>Discografía</a>
    </li>
  </ul>
</nav>
      <header className="App-header" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}> 
        <img src={process.env.PUBLIC_URL + '/imagenes/img.png'} alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <h1>"Canserbero: Más que música, una filosofía de vida"</h1>
      </header>
      <main>
        <section1 id="biografia">
          <h2>Biografía</h2>
          <p>Canserbero fue el nombre artístico de Tyrone José González Oramas, un reconocido rapero y compositor venezolano. Nació el 11 de marzo de 1988 en Caracas, Venezuela, y lamentablemente falleció el 20 de enero de 2015 a la edad de 26 años en un trágico incidente.

          <p>Desde temprana edad, Canserbero mostró un gran interés por la música y el rap. Comenzó a escribir letras y a experimentar con diferentes estilos musicales en su adolescencia. Su talento llamó la atención y comenzó a ganar popularidad en la escena underground del rap venezolano.</p>

          <p>En el año 2007, Canserbero lanzó su primer álbum titulado "Vida", que le permitió establecerse como un artista emergente en el género. Su estilo lírico se caracterizaba por abordar temas profundos y controversiales, explorando la realidad social y política de Venezuela, así como los aspectos más oscuros de la vida humana.</p>

          <p>En 2010, Canserbero lanzó su segundo álbum, titulado "Muerte". Este álbum fue un gran éxito y le permitió alcanzar un reconocimiento aún mayor en la escena musical. Sus letras poéticas y crudas, combinadas con su habilidad para expresar emociones intensas, hicieron que su música resonara con un amplio público.</p>

          <p>Canserbero continuó trabajando en su música y lanzó varios sencillos exitosos, incluyendo "Es Épico" y "Jeremías 17:5". Su estilo único y su entrega apasionada en el escenario le valieron una base de seguidores leales y el respeto de sus colegas músicos.</p>

          <p>Lamentablemente, el 20 de enero de 2015, Canserbero falleció en circunstancias trágicas. Se vio involucrado en un incidente violento en el que perdió la vida junto a una joven llamada Carlos Molnar. La noticia de su muerte conmocionó a sus fanáticos y al mundo de la música en general.</p>

          A pesar de su muerte prematura, el legado musical de Canserbero perdura. Sus letras profundas y su estilo único han dejado una marca imborrable en la música rap en Venezuela y han inspirado a una nueva generación de artistas. Canserbero será recordado como uno de los exponentes más talentosos y auténticos del rap latinoamericano.</p>
        </section1>
        <section2 id="influencia">
          <h2>Influencia que tuvo</h2>
          <p>
            Canserbero tuvo una influencia significativa tanto en la música rap como en la sociedad venezolana. Su impacto se puede observar en varios aspectos:

           <h3>1. Letras profundas y comprometidas:</h3> 
           Canserbero se destacó por sus letras profundas y comprometidas que abordaban temas sociales, políticos y existenciales. Sus canciones reflejaban una crítica hacia la realidad de Venezuela y la lucha de la sociedad contra la injusticia, la desigualdad y la corrupción. Su habilidad para expresar emociones y transmitir mensajes poderosos a través de su música dejó una huella duradera en sus seguidores y en la escena del rap.

            <h3>2. Autenticidad y honestidad: </h3>
           Canserbero era conocido por su autenticidad y honestidad en su música. No tenía miedo de hablar sobre sus propias luchas internas, sus demonios personales y su visión cruda de la vida. Su capacidad para conectar emocionalmente con su audiencia y transmitir su vulnerabilidad a través de su música lo convirtió en un referente para aquellos que se identificaban con sus letras.

           <h3>3. Renovación del rap venezolano:</h3> 
            Canserbero jugó un papel fundamental en la renovación del rap venezolano. Su estilo único y su enfoque lírico innovador ayudaron a revitalizar la escena musical del país. Fue una voz fresca y diferente que desafió los estereotipos y abrió nuevas posibilidades creativas en el género. Su influencia se puede ver en la aparición de nuevos artistas que siguieron sus pasos y adoptaron un enfoque lírico más profundo y crítico.

            <h3>4. Impacto emocional en sus seguidores:</h3> 
           La música de Canserbero tuvo un impacto emocional profundo en sus seguidores. Sus letras resonaron con muchas personas, especialmente con los jóvenes que se sentían identificados con sus mensajes de esperanza, desesperación y resistencia. Su música se convirtió en un escape y una forma de expresión para aquellos que se enfrentaban a dificultades y desafíos en sus propias vidas.

            <h3>5. Legado perdurable:</h3> 
            A pesar de su trágica muerte, el legado de Canserbero continúa vivo en la música y en la memoria de sus seguidores. Sus canciones siguen siendo populares y siguen siendo escuchadas y compartidas en plataformas digitales. Su influencia perdura en la música rap venezolana y ha inspirado a una nueva generación de artistas a seguir sus pasos en la búsqueda de la autenticidad y la expresión artística sincera.

          </p>
        </section2>
        <section3 id="discografia">
          <h2>Discografia</h2>
          <p>La discografía de Canserbero incluye los siguientes álbumes:</p>
          <h3>Vida</h3>
          "Vida" (2007): Su primer álbum, lanzado de forma independiente. Incluye canciones como "Pensando en ti" y "De la vida como una película y su tragedia, comedia y ficción".
          <h3>Muerte</h3>
          <p>"Muerte" (2012): Su segundo álbum de estudio, lanzado bajo el sello Pániko Records. Contiene canciones destacadas como "Es Épico", "Jeremías 17:5", "Maquiavélico" y "C'est la Mort".</p>
        </section3>
        <section4>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <a href="https://www.youtube.com/playlist?list=OLAK5uy_nSqJEXL9Pqok2t9Tt3Mpr-wnX5bSoPH4E">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
          <img src={process.env.PUBLIC_URL + '/imagenes/vida.png'} alt="Imagen 1" className="imagen-pequena1" />
          <span style={{ marginTop: '10px' }}>VIDA</span>
        </div>
      </a>
      <a href="https://www.youtube.com/playlist?list=OLAK5uy_loJlGqaUbOlxcozHO3pvkski0lhcJUaec">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px' }}>
          <img src={process.env.PUBLIC_URL + '/imagenes/muerte.png'} alt="Imagen 2" className="imagen-pequena2" />
          <span style={{ marginTop: '10px' }}>MUERTE</span>
        </div>
      </a>
    </div>
  </div>
</section4>
      </main>
      <footer style={{ background: 'red', color: 'white', padding: '10px' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
      <p>Nombre: Bryan Lumbi</p>
      <p>Fecha de creación: 2023-06-23</p>
    </div>
    <div>
      <p>Institución: Escuela superior politécnica de Chimborazo</p>
    </div>
  </div>
</footer>
    </div>
  );
}


export default App;
