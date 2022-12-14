 import React, {Component} from 'react'; 
 import { Link} from 'react-router-dom'; 




 class Navbar extends Component{
    render(){
        return (
          <nav className="navbar navbar-custom navbar-expand-lg">
          <Link to="/" className="navbar-brand">
              <i className="fas fa-pen-alt" /> Blog
              <span className="full-stop">.</span>It
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span>
                  <i className="fa fa-bars"></i>
              </span>
          </button>
          <div
              className="collapse navbar-collapse"
              id="navbarTogglerDemo01"
          >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="navbar-item">
                      <Link
                          to="/about"
                          className="nav-link"
                          // Collapse the navbar once an item is clicked
                          onClick={this.handleNavbarCollapse}
                      >
                          About
                      </Link>
                  </li>
                  <li className="navbar-item">
                      <Link
                          to="/posts"
                          className="nav-link"
                          // Collapse the navbar once an item is clicked
                          onClick={this.handleNavbarCollapse}
                      >
                          Posts
                      </Link>
                  </li>
                  <li className="navbar-item">
                      <Link
                          to="/posts/new"
                          className="nav-link"
                          // Collapse the navbar once an item is clicked
                          onClick={this.handleNavbarCollapse}
                      >
                          New Post
                      </Link>
                  </li>

                  </ul>
                  </div>
                  </nav>
        );
    }
 }

 export default Navbar;