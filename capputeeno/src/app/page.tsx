'use client';

import styles from './page.module.css';
import { FilterBar } from './Components/filter-bar';
import { ProductsList } from './Components/products-list';
import { QueryClient } from 'react-query';

export default function Home() {
  const client = new QueryClient();

  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
