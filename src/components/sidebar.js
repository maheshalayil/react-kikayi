import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SideBar = () => {
    const props = useSelector(state => {
        return state.commonState
    });
    
    return !props.showSidebar ? null : (
        <aside id="left-sidebar-nav">
        <ul id="slide-out" className="side-nav fixed leftside-navigation">
          <li className="user-details cyan darken-2">
            <div className="row">
              <div className="col col s4 m4 l4">
                <img src="images/avatar/avatar-7.png" alt="" className="circle responsive-img valign profile-image cyan" />>
              </div>
              <div className="col col s8 m8 l8">
                <ul id="profile-dropdown-nav" className="dropdown-content">
                  {/* <li>
                    <a href="javascript:void(0)" className="grey-text text-darken-1">
                        <i className="material-icons">face</i> Profile</a>
                  </li> */}
                </ul>
                <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="/sample" data-activates="profile-dropdown-nav">Customer<i className="mdi-navigation-arrow-drop-down right"></i></a>
                <p className="user-roal">Role</p>
              </div>
            </div>
          </li>
          <li className="no-padding">
            <ul className="collapsible" data-collapsible="accordion">
              <li className="bold">                             
                <Link to="/categories" className="waves-effect waves-cyan">
                    <i className="material-icons">pie_chart_outlined</i>
                    <span className="nav-text">Categories</span>
                  </Link>
              </li>
              <li className="bold">                             
                <Link to="/products" className="waves-effect waves-cyan">
                    <i className="material-icons">pie_chart_outlined</i>
                    <span className="nav-text">Products</span>
                  </Link>
              </li>
              <li className="bold">                             
                <Link to="/vendors" className="waves-effect waves-cyan">
                    <i className="material-icons">pie_chart_outlined</i>
                    <span className="nav-text">Vendors</span>
                  </Link>
              </li>
            </ul>
          </li>
        </ul>
        <a href="/sample" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only">
            <i className="material-icons">menu</i>
          </a>
        </aside>
    );
}