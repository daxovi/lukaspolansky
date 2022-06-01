import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();


    return (
        <div class="header">
            <div className="header--content">
                <nav>
                    <ul>
                        <li>o projektu</li>
                        <li>kurz</li>
                    </ul>
                    <ul>
                        <li><button onClick={() => { history.push("./dashboard") }} className="btn">přehled</button></li>
                        <li><button onClick={() => { history.push("./course") }} className="btn">kurz</button></li>
                        <li><button onClick={() => { history.push("./login") }} className="btn">přihlásit se</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header