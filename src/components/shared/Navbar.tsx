import { Button, Dropdown, Layout, Space } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import { getAntDesignIcon } from '@/utils/getIcons';

const { Header, Content, Footer } = Layout;

export type TCategory = {
  name: string;
  link: string;
  icon: string; // Add the icon property
};

export const categories: TCategory[] = [
  { name: 'Monitor', link: 'monitor', icon: 'MonitorOutlined' },
  { name: 'Motherboard', link: 'motherboard', icon: 'DesktopOutlined' },
  { name: 'Others', link: 'others', icon: 'AppstoreOutlined' },
  { name: 'Power Supply Unit', link: 'power-supply-unit', icon: 'PoweroffOutlined' },
  { name: 'RAM', link: 'ram', icon: 'DatabaseOutlined' },
  { name: 'Storage Device', link: 'storage-device', icon: 'HddOutlined' },
];
const Navbar = () => {
  const { data: session } = useSession();

  const items =
    categories?.length > 0
      ? categories?.map((category, index) => {
          return {
            label: (
              <Link rel="noopener noreferrer" href={`/categories/${category.link}`}>
                <span className="flex gap-2">
                  {getAntDesignIcon(category.icon)}
                  {category.name}
                </span>
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
        <li>
          <Link style={{ textDecoration: 'none', color: 'white' }} href="/builders">
            Builders
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
