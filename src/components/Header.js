import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <>
        <Navbar dark expand='md'>
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href='/' className='mr-auto'>
              <img src='assets/images/logo.png' height='30px' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar />
            <Nav navbar>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  <span className='fa fa-home fa-lg'>Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/aboutus'>
                  <span className='fa fa-info fa-lg'>About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  <span className='fa fa-list fa-lg'>Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/home'>
                  <span className='fa fa-address-card fa-lg'>Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cusines, and create
                  a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}
