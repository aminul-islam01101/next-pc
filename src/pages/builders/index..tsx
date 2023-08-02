import { Card } from 'antd';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { categories as categoryData, TCategory } from '../../components/shared/Navbar';

import HorizontalCard from '@/components/UI/HorizontalCard';

type HomePageProps = {
  categories: TCategory[];
};

const BuilderHome: FC<HomePageProps> = ({ categories }) => {
  return (
    <div>
      <h1>Horizontal Cards</h1>
      <Card>
        {categories.map((category) => (
          <HorizontalCard key={category.name} category={category} />
        ))}
      </Card>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = () => {
  // Simulate fetching data from an API or other sources

  return {
    props: {
      categories: categoryData,
    },
  };
};

export default BuilderHome;
