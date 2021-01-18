import React from "react";

function Header() {
  return (
    <table className="titleBar">
      <tbody>
        <tr>
          <td>
            <img
              className="headerImg"
              src="https://previews.123rf.com/images/ylivdesign/ylivdesign1211/ylivdesign121100088/16526995-blue-movie-logo-on-a-black-background.jpg"
              alt="app icon"
            />
          </td>
          <td className="td" />
          <td className="titleText">
            <h1>Search MovieDB and Nominate</h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Header;
