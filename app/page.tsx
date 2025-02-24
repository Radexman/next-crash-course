import Hello from "./components/hello";

export default function Home() {
  console.log("What am I server or client component?");

  return (
    <>
      <h1 className="p-6 text-3xl font-bold uppercase tracking-wide">
        Welcome to Next.js
      </h1>
      <Hello />
    </>
  );
}
