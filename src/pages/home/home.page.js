import React from 'react';

import './home.styles.css';

// React Router
import { Routes, Route } from 'react-router-dom';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Components
import { SideNav } from '../../components/side-nav/side-nav.component';

// Pages
import { FindSeparation } from '../find-separation/find-separation.page';

export const Home = () => (
  <div className="home-container flex-row">
    <div>
      <Routes>
        <Route index path="/" element={<FindSeparation />} />
        <Route path="/set-relation" element={<div>Set Relation</div>} />
        <Route path="/all-users" element={<div>All Users</div>} />
        <Route path="/add-new-users" element={<div>Add New User</div>} />
        <Route path="*" element={<div>404 Layout</div>} />
      </Routes>
    </div>
  </div>
);
