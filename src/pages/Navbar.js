import { NavLink } from 'react-router-dom';

function Navbar(){
    const navLinkStyles = ({ isActive }) =>{
        return {
            fontWeight: isActive ? 'bolder' : 'Normal',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }

    return(
        <div className="nav">
            <div className="nav_cont">
                <NavLink style={navLinkStyles} to='/'><h6>Home Icon</h6></NavLink>
                <NavLink style={navLinkStyles} to='/'><h5>Home</h5></NavLink>
                <NavLink style={navLinkStyles} to='/about'><h5>About</h5></NavLink>         
                <NavLink style={navLinkStyles} to='/profile'><h5>Profile</h5></NavLink>         
                <NavLink style={navLinkStyles} to='/login'><h5>Login</h5></NavLink>         
            </div>
            <NavLink style={navLinkStyles} to='/cart'><h6>Cart Icon</h6></NavLink>
        </div>
    )
}

export default Navbar;