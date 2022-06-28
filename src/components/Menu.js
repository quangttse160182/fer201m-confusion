import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width='100%' src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className='col-12 col-md-5 m-1' key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='container'>{menu}</div>
    </div>
  );
};
