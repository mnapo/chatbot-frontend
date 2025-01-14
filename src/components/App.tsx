import React from "react";
import {Response} from 'express';
import "./App.css";
import ChatBox from "./ChatBox";

/*class ChatBox extends Component{

}

class ChatMessage extends Component{

}

class InputBox extends Component{

}

class MessageInput extends Component{

}

class SendButton extends Component{

}*/

type Props = {
};

type State = {
  post: string,
  responseToPost: string
};

class App extends React.Component<Props, State>{
  state: State = {
    post: "",
    responseToPost: ""
  };

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({post: "", responseToPost: ""}))
      .catch(err => console.log(err));
  }
  
  callApi = async () =>{
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  
  handleSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();
    const response = await fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({post: this.state.post}),
    });
    const body = await response.text();
    this.setState({responseToPost: body});
  };

/*
        <header className="App-header">

        </header>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(event) => this.setState({post:event.target.value})}
          />
          <button type="submit">Submit</button>
        </form>
       <p style={{color:"blue"}}><b>{this.state.responseToPost}</b></p>
*/

render(){
    return (
      <div className="App">
        <ChatBox width={"40vw"} height={"75vh"}/>
      </div>
    );
  }
}
export default App;