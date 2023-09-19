import { Emphasis } from "@/components/Emphasis";
import { Information } from "@/components/Information";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Information />
      <Emphasis />
    </main>
  )
}
