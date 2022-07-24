import React, {memo} from 'react'
import classNames from "classnames";
import PropTypes from 'prop-types';
import acceptImg from "../../assets/svg/ShapeOk.svg";
import cancelImg from "../../assets/svg/ShapeCancel.svg";

import style from "./index.scss";

const cn = classNames.bind(style);

const ConfirmationBar = ({activeConfirmation, setActiveConfirmation}) => (
    <div
        className={cn("confirmationBar", {   
          confirmationBar_active:
            activeConfirmation,
        })}
      >
        <li> 
          <img
            src={acceptImg}
            className="confirmationBar__imgAccept"
            alt="acceptImg"
          ></img>
          <span className="confirmationBar__text">
            Успех! Машина сохранена
          </span>
        </li>
        <img
          src={cancelImg}
          className="confirmationBar__imgCancel"
          alt="cancelImg"
          onClick={() => setActiveConfirmation(!activeConfirmation)}
        ></img>
      </div>
  )

ConfirmationBar.propTypes = {
  activeConfirmation: PropTypes.bool,
  setActiveConfirmation: PropTypes.func,
}
ConfirmationBar.defaultProps = {
  activeConfirmation: false,
  setActiveConfirmation: () => {},
}

export default memo(ConfirmationBar);