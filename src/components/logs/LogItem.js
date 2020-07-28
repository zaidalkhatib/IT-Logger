import React from "react";
import Moment from "react-moment";
import {connect} from "react-redux";
import {deleteLogs} from "../actions/logActions";
const LogItem = ({log, index}) => {
  const onClick = () => {
    console.log(log.id);
    deleteLogs(log.id);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="/"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <span className="gray-text"></span>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span>
          {"    "}
          <Moment format="MMM DO YYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#" onClick={onClick} className="secondary-content">
          <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, {deleteLogs})(LogItem);
