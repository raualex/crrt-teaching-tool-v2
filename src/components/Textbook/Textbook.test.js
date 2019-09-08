import React from "react";
import Textbook from "./";
import { shallow } from "enzyme";

describe("Textbook", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Textbook />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
