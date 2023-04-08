import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/customer+person+user+userphoto+icon-1320183283409152711.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sunil Shrestha</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/customer+person+user+userphoto+icon-1320183283409152711.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sunil Shrestha</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/customer+person+user+userphoto+icon-1320183283409152711.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sunil Shrestha</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/customer+person+user+userphoto+icon-1320183283409152711.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sunil Shrestha</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/customer+person+user+userphoto+icon-1320183283409152711.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sunil Shrestha</span>
            <span className="widgetSmUserTitle">CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
