import { Avatar } from "../Avatar"

export const Information = ()=>{
    return(
        <div 
        className="
        bg-white
        rounded-t-3xl
        flex 
        items-center 
        justify-evenly 
        w-screen
        p-4
        "
        >
            <h1>EcoVibe Bistrô</h1>
            <Avatar />
        </div>
    )
}