import '../Styles/main.css';
import Article from './Article.js';

function Main() {
  return (
    <main>
      <h1>Contenido Principal</h1>
      <p>Esto es el contenido principal de la aplicacion.</p>
      <Article/>
      <Article/>
      <Article/>
    </main>
  );
}

export default Main;