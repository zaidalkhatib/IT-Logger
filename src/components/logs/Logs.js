import React, {useState, useEffect} from "react";
import LogItem from "./LogItem";
import {connect} from "react-redux";
import {getLogs} from "../actions/logActions";
const Logs = ({log, getLogs}) => {
  const {loading, logs} = log;
  useEffect(() => {
    getLogs();
  }, []);

  if (!loading && logs === null) {
    return (
      <div style={{margin: "50%", textAlign: "center"}}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {loading && logs === null ? (
          <h3>No data to show</h3>
        ) : (
          logs.map((log, index) => (
            <LogItem key={index} log={log} index={index} />
          ))
        )}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, {getLogs})(Logs);
