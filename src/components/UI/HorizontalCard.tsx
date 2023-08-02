import { Button, Card, Col, Row } from 'antd';
import { FC } from 'react';

import { TCategory } from '../shared/Navbar';

import { getAntDesignIcon } from '@/utils/getIcons';

type HorizontalCardProps = {
  category: TCategory;
};

const HorizontalCard: FC<HorizontalCardProps> = ({ category }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Row align="middle">
        <Col span={4}>
          <div style={{ fontSize: '24px' }}>{getAntDesignIcon(category.icon)}</div>
        </Col>
        <Col span={16}>
          <h3>{category.name}</h3>
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          <Button type="primary" href={`/builders/${category.link}`}>
            Choose
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
