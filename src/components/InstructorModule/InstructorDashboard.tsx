import React, { useState } from "react";
import InstructorNavbar from "./InstructorNavbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useUser } from "../../UserContext";


export default function InstructorDashboard() {
  const [open, setOpen] = useState(false);
// importing global variables from context
const { id, changeId } = useUser();
// setting global user id to state 
const [studentId, setStudentId] = useState(id);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1673d5",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="page-container">
      {/* MAIN CONTENT = NO HEADER AND FOOTER */}
      <div className="main-container">
        {/* LEFT NAVBAR */}
        <InstructorNavbar />

        {/* COURSE BOXES */}
        <div>
          <>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: 10,
                  }}
                >
                  <input placeholder="course name" style={{ height: "30px" }} />
                  <input
                    placeholder="course content"
                    style={{ height: "30px" }}
                  />
                  <button
                    style={{ width: 100, alignSelf: "center", height: 30 }}
                  >
                    Add course
                  </button>
                </div>
              </Box>
            </Modal>
          </>
          <button
            type="button"
            className="mark button primary-button"
            onClick={handleModalOpen}
          >
            Add course
          </button>
          <div className="content">
            <div className="course-box">
              <a href="">
                Course 1<br />
                <br />
                <br />
                WEB DATA MANAGEMENT
              </a>
            </div>
            <div className="course-box">
              <a href="">
                Course 2<br />
                <br />
                <br />
                CLOUD COMPUTING
              </a>
            </div>
            <div className="course-box">
            <a href="">
                Course 3<br />
                <br />
                <br />
                SOFTWARE ENGINEERING
              </a>
            </div>
            <div className="course-box">
              <a href="">
                Course 4<br />
                <br />
                <br />
                OBJECT-ORIENTED PROGRAMMING
              </a>
            </div>
            <div className="course-box">
              <a href="">
                Course 5<br />
                <br />
                <br />
                DISCRETE STRUCTURES
              </a>
            </div>
            <div className="course-box">
              <a href="">
                Course 6<br />
                <br />
                <br />
                ALGORITHMS & DATA STRUCTURES
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-icon">Chat?</div>
    </div>
  );
}
