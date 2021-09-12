import { Component } from 'react';
import avatarDefault from '../../../data/avatarDefault.png'
import userService from '../../../services/user-service';

const PHONE_PATTERN = /^\d{6,10}$/;
const EMAIL_PATTERN = /\S+@\S+\.\S+/;

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Name is required';
    }
    return message;
  },
  phone: (value) => {
    let message;
    if (value && !PHONE_PATTERN.test(value)) {
      message = 'Phone number is not valid';
    }
    return message;
  },
  email: (value) => {
    let message;
    if (value && !EMAIL_PATTERN.test(value)) {
      message = 'Email is not valid';
    }
    return message;
  }
}


class CreateUser extends Component {

  state = this.initialState()

  initialState() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        avatar: avatarDefault,
        address: '',
        password: ''
      },
      errors: {
        name: validations.name(''),
        phone: validations.phone(''),
        email: validations.email('')
      },
      touched: {
        name: false,
        phone: false,
        email: false,
        avatar: false,
        address: false,
        password: false
      }
    }
  }

  handleBlur(event) {
    const inputName = event.target.name;
    this.setState(({ touched }) => ({
      touched: {
        ...touched,
        [inputName]: true
      }
    }));
  }

  handleInputChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [inputName]: value,
      },
      errors: {
        ...prevState.errors,
        [inputName]: validations[inputName] ? validations[inputName](value) : undefined,
      }
    }))
  }

  handleRandomAvatarClick() {
    this.setState(({ user }) => ({
      user: {
        ...user,
        avatar: avatarDefault
      }
    }))
  }

  isFormValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some(key => errors[key] !== undefined);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      const { user } = this.state;

      userService.create(user)
        .then(user => {
          this.props.onCreateContact(user);
          this.setState(this.initialState());
        })
        .catch(error => {
          const { errors, message } = error.response?.data || error;
          console.error(message);
          const touched = Object.keys(errors || {}).reduce((touched, key) => {
            touched[key] = true;
            return touched;
          }, {});

          this.setState({
            errors: {
              name: errors ? undefined : message,
              ...errors,
            },
            touched: {
              name: errors ? false : true,
              ...touched
            }
          })
        })
    }
    
  }

  render() {
    const { user, errors, touched } = this.state;
    return (
      <div className="row mb-3">
        <div className="col-12 col-sm-2">
          <img src={user.avatar} alt="Avatar" className="img-thumbnail w-100"/>
        </div>
        <div className="col-12 col-sm-10">
          <form onSubmit={(event) => this.handleSubmit(event)}>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
              <input name="name" type="text" className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`} placeholder="Name.." value={user.name}
                onChange={(event) => this.handleInputChange(event)} onBlur={(event) => this.handleBlur(event)} />
              {errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-phone fa-fw" /></span>
              <input name="phone" type="text" className={`form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`} placeholder="Phone number (650..)" value={contact.phone}
                onChange={(event) => this.handleInputChange(event)} onBlur={(event) => this.handleBlur(event)} />
              {errors.phone && touched.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-envelope fa-fw" /></span>
              <input name="email" type="text" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} placeholder="example@example.org" value={contact.email}
                onChange={(event) => this.handleInputChange(event)} onBlur={(event) => this.handleBlur(event)}/>
              {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-picture-o fa-fw" /></span>
              <input name="avatar" type="text" className={`form-control ${errors.avatar && touched.avatar ? 'is-invalid' : ''}`} placeholder="Image url..." value={contact.avatar}
                onChange={(event) => this.handleInputChange(event)} onBlur={(event) => this.handleBlur(event)} />
              <button className="btn btn-outline-secondary" type="button" onClick={() => this.handleRandomAvatarClick()}><i className="fa fa-refresh fa-fw" /></button>
              {errors.avatar && touched.avatar && <div className="invalid-feedback">{errors.avatar}</div>}
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-sm-4">
                <button className="btn btn-primary w-100" disabled={!this.isFormValid()}>create contact</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

CreateUserForm.defaultProps = {
  onCreateContact: () => {}
}


export default CreateUser;