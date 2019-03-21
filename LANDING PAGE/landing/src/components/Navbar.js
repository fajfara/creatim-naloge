import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary fixed-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
                    <a className="navbar-brand " href="/">Anže Fajfar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <a data-scroll className="nav-link" href="#domov"> Domov </a>
                            </li>
                            <li className="nav-item">
                                <a data-scroll className="nav-link" href="#produkti-anchor"> Produkti </a>
                            </li>
                            <li className="nav-item">
                                <a data-scroll className="nav-link" href="https://naloge.netlify.com/"> Naloge </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
