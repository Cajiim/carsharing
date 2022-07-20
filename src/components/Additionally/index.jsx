import { React } from "react";
import ColorBlock from "../ColorBlock";
import DataPickerBlock from "../DataPickerBlock";
import RentalRentBlock from "../RentalRentBlock";
import AdditionalServicesBlock from "../AddintionalServicesBlock";
import "./index.scss";

const Additionally = () => (
  <div>
    <ColorBlock />
    <DataPickerBlock />
    <RentalRentBlock />
    <AdditionalServicesBlock />
  </div>
);

export default Additionally;
