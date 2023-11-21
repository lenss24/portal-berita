import React from 'react'
import {Navbar} from "flowbite-react";

export default function Navigation(props) {
    return (
        <div>
            <Navbar
                fluid={false}
                rounded={false}
            >
                <Navbar.Brand href={route('home')}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold py-2 dark:text-white">
                      CuyNews
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link
                        href={route('home')}
                        active={true}
                    >
                        <i className="fas fa-house"></i>&nbsp;Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <i className="fas fa-user"></i>&nbsp;About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        <i className="fas fa-newspaper"></i>&nbsp;News
                    </Navbar.Link>
                    {props.user ? (
                        <Navbar.Link href={route('dashboard')}>
                            <i className="fas fa-gauge-high"></i>&nbsp;Dashboard
                        </Navbar.Link>
                    ) : (
                        <>
                            <Navbar.Link href={route('login')}>
                                <i className="fas fa-gauge-high"></i>&nbsp;Log in
                            </Navbar.Link>
                            <Navbar.Link href={route('register')}>
                                <i className="fas fa-gauge-high"></i>&nbsp;Register
                            </Navbar.Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
