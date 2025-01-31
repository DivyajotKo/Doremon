import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './1970s.js';
import './2000s.js';
import './2010-present.js';

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      
      <header className="bg-dark text-white d-flex justify-content-between align-items-center p-3 shadow-lg">
        <h1 className="h3 m-0 text-warning">Doraemon's World</h1>
        <nav>
          <ul className="nav bg-primary rounded-pill p-2">
            <li className="nav-item"><a className="nav-link text-white fw-bold" href="default.asp">1970s</a></li>
            <li className="nav-item"><a className="nav-link text-white fw-bold" href="news.asp">2000s</a></li>
            <li className="nav-item"><a className="nav-link text-white fw-bold" href="contact.asp">2010-present</a></li>
            <li className="nav-item"><a className="nav-link text-white fw-bold" href="about.asp">Copyright</a></li>
          </ul>
        </nav>
      </header>
      
      <section 
        className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
        style={{ 
          background: `url('https://media1.tenor.com/m/g8ZWXSTKOgoAAAAC/find-out.gif') center/cover no-repeat`,
          minHeight: '100vh'
        }}
      >
        <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="container position-relative">
          <h2 className="display-4 fw-bold text-warning">Doraemon's Adventures</h2>
          <p className="lead fw-bold text-light bg-dark p-2 rounded">Doraemon is a robotic cat from the future who helps Nobita with his gadgets.</p>
        </div>
      </section>
      
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Doraemon Fan Page</p>
      </footer>
    </div>
  );
}

export default App;