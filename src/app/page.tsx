import { About, Projects, Main } from "./components/index";

export default function Home() {
  return (
    <main className="px-20 max-w-[1800px] m-auto">
      <Main />
      <About />
      <Projects />
    </main>
  );
}
