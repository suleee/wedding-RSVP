import React from "react";
import { Menu, Icon, Anchor } from "antd";
import "./Nav.css";

const { Link } = Anchor;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component {
  render() {
    return (
      <Anchor className="topnav">
        <Link href="#rsvp" title="RSVP" className="menursvp" />
        <Link href="#details" title="The Details" />
        <Link href="#ourstory" title="Our Story" />
        <Link href="#gallery" title="Gallery" className="menugallery" />
      </Anchor>
    );
  }
}
export default Nav;
