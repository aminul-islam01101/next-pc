import { Button, Card, Col, Rate, Row, Tag, Typography } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';

import CustomImage from '../shared/CustomImage';

import { TProduct } from '@/pages/api/models/productModel';
import { addOrUpdateProduct } from '@/redux/features/builders/builderSlice';
import { useAppDispatch } from '@/redux/hooks';

const { Title, Text } = Typography;

type TProductProps = {
  products: TProduct[];
};

const CategoryHorizontalCards: FC<TProductProps> = ({ products }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleSelect = async (product: TProduct) => {
    dispatch(addOrUpdateProduct({ category: product.category, product }));
    await router.push('/builders');
  };
  return (
    <div style={{ padding: '24px' }}>
      {products.length >= 0 &&
        products?.map((product: TProduct) => (
          <Card style={{ marginBottom: 10 }} key={product._id as string}>
            <Row gutter={24}>
              <Col span={4}>
                <CustomImage src={product.image} alt="product image" />
              </Col>
              <Col span={16}>
                <div>
                  <Title level={4}>{product.productName}</Title>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <Text strong>Status:</Text>
                    <Tag color={product.status === 'In Stock' ? 'green' : 'red'}>
                      {product.status}
                    </Tag>
                    <Text strong>Category:</Text> {product.category}
                    <div>
                      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                        <Text strong>Average Rating:</Text>
                        <br />
                        <Rate allowHalf disabled defaultValue={product.averageRating} />
                      </div>
                      <Text strong>Price:</Text> {product.price}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <Button onClick={(e) => handleSelect(product)}>Select</Button>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
};

export default CategoryHorizontalCards;
