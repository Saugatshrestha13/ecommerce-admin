import {
  AttachMoney,
  LineStyle,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu"></div>
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon" />
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp className="sidebarIcon" />
            Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Quick Menu</h3>
      <ul className="sidebarList">
        <Link to="/users" className="link">
          <li className="sidebarListItem active">
            <PermIdentity className="sidebarIcon" />
            Users
          </li>
        </Link>
        <Link to="/products" className="link">
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            Products
          </li>
        </Link>
        <li className="sidebarListItem">
          <AttachMoney className="sidebarIcon" />
          Transactions
        </li>
        <li className="sidebarListItem">
          <TrendingUp className="sidebarIcon" />
          Reports
        </li>
      </ul>
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Notifications</h3>
      <ul className="sidebarList">
        <li className="sidebarListItem active">
          <LineStyle className="sidebarIcon" />
          Mail
        </li>
        <li className="sidebarListItem">
          <Timeline className="sidebarIcon" />
          Feedback
        </li>
        <li className="sidebarListItem">
          <TrendingUp className="sidebarIcon" />
          Messages
        </li>
      </ul>
      0
      <div
        className="
"
      ></div>{" "}
      <div className="sidebarMenu"></div>
      <h3 className="sidebarTitle">Staffs</h3>
      <ul className="sidebarList">
        <li className="sidebarListItem active">
          <LineStyle className="sidebarIcon" />
          Manage
        </li>
        <li className="sidebarListItem">
          <Timeline className="sidebarIcon" />
          Analytics
        </li>
        <li className="sidebarListItem">
          <TrendingUp className="sidebarIcon" />
          Reports
        </li>
      </ul>
    </div>
  );
}
