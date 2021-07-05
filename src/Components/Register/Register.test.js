import React from 'react';
import { mount } from 'enzyme';
import Register from './Register'

it('renders text input with label (default type)', () => {
    const wrapper = mount(<Register name="firstname" label="First Name" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('firstname');
    expect(label.text()).toEqual('First Name');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('firstname');
    expect(input.prop('id')).toEqual('firstname');
  });
  it('renders email input with label given the type', () => {
    const wrapper = mount(<Register type="email" name="email" label="Email" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('email');
    expect(label.text()).toEqual('Email');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('email');
    expect(input.prop('name')).toEqual('email');
    expect(input.prop('id')).toEqual('email');
  });