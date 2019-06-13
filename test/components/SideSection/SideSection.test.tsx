import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

import SideNavMenu from '../../../app/components/SideSection/SideNavMenu/SideNavMenu';
import { MenuItem } from '../../../app/components/SideSection/SideNavItem/SideNavItem'; //importing types for menu items
import { MemoryRouter } from 'react-router';

describe('Testing of SideSection Component', () => {
  const menuItems: Array<MenuItem> = [
    {
      text: 'Nav Item 1',
      id: 1,
      icon: '',
      to: ''
    }
  ];
  it('rendering SideNavItems correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <SideNavMenu menuItems={menuItems} defaultSelected={1} />
        </MemoryRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('checking navItemName', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SideNavMenu menuItems={menuItems} defaultSelected={1} />
      </MemoryRouter>
    );
    expect(
      wrapper
        .find('a')
        .first()
        .text()
    ).toBe('Nav Item 1');
  });
});
