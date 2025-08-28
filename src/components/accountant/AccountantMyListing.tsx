"use client";

import { useState } from "react";
import {
  Table,
  Button,
  Input,
  Tag,
  Dropdown,
  Space,
  Card,
  Typography,
  Pagination,
  Breadcrumb,
} from "antd";
import {
  SearchOutlined,
  StarFilled,
  StarOutlined,
  MoreOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";

const { Title, Text } = Typography;

// Mock data for the listings
const listings = [
  {
    id: "12345",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: true,
  },
  {
    id: "12346",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: false,
  },
  {
    id: "12347",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: true,
  },
  {
    id: "12348",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: false,
  },
  {
    id: "12349",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "stock out",
    starred: false,
  },
  {
    id: "12350",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: false,
  },
  {
    id: "12351",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "stock out",
    starred: false,
  },
  {
    id: "12352",
    title: "Vegetable",
    weight: "5kg",
    price: "$123",
    inStock: 12,
    revenue: "$1200",
    status: "in stock",
    starred: false,
  },
];

export default function AccountantMyListing() {
  const [searchTerm, setSearchTerm] = useState("");

  const items: MenuProps["items"] = [
    { key: "1", label: "Edit" },
    { key: "2", label: "Remove" },
    { key: "3", label: "Details" },
    { key: "4", label: "Add to Top" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: TableColumnsType<any> = [
    {
      title: "Listing ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <Space>
          {record.starred ? (
            <StarFilled style={{ color: "#faad14" }} />
          ) : (
            <StarOutlined style={{ color: "#d9d9d9" }} />
          )}
          {text}
        </Space>
      ),
    },
    {
      title: "Listing Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={status === "in stock" ? "green" : "red"}
          style={{
            backgroundColor: status === "in stock" ? "#f6ffed" : "#fff2f0",
            color: status === "in stock" ? "#52c41a" : "#ff4d4f",
            borderColor: status === "in stock" ? "#b7eb8f" : "#ffccc7",
          }}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
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
            <Text type="secondary">My Listing</Text>
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
            My Listing
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
