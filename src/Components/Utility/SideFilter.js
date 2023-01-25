import React from "react";
import { Row, Col } from "react-bootstrap";
import SideFilterSearchHook from "../../customHook/search/sideFilter_search_hook";
const SideFilter = () => {
  const [
    catItems,
    brandItems,
    handelCatCheck,
    handelBrandCheck,
    handelPriceFrom,
    handelPriceTo,
  ] = SideFilterSearchHook();

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={handelCatCheck} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>

          {catItems ? (
            catItems.map((item, index) => (
              <div className="d-flex mt-2" key={index}>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handelCatCheck}
                />
                <div className="filter-sub me-2 ">{item.name}</div>
              </div>
            ))
          ) : (
            <>لا يوجد فئات</>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>

          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={handelBrandCheck} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brandItems ? (
            brandItems.map((item, index) => (
              <div className="d-flex mt-2" key={index}>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={handelBrandCheck}
                />
                <div className="filter-sub me-2 ">{item.name}</div>
              </div>
            ))
          ) : (
            <>لا يوجد ماركات</>
          )}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            onChange={handelPriceFrom}
            value={localStorage.getItem("priceFrom")}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            onChange={handelPriceTo}
            value={localStorage.getItem("priceTo")}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
