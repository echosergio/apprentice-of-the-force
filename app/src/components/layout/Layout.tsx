import classNames from 'classnames';
import { ReactNode } from 'react';

import { BaseComponentProps } from '../../types/base-component.types';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';

type ContainerProps = BaseComponentProps & {
  children: ReactNode;
};

function Layout({ className, children }: ContainerProps) {
  return (
    <div className={classNames(styles['wrapper'], className)}>
      <Sidebar />
      <main className={styles['main']}>{children}</main>
    </div>
  );
}

export default Layout;
