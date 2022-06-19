import React, { useState } from 'react'
import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [showBasic, setShowBasic] = useState(false)
    return (
        <header>

            <MDBNavbar expand='lg' light bgColor='primary'>
                <MDBContainer>
                    <MDBNavbarBrand className='text-white'>
                        <span style={{ marginRight: 10 }}>
                            <MDBIcon fab icon='react' />
                        </span>
                        contact
                    </MDBNavbarBrand>
                    <MDBNavbarToggler data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className='text-white'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon fas icon={showBasic ? 'times' : 'bars'} />
                    </MDBNavbarToggler>


                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='ms-auto mb-2 mb-lg-0 w-auto'>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-link'>
                                    <NavLink to='/' className='text-white'>Home </NavLink>
                                </MDBNavbarLink>
                                </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-link'>
                                    <NavLink to='/addUser' className='text-white'>Add User </NavLink>
                                </MDBNavbarLink>
                                </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='nav-link'>
                                    <NavLink to='/about' className='text-white'>About </NavLink>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

        </header>
    )
}

export default Header