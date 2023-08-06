import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import { FC } from 'react';

import CustomImage from '../shared/CustomImage';

import { TProduct } from '@/pages/api/models/productModel';

type TProductProps = {
  products: TProduct[];
};

const Products: FC<TProductProps> = ({ products }) => {
  const { Meta } = Card;
  return (
    <Row style={{ rowGap: 20 }}>
      {products.length >= 0 &&
        products?.map((product: TProduct) => (
          <Col xs={20} sm={12} lg={8} key={product._id as string}>
            <Card
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 5,
                margin: 10,
              }}
              hoverable
              cover={<CustomImage src={product.image} alt="product image" />}
            >
              <Meta style={{ color: '#000fff' }} title={product?.productName} />
              <div
                className="line"
                style={{ height: '5px', margin: '20px 0', background: '#000' }}
              />
              <p style={{ fontSize: '15px', flex: 1 }}>
                {product?.description.length > 100
                  ? `${product?.description.slice(0, 70)}...`
                  : product?.description}
              </p>
              <Link
                href="/categories/[...slug]"
                as={`/categories/${product?.category}/${product?._id as string}`}
                style={{
                  fontSize: '15px',
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '2px 5px',
                  fontWeight: '300',
                  letterSpacing: '3px',
                  textAlign: 'center',
                }}
              >
                View Details <ArrowRightOutlined />
              </Link>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Products;
