import { Button, Card } from 'antd';
import Swal from 'sweetalert2';

import { TCategory } from '../../components/shared/Navbar';

import HorizontalCard from '@/components/UI/HorizontalCard';
import { useAppSelector } from '@/redux/hooks';

type HomePageProps = {
  categories: TCategory[];
};

const BuilderHome = () => {
  const categories = useAppSelector((state) => state.builders);
  console.log('🌼 🔥🔥 file: index..tsx:16 🔥🔥 BuilderHome 🔥🔥 categories🌼', categories);

  const isButtonEnabled = () => {
    return categories.every(
      (category) => category.product && Object.keys(category.product).length > 0
    );
  };

  const enabledButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
  };

  const disabledButtonStyle = {
    backgroundColor: 'lightgray',
    color: 'darkgray',
    cursor: 'not-allowed',
  };
  const handleClick = async () => {
    await Swal.fire('Thanks!', 'Your build has been completed!', 'success');
  };
  return (
    <div>
      <h1>Horizontal Cards</h1>
      <Card>
        {categories?.map((category) => (
          <HorizontalCard key={category.name} category={category} />
        ))}
      </Card>
      {/* Use the style prop to apply the styles based on the button state */}
      <Button
        onClick={handleClick}
        style={isButtonEnabled() ? enabledButtonStyle : disabledButtonStyle}
        disabled={!isButtonEnabled()}
      >
        Complete Build
      </Button>
    </div>
  );
};

// export const getStaticProps: GetStaticProps<HomePageProps> = () => {
//   // Simulate fetching data from an API or other sources

//   return {
//     props: {
//       categories: categoryData,
//     },
//   };
// };

export default BuilderHome;
