import * as React from 'react';
import { mount, shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import SideNavMenu from '../../../app/components/SideSection/SideNavMenu/SideNavMenu';
import { MenuItem } from '../../../app/components/SideSection/SideNavItem/SideNavItem'; //importing types for menu items
import { MemoryRouter } from 'react-router';

describe('Testing of SideSection Component', () => {
  let SideNavMenuTestComponent: any;

  const menuItems: Array<MenuItem> = [
    {
      text: 'Nav Item 1',
      id: 1,
      icon: '',
      to: ''
    },
    {
      text: 'Nav Item 2',
      id: 2,
      icon: '',
      to: '/launchpad'
    }
  ];

  beforeEach(() => {
    SideNavMenuTestComponent = (
      <MemoryRouter>
        <SideNavMenu menuItems={menuItems} defaultSelected={1} />
      </MemoryRouter>
    );
  });

  it('rendering SideNavItems correctly', () => {
    const component = renderer.create(SideNavMenuTestComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('checking first navItemName', () => {
    const wrapper = mount(SideNavMenuTestComponent);
    expect(
      wrapper
        .find('a')
        .first()
        .text()
    ).toBe('Nav Item 1');
  });

  it('Checking no. of List Items rendered based on props data', () => {
    const wrapper = mount(SideNavMenuTestComponent);
    expect(wrapper.find('.sideMenu').find('li').length).toBe(1); //test must be failed because we have 2 items in props above defined in var menuItems
  });
});
