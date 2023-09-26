'use client'
import { useState } from "react"
import { ModalConfirmation } from "../Modal/Confirmation"

interface Selecoes {
    dinheiro: boolean;
    cartao: boolean;
    pix: boolean;
}

export const FormsOrder = () => {
    const [form, setForm] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selecoes, setSelecoes] = useState<Selecoes>({
        dinheiro: false,
        cartao: false,
        pix: false,
    })

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleForm = () => {
        setIsModalOpen(false)
        setForm(true)
    }

    const handleSelecaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = event.target;
        setSelecoes((prevState) => ({
            ...prevState,
            [id]: checked,
        }));
    }

    if (!form) {
        return (
            <div className="flex-col mb-9 pl-3">
                <h3>tem alguma observação?</h3>
                <input
                    className=" border-blue-500 border rounded-lg mt-2 p-1"
                    placeholder="Ex: hamburguer sem salada"
                />
                <div className="flex items-center gap-4">
                    <h3>Deseja enviar seu pedido?</h3>
                    <button className="bg-blue-500 p-1 rounded-2xl text-white font-medium my-2">
                        Enviar
                    </button>
                </div>
                <div className="flex w-full justify-center">
                    <button
                        className="bg-red-500 p-2 rounded-2xl text-white font-medium my-2"
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
                <h1 className="text-center">Forma de pagamento</h1>
                <div className="flex gap-1">
                    <input
                        type="checkbox"
                        id="dinheiro"
                        checked={selecoes.dinheiro}
                        onChange={handleSelecaoChange}
                    />
                    <label htmlFor="dinheiro">Dinheiro</label>
                </div>
                <div className="flex gap-1">
                    <input
                        type="checkbox"
                        id="cartao"
                        checked={selecoes.cartao}
                        onChange={handleSelecaoChange}
                    />
                    <label htmlFor="cartao">Cartão</label>
                </div>
                <div className="flex gap-1">
                    <input
                        type="checkbox"
                        id="pix"
                        checked={selecoes.pix}
                        onChange={handleSelecaoChange}
                    />
                    <label htmlFor="pix">Pix</label>
                </div>


                {selecoes.dinheiro && (
                    <div className="mt-2 flex-col items-center">
                        <label htmlFor="valor" className="font-semibold">
                            Por favor, informe o valor que você entregará ao nosso atendente:
                        </label>
                        <span>
                            Se houver troco, nosso atendente o fornecerá prontamente para agilizar o atendimento!
                        </span>
                        <input
                            type="text"
                            className="w-full border flex-col border-blue-500 rounded-2xl py-1 px-3 mt-2"
                            id="valor"
                        />
                        <button
                            className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2"
                        >
                            Finalizar
                        </button>
                    </div>
                )}
                {selecoes.cartao && (
                    <div className="mt-2 flex-col gap-1">
                        <h1>Nosso atendente trará a máquina de cartão para você.</h1>
                        <button
                            className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2"
                        >
                            Finalizar
                        </button>
                    </div>
                )}
                {selecoes.pix && (
                    <div className="mt-2 flex-col justify-center items-center gap-2">
                        <h1 className="font-semibold mb-3">Você selecionou pagamento com Pix</h1>
                        <p >Chave celular:</p>
                        <p className="font-semibold my-3">98 999999999</p>
                        <h2>este é nosso pix, pague e mostre o comprovante ao nosso atendente</h2>
                        <button
                            className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2"
                        >
                            Finalizar
                        </button>
                    </div>
                )}
            </div>
        )
    }
}