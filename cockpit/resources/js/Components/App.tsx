import { useEffect, useState } from "react";

type PingResponse = { message: string; time: string };

export default function App() {
  const [data, setData] = useState<PingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/ping")
      .then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return (await r.json()) as PingResponse;
      })
      .then(setData)
      .catch((e) => setError(String(e)));
  }, []);

  return (
    <div>
      <h1>React → Laravel API</h1>
      {error && <pre>{error}</pre>}
      {data ? <pre>{data.message}</pre> : <p>Loading…</p>}
      <h1>hallo es funktioniert mit allem</h1>
      </div>
  );
}
