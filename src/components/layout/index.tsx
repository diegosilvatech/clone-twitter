import React from 'react';

import Feed from '../feed';
import MenuBar from '../menuBar';
import SideBar from '../sideBar';

import { LayoutContainer, ContentWrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <MenuBar></MenuBar>
        <Feed />
        <SideBar></SideBar>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
