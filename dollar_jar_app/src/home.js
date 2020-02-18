import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component
{
  constructor(props)
  {
    super(props);

    this.state={
      name:''
    }
    this.updateName=this.updateName.bind(this);
  }
  updateName(e)
  {
    const name=e.target.value;
    this.setState({
      name:name
    })
  }
  render()
  {
    return (
      <div className="App">
        <form >
            <h2>Dollar jar </h2>
            <p>Welcome to dollar jar application</p>
          <input type="text" onChange={this.updateName} placeholder="Enter your name" ></input>
          <Link
          to={{
            pathname: "/User",
            name:this.state.name
            }}>

          <button type='button'>Submit</button></Link>
        </form>
      </div>
    );
  }
  

}
export default Home;