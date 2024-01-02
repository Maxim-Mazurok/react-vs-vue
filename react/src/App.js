import { useEffect, useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);
  const [start] = useState(Date.now());

  useEffect(() => {
    const addInterval = () =>
      setInterval(() => {
        setCount((count) => count + 1);
        addInterval();
      }, 10);

    addInterval();
  }, []);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1>React count is {count}</h1>
      <h2>
        Count increments times per second:
        {numberFormatter.format((count / (Date.now() - start)) * 1000)}
      </h2>
    </div>
  );
}
