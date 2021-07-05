import React from 'react';
import { mount } from 'enzyme';

import addWorkShop from './addWorkshop'

it('renders text input with label (default type)', () => {
    const wrapper = mount(<TextInput name="workshopTitle" label="Workshop Title" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toEqual('title');
    expect(label.text()).toEqual('Workshop Title');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('workshopTitle');
    expect(input.prop('id')).toEqual('title');
  });
  it('renders email input with label given the type', () => {
    const wrapper = mount(<TextInput type="email" name="email" label="Email" />);
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