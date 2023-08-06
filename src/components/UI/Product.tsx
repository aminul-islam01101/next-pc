import { Col, Divider, Rate, Row, Tag, Typography } from 'antd';
import React from 'react';

import CustomImage from '../shared/CustomImage';

import { TProduct } from '@/pages/api/models/productModel';

const { Title, Text } = Typography;

// Define TypeScript types for dynamic data
// type TKeyFeature = {
//   label: string;
//   value: string;
// }

// type TReview= {
//   username: string;
//   rating: number;
//   comment: string;
// }

// type TProduct ={
//   productName: string;
//   category: string;
//   status: 'In Stock' | 'Out of stock';
//   price: string;
//   description: string;
//   keyFeatures: TKeyFeature[];
//   individualRating: number;
//   averageRating: number;
//   reviews: TReview[];
// }

// type TProductDetailPageProps ={
//   product: TProduct;
// }

const ProductDetailPage: React.FC<{ product: TProduct }> = ({ product }) => {
  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={24}>
        <Col span={8}>
          <CustomImage
            src={product.image}
            //   responsive
            alt="product image"
          />
        </Col>
        <Col span={16}>
          <Title level={3}>{product.productName}</Title>
          <Text strong>Category:</Text> {product.category}
          <br />
          <Text strong>Status:</Text>
          <Tag color={product.status === 'In Stock' ? 'green' : 'red'}>{product.status}</Tag>
          <br />
          <Text strong>Price:</Text> {product.price}
          <br />
          <Divider />
          <Text>{product.description}</Text>
          <br />
          <Divider />
          <Text strong>Key Features:</Text>
          <ul>
            {product.keyFeatures.map((feature) => (
              <li key={Math.random()}>
                <Text strong>{feature}:</Text> {feature}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Divider />
      <Row gutter={24}>
        <Col span={8}>
          <Text strong>Individual Rating:</Text>
          <br />
          <Rate allowHalf defaultValue={product.individualRating} />
        </Col>
        <Col span={8}>
          <Text strong>Average Rating:</Text>
          <br />
          <Rate allowHalf disabled defaultValue={product.averageRating} />
        </Col>
      </Row>
      <Divider />
      <Text strong>Reviews:</Text>
      {product?.reviews?.map((review) => (
        <div key={Math.random()}>
          <Text strong>{review.reviewer}:</Text>
          <br />
          <Text strong> {review.time}</Text>
          <br />
          <Text>{review.message}</Text>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default ProductDetailPage;

//           <Rate allowHalf disabled defaultValue={review.rating} />
