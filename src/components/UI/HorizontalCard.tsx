import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { TCategory } from '../shared/Navbar';

import { TProduct } from '@/pages/api/models/productModel';
import { getAntDesignIcon } from '@/utils/getIcons';

type HorizontalCardProps = {
  category: TCategory;
};
const HorizontalCard: FC<HorizontalCardProps> = ({ category }) => {
  const router = useRouter();
  const handleNavigate = async (link: string) => {
    await router.push(`/builders/${link}`);
  };

  const product = category.product as TProduct;

  return (
    <Card style={{ width: '100%' }}>
      <Row align="middle">
        <Col span={2}>
          <div style={{ fontSize: '24px' }}>{getAntDesignIcon(category.icon)}</div>
        </Col>
        <Col span={product.productName ? 4 : 16}>
          <h3>{category.name}</h3>
        </Col>
        {product.productName && (
          <Col span={12}>
            <h3>{product.productName}</h3>
            <h3>{product.price}</h3>
          </Col>
        )}
        <Col span={4} style={{ textAlign: 'right' }}>
          {Object.keys(category.product).length ? (
            <Button onClick={() => handleNavigate(category.link)} type="primary">
              Modify
            </Button>
          ) : (
            <Button onClick={() => handleNavigate(category.link)} type="primary">
              Choose
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default HorizontalCard;
