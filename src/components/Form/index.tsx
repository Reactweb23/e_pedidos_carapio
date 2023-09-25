'use client'
import { useState } from "react"
import { ModalConfirmation } from "../Modal/Confirmation"

export const FormsOrder = () => {
    const [form, setForm] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleForm = () =>{
        setIsModalOpen(false)
        setForm(true)
    }

    if (!form) {
        return (
            <div className="flex-col mb-9">
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
                    <button
                        className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2"
                        onClick={openModal}
                    >
                        Garçom, quero encerrar
                    </button>
                </div>
                <ModalConfirmation isOpen={isModalOpen} onClose={closeModal} title="Tem certeza que deseja encerrar?">
                    <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded">
                        Não
                    </button>
                    <button onClick={handleForm} className="mt-4 bg-green-500 text-white p-2 rounded ml-6">
                        Sim
                    </button>
                </ModalConfirmation>
            </div>
        )
    }

    if (form) {
        return (
            <div className="flex-col gap-2 -mb-16 ml-5">
                <h1 className="text-center">Forma de  pagamento</h1>
                <div className="flex gap-1">
                    <input type="checkbox" id="Dinheiro" />
                    <label htmlFor="Dinheiro">Dinheiro</label>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" id="Cartao" />
                    <label htmlFor="Cartao">Cartão</label>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" id="Pix" />
                    <label htmlFor="Pix">Pix</label>
                </div>
            </div>
        )
    }
}