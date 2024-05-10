import Page from '../components/shared/page/Page';
import Home from '../containers/home/Home';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <Page>
      <Home className={styles.home} />
    </Page>
  );
}

export default HomePage;
