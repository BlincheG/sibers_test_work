import React, { Component } from 'react'

class Modal extends Component {
  state = {}

  getField = (field) => {
    return this.state[field]
      ? this.state[field]
      : this.props.user[field];
  }

  onChangeField = (field, event) => {
    this.setState({
      [field]: event.target.value,
    })
  }

  getFieldInput = (field) => {
    return <input className="input" value={this.getField(field)} onChange={(e) => this.onChangeField(field, e)} />
  }

  onSaveClick = () => {
    const id = this.props.user.id;
    const updatedUserFields = this.state;
        
    this.props.onUserUpdate(id, updatedUserFields);
    this.props.onCloseClick();
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={this.props.onCloseClick}></button>
          </header>
          <section className="modal-card-body">
            <form>
              <div class="field">
                <label class="label">Имя:</label>
                <div class="control">
                  {this.getFieldInput('name')}
                </div>
              </div>

              <div class="field">
                <label class="label">Телефон:</label>
                <div class="control">
                  {this.getFieldInput('phone')}
                </div>
              </div>

              <div class="field">
                <label class="label">Email:</label>
                <div class="control">
                  {this.getFieldInput('email')}
                </div>
              </div>
              
              <div class="field">
                <label class="label">Имя пользователя:</label>
                <div class="control">
                  {this.getFieldInput('username')}
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.onSaveClick}>Save changes</button>
            <button className="button" onClick={this.props.onCloseClick}>Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default Modal