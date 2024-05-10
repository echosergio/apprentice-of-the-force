import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../components/ui/button';
import { BaseComponentProps } from '../../types/base-component.types';
import styles from './Home.module.scss';

type ContainerProps = BaseComponentProps;

function Home({ className }: ContainerProps) {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.main, className)}>
      <img
        className={styles['img']}
        alt=""
        src="https://avatars.githubusercontent.com/u/6536180?v=4"
      />
      <div className={styles['presentation']}>
        <h3>Hi, I&rsquo;m Sergio 👋</h3>
        <p>
          This is a simple chat app built with React for the Landbot frontend
          code challenge.
        </p>
        <p>I hope you like it! 🚀</p>
      </div>
      <Button
        className={styles['button']}
        variant="outline-primary"
        onClick={() => {
          navigate(`/chat/${uuidv4()}`);
        }}
      >
        Start a new chat
      </Button>
    </div>
  );
}

export default Home;
