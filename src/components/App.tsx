import React, { useEffect, useState } from "react";
import { fetchAsJSON } from "../utils/fetch";
import { getWinners } from "../utils/api";

function App() {
  const [winners, setWinners] = useState<Winner[]>([]);

  useEffect(() => {
    async function fetch() {
      const winners = await getWinners();
      setWinners(winners);
    }

    fetch();
  }, []);

  return (
    <ul>
      {winners.map(({ name, year }, index) => (
        <li key={index}>
          {name}:{year}
        </li>
      ))}
    </ul>
  );
}

export default App;
