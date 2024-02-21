import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../redux';

function Navbar(prop){
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
            <div style={{
                display: 'flex'
            }}>
                <NavLink style={navLinkStyles} to='/cart'><h6>Cart Icon</h6></NavLink>
                {prop.itemsNumber!==0 && 
                <h6 className='textOverCartIcon'>
                    {/*
                        here will be the number of items imported added to the cart
                    */}
                    {prop.itemsNumber}
                </h6>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        itemsNumber: state.cart.itemsNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: () => dispatch(addToCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);