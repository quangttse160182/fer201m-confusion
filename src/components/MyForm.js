import { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  timeoutsShape,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      age: 0,
      email: '',
      error: {
        fullName: '',
        age: '',
        email: '',
      },
    };
  }
  handleOnChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleInputChange = (e) => {
    const nameControl = e.target.name;
    const value = e.target.value;
    this.setState({ [nameControl]: value });
  };

  handleInputBlur = (e) => {
    const nameControl = e.target.name;
    const value = e.target.value;
    const pattern = /^[a-zA-Z]+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/;
    if (nameControl === 'fullName' && value.length < 3) {
      this.setState({
        error: {
          ...this.state.error,
          fullName: 'Your fullname should be from 3 chars ',
        },
      });
    } else if (
      nameControl === 'age' &&
      (parseInt(value) < 18 || parseInt(value) > 65)
    ) {
      this.setState({
        error: {
          ...this.state.error,
          age: 'Your age should be from 18 to 65',
        },
      });
    } else if (nameControl === 'email' && !pattern.test(value)) {
      this.setState({
        error: {
          ...this.state.error,
          email: 'Your email should be xxx@xxx.xx or xxx@xxx.xx.xx',
        },
      });
    } else {
      this.setState({
        error: {
          ...this.state.error,
          fullName: '',
          age: '',
          email: '',
        },
      });
    }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    alert('You clicks the submit button');
  };
  render() {
    return (
      <div className='container'>
        <div className='row row-context'>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='fullName'>Full Name:</Label>
              <Input
                type='text'
                id='fullName'
                name='fullName'
                placeholder='fullName'
                value={this.state.fullName}
                valid={this.state.error.fullName === ''}
                invalid={this.state.error.fullName !== ''}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
              <FormFeedback>{this.state.error.fullName}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for='age'>Age:</Label>
              <Input
                type='text'
                id='age'
                name='age'
                placeholder='age'
                value={this.state.age}
                valid={this.state.error.age === ''}
                invalid={this.state.error.age !== ''}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
              <FormFeedback>{this.state.error.age}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for='email'>Email:</Label>
              <Input
                type='text'
                id='email'
                name='email'
                placeholder='email'
                value={this.state.email}
                valid={this.state.error.email === ''}
                invalid={this.state.error.email !== ''}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
              <FormFeedback>{this.state.error.email}</FormFeedback>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
