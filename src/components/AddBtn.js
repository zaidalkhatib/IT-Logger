import React from "react";
import AddLogsModel from "./logs/AddLogsModel";

const AddBtn = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red" href="#modal1">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li>
            <a
              className="btn-floating blue darken-1 modal-trigger"
              href="#modal1"
            >
              <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddBtn;
