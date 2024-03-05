import styles from './page.module.css';
import { SubAppContainer } from '@/app/SubAppContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <SubAppContainer />
    </main>
  );
}
