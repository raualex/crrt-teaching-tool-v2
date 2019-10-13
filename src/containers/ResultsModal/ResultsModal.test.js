import React from "react";
import { ResultsModal } from "./";
import { shallow } from "enzyme";

describe("ResultsModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsModal />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});