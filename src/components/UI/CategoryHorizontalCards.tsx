import { Button, Card, Col, Rate, Row, Tag, Typography } from 'antd';
import { FC } from 'react';

import CustomImage from '../shared/CustomImage';

import { TProduct } from '@/pages/api/models/productModel';

const { Title, Text } = Typography;

type TProductProps = {
  products: TProduct[];
};

const CategoryHorizontalCards: FC<TProductProps> = ({ products }) => {
  return (
    <div style={{ padding: '24px' }}>
      {products.length >= 0 &&
        products?.map((product: TProduct) => (
          <Card style={{ marginBottom: 10 }} key={product._id as string}>
            <Row gutter={24}>
              <Col span={4}>
                <CustomImage
                  src="https://img.freepik.com/free-vector/computer-design_1156-101.jpg?w=740&t=st=1690777381~exp=1690777981~hmac=84c26ca5aa2cdfa98b0bc14b9cdec4400483a737af67ae2ed4539b1314801135"
                  alt="product image"
                />
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
                <Button>Select</Button>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
};

export default CategoryHorizontalCards;
