import React from "react";
import { CaseSelectionModal } from "./";
import { shallow } from "enzyme";

describe("CaseSelectionModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CaseSelectionModal allCases={[1, 2]} />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
