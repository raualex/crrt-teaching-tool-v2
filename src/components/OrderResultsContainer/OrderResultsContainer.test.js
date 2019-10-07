import React from "react";
import OrderResultsContainer from "./";
import { shallow } from "enzyme";
import orderDosages from "../../utils/orderDosages.js";

describe("OrderResultsContainer", () => {
  let wrapper;
  let mockState;

  beforeEach(() => {
    wrapper = shallow(<OrderResultsContainer orderResults={["Test Order Results"]} />);
  });

  it("Should render like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
