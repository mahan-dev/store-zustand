import { ProductDetail } from "@/core/types/products/types";
import CardPage from "@/modules/Card";
import styles from "@/styles/home/route.module.css";

interface HomeProps {
  data: ProductDetail[];
}
const Home = ({ data }: HomeProps) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <CardPage key={index} data={item} />
      ))}
    </div>
  );
};

export default Home;
