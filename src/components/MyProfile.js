import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  constructor(props){
    super(props);
    this.state={
      name: "",
      gender:["Male","Female"],
      description:'Description about yourself',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
  })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.gender + this.state.description );
    event.preventDefault();
  }

  

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
          <div className={"title"}>
              <p>My Profile</p>
          </div>
          <div className={"form-group"}>
              <p htmlFor="exampleInputName1">Name</p>
              <input type='text' value={this.state.name} name="name" onChange={this.handleChange} placeholder={'Your name'} />
          </div>

            <div className="form-group">
                <p>Gender:</p>
                <select defaultValue={this.state.gender} name="gender" onChange={this.handleChange} className={"form-control"}>
                    <option value ="Male">Male</option>
                    <option value ="Female">Female</option>
                </select>
            </div>
            <div className={'descriptionLabel'}>
                <p>Description</p>
                <textarea  rows="3" onChange={this.handleChange} name="description" value={this.state.description} ></textarea>
            </div>

          <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                      <label>
                          <input type="checkbox"/> <a>I have read the terms of conduct</a>
                      </label>
                  </div>
              </div>
          </div>

            <input  className="btn btn-primary" type={'submit'} value = "Submit" disabled={!this.state.name||!this.state.gender||!this.state.description}></input>
      </form>
    );
  }
}

export default MyProfile;


