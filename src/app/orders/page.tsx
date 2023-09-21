import { Avatar } from "@/components/Avatar";
import { CardOrders } from "@/components/Card/CardOrder";
import { Information } from "@/components/Information";
import Image from "next/image";

export default function OrdersPage() {
    return (
        <main className="bg-white flex-col items-center overflow-x-hidden h-full w-full">
            <section
                className="p-4 w-full h-screen"
            >
                <div className="flex items-center gap-9 mb-4 justify-center">
                    <h2 className="text-lg font-medium">
                        Seus Pedidos
                    </h2>
                    <Image
                        height={30}
                        width={30}
                        src='/list.svg'
                        alt="pedidos"
                    />
                </div>
                <div className="flex items-center gap-3 m-2 justify-center">
                    <h3 className="font-medium">Total:</h3>
                    <p>R$ 68,25</p>
                </div>
                <div className="h-3/5 w-full border flex-col border-blue-500 rounded-lg p-2 overflow-auto">
                    <CardOrders />
                    <CardOrders />
                    <CardOrders />
                </div>
                <div className="flex items-center m-2 mt-4">
                    <h3>Deseja enviar seu pedido?</h3>
                    <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium ml-3">
                        Enviar
                    </button>
                </div>
            </section>
        </main>
    )
}