import { Emphasis } from "@/components/Emphasis";
import { Information } from "@/components/Information";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Information />
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden mb-11 ">
        <section id="emphasis">
          <Emphasis />
        </section>
        <section id="menu" className="bg-white h-screen w-full">
          <Menu title="Pratos" />
          <Menu title="Sobremesas" />
          <Menu title="Lanches" />
        </section>
      </main>
    </>
  )
}
