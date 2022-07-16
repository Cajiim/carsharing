import React, {memo} from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Complete from "../../../assets/svg/adminPanelSvg/completeButton.svg";
import Cancel from "../../../assets/svg/adminPanelSvg/cancelButton.svg";
import Change from "../../../assets/svg/adminPanelSvg/changeButton.svg";
import "./index.scss";

function OrderCardLine({ dataCurrent }) {
  OrderCardLine.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    dataCurrent: PropTypes.array,
  };
  OrderCardLine.defaultProps = {
    dataCurrent: [],
  };
  return (
    <ul>
      {dataCurrent &&
        dataCurrent.map((el) => (
          <li className="orderCardLine_mainContent" key={el.id}>
            <img
              alt="carImg"
              src={el.modelCar.imgCar}
              className="orderCardLine_mainContent_img"
            ></img>
            <div className="orderCardLine_mainContent_orderDescription">
              <span className="orderCardLine_mainContent_orderDescription_text">
                <span className="orderCardLine_mainContent_orderDescription_text_name">
                  {el.modelCar.name}
                </span>
                &nbsp; в &nbsp;
                <span className="orderCardLine_mainContent_orderDescription_text_city">
                  {el.additionalOptions?.cityAuto},&nbsp;
                </span>
                {el.additionalOptions?.streetAuto}
              </span>
              <span className="orderCardLine_mainContent_orderDescription_date">
                {moment(new Date(el.additionalOptions?.startDate)).format(
                  "DD.MM.YYYY h:mm"
                )}
                &nbsp;—&nbsp;
                {moment(new Date(el.additionalOptions?.endDate)).format(
                  "DD.MM.YYYY h:mm"
                )}
              </span>
              <span className="orderCardLine_mainContent_orderDescription_color">
                Цвет:&nbsp;
                <span className="orderCardLine_mainContent_orderDescription_color_text">
                  {el.additionalOptions?.color}
                </span>
              </span>
            </div>
            <div className="orderCardLine_mainContent_checkbox">
              <label
                htmlFor="gas"
                className="orderCardLine_mainContent_checkbox_container"
              >
                <input
                  value="gasoline"
                  id="gas"
                  type="checkbox"
                  className="orderCardLine_mainContent_checkbox_container_input"
                  readOnly
                  checked={el.additionalOptions?.gas !== 0}
                ></input>
                <span className="orderCardLine_mainContent_checkbox_container_input_fakeCheckbox"></span>
                <span className="orderCardLine_mainContent_checkbox_container_input_text">
                  Полный бак
                </span>
              </label>

              <label
                htmlFor="chair"
                className="orderCardLine_mainContent_checkbox_container"
              >
                <input
                  value="babyChair"
                  id="chair"
                  type="checkbox"
                  className="orderCardLine_mainContent_checkbox_container_input"
                  checked={el.additionalOptions?.baby !== 0}
                  readOnly
                ></input>
                <span className="orderCardLine_mainContent_checkbox_container_input_fakeCheckbox"></span>
                <span className="orderCardLine_mainContent_checkbox_container_input_text">
                  Детское кресло
                </span>
              </label>

              <label
                htmlFor="rightHandDrive"
                className="orderCardLine_mainContent_checkbox_container"
              >
                <input
                  value="rightHand"
                  id="rightHandDrive"
                  type="checkbox"
                  className="orderCardLine_mainContent_checkbox_container_input"
                  checked={el.additionalOptions?.rightHand !== 0}
                  readOnly
                ></input>
                <span className="orderCardLine_mainContent_checkbox_container_input_fakeCheckbox"></span>
                <span className="orderCardLine_mainContent_checkbox_container_input_text">
                  Правый руль
                </span>
              </label>
            </div>
            <span className="orderCardLine_mainContent_textPrice">
              {Number(el.additionalOptions?.totalPrice).toLocaleString()}
            </span>

            <div className="orderCardLine_mainContent_bottons">
              <button
                type="button"
                className="orderCardLine_mainContent_bottons_ready"
              >
                <img
                  src={Complete}
                  alt="complete"
                  className="orderCardLine_mainContent_bottons_imgComplete"
                ></img>
                Готово
              </button>
              <button
                type="button"
                className="orderCardLine_mainContent_bottons_cancel"
              >
                <img
                  src={Cancel}
                  alt="cancel"
                  className="orderCardLine_mainContent_bottons_imgCancel"
                ></img>
                Отмена
              </button>
              <button
                type="button"
                className="orderCardLine_mainContent_bottons_change"
              >
                <img
                  src={Change}
                  alt="change"
                  className="orderCardLine_mainContent_bottons_imgChange"
                ></img>
                Изменить
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default memo(OrderCardLine);
