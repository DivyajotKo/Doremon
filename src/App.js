import './App.css';

function App() {
  return (
    <div className="App bg-blue-400 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Doraemon's World</h1>
        <p className="text-lg mt-2">Enjoy adventures with Doraemon and friends!</p>
      </header>
      <img 
        src="https://i.pinimg.com/736x/83/ea/2b/83ea2bfa6501592ce85e727def278f40.jpg" 
        alt="Doraemon" 
        className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
      />
      <div className="mt-6 text-center">
        <p className="text-xl">Doraemon is a robotic cat from the future who helps Nobita with his gadgets.</p>
        <a 
          className="mt-4 inline-block px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200"
          href="https://en.wikipedia.org/wiki/Doraemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default App;
