import React from "react";
import { DataOutputModal, mapStateToProps, mapDispatchToProps } from "./";
import { shallow } from "enzyme";

describe("DataOutputModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DataOutputModal />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps function", () => {
  it("should return an object with the selected output modal", () => {
    const mockState = {
      selectedModal: "Imaging",
      somethingElse: "wut?"
    };
    const expected = {
      selectedModal: "Imaging"
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe("mapDispatchToProps function", () => {
  let mockDispatch = jest.fn();
  let mappedProps;

  beforeEach(() => {
    mappedProps = mapDispatchToProps(mockDispatch);
  });

  it("should call dispatch when setSelectedModal is called", () => {
    mappedProps.setSelectedModal();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
