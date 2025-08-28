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
} from "antd";
import {
  SearchOutlined,
  MoreOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";
import manIcon from "@/assets/admin/man-icon.png";
import Image from "next/image";
import Link from "next/link";

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
  },
  {
    id: "12342",
    userProfile: "John Doe",
    userImage: manIcon,
    userEmail: "john@email.com",
    shopName: "ABC Store",
    SIRETNumber: 7154459,
    starred: false,
  },
  {
    id: "12343",
    userProfile: "Jane Smith",
    userImage: manIcon,
    userEmail: "jane@email.com",
    shopName: "Best Shop",
    SIRETNumber: 7154460,
    starred: true,
  },
  {
    id: "12344",
    userProfile: "Robert Johnson",
    userImage: manIcon,
    userEmail: "robert@email.com",
    shopName: "Quality Goods",
    SIRETNumber: 7154461,
    starred: false,
  },
  {
    id: "12346",
    userProfile: "Sarah Williams",
    userImage: manIcon,
    userEmail: "sarah@email.com",
    shopName: "Fashion Hub",
    SIRETNumber: 7154462,
    starred: true,
  },
  {
    id: "12347",
    userProfile: "Michael Brown",
    userImage: manIcon,
    userEmail: "michael@email.com",
    shopName: "Tech World",
    SIRETNumber: 7154463,
    starred: false,
  },
];

export default function AccountantUsers() {
  const [searchTerm, setSearchTerm] = useState("");

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
            label: <span>Remove</span>,
          },
          {
            key: "2",
            label: (
              <Link href={`/accountant/user-details/${record?.id}`}>Details</Link>
            ),
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
            <Text type="secondary">User</Text>
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
            All User
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
