import React from "react";
import UnopDropdown from "unop-react-dropdown";
import filter from "../../images/filter.png";
import sort from "../../images/sort.png";

const SearchCountResult = ({ title, onclick }) => {
  const sortTitle = [
    "بدون ترتيب",
    "الاكثر مبيعا",
    "الاعلى تقييما",
    "السعر من الاقل الي الاعلى",
    "السعر من الاعلى الي الاقل",
  ];
  const handelClickMe = (item) => {
    // stor the item in local storage
    localStorage.setItem("sortType", item);
    onclick();
  };
  const handler = () => {};
  const handler2 = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            {sortTitle.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-bottom card-filter-item"
                  onClick={() => handelClickMe(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
