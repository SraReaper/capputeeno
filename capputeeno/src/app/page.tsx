'use client';

import { DefaultPageLayout } from '@/Components/default-page-layout';
import { FilterBar } from '@/Components/filter-bar';
import { ProductsList } from '@/Components/products-list';
import styled from 'styled-components';

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
