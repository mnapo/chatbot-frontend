import React from "react";
import "./ChatButton.css";

type Props = {
    width: string,
    height: string
};

type State = {
};

class ChatButton extends React.Component<Props, State>{
    render(){
        return (
            <button className="ChatButton" style={{width: this.props.width, height: this.props.height}}>
                ⬆️
            </button>
        );
    }
}
export default ChatButton;