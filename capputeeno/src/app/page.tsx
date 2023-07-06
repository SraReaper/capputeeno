'use client';

import styles from './page.module.css';
import { FilterBar } from './Components/filter-bar';
import { ProductsList } from './Components/products-list';

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
