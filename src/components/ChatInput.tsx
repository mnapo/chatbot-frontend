import React from "react";
import "./ChatInput.css";

type Props = {
    width: string,
    height: string
};

type State = {
};

class ChatInput extends React.Component<Props, State>{
    render(){
        return (
            <input className="ChatInput" placeholder="Escriba un mensaje..." style={{width: this.props.width, height: this.props.height}}/>
        );
    }
}
export default ChatInput;