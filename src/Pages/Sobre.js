import React from "react";
import Header from "../Components/Header";

class Sobre extends React.Component {
    
    render(){
        const { history } = this.props;
        return(
            <Header history={history}/>
        );
    }
}
export default Sobre;