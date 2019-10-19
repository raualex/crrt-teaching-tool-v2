import React from "react";
import { ResultsModal, mapStateToProps } from "./";
import { shallow } from "enzyme";
import { mockTotalPoints } from "../../utils/initialSpreadsheetData.js";

describe("ResultsModal", () => {
  let wrapper;
  let mockTimestampArr = ["Hour 1", "Hour 2", "Hour 3"]
  let mockOrders = ["Order1", "Order2"]
  let mockLabData = { ph: [1, 2], filtrationFraction: [3, 4] }
  let mockSelectedCase = { id: 2 }

  beforeEach(() => {
    wrapper = shallow(<ResultsModal 
      hourlyTimestamps={mockTimestampArr} 
      caseOver={true} 
      orders={mockOrders}
      totalPoints={mockTotalPoints}
      labData={mockLabData}
      selectedCase={mockSelectedCase}
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