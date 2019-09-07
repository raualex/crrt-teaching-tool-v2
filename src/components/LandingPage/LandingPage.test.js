import React from "react";
import LandingPage from "./";
import { shallow } from "enzyme";

describe("LandingPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
