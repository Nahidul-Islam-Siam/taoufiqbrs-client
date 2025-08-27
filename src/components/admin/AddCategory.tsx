"use client";

import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Table,
  Dropdown,
  Menu,
  Pagination,
  Upload,
  message,
  Typography,
  Space,
  Row,
} from "antd";
import {
  UploadOutlined,
  MoreOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";

const { Title, Text } = Typography;
const { Dragger } = Upload;

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetable" },
  ];

  const totalPages = 5;

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".jpeg,.jpg,.png,.mp4",
    beforeUpload: (file) => {
      const isLt25M = file.size / 1024 / 1024 < 25;
      if (!isLt25M) {
        message.error("File must be smaller than 25MB!");
        return Upload.LIST_IGNORE;
      }
      return false;
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const menu = (
    <Menu>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete" danger>
        Delete
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Actions",
      key: "actions",
      align: "right" as const,
      render: () => (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-[24px]">
      <div className="space-y-8 max-w-5xl">
        {/* Header */}
        <div className="text-gray-500 text-sm">Order list</div>

        {/* Add Category Section */}
        <div className="space-y-6">
          <Title level={2} className="text-green-600" style={{ margin: 0 }}>
            Add Category
          </Title>

          <div className="space-y-4">
            {/* Category Name Input */}
            <div className="space-y-2">
              <Text strong className="text-sm text-gray-700">
                Category Name
              </Text>
              <Input
                placeholder="Me"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full p-2 hover:!border-green-500 focus:!border-green-500"
              />
            </div>

            {/* Category Image Upload */}
            <div className="space-y-2 ">
              <Text strong className="text-sm text-gray-700">
                Category Image
              </Text>
              <Dragger
                {...uploadProps}
                className="border-2 border-dashed border-gray-300 bg-white"
              >
                <div className="flex flex-col items-center justify-center py-12 px-6">
                  <UploadOutlined className="text-4xl text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium mb-2">
                    Drop file or browse
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Format: jpeg, png, mp4 & Max file size: 25 MB
                  </p>
                  <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                    Browse Files
                  </Button>
                </div>
              </Dragger>
            </div>

            {/* Add Category Button */}
            <div className="flex justify-end">
              <Button className="bg-green-600 hover:!bg-green-700 hover:!text-white text-white px-6">
                Add Category
              </Button>
            </div>
          </div>
        </div>

        {/* All Category Section */}
        <div className="space-y-6">
          <Title level={2} className="text-green-600" style={{ margin: 0 }}>
            All Category
          </Title>

          <Card className="bg-white p-0">
            <Table
              columns={columns}
              dataSource={categories}
              pagination={false}
              rowKey="id"
              className="custom-table"
            />
          </Card>

          {/* Pagination */}
          <Row justify="center">
            <Space>
              <Button
                icon={<LeftOutlined />}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              />
              <Pagination
                current={currentPage}
                total={totalPages * 10}
                pageSize={1}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
                itemRender={(page, type) => {
                  if (type === "page") {
                    return (
                      <Button
                        type={currentPage === page ? "primary" : "default"}
                        className={
                          currentPage === page
                            ? "bg-green-600 text-white hover:!bg-green-700"
                            : ""
                        }
                      >
                        {page}
                      </Button>
                    );
                  }
                  return null;
                }}
              />
              <Button
                icon={<RightOutlined />}
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
              />
            </Space>
          </Row>
        </div>
      </div>

      <style jsx>{`
        :global(.custom-table .ant-table-thead > tr > th) {
          background-color: #111827 !important;
          color: white !important;
          font-weight: 500;
        }

        :global(.custom-table .ant-table-tbody > tr > td) {
          border-bottom: 1px solid #e5e7eb;
          padding: 16px;
        }

        :global(.ant-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        :global(.ant-upload.ant-upload-drag) {
          border: 2px dashed #d1d5db;
          background: white;
        }

        :global(.ant-upload.ant-upload-drag .ant-upload) {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
