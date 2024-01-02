import { useEffect, useState } from "react";
import ListItem from "./ListItem";

export default function MyApp() {
  const [count, setCount] = useState(0);
  const [start] = useState(Date.now());

  const [itemCounters, setItemCounters] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      itemCounters[i] = 0;
      setInterval(() => {
        setItemCounters((prev) => {
          const next = [...prev];
          next[i] = next[i] + 1;
          return next;
        });
        setCount((prev) => prev + 1);
      }, i % 100);
    }
  }, []);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <h1>React item updates: {count}</h1>
      <h2>
        Updates per second:{" "}
        {numberFormatter.format((count / (Date.now() - start)) * 1000)}
      </h2>
      <ul>
        {itemCounters.map((item, i) => (
          <li key={i}>
            <ListItem text={`Item ${i} has been updated ${item} times`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
