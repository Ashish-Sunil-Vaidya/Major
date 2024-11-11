
import Navabar from "./Navbar";

const Layout = ({children}) =>{
    return (
        <>
            <Navabar />
            {children}
        </>
    )
}


export default Layout;