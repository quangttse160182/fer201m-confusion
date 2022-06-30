import { Link } from 'react-router-dom';
import { Component } from 'react';
import {
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Card,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const RenderDish = ({ dish }) => {
  if (dish)
    return (
      <div className='col-12 col-sm-5'>
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
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

  if (comments)
    return (
      <div className='col-12 col-sm-7'>
        <h2>Comments</h2>
        <div>{comments}</div>
      </div>
    );
};

export class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dish = this.props?.dish;
    const comments = this.props?.comments;

    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <RenderDish dish={dish} />
          </div>
          <div className='col-12 col-md-5 m-1'>
            <RenderComments comments={comments} />
          </div>
        </div>
      </div>
    );
  }
}
