"use client";

import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Select,
  Typography,
  Upload,
  Row,
  Col,
  Divider,
  Space,
  Breadcrumb,
} from "antd";
import { UploadOutlined, CloseOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function AddPackage() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleUpload: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(0, 3)); // Limit to 3 images
  };

  const handleRemove = (file: UploadFile) => {
    const newFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(newFileList);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Text type="secondary">Add Package</Text>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Title level={4} style={{ margin: "8px 0 0 0", color: "#389e0d" }}>
          Add Package
        </Title>
      </div>

      {/* Form */}
      <div>
        <Card
          style={{
            borderRadius: "8px",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
            border: "1px solid #f0f0f0",
            backgroundColor: "white",
          }}
          bodyStyle={{ padding: "24px" }}
        >
          <Row gutter={24}>
            {/* Left Column */}
            <Col xs={24} md={12}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                {/* Select Category */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Select Category*
                  </Text>
                  <Select
                    placeholder="Select category"
                    style={{ width: "100%" }}
                    className="custom-select "
                  >
                    <Option value="electronics">Electronics</Option>
                    <Option value="clothing">Clothing</Option>
                    <Option value="home">Home & Garden</Option>
                  </Select>
                </div>

                {/* Title */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Title*
                  </Text>
                  <Input placeholder="Enter title" className="custom-input" />
                </div>

                {/* Weight */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Weight
                  </Text>
                  <Input placeholder="Enter weight" className="custom-input" />
                </div>

                {/* Arrival Badge */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Arrival Badge
                  </Text>
                  <Select
                    placeholder="Select arrival badge"
                    style={{ width: "100%" }}
                    className="custom-select"
                  >
                    <Option value="new">New Arrival</Option>
                    <Option value="featured">Featured</Option>
                    <Option value="bestseller">Best Seller</Option>
                  </Select>
                </div>
              </Space>
            </Col>

            {/* Right Column */}
            <Col xs={24} md={12}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                {/* Select Type */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Select Type*
                  </Text>
                  <Select
                    placeholder="Select Type"
                    style={{ width: "100%" }}
                    className="custom-select"
                  >
                    <Option value="physical">Physical Product</Option>
                    <Option value="digital">Digital Product</Option>
                    <Option value="service">Service</Option>
                  </Select>
                </div>

                {/* Origin */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Origin*
                  </Text>
                  <Input
                    placeholder="Enter country name"
                    className="custom-input"
                  />
                </div>

                {/* Price */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Price
                  </Text>
                  <Input placeholder="Enter Price" className="custom-input" />
                </div>

                {/* Promo Badge */}
                <div>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Promo Badge
                  </Text>
                  <Select
                    placeholder="Select promo badge"
                    style={{ width: "100%" }}
                    className="custom-select"
                  >
                    <Option value="sale">Sale</Option>
                    <Option value="discount">Discount</Option>
                    <Option value="limited">Limited Time</Option>
                  </Select>
                </div>
              </Space>
            </Col>
          </Row>

          <Divider />

          {/* Description - Full Width */}
          <div>
            <Text strong style={{ display: "block", marginBottom: "8px" }}>
              Description
            </Text>
            <TextArea
              placeholder="Add description"
              style={{ minHeight: "100px", resize: "none" }}
              className="custom-input"
            />
          </div>

          {/* Product Image Upload */}
          <div style={{ marginTop: "24px" }}>
            <Text strong style={{ display: "block", marginBottom: "16px" }}>
              Product Image
            </Text>

            {/* Upload Area */}
            <Upload.Dragger
              multiple
              accept="image/*"
              fileList={fileList}
              onChange={handleUpload}
              onRemove={handleRemove}
              beforeUpload={() => false} // Prevent automatic upload
              style={{
                padding: "32px",
                border: "2px dashed #d9d9d9",
                borderRadius: "8px",
              }}
              className="custom-upload"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <UploadOutlined
                  style={{
                    fontSize: "32px",
                    color: "#bfbfbf",
                    marginBottom: "16px",
                  }}
                />
                <Text style={{ color: "#595959", marginBottom: "8px" }}>
                  Drop file or browse
                </Text>
                <Text type="secondary" style={{ marginBottom: "16px" }}>
                  Format: jpeg, png, jpg & Max file size: 25 MB
                </Text>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#389e0d",
                    borderColor: "#389e0d",
                  }}
                >
                  Browse Files
                </Button>
              </div>
            </Upload.Dragger>

            {/* Image Thumbnails */}
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      border: fileList[index]
                        ? "1px solid #d9d9d9"
                        : "2px dashed #d9d9d9",
                      borderRadius: "8px",
                      backgroundColor: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {fileList[index] ? (
                      <>
                        <Image
                          width={100}
                          height={100}
                          src={URL.createObjectURL(
                            fileList[index].originFileObj as Blob
                          )}
                          alt={`Upload ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Button
                          type="primary"
                          shape="circle"
                          size="small"
                          icon={<CloseOutlined />}
                          danger
                          style={{
                            position: "absolute",
                            top: "-8px",
                            right: "-8px",
                            minWidth: "20px",
                            width: "20px",
                            height: "20px",
                            fontSize: "10px",
                          }}
                          onClick={() => handleRemove(fileList[index])}
                        />
                      </>
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "6px",
                          border: "2px dashed #d9d9d9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CloseOutlined style={{ color: "#d9d9d9" }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publish Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "32px",
            }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#389e0d",
                borderColor: "#389e0d",
                padding: "0 32px",
                height: "40px",
              }}
            >
              Publish
            </Button>
          </div>
        </Card>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        :global(.custom-input) {
          padding: 8px !important;
          border-color: #d9d9d9 !important;
          border-radius: 6px !important;
        }

        :global(.custom-input:hover) {
          border-color: #389e0d !important;
        }

        :global(.custom-input:focus) {
          border-color: #389e0d !important;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
        }

        :global(.custom-select .ant-select-selector) {
          border-color: #d9d9d9 !important;
          border-radius: 6px !important;
          padding: 4px 11px !important;
        }

        :global(.custom-select .ant-select-selector:hover) {
          border-color: #389e0d !important;
        }

        :global(.custom-select .ant-select-selector:focus) {
          border-color: #389e0d !important;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
        }

        :global(.custom-upload:hover) {
          border-color: #389e0d !important;
        }
      `}</style>
    </div>
  );
}
