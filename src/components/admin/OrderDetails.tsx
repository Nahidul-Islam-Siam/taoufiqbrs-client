/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Card,
  Avatar,
  Badge,
  Button,
  Row,
  Col,
  List,
  Divider,
  Typography,
  Space,
} from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import fruit from "@/assets/admin/fruit.png";
import rider from "@/assets/admin/rider.png";
const { Title, Text } = Typography;

interface OrderItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: "available" | "unavailable";
}

interface Customer {
  name: string;
  phone: string;
  email: string;
  address: string;
  orderDate: string;
}

interface Rider {
  id: string;
  name: string;
  email: string;
  avatar: any;
}

export default function OrderDetails() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      id: "1",
      name: "Fresh Vegetables",
      description: "Tomatoes, Onions, Broccoli, Corn",
      price: 345.0,
      quantity: 2,
      status: "available",
    },
    {
      id: "2",
      name: "Seasonal Fruits",
      description: "Apples, Bananas, Oranges",
      price: 200.0,
      quantity: 1,
      status: "available",
    },
    {
      id: "3",
      name: "Organic Greens",
      description: "Spinach, Kale, Lettuce",
      price: 180.0,
      quantity: 3,
      status: "unavailable",
    },
  ]);

  const customer: Customer = {
    name: "John Doe",
    phone: "+8801XXXXXXXXX",
    email: "john@example.com",
    address: "15 Banani DOHS-Banani, Dhaka-1213, Bangladesh",
    orderDate: "July 30, 2022",
  };

  const riders: Rider[] = [
    {
      id: "1",
      name: "Henry Jr.",
      email: "henry@gmail.com",
      avatar: rider,
    },
    {
      id: "2",
      name: "Alice M.",
      email: "alice@gmail.com",
      avatar: rider,
    },
  ];

  const updateQuantity = (id: string, change: number) => {
    setOrderItems((items) =>
      items.map((item) => ({
        ...item,
        quantity: Math.max(
          0,
          item.id === id ? item.quantity + change : item.quantity
        ),
      }))
    );
  };

  const removeItem = (id: string) => {
    setOrderItems((items) => items.filter((item) => item.id !== id));
  };

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
//   const itemsCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Title level={2} className="mb-6">
        Order Details
      </Title>

      <Row gutter={[24, 24]}>
        {/* Main Content */}
        <Col xs={24} lg={16}>
          {/* Order List */}
          <Card
            title={<span className="text-lg font-semibold">Order Items</span>}
            extra={
              <Badge
                count={orderItems.length}
                showZero
                color="#52c41a"
                className="site-badge-count-4"
              />
            }
            className="shadow-sm rounded-lg"
          >
            <List
              itemLayout="horizontal"
              dataSource={orderItems}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  actions={[
                    <Space key="actions" direction="horizontal">
                      <Button
                        className="rounded-full !bg-red-600 text-white p-3 hover:!text-white"
                        size="small"
                        icon={<MinusOutlined />}
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                      />
                      <span className="font-medium px-2">{item.quantity}</span>
                      <Button
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-full !bg-green-600 text-white p-3 hover:!text-white"
                      />
                      <Button
                        size="small"
                        icon={<DeleteOutlined />}
                        onClick={() => removeItem(item.id)}
                        danger
                      />
                    </Space>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={fruit.src}
                        size={64}
                        shape="square"
                        className="rounded-lg"
                      />
                    }
                    title={<Text strong>{item.name}</Text>}
                    description={
                      <div>
                        <Text type="secondary" className="block mb-1">
                          {item.description}
                        </Text>
                        <Text strong className="text-green-600">
                          ${item.price.toFixed(2)}
                        </Text>
                      </div>
                    }
                  />
                  <div className="text-right">
                    <div className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Card>

          {/* Customer Details */}
          <Card
            title={
              <span className="text-lg font-semibold">
                Customer Information
              </span>
            }
            className="mt-6 shadow-sm rounded-lg"
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Space direction="vertical" size="small">
                  <div className="flex items-center">
                    <UserOutlined className="text-gray-500 mr-2" />
                    <Text strong>Customer Name:</Text>
                  </div>
                  <Text>{customer.name}</Text>
                </Space>
              </Col>
              <Col xs={24} sm={12}>
                <Space direction="vertical" size="small">
                  <div className="flex items-center">
                    <PhoneOutlined className="text-gray-500 mr-2" />
                    <Text strong>Mobile Number:</Text>
                  </div>
                  <Text>{customer.phone}</Text>
                </Space>
              </Col>
              <Col xs={24} sm={12}>
                <Space direction="vertical" size="small">
                  <div className="flex items-center">
                    <CalendarOutlined className="text-gray-500 mr-2" />
                    <Text strong>Order Date:</Text>
                  </div>
                  <Text>{customer.orderDate}</Text>
                </Space>
              </Col>
              <Col xs={24} sm={12}>
                <Space direction="vertical" size="small">
                  <div className="flex items-center">
                    <MailOutlined className="text-gray-500 mr-2" />
                    <Text strong>Email:</Text>
                  </div>
                  <Text>{customer.email}</Text>
                </Space>
              </Col>
              <Col span={24}>
                <Space direction="vertical" size="small" className="w-full">
                  <div className="flex items-center">
                    <EnvironmentOutlined className="text-gray-500 mr-2" />
                    <Text strong>Delivery Address:</Text>
                  </div>
                  <Text>{customer.address}</Text>
                </Space>
              </Col>
            </Row>
          </Card>

          {/* Available Riders */}
          <Card
            title={
              <span className="text-lg font-semibold">Available Riders</span>
            }
            className="mt-6 shadow-sm rounded-lg"
          >
            <List
              itemLayout="horizontal"
              dataSource={riders}
              renderItem={(rider) => (
                <List.Item
                  actions={[
                    <Button
                      key={rider.id}
                      type="primary"
                      className="bg-green-600 hover:!bg-green-700 border-green-600"
                    >
                      Assign Rider
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={rider?.avatar} size={48} />}
                    title={<Text strong>{rider.name}</Text>}
                    description={rider.email}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Order Summary Sidebar */}
        <Col xs={24} lg={8}>
          <Card
            title={<span className="text-lg font-semibold">Order Summary</span>}
            className="sticky top-6 shadow-sm rounded-lg"
          >
            <Space direction="vertical" size="middle" className="w-full">
              {/* <Statistic title="Total Items" value={itemsCount} />
              <Statistic title="Products" value={orderItems.length} />

              <Divider className="my-2" /> */}

              <Title level={5}>Order Breakdown</Title>

              {orderItems.map((item) => (
                <Row
                  key={item.id}
                  justify="space-between"
                  align="middle"
                  className="w-full"
                >
                  <Col>
                    <Text>
                      {item.name} × {item.quantity}
                    </Text>
                  </Col>
                  <Col>
                    <Text>${(item.price * item.quantity).toFixed(2)}</Text>
                  </Col>
                </Row>
              ))}

              <Divider className="my-2" />

              <Row justify="space-between" className="w-full">
                <Col>
                  <Text strong className="text-lg">
                    Total Amount
                  </Text>
                </Col>
                <Col>
                  <Text strong className="text-lg text-green-600">
                    ${total.toFixed(2)}
                  </Text>
                </Col>
              </Row>

              <Space direction="vertical" className="w-full mt-4">
                <Button
                  type="primary"
                  size="large"
                  block
                  className="h-12 bg-green-600 hover:!bg-green-700 border-green-600"
                >
                  Accept Order
                </Button>
                <Button size="large" block danger className="h-12">
                  Decline Order
                </Button>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
