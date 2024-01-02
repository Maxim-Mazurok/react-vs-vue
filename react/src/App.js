import { useEffect, useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);
  const [start] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 10);
  }, []);

  return (
    <div>
      <h1>React count is {count}</h1>
      <h2>
        Count increments times per second:
        {((count / (Date.now() - start)) * 1000).toFixed(2)}
      </h2>
    </div>
  );
}
