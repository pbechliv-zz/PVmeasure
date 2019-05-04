import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { logout } from "../auth/authActions";

const Navbar = props => {
  return (
    <Menu inverted>
      <Menu.Item name="test" icon as={NavLink} to="/" exact>
        <Icon name="calculator" />
        &nbsp;&nbsp;&nbsp;Measurements
      </Menu.Item>
      <Menu.Item name="test" icon as={NavLink} to="/notes" exact>
        <Icon name="sticky note" />
        &nbsp;&nbsp;&nbsp;Notes
      </Menu.Item>
      {/* <Menu.Item name="test" icon as={NavLink} to="/" exact>
        <Icon name="home" />
        &nbsp;&nbsp;&nbsp;Home
      </Menu.Item> */}
      <Menu.Menu position="right">
        <Menu.Item onClick={props.logout}>Logout</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapDispatchToProps = { logout };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);