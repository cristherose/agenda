import React from "react"

export default function Cadastro( {user} ){
    if (user.name === undefined) {
        return<div>Loading...</div>
    }
    const{
        name,
        email,
        telefone
    
} = user

return(
    <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Telefone: {telefone}</li>
    </ul>
)

}
