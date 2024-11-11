import PropTypes from "prop-types";
import Navabar from "./Navbar";

const Layout = ({children}) =>{
    return (
        <>
            <Navabar />
            {children}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}


export default Layout;