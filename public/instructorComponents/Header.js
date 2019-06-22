import React, {Component} from 'react'

class Header extends Component{

    render(){
        return(
            <div className="HeaderContainer">
                <div className="row col-sm-12">

                    <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="#page-top">Student and Instructor Information System</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/*<div className="collapse navbar-collapse" id="navbarResponsive">*/}
                                {/*<ul className="navbar-nav ml-auto">*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link js-scroll-trigger" href="#about">About</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link js-scroll-trigger" href="#services">Services</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

}

export default Header;
