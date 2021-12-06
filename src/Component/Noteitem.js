import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Link } from "react-router-dom";
import img from "../Image/Text.jpg";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3" style={{marginBottom:"2rem"}}>
      <div className="card my-3">
        <div className="view overlay">
          <img className="card-img-top" src={img} alt="" />
          <Link>
            <div className="mask waves-effect waves-light rgba-white-slight"></div>
          </Link>
        </div>
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
