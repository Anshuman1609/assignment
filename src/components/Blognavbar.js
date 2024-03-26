import React from 'react';
import '../styles/Blogs.css'

const Blognavbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-expand-md bg-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white blog-nav-active px-3" aria-current="page" href="/">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link blog-nav" aria-current="page" href="/">Private Equity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link blog-nav" href="/">Investment Banking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link blog-nav" href="/">Consulting</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn search-button" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Blognavbar