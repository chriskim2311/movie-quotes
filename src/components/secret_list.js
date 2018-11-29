import React from 'react';
import auth from '../HOC/auth'

const SecretList = props => {

   

return(
    <div>
        <h1 className="center">Secret Operatives List</h1>
        <ol>
            <li>Chris</li>
            <li>Jim</li>
            <li>Kevin</li>
            <li>James</li>
            <li>Kobe</li>
        </ol>
    </div>
)
}


export default auth(SecretList)