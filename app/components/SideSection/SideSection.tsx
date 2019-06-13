import * as React from 'react';
import styles from './SideSection.scss';
import { MenuItem } from './SideNavItem/SideNavItem';
import EnvIcon from '../../static/icons/hexagon.svg';
import DeployIcon from '../../static/icons/launch.svg';
import BrandLogo from '../../static/img/logo.svg';
import { BrandBox } from './BrandBox/BrandBox';
import SideNavMenu from './SideNavMenu/SideNavMenu';

type Props = {};
const brandName = 'Gigahex';

export default class SideSection extends React.PureComponent<Props> {
  props: Props;

  menuItems: Array<MenuItem> = [
    {
      text: 'Environments',
      id: 1,
      icon: EnvIcon,
      to: '/'
    },
    {
      text: 'Launchpad',
      id: 2,
      icon: DeployIcon,
      to: '/launchpad'
    },
    {
      text: 'Terminals',
      id: 3,
      icon: DeployIcon,
      to: '/terminals'
    }
  ];
  render() {
    return (
      <div className={styles.sideSection}>
        <BrandBox logo={BrandLogo} brandName={brandName} />
        <SideNavMenu menuItems={this.menuItems} defaultSelected={1} />
      </div>
    );
  }
}
