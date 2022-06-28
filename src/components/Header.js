import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export const Header = () => {
  return (
    <>
      <Navbar dark>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
        <div clasName='container'>
          <div className='row row-header'>
            <div className='col-12 col-sm-6'>
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the World's best cusines, and create a
                unique fusion experience.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};
