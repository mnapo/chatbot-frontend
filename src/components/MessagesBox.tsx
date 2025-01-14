import React from "react";
import "./MessagesBox.css";

type Props = {
    width: string,
    height: string
};

type State = {
};

class MessagesBox extends React.Component<Props, State>{
    render(){
        return (
            <div className="MessagesBox" style={{width: this.props.width, height: this.props.height}}>
            </div>
        );
    }
}
export default MessagesBox;