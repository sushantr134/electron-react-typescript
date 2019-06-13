import * as React from 'react';
import { PureComponent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MenuItem } from '../SideNavItem/SideNavItem';
import { SideNavItem } from '../SideNavItem/SideNavItem';
import styles from './SideNavMenu.scss';

interface Props extends RouteComponentProps<any> {
  menuItems: Array<MenuItem>;
  defaultSelected: number;
  history: any;
}

type State = {
  activeMenuId: number;
};

class SideNavMenu extends PureComponent<Props, State> {
  props: Props;
  state: State;

  onNavMenuItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    e.stopPropagation();
    const selectedMenu: Array<MenuItem> = this.props.menuItems.filter(
      elem => elem.id == Number(id)
    );
    this.setState({
      activeMenuId: Number(id)
    });
    this.props.history.push(selectedMenu[0].to);
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      activeMenuId: 1
    };
  }

  render() {
    const menuItems = this.props.menuItems.map(item => (
      <SideNavItem
        key={item.id}
        menu={item}
        isActive={item.id == this.state.activeMenuId}
        onMenuClick={this.onNavMenuItemClick}
      />
    ));
    return <ul className={styles.sideMenu}>{menuItems}</ul>;
  }
}

export default withRouter(SideNavMenu);
