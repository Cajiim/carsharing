import React, { memo } from "react";
import PropTypes from "prop-types";
import ModelTypeSettings from "../ModelTypeSettings";
import PriceSetting from "../PriceSettings";
import ColorSettings from "../ColorSettings";
import ButtonCarSettings from "../ButtonCarSettings";
import "./index.scss";

const CarSettings = ({ setActiveConfirmation }) => {
  CarSettings.propTypes = {
    setActiveConfirmation: PropTypes.bool,
  };
  CarSettings.defaultProps = {
    setActiveConfirmation: false,
  };

  return (
    <div className="carSettings_container">
      <h2 className="carSettings_container_title">Настройки автомобиля</h2>
      <ModelTypeSettings />
      <PriceSetting />
      <ColorSettings />
      <ButtonCarSettings setActiveConfirmation={setActiveConfirmation} />
    </div>
  );
};

export default memo(CarSettings);
