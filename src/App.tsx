import { useEffect, useState } from "react";
import { useParams,Link } from "react-router";

export const Detail = () => {
  const {id} = useParams();
  return <div className="text-6xl"> Dettaglio: {id} </div>
}




export const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("geodude");

  useEffect(() => {
    if (count === 25) {
      setTitle("Graveler")
    }
  },[count])

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-blue-400 mb-4">
          {title}
        </h1>

        <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Hai premuto il pulsante {count} {count === 1 ? "volta" : "volte"}
          </button>

          <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-colors"
              onClick={() => setTitle("Charizard")}
          >
            Cambia
          </button>

          <Link to="/frontend-rocks/dettaglio/l">link pagina di dettaglio</Link>
          
        </div>
      </div>
    </div>
  );
}
