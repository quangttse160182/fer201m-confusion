import { CardBody, CardTitle, CardText, CardImg, Card } from 'reactstrap';

const RenderDish = ({ dish }) => {
  if (dish)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  return <div></div>;
};

const RenderComments = ({ comments }) => {
  comments = comments?.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.comment}</p>
        <p>
          {item.author} {item.date}
        </p>
      </div>
    );
  });
  return comments;
};

export const DishDetail = ({ dish }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-5'>
          <RenderDish dish={dish} />
        </div>
        <div className='col-12 col-sm-7'>
          <h2>Comments</h2>
          <RenderComments comments={dish?.comments} />
        </div>
      </div>
    </div>
  );
};
