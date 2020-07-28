import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {connect} from "react-redux";
import {addLogs, setLoading} from "../actions/logActions";

const AddLogsModel = ({addLogs, log}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (message.length === 0) {
      M.toast({html: "Please enter a message"});
    }
    const logs = {
      message: message,
      attention: attention,
      tech: tech,
      date: new Date(),
    };
    if (message.length > 0) {
      M.toast({html: "Post was added"});
      addLogs(logs);
    }
  };
  return (
    <div>
      <div id="modal1" className="modal" style={{height: "75%"}}>
        <div className="modal-content">
          <h4>Enter System Log</h4>
        </div>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">textsms</i>
                  <input
                    type="text"
                    id="autocomplete-input"
                    className="autocomplete"
                    onChange={onChange}
                    value={message}
                  />
                  <label htmlFor="autocomplete-input">Log message</label>
                  <p style={{padding: "5px"}}>
                    <label>
                      <input
                        type="checkbox"
                        className="filled-in"
                        checked={attention}
                        value={attention}
                        onChange={() => setAttention(!attention)}
                      />
                      <span style={{color: "red"}}>Needs attention</span>
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="input-field col s12"
            style={{width: "100%", padding: "10px"}}
          >
            <select onChange={(e) => setTech(e.target.value)}>
              <option value="Choose your option" disabled selected>
                Choose your option
              </option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Justin">Justin Franko </option>
              <option value="Mike">Mike Lopez</option>
            </select>
            <label>Tech Select</label>
          </div>

          <div className="modal-footer">
            <button
              type="submit"
              href="#!"
              className="modal-close blue btn-flat"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, {addLogs})(AddLogsModel);
