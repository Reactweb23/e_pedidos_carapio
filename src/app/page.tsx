import { CardList } from "@/components/Card/CardList";
import { Emphasis } from "@/components/Emphasis";
import { Information } from "@/components/Information";

export default function Home() {
  return (
    <>
      <Information />
      <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <section id="emphasis">
          <Emphasis />
        </section>
        <section id="menu" className="bg-white h-screen w-full">
          <div className="custom-border pl-8 p-5">
            <h1 className="text-sm font-medium">
              Pratos
            </h1>
          </div>
          <CardList />
        </section>
      </main>
    </>
  )
}
