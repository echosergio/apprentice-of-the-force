import { ForwardedRef, forwardRef } from 'react';

import { SidebarProps } from './Sidebar.types';
import { SidebarProvider } from './useSidebar';

import { StyledLayout, StyledOverlay, StyledSidebar, StyledWrapper } from './Sidebar.styles';

export const Sidebar = forwardRef(function SidebarLayout(
  { children, toggled = false, collapsed = false, onToggle, style, ...rest }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <SidebarProvider toggled={toggled} collapsed={collapsed}>
      <StyledSidebar ref={ref} $collapsed={collapsed} $toggled={toggled} style={{ ...style }} {...rest}>
        <StyledWrapper>
          <StyledLayout>{children}</StyledLayout>
        </StyledWrapper>
        <StyledOverlay
          $toggled={toggled && collapsed}
          onClick={() => {
            onToggle && onToggle();
          }}
          role="button"
          aria-label="overlay"
        />
      </StyledSidebar>
    </SidebarProvider>
  );
});
