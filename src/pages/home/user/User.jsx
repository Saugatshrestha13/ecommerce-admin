import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anita Rijal</span>
              <span className="userShowUserTitle">Software Engineer</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">AnitaRijal13 </span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.2023 </span>
              </div>
              <span className="userShowTitle">Contact Details</span>

              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">9860419989 </span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  AnitaRijal13@gmail.com
                </span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Budhanilkantha</span>
              </div>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
          </div>
        </div>
        <div className="userUpdate"></div>
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="text"
                placeholder="AnitaRijal13"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Anita Rijal"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="AnitaRijal13@gmail.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="9860419989"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="Budhanilkantha"
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
