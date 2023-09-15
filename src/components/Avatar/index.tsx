import Image from "next/image"

export const Avatar = () =>{
    return(
        <div>
            <Image
                height={40}
                width={40}
                src='/logo.svg'
                alt="avatar" 
            />
        </div>
    )
}