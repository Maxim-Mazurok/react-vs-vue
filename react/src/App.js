import { useEffect, useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 10);
  });

  return <h1>React count is {count}</h1>;
}
