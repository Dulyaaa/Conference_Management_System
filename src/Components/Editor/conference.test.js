import React from 'react';
import { shallow } from 'enzyme';
import Conference from './ViewConference';
import CreateConference from './CreateConference/CreateConference';

describe("Conference", () => {
    it("Should render Conference", () => {
        const wrapper = shallow(<Conference />);
        expect(wrapper.exists()).toBeTruthy()
        expect(wrapper.find('viewConference').exists()).toBe(true);
    })
})

describe('Email Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = shallow(<CreateConference />);
        wrapper.find('#confTopic').simulate('blur',
            {
                target: {
                    name: 'Conference Topic', value: 'THE LEARNING SCRUM STORYLINE' }
            });

        expect(wrapper.state('confTopic')).toEqual('THE LEARNING SCRUM STORYLINE');
    })
})