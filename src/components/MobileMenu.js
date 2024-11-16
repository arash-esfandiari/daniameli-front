import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  // MDBNavLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBHamburgerToggler
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class MobileMenu extends Component {
  state = {
    collapse1: false,
  };

  toggleSingleCollapse = () => {
    this.setState({ collapse1: !this.state.collapse1 });
  };

  render() {
    return (
      <Router>
        <MDBNavbar>
          <MDBHamburgerToggler
            id="hamburger1"
            onClick={this.toggleSingleCollapse}
          />
          <MDBCollapse isOpen={this.state.collapse1} navbar>
            <MDBNavbarNav>
              {/* Foundry Equipment */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Foundry Equipment
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/">Induction Furnaces</MDBDropdownItem>
                    <MDBDropdownItem href="/">Electric Arc Furnaces</MDBDropdownItem>
                    <MDBDropdownItem href="/">Ladle Furnaces</MDBDropdownItem>
                    <MDBDropdownItem href="/">CCM Lines</MDBDropdownItem>
                    <MDBDropdownItem href="/">Sand Plants</MDBDropdownItem>
                    <MDBDropdownItem href="/">Disa Lines</MDBDropdownItem>
                    <MDBDropdownItem href="/">HWS Lines</MDBDropdownItem>
                    <MDBDropdownItem href="/">Mixers</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Rolling Mill Lines */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Rolling Mill Lines
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/">Hot Rolling Mill</MDBDropdownItem>
                    <MDBDropdownItem href="/">Cold Rolling Mill</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Industrial Equipment */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Industrial Equipment
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/">Industrial Equipment</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Raw Material */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Raw Material
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/">Raw Material</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Electrical Equipment */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Electrical Equipment
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/about">Electromotors</MDBDropdownItem>
                    <MDBDropdownItem href="/about">Drivers and Inverters</MDBDropdownItem>
                    <MDBDropdownItem href="/about">Electropumps</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* Parts */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    Parts
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/about">
                      Spare parts for all the above equipment
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* More */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    More
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/">
                      Reference Standards (Chemical Reagents)
                    </MDBDropdownItem>
                    <MDBDropdownItem href="/">
                      Food and Dairy Equipment
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              {/* About Us */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    About Us
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/about">About Us</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default MobileMenu;