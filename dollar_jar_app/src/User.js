import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom'


class User extends Component
{
  constructor(props)
  {
    super(props);

    this.state={
      userName:'',
      id:'',
      users:[],
      initialPenalty:10,
      count:0
    
    };

  }
   
    addUser(e)   
    {
      const userName=e.target.value;
      userName:userName;
      this.state.users.push(userName,count++)

    }
  render()
    {
      return (
        <div className="App">
          <h2>Dollar Jar </h2>
          <p> {this.props.location.state.name}</p>
          <form>
            <input type="text" onChange={this.addUser} placeholder="add User" ></input>
            <button type='button' onClick=''></button>
          </form>
        </div>
      );
    }
}
export default User;
