/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Tag, 
  Button, 
  Typography,
  Pagination,
  Row,
  Col,
  Modal,
} from 'antd';
import { 
  LeftOutlined, 
  RightOutlined 
} from '@ant-design/icons';
import { OctagonAlert } from 'lucide-react';

const { Title, Text } = Typography;

const orders = [
  {
    id: "#SH567",
    totalPrice: "1820$",
    status: "Active",
    assignTime: "2024-05-25",
    deliveryDate: "2024-05-30",
    time: "07:00 AM",
  },
  {
    id: "#SH568",
    totalPrice: "1250$",
    status: "Delivered",
    assignTime: "2024-05-25",
    deliveryDate: "2024-05-30",
    time: "07:00 AM",
  },
  {
    id: "#SH569",
    totalPrice: "1820$",
    status: "Delivered",
    assignTime: "2024-05-25",
    deliveryDate: "2024-05-30",
    time: "07:30 AM",
  },
  {
    id: "#SH570",
    totalPrice: "1820$",
    status: "Cancel",
    assignTime: "2024-05-25",
    deliveryDate: "2024-05-30",
    time: "07:30 AM",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Active":
      return "blue";
    case "Delivered":
      return "green";
    case "Cancel":
      return "red";
    default:
      return "default";
  }
}

export default function RiderOrderList() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order: any) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: string) => <span style={{ fontWeight: 500, color: '#111827' }}>{text}</span>,
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text: string) => <span style={{ color: '#374151' }}>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag 
          color={getStatusColor(status)}
          style={{ 
            border: 'none',
            fontWeight: 500,
            padding: '4px 12px',
            borderRadius: '6px'
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: 'Assign Time',
      dataIndex: 'assignTime',
      key: 'assignTime',
      render: (text: string) => <span style={{ color: '#374151' }}>{text}</span>,
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      render: (text: string) => <span style={{ color: '#374151' }}>{text}</span>,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (text: string) => <span style={{ color: '#374151' }}>{text}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Button 
          onClick={() => handleViewDetails(record)}
          type="text" 
          icon={<OctagonAlert style={{ color: '#6B7280' }} />} 
          style={{ width: 32, height: 32 }}
        />
      ),
    },
  ];

  return (
    <div>
      <Card 
        bordered={false}
        style={{
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', 
          marginTop: "50px"
        }}
      >
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6' }}>
          <Title 
            level={4} 
            style={{ 
              color: '#16a34a', 
              fontSize: '20px', 
              fontWeight: 500, 
              margin: 0 
            }}
          >
            Order List
          </Title>
        </div>
        
        <Table
          columns={columns}
          dataSource={orders.map((order, index) => ({ ...order, key: index }))}
          pagination={false}
          style={{ width: '100%' }}
          scroll={{ x: true }}
        />
        
        <Row 
          justify="space-between" 
          align="middle" 
          style={{ 
            padding: '16px 24px', 
            borderTop: '1px solid #e5e7eb' 
          }}
        >
          <Col>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>
              Showing 1-7 of 12
            </span>
          </Col>
          <Col>
            <Pagination
              total={12}
              pageSize={7}
              defaultCurrent={1}
              showSizeChanger={false}
              itemRender={(page, type, originalElement) => {
                if (type === 'prev') {
                  return <Button type="text" icon={<LeftOutlined />} style={{ width: 32, height: 32 }} />;
                }
                if (type === 'next') {
                  return <Button type="text" icon={<RightOutlined />} style={{ width: 32, height: 32 }} />;
                }
                if (type === 'page') {
                  return (
                    <Button 
                      type={page === 1 ? 'primary' : 'text'} 
                      style={{ 
                        width: 32, 
                        height: 32,
                        backgroundColor: page === 1 ? '#16a34a' : undefined,
                        borderColor: page === 1 ? '#16a34a' : undefined
                      }}
                    >
                      {page}
                    </Button>
                  );
                }
                return originalElement;
              }}
            />
          </Col>
        </Row>
      </Card>

      {/* Order Details Modal */}
      <Modal
        title={
          <Title level={3} style={{ color: '#16a34a', textAlign: 'center', margin: 0 }}>
            Order Details
          </Title>
        }
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        width={700}
        centered
      >
        {selectedOrder && (
          <div style={{ padding: '24px 0' }}>
            {/* Customer Info Section */}
            <Card 
              title="Customer Info" 
              style={{ marginBottom: 24 }}
              headStyle={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Text type="secondary">Full Name</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}>Softur Rahman</div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">Phone Number</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}>+8801XXXXXXXX</div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">Email</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}>lightmjpn@gmail.com</div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">USA adtkh 234tngg</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}></div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">Order Date</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}>July 30, 2025</div>
                </Col>
                <Col span={12}>
                  <Text type="secondary">Customer ID</Text>
                  <div style={{ fontWeight: 500, color: '#111827' }}>ID (e.g., CUST-1095)</div>
                </Col>
              </Row>
            </Card>

            {/* Vegetable Packs */}
            {[1, 2].map((pack, index) => (
              <Card 
                key={index}
                style={{ marginBottom: 24 }}
                title={
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Title level={4} style={{ margin: 0 }}>Vegetable Pack</Title>
                    <div style={{ textAlign: 'right' }}>
                      <Text type="secondary" style={{ fontSize: '12px' }}>Including Tax</Text>
                      <div style={{ fontSize: '20px', fontWeight: 600 }}>$50.00</div>
                    </div>
                  </div>
                }
              >
                <Row gutter={16} style={{ marginBottom: 16 }}>
                  <Col span={12}>
                    <Text type="secondary">Origin: </Text>
                    <Text>🇧🇩 origin</Text>
                  </Col>
                  <Col span={12}>
                    <Text type="secondary">Weight: </Text>
                    <Text>0.5kg</Text>
                  </Col>
                </Row>
                
                <div style={{ marginBottom: 16 }}>
                  <Text strong>Items:</Text>
                  <ul style={{ color: '#6B7280', margin: '8px 0', paddingLeft: 20 }}>
                    <li>Tomato 5kg</li>
                    <li>Vitamin Boost 4</li>
                    <li>Vitamin Boost 5</li>
                  </ul>
                </div>
                
                <div>
                  <Text strong>Description:</Text>
                  <p style={{ color: '#6B7280', margin: '8px 0', lineHeight: 1.6 }}>
                    Verum ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                    tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                    vitae risus. Ipsum sed eleifend et leo tempor quis cursus.
                  </p>
                </div>
              </Card>
            ))}

            {/* Total Section */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '16px',
              borderTop: '1px solid #f0f0f0',
              marginTop: '16px'
            }}>
              <Title level={4} style={{ margin: 0 }}>Total</Title>
              <Title level={4} style={{ margin: 0 }}>100$</Title>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}