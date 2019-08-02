import React from 'react';
import { Simulator, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Simulator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Simulator />)
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('matches the snapshot with a selectedModal', () => {
    wrapper = shallow(<Simulator selectedModal={'Imaging'} />)
    expect(wrapper).toMatchSnapshot()
  });
});

describe('toggleOrdersModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Simulator />)
  });
  
  const mockEvent = {
                      preventDefault: jest.fn()
                    }

  it('should toggle showOrdersModal state and set state', () => {
    expect(wrapper.state().showOrdersModal).toEqual(false)
    wrapper.instance().toggleOrdersModal(mockEvent)
    expect(wrapper.state().showOrdersModal).toEqual(true)
    wrapper.instance().toggleOrdersModal(mockEvent)  
    expect(wrapper.state().showOrdersModal).toEqual(false)  
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with the selected Output Modal', () => {
    const mockState = {
      selectedModal: 'Imaging',
      somethingElse: 'b00yah!'
    }
    const expected = {
      selectedModal: 'Imaging'
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  });

});

describe('mapDispatchToProps function', () => {
  const mockDispatch = jest.fn()
  let mappedProps;

  beforeEach(() => {
    mappedProps = mapDispatchToProps(mockDispatch)
  });
  
  it('should call dispatch when setSelectedModal is called', () => {
    mappedProps.setSelectedModal()
    expect(mockDispatch).toHaveBeenCalled()
  });

});