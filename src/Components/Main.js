import React from "react";
import { ReactDOM } from "react";
import "./Main.css";
import Button from "./Buttons";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isLogged: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent() {
    this.setState((prevState) => {
      return {
        count: (prevState.count + 1) % 5,
      };
    });
  }

  render() {
    const images = [
      "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/3/6b/36b215c4-ada5-5406-bbe6-8617ef8417df/5dcf0b52a3445.image.jpg?resize=1200%2C762",
      "https://cdn.cdnparenting.com/articles/2018/12/05161926/590825882-H.webp",
      "https://www.popsci.com/uploads/2019/10/31/7BRTDJOXCIQQH4ZMCBFIUDLEZQ.jpg?auto=webp&width=1440&height=960",
      "https://www.rli.uk.com/wp-content/uploads/2020/07/online-food-ordering.jpg",
      "https://healthyeaton.com/wp-content/uploads/2019/03/4-Big-Problems-with-Counting-Calories.jpg",
    ];
    return (
      <section id="id">
        <div>
          {" "}
          <h1>JunkFit</h1>
          <span>The Morden Solution to Stay Healthy, Happy and Fit</span>
          <Button text1="Order Now" text2="Workout" />
        </div>

        <div id="ic">
          <button onClick={this.handleEvent}>
            <img
              src="data:image/jpeg;base64,
            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"
            />
          </button>
          <img id="imgAr" src={images[this.state.count]} alt="" />
          <button onClick={this.handleEvent}>
            <img src="data:image/png;base64,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" />
          </button>
        </div>
      </section>
    );
  }
}
export default Main;
