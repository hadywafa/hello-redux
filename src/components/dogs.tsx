import { useState } from "react";
import { useFetchBreedsQuery } from "../features/dogs/dogs-api-slice";

function Dogs() {
  const [numDogs, setNumDogs] = useState(10);
  const { data = [] } = useFetchBreedsQuery(numDogs);

  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="numDogs" className="block mb-2 text-lg">
          Dogs to fetch:
        </label>
        <select
          id="numDogs"
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <p className="text-lg">Number of dogs fetched: {data.length}</p>
        <table className="w-full mt-2">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} className="w-auto h-24" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dogs;
