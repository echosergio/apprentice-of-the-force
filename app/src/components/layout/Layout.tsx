import { PropsWithChildren } from 'react';

import Sidebar from './Sidebar';

import { StyledLayout, StyledMain } from './Layout.styles';

function Layout({ children }: PropsWithChildren) {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
}

export default Layout;
