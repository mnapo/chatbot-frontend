import React from "react";
import "./InputBox.css";
import ChatInput from "./ChatInput";
import ChatButton from "./ChatButton";

type Props = {
    width: string,
    height: string
};

type State = {
};

class InputBox extends React.Component<Props, State>{
    render(){
        return (
            <div className="InputBox" style={{width: this.props.width, height: this.props.height}}>
                <ChatInput width={"85%"} height={"80%"}/>
                <ChatButton width={"10%"} height={"90%"}/>
            </div>
        );
    }
}
export default InputBox;