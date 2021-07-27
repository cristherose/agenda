import React from "react";
import Cadastro from "./Cadastro";

export default class Loader extends React.Component{
    constructor(){
        super()

        this.state = {
            user:{}
        }
    }



    render(){
        return  <Cadastro user={this.state.user} />
        }
}