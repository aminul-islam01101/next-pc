import { Button, Dropdown, Layout, Space } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

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
const Navbar = () => {
  const { data: session } = useSession();

  const items =
    categories?.length > 0
      ? categories?.map((category, index) => {
          return {
            label: (
              <Link rel="noopener noreferrer" href={category.link}>
                {category.name}
              </Link>
            ),
            // label: category,
            key: index,
          };
        })
      : undefined;
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1>
        <Link
          href="/"
          style={{
            color: 'white',
            backgroundColor: '#404040',
            padding: '5px 10px',
            borderRadius: '3px',
          }}
        >
          NEXT PC
        </Link>
      </h1>

      <div className="flex">
        <li>
          <Dropdown menu={{ items }}>
            <button type="button" className="bg-transparent text-white border-0 ">
              <Space>Categories</Space>
            </button>
          </Dropdown>
        </li>
        <li>
          <Link style={{ textDecoration: 'none', color: 'white' }} href="/profile">
            Profile
          </Link>
        </li>
        {session?.user ? (
          <li>
            <Button onClick={() => signOut()} type="primary">
              Logout
            </Button>
          </li>
        ) : (
          <li>
            <Link style={{ textDecoration: 'none', color: 'white' }} href="/login">
              Login
            </Link>
          </li>
        )}
      </div>
    </Header>
  );
};

export default Navbar;
