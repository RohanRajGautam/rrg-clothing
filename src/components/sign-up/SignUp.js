import React from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account.</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
