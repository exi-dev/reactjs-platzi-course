import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import '../components/styles/Navbar.css'


class Navbar extends Component {
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="logo"/>
                        <span className="font-weight-light"> Platzi</span>
                        <span className="font-weight-bold"> conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar