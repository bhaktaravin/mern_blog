 import React, {Component} from 'react'; 
 import { Link} from 'react-router-dom'; 




 class Navbar extends Component{
    render(){
        return (
            <nav className='navbar navbar-custom navbar-expand-lg'>
                <Link to="/" className='navbar-brand'>
                  <i className='fas fa-pen-alt' />Blog
                </Link>
            </nav>
        );
    }
 }

 export default Navbar;