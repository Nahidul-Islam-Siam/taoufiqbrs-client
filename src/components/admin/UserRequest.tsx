"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Input,
  Dropdown,
  Space,
  Card,
  Typography,
  Pagination,
  Breadcrumb,
  Avatar,
  Modal,
  Row,
  Col,
} from "antd";
import {
  SearchOutlined,
  MoreOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";
import manIcon from "@/assets/admin/man-icon.png";
import Image from "next/image";

const { Title, Text } = Typography;

// Define the interface for listing data
interface Listing {
  id: string;
  userProfile: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userImage: any;
  userEmail: string;
  shopName: string;
  SIRETNumber: number;
  starred: boolean;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
}

// Mock data for the listings
const listings: Listing[] = [
  {
    id: "12345",
    userProfile: "Alfredo Korsgaard",
    userImage: manIcon,
    userEmail: "alfredo@email.com",
    shopName: "XYZ Shop",
    SIRETNumber: 7154458,
    starred: true,
    firstName: "Alex",
    lastName: "Amanda",
    phone: "01547475",
    address: "Lieu Dit Les Ris, Lieu-dit, 03190 Vallon-en-Sully, France",
  },
  {
    id: "12342",
    userProfile: "John Doe",
    userImage: manIcon,
    userEmail: "john@email.com",
    shopName: "ABC Store",
    SIRETNumber: 7154459,
    starred: false,
    firstName: "John",
    lastName: "Doe",
    phone: "01547476",
    address: "123 Main St, Paris, France",
  },
  // ... other listings
];

export default function UserRequest() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Listing | null>(null);

  const showModal = (record: Listing) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: TableColumnsType<Listing> = [
    {
      title: "User ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <Space>{text}</Space>,
    },
    {
      title: "User Profile",
      dataIndex: "userProfile",
      key: "userProfile",
      render: (text, record) => (
        <Space>
          <Avatar
            src={
              <Image src={record.userImage} alt={text} width={32} height={32} />
            }
          />
          {text}
        </Space>
      ),
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
    },
    {
      title: "SIRET Number",
      dataIndex: "SIRETNumber",
      key: "SIRETNumber",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => {
        const items: MenuProps["items"] = [
          {
            key: "1",
            label: <span>Accept</span>,
          },
          {
            key: "2",
            label: <span>Reject</span>,
          },
          {
            key: "3",
            label: <span onClick={() => showModal(record)}>Details</span>,
          },
        ];

        return (
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#fff", padding: "20px" }}
    >
      <div>
        {/* Breadcrumb */}
        <Breadcrumb style={{ marginBottom: "16px" }}>
          <Breadcrumb.Item>
            <Text type="secondary">User Request</Text>
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <Title level={2} style={{ color: "#389e0d", margin: 0 }}>
            User Request
          </Title>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: "24px" }}>
          <Input
            placeholder="Search listing..."
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "300px" }}
          />
        </div>

        {/* Table */}
        <Card
          bodyStyle={{ padding: 0 }}
          style={{
            borderRadius: "8px",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
            border: "1px solid #f0f0f0",
          }}
        >
          <Table
            columns={columns}
            dataSource={listings}
            pagination={false}
            scroll={{ x: true }}
            style={{ width: "100%" }}
            rowClassName={() => "hover:bg-gray-50"}
          />
        </Card>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Pagination
            total={50}
            showSizeChanger={false}
            showQuickJumper={false}
            itemRender={(page, type, originalElement) => {
              if (type === "prev") {
                return <Button type="default" icon={<LeftOutlined />} />;
              }
              if (type === "next") {
                return <Button type="default" icon={<RightOutlined />} />;
              }
              if (type === "page") {
                return (
                  <Button
                    type={page === 1 ? "primary" : "default"}
                    style={
                      page === 1
                        ? {
                            backgroundColor: "#000",
                            borderColor: "#1f1f1f",
                          }
                        : {}
                    }
                  >
                    {page}
                  </Button>
                );
              }
              return originalElement;
            }}
          />
        </div>
      </div>

      {/* User Details Modal */}
      <Modal
        title="User Details"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        footer={[
          <Button key="reject" danger onClick={handleCancel}>
            Reject
          </Button>,
          <Button
            key="accept"
            type="primary"
            onClick={handleOk}
            className="!bg-green-500"
          >
            Accept
          </Button>,
        ]}
      >
        {selectedUser && (
          <div style={{ padding: "20px 0" }}>
            <Row gutter={[32, 16]}>
              <Col span={8} style={{ textAlign: "center" }}>
                <Avatar
                  size={96}
                  src={
                    <Image
                      src={selectedUser.userImage}
                      alt={selectedUser.userProfile}
                      width={96}
                      height={96}
                    />
                  }
                  style={{ marginBottom: "16px" }}
                />
                <Title level={4} style={{ margin: 0 }}>
                  {selectedUser.userProfile}
                </Title>
              </Col>
              <Col span={16}>
                <Row gutter={[0, 16]}>
                  <Col span={12}>
                    <Space direction="vertical" size="small">
                      <Text strong>
                        <UserOutlined style={{ marginRight: "8px" }} />
                        First Name
                      </Text>
                      <Text>{selectedUser.firstName || "N/A"}</Text>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" size="small">
                      <Text strong>
                        <UserOutlined style={{ marginRight: "8px" }} />
                        Last Name
                      </Text>
                      <Text>{selectedUser.lastName || "N/A"}</Text>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" size="small">
                      <Text strong>
                        <IdcardOutlined style={{ marginRight: "8px" }} />
                        SIRET Number
                      </Text>
                      <Text>{selectedUser.SIRETNumber}</Text>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" size="small">
                      <Text strong>
                        <PhoneOutlined style={{ marginRight: "8px" }} />
                        Phone
                      </Text>
                      <Text>{selectedUser.phone || "N/A"}</Text>
                    </Space>
                  </Col>
                  <Col span={12}>
                    <Space direction="vertical" size="small">
                      <Text strong>
                        <MailOutlined style={{ marginRight: "8px" }} />
                        Email
                      </Text>
                      <Text>{selectedUser.userEmail}</Text>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <Text strong>
                        <EnvironmentOutlined style={{ marginRight: "8px" }} />
                        Address
                      </Text>
                      <Text>{selectedUser.address || "N/A"}</Text>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Space
                      direction="vertical"
                      size="small"
                      style={{ width: "100%" }}
                    >
                      <Text strong>
                        <IdcardOutlined style={{ marginRight: "8px" }} />
                        Shop Name
                      </Text>
                      <Text>{selectedUser.shopName}</Text>
                    </Space>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Modal>

      <style jsx>{`
        :global(.ant-table-thead > tr > th) {
          background-color: #1f1f1f !important;
          color: white !important;
          font-weight: 500;
        }

        :global(.ant-table-tbody > tr:hover > td) {
          background-color: #fafafa !important;
        }

        :global(.ant-btn-default) {
          border-color: #d9d9d9;
        }

        :global(.ant-btn-default:hover) {
          color: #389e0d;
          border-color: #389e0d;
        }
      `}</style>
    </div>
  );
}
