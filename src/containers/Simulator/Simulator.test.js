import React from "react";
import { Simulator, mapStateToProps, mapDispatchToProps } from "./";
import { shallow } from "enzyme";
import { mockOrders } from "../../utils/mockOrders";

describe("Simulator", () => {
  let wrapper;
  let mockCase = { id: 3 };
  let mockHourlyTimestamps = ["10:00", "11:00"];

  beforeEach(() => {
    wrapper = shallow(
      <Simulator
        selectedCase={mockCase}
        hourlyTimestamps={mockHourlyTimestamps}
      />
    );
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("matches the snapshot with a selectedModal", () => {
    wrapper = shallow(
      <Simulator
        selectedModal={"Imaging"}
        selectedCase={mockCase}
        hourlyTimestamps={mockHourlyTimestamps}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("toggleOrdersModal", () => {
  let wrapper;
  let mockCase = { id: 3 };
  let mockHourlyTimestamps = ["10:00", "11:00"];

  beforeEach(() => {
    wrapper = shallow(
      <Simulator
        selectedCase={mockCase}
        hourlyTimestamps={mockHourlyTimestamps}
        orders={mockOrders}
      />
    );
  });

  const mockEvent = {
    preventDefault: jest.fn()
  };

  it("should toggle showOrdersModal state and set state", () => {
    expect(wrapper.state().showOrdersModal).toEqual(false);
    wrapper.instance().toggleOrdersModal(mockEvent);
    expect(wrapper.state().showOrdersModal).toEqual(true);
    wrapper.instance().toggleOrdersModal(mockEvent);
    expect(wrapper.state().showOrdersModal).toEqual(false);
  });
});

describe("mapStateToProps function", () => {
  it("should return an object with the selected Output Modal", () => {
    const mockState = {
      selectedModal: "Imaging",
      somethingElse: "b00yah!"
    };
    const expected = {
      selectedModal: "Imaging"
    };
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe("mapDispatchToProps function", () => {
  const mockDispatch = jest.fn();
  let mappedProps;

  beforeEach(() => {
    mappedProps = mapDispatchToProps(mockDispatch);
  });

  it("should call dispatch when setSelectedModal is called", () => {
    mappedProps.setSelectedModal();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
