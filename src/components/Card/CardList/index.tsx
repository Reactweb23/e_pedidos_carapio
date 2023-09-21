import Image from "next/image"

export const CardList = () => {
    return (
        <div className="flex-col bg-white px-7 py-3 items-center justify-between gap-4 custom-border">
            <div className="flex items-center">
                <div className=" w-full">
                    <h2 className="text-xs font-semibold">
                        Sanduíche de espinafreSanduíche de espinafre
                    </h2>
                    <p className="text-xs">
                        Sanduíche de espinafre com queijo prato e molho da casa
                    </p>
                </div>
                <Image
                    width={93}
                    height={72}
                    alt="img"
                    src='/card1.png'
                    style={{
                        borderRadius: 4
                    }}
                />
            </div>
            <div
                className="flex items-center justify-between gap-1"
            >
                <span className="text-green-600">
                    R$ 20,99
                </span>
                <div className="flex gap-2 mr-16 pr-8">
                    <button
                        className="text-gray-500 text-sm"
                    >
                        -
                    </button>
                    <div className="w-8 border border-gray-500 rounded text-center">
                        0
                    </div>
                   
                    <button
                        className="text-gray-500"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}