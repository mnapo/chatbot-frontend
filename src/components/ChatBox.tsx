import React from "react";
import "./ChatBox.css";
import MessagesBox from "./MessagesBox";
import InputBox from "./InputBox";

type Props = {
    width: string,
    height: string
};

type State = {
};

class ChatBox extends React.Component<Props, State>{
    render(){
        return (
            <div className="ChatBox" style={{width: this.props.width, height: this.props.height}}>
                <MessagesBox width={"100%"} height={"85%"}/>
                <InputBox width={"100%"} height={"10%"}/>
            </div>
        );
    }
}
export default ChatBox;