export const FormsOrder = () => {
    return (
        <div className="flex-col m-2 mt-4 h-full ">
            <h3>Deseja enviar seu pedido?</h3>
            <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
                Enviar
            </button>
            <h3>tem alguma observação?</h3>
            <textarea className=" border-blue-500 border rounded-lg" />
        </div>
    )
}