import { ReactNode, useMemo } from 'react';

import { StyledIconWrapper, StyledItemContent, StyledPrefixWrapper, StyledSufixWrapper } from './ItemContent.styles';

export interface ItemContentProps {
  children?: ReactNode;
  icon?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  firstchild?: boolean;
}

export const ItemContent = ({ icon, before, after, children, firstchild }: ItemContentProps) => {
  const itemIcon = useMemo(() => {
    if (icon) {
      return icon;
    } else if (firstchild) {
      return <div />;
    }

    return null;
  }, [icon, firstchild]);

  return (
    <>
      {itemIcon && <StyledIconWrapper $firstchild={firstchild}>{itemIcon}</StyledIconWrapper>}
      {before && <StyledPrefixWrapper>{before}</StyledPrefixWrapper>}
      <StyledItemContent $firstchild={firstchild}>{children}</StyledItemContent>
      {after && <StyledSufixWrapper>{after}</StyledSufixWrapper>}
    </>
  );
};
