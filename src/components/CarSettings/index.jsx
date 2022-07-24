import React, { memo } from "react";
import PropTypes from "prop-types";
import ModelTypeSettings from "../ModelTypeSettings";
import PriceSetting from "../PriceSettings";
import ColorSettings from "../ColorSettings";
import ButtonCarSettings from "../ButtonCarSettings";
import "./index.scss";

const CarSettings = ({ setActiveConfirmation }) => (
  <div className="carSettingsContainer">
    <h2 className="carSettingsContainer__title">Настройки автомобиля</h2>
    <ModelTypeSettings />
    <PriceSetting />
    <ColorSettings />
    <ButtonCarSettings setActiveConfirmation={setActiveConfirmation} />
  </div>
);
CarSettings.propTypes = {
  setActiveConfirmation: PropTypes.func,
};
CarSettings.defaultProps = {
  setActiveConfirmation: () => {},
};

export default memo(CarSettings);
