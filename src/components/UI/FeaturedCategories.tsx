import { useRouter } from 'next/router';

import { getTitleCase } from '@/utils/getTitleCase';

const FeaturedCategories = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const handleNavigate = async (category: string) => {
    await router.push(`categories/${category}`);
  };

  return (
    <div>
      {categories.map((category) => (
        <li key={category}>
          <button type="button" onClick={() => handleNavigate(category)}>
            {getTitleCase(category)}
          </button>
        </li>
      ))}
    </div>
  );
};

export default FeaturedCategories;
