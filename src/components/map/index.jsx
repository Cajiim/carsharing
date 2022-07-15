import React from "react";
import AutoCompleteCity from "../AutoCompleteCity";
import AutoCompleteStreet from "../AutoCompleteStreet";
import MapWithAuto from "../MapWithAuto";
import "./index.scss";

function Map() {
  return (
    <div className="map_mainContent">
      <div>
        <AutoCompleteCity />
        <AutoCompleteStreet />
      </div>
      <MapWithAuto />
    </div>
  );
}

export default Map;
