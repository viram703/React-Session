import React,{Component} from 'react';

class User extends Component
{
  constructor()
  {
    super();

    this.state={
      userObj:{
        userName:'',
        penalty:0,
      }, 
      userName:'',
      users:[],
      initialPenalty:10,
      totale:0,
    };
    // this.addUser=this.addUser.bind(this);
    this.handleUser=this.handleUser.bind(this);
    this.handleIncreament=this.handleIncreament.bind(this);
    this.handleDecreament=this.handleDecreament.bind(this);
    this.handlePenalty=this.handlePenalty.bind(this)

  }

    changeUser=(e)=>   
    {
      this.setState({
        userName:e.target.value});
    }
    changeInitialPenalty=(e)=>   
    {
      this.setState({
        initialPenalty:e.target.value});
    }
    handlePenalty()
    {
      this.setState({
        initialPenalty:this.state.initialPenalty
      });
    }
    isvalidUser()
    {
      const userValid=this.state.userName.length>0;
      return userValid
    }
    handleUser()
    {
      // const userObj={userName:this.state.userName,penalty:10};
      // this.state.users.push(userObj);
      // const users=[...this.state.users, this.state.userName];
      const userObj={userName:this.state.userName,penalty:0};
      this.state.users.push(userObj);
      const users=this.state.users;
      this.setState({
        users,
        userName: ""
      })
      console.log(users);
    }
    handleIncreament(index)
    {
      const usersDetail=this.state.users[index];
      let balance=parseInt(usersDetail.penalty) + parseInt(this.state.initialPenalty);

      let totaleBanace=this.state.totale+parseInt(this.state.initialPenalty)
      usersDetail.penalty=balance;
      console.log(balance);
      let users=[...this.state.users];
      users[index]=usersDetail;

      this.setState(
        {
          users:users,
          b:balance,
          totale:totaleBanace
      });      
    }
    handleDecreament(index)
    {
      console.log(index);
      const usersDetail=this.state.users[index];
      const balance=parseInt(usersDetail.penalty) - parseInt(this.state.initialPenalty);
      let totaleBanace=this.state.totale - parseInt(this.state.initialPenalty)
      usersDetail.penalty=balance;
      console.log(usersDetail);
      let users=[...this.state.users];
      users[index]=usersDetail;

      this.setState(
        {
          users:users,totale:totaleBanace
      });

    }
   

  render()
    {
      return (
        <div>
          <div className="App">
            <h2>Dollar Jar</h2>
            <p>Hello,{this.props.location.name} </p>

            <label>Enter initialPenalty :</label>
            <br></br>
            <input type="text" onChange={this.changeInitialPenalty} value={this.state.initialPenalty}></input>
            <button type='button' onClick={this.handlePenalty}>add penalty</button>
            <br></br>

            <label>Eenter user name:</label>
            <br></br>
            <input type="text" onChange={this.changeUser} value={this.state.userName}  ></input>
            <button disabled={!this.isvalidUser()} type='button' onClick={this.handleUser}>add user</button>
            <br></br>

          </div>
          <div>   
          <h2>Totale amount ={this.state.totale}</h2>
      
                  {this.state.users.map((user,index)=>{
                    return(
                      <div key={index}>
                        <h4>{user.userName}</h4>
                        <button type='button' onClick={()=>this.handleIncreament(index)}>Plus</button>
                        <button type='button' onClick={()=>this.handleDecreament(index)}>minus</button>
                        <h4>penalty is ={user.penalty }</h4>
                      </div>

                  )
                  })
                }
          </div>
  
        </div>
      );
    }
}
export default User;
