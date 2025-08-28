"use client";

import img from "@/assets/admin/user-details-man-icon.png";
import { Card, Row, Col, Typography, Space } from "antd";
import {
  IdcardOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { UserOrderList } from "../admin/UserOrderList";

const { Title, Text } = Typography;

export default function AccountantUserDetails() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: "24px",
      }}
    >
      {/* Breadcrumb */}
      <nav style={{ marginBottom: "24px" }}>
        <Text type="secondary">User Details</Text>
      </nav>

      {/* Page Title */}
      <Title level={2} style={{ marginBottom: "32px" }}>
        User Details
      </Title>

      {/* User Details Card */}
      <Card
        style={{
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        }}
        bodyStyle={{ padding: "32px" }}
      >
        <Row gutter={32}>
          {/* Profile Photo and Name */}
          <Col
            xs={24}
            sm={8}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              width={150}
              height={150}
              alt="man"
              src={img}
              style={{ marginBottom: "16px" }}
            />

            <Title level={4} style={{ margin: 0 }}>
              Monica Lucas
            </Title>
          </Col>

          {/* User Information Grid */}
          <Col xs={24} sm={16}>
            <Row gutter={[32, 24]}>
              <Col xs={24} md={12}>
                <Space direction="vertical" size="small">
                  <Space>
                    <IdcardOutlined style={{ color: "#1890ff" }} />
                    <Text strong>SIRET Number</Text>
                  </Space>
                  <Text>154846541654</Text>
                </Space>
              </Col>

              <Col xs={24} md={12}>
                <Space direction="vertical" size="small">
                  <Space>
                    <PhoneOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Phone</Text>
                  </Space>
                  <Text>01547475</Text>
                </Space>
              </Col>

              <Col xs={24} md={12}>
                <Space direction="vertical" size="small">
                  <Space>
                    <MailOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Email</Text>
                  </Space>
                  <Text>moa@rentaly.com</Text>
                </Space>
              </Col>

              <Col xs={24} md={12}>
                <Space direction="vertical" size="small">
                  <Space>
                    <EnvironmentOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Address</Text>
                  </Space>
                  <Text>
                    Lieu Dit Les Ris, Lieu-dit,
                    <br />
                    03190 Vallon-en-Sully, France
                  </Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <UserOrderList/>
    </div>
  );
}
