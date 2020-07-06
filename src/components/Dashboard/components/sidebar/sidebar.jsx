/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import profile from '../../assets/images/big/img3.jpg'
const Sidebar = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
    /*--------------------------------------------------------------------------------*/
    const expandLogo = () => {
        // document.getElementById("logobg").classList.toggle("expand-logo");
    }
    /*--------------------------------------------------------------------------------*/
    /*Verifies if routeName is the one active (in browser input)                      */
    /*--------------------------------------------------------------------------------*/

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    return (
        <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
            <div className="scroll-sidebar">
                <PerfectScrollbar className="sidebar-nav">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8" style={{alignItems:"center"}}>
                        <img className="img-fluid w-60" style={{borderRadius: "50%", width:"10rem", height:"10rem", marginTop:"7em", marginBottom:"1em"}} src={profile} alt="about image"></img>
                        <h4 style={{textAlign:"center"}}>Hello, Pengy</h4>
                        </div>
                    </div>
                
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Sidebar Menus will go here                                                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <Nav id="sidebarnav">
                        {props.routes.map((prop, key) => {
                            if (prop.redirect) {
                                return null;
                            }
                            else {
                                return (
                                    /*--------------------------------------------------------------------------------*/
                                    /* Adding Sidebar Item                                                            */
                                    /*--------------------------------------------------------------------------------*/
                                    <li className={activeRoute.bind(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item'} key={key}>
                                        <NavLink to={prop.path} className="sidebar-link" activeClassName="active">
                                            <i className={prop.icon} />
                                            <span className="hide-menu">{prop.name}</span>
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                    </Nav>
                </PerfectScrollbar>
            </div>
        </aside>
    );
}
export default Sidebar;
