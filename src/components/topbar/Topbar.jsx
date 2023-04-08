import React from "react";
import "./topbar.css";
import {Settings} from "@material-ui/icons";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Shuvam Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}

export default TopBar
