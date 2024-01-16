import React from "react";
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import { products } from "../productsData";

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: "view_module" };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    const { icon } = this.state;

    if (icon === "view_list") {
      this.setState({ icon: "view_module" });
    } else {
      this.setState({ icon: "view_list" });
    }
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="container">
        <IconSwitch icon={icon} onSwitch={this.onSwitch} />
        {icon === "view_module" ? (
          <CardsView cards={products} />
        ) : (
          <ListView cards={products} />
        )}
      </div>
    );
  }
}
