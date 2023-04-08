import React from "react";
import "./widgetLg.css";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ramila Shrestha</span>
          </td>
          <td className="widgetLgDate"> 2 jun 2023 </td>
          <td className="widgetLgAmount"> $122 </td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ramila Shrestha</span>
          </td>
          <td className="widgetLgDate"> 2 jun 2023 </td>
          <td className="widgetLgAmount"> $122 </td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ramila Shrestha</span>
          </td>
          <td className="widgetLgDate"> 2 jun 2023 </td>
          <td className="widgetLgAmount"> $122 </td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ramila Shrestha</span>
          </td>
          <td className="widgetLgDate"> 2 jun 2023 </td>
          <td className="widgetLgAmount"> $122 </td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
