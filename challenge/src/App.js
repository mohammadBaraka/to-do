import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {

  state = {
    isConnected:false,
    id:null,
    value:""
  }
  socket = null

  componentWillMount(){

    this.socket = io('https://codi-server.herokuapp.com');


    this.socket.on('next', (message_from_server) =>
    
    console.log("next", message_from_server))

 
    this.socket.on('youare',(answer)=>{
      this.setState({id:answer.id})
    })

    this.socket.on('pong!',(additionalStuff)=>{
      console.log('server answered!', additionalStuff)
    })
  


    this.socket.on('connect', () => {
      this.setState({isConnected:true})
    })

    this.socket.on('disconnect', () => {
      this.setState({isConnected:false})
    })

    /** this will be useful way, way later **/
    this.socket.on('room_message', old_messages => console.log(old_messages))
  }

  componentWillUnmount(){
    this.socket.close()
    this.socket = null
  }
  
handleChange = (e) => {
  this.setState({value: e.target.value});
};
  render() {
    return (<div className="App">
    <div className="container">
      <p>status: {this.state.isConnected ? 'connected' : 'disconnected'}</p>
      {/* add: */}
      <p>id: {this.state.id}</p>
    <button className="btn btn-primary"  onClick={()=>this.socket.emit('ping!')}>ping</button>
      {/* and also add: */}
      <button className="btn btn-info"  onClick={()=>this.socket.emit('whoami')}>Who am I?</button>
      <button className="btn btn-warning" onClick={()=> this.socket.emit('give me next')}>Giv Me</button>
    <button className="btn btn-danger" onClick={()=> this.socket.emit("addition")}>Addition</button>
    <input value={this.state.value} onChange={this.handleChange} />
  <button className="btn btn-success" onClick={()=>
    this.socket.emit("message",{
      text: this.state.value,
      name: "Mohammad",
      id: this.state.id
    })
  }
  >
  Send Message
  </button>
  </div>
    </div>);
   
  }
}

export default App;