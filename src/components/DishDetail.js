import { Component } from 'react';
import { CardBody, CardTitle, CardText, CardImg, Card } from 'reactstrap';

export class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!!this.props.dish) {
      const comment = this.props.dish.comments.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.comment}</p>
            <p>
              {item.author} {item.date}
            </p>
          </div>
        );
      });
      const dish = this.props.dish;

      return (
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-5'>
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col-12 col-sm-7'>
              <h2>Comments</h2>
              {comment}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
