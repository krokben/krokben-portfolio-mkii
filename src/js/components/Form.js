import React, { Component } from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'form' });

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      submitButton: 'submit',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    fetch('api/message.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
        .then((response) => {
          let submitButton = this.state.submitButton;
          submitButton = response;
          this.setState({ submitButton });
        })
        .catch(error => console.error(error)),
    });
  }

  render() {
    return (
      <form {...bem()} onSubmit={e => this.handleSubmit(e)}>
        <input
          {...bem('input')}
          type="text"
          pattern="[A-Za-z\s]{2,20}"
          placeholder="name"
          required
          title="Must be between 2 - 20 letters."
          ref={input => this.name = input}
        />
        <input
          {...bem('input')}
          type="text"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          placeholder="e-mail"
          required
          title="Must be between 2 - 20 letters."
          ref={input => this.email = input}
        />
        <textarea 
          {...bem('textarea')}
          placeholder="message"
          required
          ref={input => this.message = input}
        />
        {/* <button {...bem('button')} disabled>{this.state.submitButton}</button> */}
        <a
          {...bem('github')}
          href="https://github.com/krokben"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>visit my github instead!</div>
        </a>
      </form>
    );
  }
}
