import React, {memo} from 'react'
import classNames from "classnames";
import PropTypes from 'prop-types';
import acceptImg from "../../../assets/svg/adminPanelSvg/ShapeOk.svg";
import cancelImg from "../../../assets/svg/adminPanelSvg/ShapeCancel.svg";

import style from "./index.scss";

const cn = classNames.bind(style);

function ConfirmationBar ({activeConfirmation, setActiveConfirmation}) {
  ConfirmationBar.propTypes = {
    activeConfirmation: PropTypes.bool,
    setActiveConfirmation: PropTypes.bool,
  }
  ConfirmationBar.defaultProps = {
    activeConfirmation: false,
    setActiveConfirmation: false,
  }

  return(
    <div
        className={cn("confirmationBar", {
          confirmationBar_active:
            activeConfirmation,
        })}
      >
        <li className="confirmationBar_textContent">
          <img
            src={acceptImg}
            className="confirmationBar_textContent_imgAccept"
            alt="acceptImg"
          ></img>
          <span className="confirmationBar_textContent_text">
            Успех! Машина сохранена
          </span>
        </li>
        <img
          src={cancelImg}
          className="confirmationBar_textContent_imgCancel"
          alt="cancelImg"
          onClick={() => setActiveConfirmation(!activeConfirmation)}
        ></img>
      </div>
  );
}


export default memo(ConfirmationBar);