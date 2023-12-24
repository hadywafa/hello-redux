import "./App.css";
import Counter from "./components/counter";
import Dogs from "./components/dogs";

function App() {
  return (
    <div className="min-h-screen py-2 bg-gray-100">
      <header>
        <img src={"hady-wafa.png"} alt="logo" className="w-24 h-24 mx-auto mb-4" />
      </header>

      <div className="max-w-3xl p-8 mx-auto bg-white rounded-md shadow-md">
        <Counter />
        <Dogs />
      </div>
      <footer>
        <p className="text-center">
          <a
            href="https://redux.js.org/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Redux Docs
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
