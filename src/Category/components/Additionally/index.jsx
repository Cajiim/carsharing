import { React } from "react";
import ColorBlock from "../../../ui/ColorBlock";
import DataPickerBlock from "../../../ui/DataPickerBlock";
import RentalRentBlock from "../../../ui/RentalRentBlock";
import AdditionalServicesBlock from "../../../ui/AddintionalServicesBlock";
import "./index.scss";

function Additionally() {
  return (
    <div>
      <ColorBlock />

      <DataPickerBlock />

      <RentalRentBlock />

      <AdditionalServicesBlock />
    </div>
  );
}

export default Additionally;
