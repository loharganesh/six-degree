import React from 'react';

import './side-nav-item.styles.css';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Icon } from '../../icon/icon.component';

export const SideNavItem = (props) => {
  const { title, iconName, linkTo } = props;
  return (
    <Link
      to={linkTo}
      className="side-nav-link flex-row align-center con-sm side-nav-item-container"
    >
      <Icon name={iconName} />
      <h4 className="ml-sm">{title}</h4>
    </Link>
  );
};
