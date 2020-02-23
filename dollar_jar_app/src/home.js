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
  }
  updateName=(e)=>
  {    this.setState({name:e.target.value })

  }
  validation()
  {
    const name=this.state.name;
    const isvalid=name.length>0;
    return isvalid;

  }
  render()
  {
   
    return (  
      <div className="App">
        <h2>Dollar jar </h2>
        <p>Welcome to dollar jar application</p>
        <input type="text" onChange={this.updateName} placeholder="Enter your name" value={this.state.name} />
        <br>
        </br>
        <Link
          to={{
            pathname: "/User",
            name:this.state.name
            }}>

          <button disabled={!this.validation()}>Submit</button>
        </Link>
      </div>
    );
  }
  

}
export default Home;