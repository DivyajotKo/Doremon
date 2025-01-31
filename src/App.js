import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <header className="bg-dark text-white text-center py-3">
        <h1 className="h3">Welcome to Doraemon's World</h1>
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
