import React from "react";
import { CaseSelectionModal } from "./";
import { shallow } from "enzyme";

describe("CaseSelectionModal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CaseSelectionModal 
      allCases={[1, 2]} 
      addResultsMessagesToOrder={jest.fn()}
      setCurrentPoints={jest.fn()}
      setSelectedModal={jest.fn()}
      selectActiveCase={jest.fn()}
      calculateLabData={jest.fn()}
      setInputOutputData={jest.fn()}
      addMedications={jest.fn()}
      addVitals={jest.fn()}
      recordHourlyTimestamp={jest.fn()}
      setTime={jest.fn()}
      setTimeBetweenOrders={jest.fn()}
      setNewOrdersActiveStatus={jest.fn()}
      setNewOrdersActiveStatus={jest.fn()}
      setNewOrdersActiveStatus={jest.fn()}
      setNewOrdersActiveStatus={jest.fn()}
      submitOrder={jest.fn()}
      setCaseOver={jest.fn()}
    />);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
