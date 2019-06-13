import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNavItem.scss';
import variables from '../../../app.global.scss';
import Pipeline from '../../common/Icons/Pipeline';
import Terminal from '../../common/Icons/Terminal';
import HexagonIcon from '../../common/Icons/Hexagon';

export type MenuItem = {
  text: string;
  id: number;
  icon: any;
  to: string;
};

type Props = {
  menu: MenuItem;
  isActive: boolean;
  onMenuClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};
export class SideNavItem extends React.PureComponent<Props> {
  props: Props;
  size = 26;

  anchorClick = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  getIcon = (id: number) => {
    let navIcon;
    switch (id) {
      case 1:
        if (this.props.isActive) {
          navIcon = (
            <HexagonIcon color={variables.ltfontcolor} size={this.size} />
          );
        } else {
          navIcon = (
            <HexagonIcon color={variables.ltfontdull} size={this.size} />
          );
        }
        break;
      case 2:
        if (this.props.isActive) {
          navIcon = <Pipeline color={variables.ltfontcolor} size={this.size} />;
        } else {
          navIcon = <Pipeline color={variables.ltfontdull} size={this.size} />;
        }
        break;
      case 3:
        if (this.props.isActive) {
          navIcon = <Terminal color={variables.ltfontcolor} size={this.size} />;
        } else {
          navIcon = <Terminal color={variables.ltfontdull} size={this.size} />;
        }
        break;
    }
    return navIcon;
  };

  render() {
    const { text, id, to } = this.props.menu;
    const navIcon = this.getIcon(id);
    let clsName;
    if (this.props.isActive) {
      clsName = styles.selectedLink;
    }
    return (
      <li data-id={id} onClick={this.props.onMenuClick}>
        <Link to={to} className={clsName} onClick={this.anchorClick}>
          {navIcon}

          <span>{text}</span>
        </Link>
      </li>
    );
  }
}
