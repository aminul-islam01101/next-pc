import {
  FacebookFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Space } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

const { Header, Content, Footer } = Layout;
type RootLayoutProps = {
  children: ReactNode;
};

// const items: MenuProps['items'] = [
//   {
//     key: '1',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//         1st menu item
//       </a>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//   },
//   {
//     key: '3',
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//         3rd menu item
//       </a>
//     ),
//   },
// ];
const categories = [
  {
    name: 'Monitor',
    link: '/categories/monitor',
  },
  { name: 'Motherboard', link: '/categories/motherboard' },
  { name: 'Others', link: '/categories/others' },
  { name: 'Power Supply Unit', link: '/categories/power-supply-unit' },
  { name: 'RAM', link: '/categories/ram' },
  { name: 'Storage Device', link: '/categories/storage-device' },
];
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  // const categoryQuery = useGetCategoriesQuery(undefined);
  // const { isLoading, isError, isSuccess } = categoryQuery;
  // const categoryData = categoryQuery.data as string[];
  // const [categories, setCategories] = useState<string[]>([]);
  // console.log('🌼 🔥🔥 file: RootLayout.tsx:48 🔥🔥 categories🌼', categories);

  // useEffect(() => {
  //   // Fetch categories data from the API
  //   fetch('/api/categories')
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data as string[]))
  //     .catch((error) => console.error('Error fetching categories:', error));
  // }, []);

  return (
    <Layout style={{ minHeight: '100vh' }} className="flex  flex-col justify-between">
      <Content
        style={
          {
            // padding: '0 24px',
            // minHeight: '80vh',
          }
        }
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
        className="bg-secondary"
      >
        <div />
        <h2
          style={{
            fontSize: '28px',
          }}
        >
          Next Pc
        </h2>
        <p>
          <Link href="https://web.facebook.com/">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://www.google.com">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        Next Pc ©2023 Created by webreality
      </Footer>
    </Layout>
  );
};

export default RootLayout;
