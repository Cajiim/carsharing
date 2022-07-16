import React, {memo} from "react";
import PropTypes from "prop-types";
import ModelTypeSettings from "../../../ui/ModelTypeSettings";
import PriceSetting from "../../../ui/PriceSettings";
import ColorSettings from "../../../ui/ColorSettings";
import ButtonCarSettings from "../../../ui/ButtonCarSettings";
import "./index.scss";

function CarSettings({ setActiveConfirmation }) {
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
}

export default memo(CarSettings);
