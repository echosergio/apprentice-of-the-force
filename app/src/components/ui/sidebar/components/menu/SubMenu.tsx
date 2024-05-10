import { ForwardedRef, LiHTMLAttributes, ReactNode, forwardRef, useContext, useState } from 'react';

import { useCollapse } from 'react-collapsed';

import { ItemContent } from '../layout/ItemContent';
import { LevelContext } from './Menu';

import { StyledInnerItem, StyledItem, StyledMenuItem } from './MenuItem.styles';
import { StyledSubMenuContent } from './SubMenu.styles';

export interface SubMenuProps extends LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const SidebarSubMenu = forwardRef(function SubMenu(
  { children, icon, active, title, before, after, variant = 'primary', ...rest }: SubMenuProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const level = useContext(LevelContext);

  const [open, setOpen] = useState(false);
  const { getCollapseProps } = useCollapse({ isExpanded: open });

  return (
    <StyledMenuItem ref={ref} {...rest}>
      <StyledItem
        role="button"
        $active={active}
        $firstchild={level === 0}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ItemContent icon={icon} before={before} after={after} firstchild={level === 0}>
          {title}
        </ItemContent>
      </StyledItem>
      <section {...getCollapseProps()}>
        <StyledInnerItem>
          <LevelContext.Provider value={level + 1}>
            <StyledSubMenuContent>{children}</StyledSubMenuContent>
          </LevelContext.Provider>
        </StyledInnerItem>
      </section>
    </StyledMenuItem>
  );
});
