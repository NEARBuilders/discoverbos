import React, { useState } from "react";
import { Widget } from "near-social-vm";
import styled from "styled-components";

const Button = styled.button`
  all: unset;

  padding: 8px 16px;
  border-radius: 50rem;

  background: #1b1b18;
  color: #fcfcfc;

  font-size: 12px;
  font-weight: 500;
  font-family: "Mona Sans", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const AuthButton = () => {
  return (
    <Button>
      <i className="bi bi-box-arrow-right"></i> Sign out
    </Button>
  );
};

const ProfileButton = () => {
  return (
    <Button>
      <i className="bi bi-person"></i> Profile
    </Button>
  );
};

export default function ProfileIcon({ accountId }) {
  const [show, setShow] = useState(false);
  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="position-relative d-flex flex-column align-items-center p-3"
    >
      <Widget
        src="mob.near/widget/ProfileImage"
        props={{
          accountId: accountId,
          imageClassName: "rounded-circle w-100 h-100",
          style: { width: "3em", height: "3em", cursor: "pointer" },
        }}
      />
      {show && (
        <div
          style={{ zIndex: 100, top: 75, width: "max-content" }}
          className="position-absolute rounded-3 shadow bg-white p-3"
        >
          <div className="d-flex flex-column gap-3">
            <div>
              <small style={{ color: "inherit" }}>{accountId}</small>
            </div>
            <div className="d-flex flex-column align-items-center gap-2 w-100">
              <ProfileButton />
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
