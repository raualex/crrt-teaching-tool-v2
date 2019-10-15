import React from "react";
import { ResultsModal, mapStateToProps } from "./";
import { shallow } from "enzyme";

describe("ResultsModal", () => {
  let wrapper;
  let mockTimestampArr = ["Hour 1", "Hour 2", "Hour 3"]

  beforeEach(() => {
    wrapper = shallow(<ResultsModal 
      hourlyTimestamps={mockTimestampArr} 
      caseOver={true} 
    />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToPropsfunction", () => {
    it("should return an object with the timeStamps array", () => {
      const mockState = {
        hourlyTimestamps: mockTimestampArr,
        testProp: "testProp"
      };
  
      const expected = {
        hourlyTimestamps: mockTimestampArr
      };
  
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});