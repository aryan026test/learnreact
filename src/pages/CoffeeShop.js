import React, { useState } from "react";
import Coffee from "../images/expresso.jpg";
import Americano from "../images/americano.jpg";
import LongBlack from "../images/long_black.jpg";
import DoubleEspresso from "../images/double_expresso.jpg";
import BlackEye from "../images/black_eye.jpg";
import Card from "../components/Card";
import { gridView, listView } from "../redux";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faList } from "@fortawesome/free-solid-svg-icons";

const CoffeeShop = (prop) => {
  const { value } = prop;
  const { CartItems, setCartItems, pageItems, setPageItems } = value;

  const [toggleView] = useState(false);

  const CoffeeInfo = [
    {
      img: Coffee,
      text: "Espresso",
      description:
        "The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. Although simple in appearance, it can be difficult to master.",
      price: 50,
      pId: 1,
    },
    {
      img: DoubleEspresso,
      text: "Double Espresso",
      description:
        "A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.",
      price: 100,
      pId: 2,
    },
    {
      img: Americano,
      text: "Red Eye",
      description:
        "The red eye's purpose is to add a boost of caffeine to your standard cup of coffee",
      price: 120,
      pId: 3,
    },
    {
      img: BlackEye,
      text: "Black Eye",
      description:
        "The black eye is just the doubled version of the red eye and is very high in caffeine.",
      price: 5,
      pId: 4,
    },
    {
      img: Americano,
      text: "Americano",
      description:
        "Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther. The water dilutes the espresso while still maintaining a high level of caffeine",
      price: 5,
      pId: 5,
    },
    {
      img: LongBlack,
      text: "Long Black",
      description:
        "The long black is a similar coffee drink to the americano, but it originated in New Zealand and Australia. It generally has more crema than an americano.",
      price: 5,
      pId: 6,
    },
  ];

  const CoffeeList = CoffeeInfo.map((element, index) => {
    return (
      <Card
        view={toggleView}
        CartItems={CartItems}
        setCartItems={setCartItems}
        pageItems={pageItems}
        setPageItems={setPageItems}
        info={element}
        key={index}
      />
    );
  });

  return (
    <div>
      <div className="view-buttons">
        <button onClick={prop.gridView}>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <button onClick={prop.listView}>
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
      <div className={prop.view === "list" ? "" : "Class-grid"}>
        {CoffeeList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.view.view,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gridView: () => dispatch(gridView()),
    listView: () => dispatch(listView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShop);
