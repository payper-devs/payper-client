import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import reactLogo from "@/app/assets/react.svg";
import viteLogo from "/vite.svg";

export function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="flex gap-8">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="h-24 p-4 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="h-24 p-4 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin [animation-duration:20s]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold">Vite + React</h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Counter Demo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p className="text-muted-foreground text-sm">
            Edit <code className="bg-muted rounded px-1">src/pages/home</code>{" "}
            and save to test HMR
          </p>
        </CardContent>
      </Card>

      <p className="text-muted-foreground">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
