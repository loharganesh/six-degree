import React from 'react';

import './side-nav.styles.css';

import { SideNavItem } from './side-nav-item/side-nav-item.component';

export const SideNav = () => {
  return (
    <div className="side-nav-container border-r-sm">
      <SideNavItem title="Find Degree" linkTo="/" iconName="REPEAT_LINE" />
      <SideNavItem title="Set Relation" linkTo="/about" iconName="HEART_LINE" />
      <SideNavItem title="All Users" linkTo="/about" iconName="USER_LINE" />
      <button className="btn btn-regular btn-primary full-width mt-rg">
        Add User
      </button>
    </div>
  );
};
