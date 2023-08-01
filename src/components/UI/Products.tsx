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
  console.log('🌼 🔥🔥 file: Products.tsx:15 🔥🔥 products🌼', products);

  const { Meta } = Card;
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      style={{ display: 'flex', flexWrap: 'wrap', rowGap: '20px' }} // Apply flexbox to the Row
    >
      {products.length >= 0 &&
        products?.map((product: TProduct) => (
          <Col
            key={product._id as string}
            span={8}
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }} // Flexbox for equal height
          >
            <Link
              href="/categories/[...slug]"
              as={`/categories/${product?.category}/${product?._id as string}`}
            >
              <Card
                hoverable
                cover={
                  <CustomImage
                    src="https://img.freepik.com/free-vector/computer-design_1156-101.jpg?w=740&t=st=1690777381~exp=1690777981~hmac=84c26ca5aa2cdfa98b0bc14b9cdec4400483a737af67ae2ed4539b1314801135"
                    //   responsive
                    alt="product image"
                  />
                }
                style={{ flex: 1 }} // Allow the Card to grow and occupy equal space
              >
                <Meta style={{ color: '#000fff' }} title={product?.productName} />
                <div
                  className="line "
                  style={{
                    height: '5px',
                    margin: '20px 0',
                    background: '#000',
                    width: '100%',
                  }}
                />

                {/* <p
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  color: 'gray',
                  margin: '10px 0px',
                  fontSize: '12px',
                }}
              >
                <span>
                  <CalendarOutlined /> {product?.release_date}
                </span>
                <span>
                  <CommentOutlined /> {product?.comment_count} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {product?.category}
                </span>
              </p> */}

                <p style={{ fontSize: '15px' }}>
                  {product?.description.length > 100
                    ? `${product?.description.slice(0, 70)}...`
                    : product?.description}
                </p>
                {/* <Link href={`/product/${product?._id as string}`}> */}
                <p
                  style={{
                    fontSize: '15px',
                    marginTop: '20px',
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                    padding: '2px 5px ',
                    fontWeight: '300',
                    letterSpacing: '3px',
                    textAlign: 'center',
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
                {/* </Link> */}
              </Card>
            </Link>
          </Col>
        ))}
    </Row>
  );
};

export default Products;
