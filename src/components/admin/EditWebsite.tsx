"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Card,
  Typography,
  Upload,
  Space,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function EditWebsite() {
  const [heroTagline, setHeroTagline] = useState("");
  const [heroHeading, setHeroHeading] = useState("");
  const [heroSubText, setHeroSubText] = useState("");
  const [categoryHeader, setCategoryHeader] = useState("");
  const [relatedHeader, setRelatedHeader] = useState("");
  const [relatedSubText, setRelatedSubText] = useState("");
  const [activeMainTab, setActiveMainTab] = useState("Home Page");

  const mainTabs = [
    { key: "Home Page", label: "Home Page" },
    { key: "Shop", label: "Shop" },
    { key: "Packages", label: "Packages" },
    { key: "Product Details", label: "Product Details" },
    { key: "Package Details", label: "Package Details" },
    { key: "Add to Cart", label: "Add to Cart" },
  ];

//   const secondaryTabs = [
//     "Order Confirmation",
//     "About Us",
//     "Contact us",
//     "Terms & Conditions",
//     "Privacy Policy",
//   ];
//   const utilityTabs = ["Navigation Bar", "Footer"];

  // Upload props
  const uploadProps = {
    beforeUpload: () => false,
    showUploadList: false,
  };

  // 🔑 Tab content renderer
  const renderTabContent = () => {
    switch (activeMainTab) {
      case "Home Page":
        return (
          <>
            {/* Hero Section */}
            <Card style={{ marginBottom: 24, borderRadius: 8 }} bodyStyle={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <Title level={4} style={{ margin: 0, fontWeight: 600 }}>Hero Section</Title>
                <Button type="primary" style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}>
                  Save Change
                </Button>
              </div>

              <Row gutter={16} style={{ marginBottom: 16 }}>
                <Col xs={24} md={12}>
                  <Text strong style={{ display: "block", marginBottom: 8 }}>Hero Tagline</Text>
                  <Input
                    placeholder="Enter tagline"
                    value={heroTagline}
                    onChange={(e) => setHeroTagline(e.target.value)}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <Text strong style={{ display: "block", marginBottom: 8 }}>Hero Heading</Text>
                  <Input
                    placeholder="Enter heading"
                    value={heroHeading}
                    onChange={(e) => setHeroHeading(e.target.value)}
                  />
                </Col>
              </Row>

              <div style={{ marginBottom: 24 }}>
                <Text strong style={{ display: "block", marginBottom: 8 }}>Hero SubText</Text>
                <Input
                  placeholder="Enter subtext"
                  value={heroSubText}
                  onChange={(e) => setHeroSubText(e.target.value)}
                />
              </div>

              <div>
                <Text strong style={{ display: "block", marginBottom: 8 }}>Background</Text>
                <Upload.Dragger
                  {...uploadProps}
                  style={{
                    padding: 32,
                    backgroundColor: "white",
                    border: "2px dashed #d1d5db",
                    borderRadius: 8,
                  }}
                >
                  <UploadOutlined style={{ fontSize: 24, color: "#9ca3af", marginBottom: 8 }} />
                  <Text style={{ display: "block", color: "#4b5563", marginBottom: 4 }}>
                    Drop file or browse
                  </Text>
                  <Text type="secondary" style={{ fontSize: 12, display: "block", marginBottom: 12 }}>
                    Format: jpeg, png, mp4 & Max file size: 25 MB
                  </Text>
                  <Button icon={<UploadOutlined />} style={{ marginTop: 12, color: "#4b5563" }}>
                    Browse
                  </Button>
                </Upload.Dragger>
              </div>
            </Card>

            {/* Package Section */}
            <Card style={{ marginBottom: 24, borderRadius: 8 }} bodyStyle={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <Title level={4} style={{ margin: 0, fontWeight: 600 }}>Package Information Section</Title>
                <Button type="primary" style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}>
                  Save Change
                </Button>
              </div>

              <Input
                placeholder="Change header"
                value={categoryHeader}
                onChange={(e) => setCategoryHeader(e.target.value)}
              />
            </Card>

            {/* Related Products Section */}
            <Card style={{ borderRadius: 8 }} bodyStyle={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <Title level={4} style={{ margin: 0, fontWeight: 600 }}>Related Products Section</Title>
                <Button type="primary" style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}>
                  Save Change
                </Button>
              </div>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Input
                    placeholder="Change header"
                    value={relatedHeader}
                    onChange={(e) => setRelatedHeader(e.target.value)}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <Input
                    placeholder="Enter subtext"
                    value={relatedSubText}
                    onChange={(e) => setRelatedSubText(e.target.value)}
                  />
                </Col>
              </Row>
            </Card>
          </>
        );

      case "Shop":
        return (
          <Card bodyStyle={{ padding: 24 }}>
            <Title level={4}>Shop Settings</Title>
            <Input placeholder="Shop banner heading..." />
          </Card>
        );

      case "Packages":
        return (
          <Card bodyStyle={{ padding: 24 }}>
            <Title level={4}>Packages Settings</Title>
            <Input placeholder="Package info..." />
          </Card>
        );

      default:
        return <Text type="secondary">No content yet for {activeMainTab}</Text>;
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <Text type="secondary" style={{ display: "block", marginBottom: 8, fontSize: 14 }}>
          Edit Website
        </Text>
        <Title level={2} style={{ margin: 0, color: "#1f2937", fontWeight: 600 }}>
          Edit Website
        </Title>
      </div>

      {/* Main Tabs */}
      <Space wrap size="small" style={{ marginBottom: 24 }}>
        {mainTabs.map((tab) => (
          <Button
            key={tab.key}
            type={activeMainTab === tab.key ? "primary" : "default"}
            style={
              activeMainTab === tab.key
                ? { backgroundColor: "#16a34a", borderColor: "#16a34a" }
                : {}
            }
            onClick={() => setActiveMainTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </Space>

      {/* 🔑 Render active tab content */}
      {renderTabContent()}
    </div>
  );
}
