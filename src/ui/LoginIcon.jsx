import Button from "./Button";
import SignOut from "../assets/signOut.svg";
import { useState } from "react";

export default function LoginIcon({ icon }) {
  const [hidden, setHidden] = useState(true);
  const state = hidden;

  return (
    <>
      <div className="loginLogo">
        <img src={icon} alt="" onClick={() => setHidden(!state)} />
      </div>

      {hidden ? null : (
        <div className="accountDetails">
          <div className="aDdiv1">
            <img src={icon} alt="" />
            <div>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  marginTop: "5px",
                }}
              >
                User 15432
              </p>
              <p style={{ marginTop: "5px" }}>User15432@gzp.ru</p>
            </div>
          </div>
          <div
            style={{
              paddingTop: "1rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1.5rem",
            }}
          >
            <Button icon={SignOut} style={{ borderRadius: "0.5rem" }}>
              Signout
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
