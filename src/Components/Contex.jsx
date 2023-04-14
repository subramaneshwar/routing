import { createContext, useState } from "react";
export const Auth = createContext()
function CustomProvider({children}){
    const [islog, setislogin] = useState(false)
    const [users, setusers] = useState("")
    const [add, setadd] = useState([])
    return(
        <Auth.Provider value={{islog, setislogin,users, setusers,add, setadd}}>
            {children}
            </Auth.Provider>
    );
}
export default CustomProvider