export const FormsOrder = () => {
    return (
        <div className="flex-col m-2 mt-2">
            <h3>tem alguma observação?</h3>
            <input
                className=" border-blue-500 border rounded-lg mt-2 p-1"
                placeholder="Ex: hamburguer sem salada"
            />
            <h3>Deseja enviar seu pedido?</h3>
            <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
                Enviar
            </button>
            <div className="flex w-full justify-center">
                <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
                    Garçom quero encerrar
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}