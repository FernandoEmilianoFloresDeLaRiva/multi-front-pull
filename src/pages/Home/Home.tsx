import { HeaderTime } from "../../components/HeaderTime/HeaderTime";
import { Nav } from "../../components/Nav/Nav";
import styles from "./Home.module.css";
import { ContainerMetrics } from "../../components/ContainerMetrics/ContainerMetrics";

export const Home = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.container}>
        <HeaderTime />
        <ContainerMetrics/>
      </div>
    </main>
  );
};
