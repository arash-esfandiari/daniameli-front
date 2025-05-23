import React, { Component } from 'react'
import { Menu } from './Menu';
import Mobilemenu from './MobileMenu';
import { Link } from 'react-router-dom';

export class Header extends Component {
    state = {
        show: false,
    }
    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
    render() {
        return (
            <header id="masthead" className="header ttm-header-style-01">
                {/* ttm-topbar-wrapper */}
                <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-lg-5">
                                <ul className="top-contact text-left">
                                    <li><i className="fas fa-map-marker-alt" />&nbsp;&nbsp;Eupener Straße 124 ,50933 Köln, Germany</li>
                                    <li><i className="far fa-envelope" />&nbsp;&nbsp;< a href="mailto:info@daniameli.de">info@daniameli.de</ a></li>
                                </ul>
                            </div>
                            <div className="col-lg-7">
                                <div className="topbar-right text-right d-flex justify-content-end">
                                    <ul className="top-contact">
                                        <li><i className="far fa-clock" />&nbsp;&nbsp;Office Hours: Mon to Friday 09:00 - 16:00</li>
                                    </ul>
                                    <div className="ttm-social-links-wrapper list-inline">
                                        <ul className="social-icons">
                                            <li><a href='https://www.facebook.com/majid.esfandiari.37' target='_blank' className=" tooltip-bottom" data-tooltip="Facebook"><i className="fab fa-facebook-f" /></ a>
                                            </li>
                                            <li><a className=" tooltip-bottom" data-tooltip="Twitter"><i className="fab fa-twitter" /></ a>
                                            </li>
                                            <li><a href='https://www.linkedin.com/in/majid-esfandiari-597167178/' target='_blank' className=" tooltip-bottom" data-tooltip="LinkedIn"><i className="fab fa-linkedin-in" /></ a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-btn">
                                        <Link className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" to="/contacts">Contact Us</ Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ttm-topbar-wrapper end */}
                {/* ttm-header-wrap */}
                <div className="ttm-header-wrap">
                    <div id="navbar" className="ttm-stickable-header clearfix">
                        <div className="site-header-menu">
                            <div className="container-fluid mx-5">
                                {/* site-branding */}
                                <div className="site-branding" >
                                    <Link to='/'>
                                        <img className='img-fluid' alt="logo" src="images/logo3.webp" />
                                    </Link>
                                </div>
                                {/* site-branding end*/}
                                {/*site-navigation */}
                                <div className="site-navigation">
                                    <div className="ttm-right-header">
                                        <ul className="ttm-header-icons">
                                            <li className="ttm-header-search-link ttm-bgcolor-skincolor ttm-textcolor-white">
                                                <a onClick={this.toggle}> {this.state.show ? <i className="ti-close" /> : <i className="ti-search" />}</a>
                                                {this.state.show && <div className="ttm-search-overlay">
                                                    <form className="ttm-site-searchform">
                                                        <div className="w-search-form-h">
                                                            <div className="w-search-form-row">
                                                                <div className="w-search-input">
                                                                    <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                                    <button type="submit">
                                                                        <i className="ti ti-search" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>}
                                            </li>
                                            <li >
                                            </li>
                                        </ul>
                                    </div>
                                    <Menu />
                                    <div className="mobilemenu"><Mobilemenu /></div>
                                </div>
                                {/*site-navigation end*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* ttm-header-wrap end*/}
            </header>
        )
    }
}

export default Header;