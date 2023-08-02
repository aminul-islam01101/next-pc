import {
  AppstoreOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  HddOutlined,
  MonitorOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

export const getAntDesignIcon = (iconName: string) => {
  switch (iconName) {
    case 'MonitorOutlined':
      return <MonitorOutlined />;
    case 'DesktopOutlined':
      return <DesktopOutlined />;
    case 'AppstoreOutlined':
      return <AppstoreOutlined />;
    case 'PoweroffOutlined':
      return <PoweroffOutlined />;
    case 'DatabaseOutlined':
      return <DatabaseOutlined />;
    case 'HddOutlined':
      return <HddOutlined />;
    default:
      return null;
  }
};
