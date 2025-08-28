"use client";

import { useState } from "react";
import { Button, Card, Typography, Space, Row, Col, Input } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
import manIcon from "@/assets/admin/man.png";
import Image from "next/image";

export default function RiderSetting() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  // ✅ FIX: Properly keep return inside function
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", padding: 24 }}>
      <div>
        {/* User Profile Section */}
        <Card
          style={{
            marginBottom: 32,
            borderRadius: 8,
            backgroundColor: "white",
          }}
          bodyStyle={{ padding: 24 }}
        >
          <Row gutter={16}>
            <Col>
              <Image width={150} height={150} alt="man" src={manIcon} />
            </Col>
            <Col flex={1}>
              <Title
                level={3}
                style={{ marginTop: 0, marginBottom: 16, color: "#1f2937" }}
              >
                Justin Emily Carter
              </Title>

              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%", marginBottom: 16 }}
              >
                <div>
                  <Space>
                    <PhoneOutlined style={{ color: "#6b7280" }} />
                    <Text type="secondary">Contact</Text>
                    <Text type="secondary">•</Text>
                    <Text>+1234567890</Text>
                  </Space>
                </div>

                <div>
                  <Space>
                    <MailOutlined style={{ color: "#6b7280" }} />
                    <Text type="secondary">Email</Text>
                    <Text type="secondary">•</Text>
                    <Text>justinemilyc@email.com</Text>
                  </Space>
                </div>

                <div>
                  <Space>
                    <EnvironmentOutlined style={{ color: "#6b7280" }} />
                    <Text type="secondary">Address</Text>
                    <Text type="secondary">•</Text>
                    <Text>123 Main Street</Text>
                  </Space>
                </div>
              </Space>

              <Space direction="vertical" style={{ width: "100%" }}>
                <Text type="secondary">Change Password</Text>
                <Input.Password
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  style={{ marginBottom: 8 }}
                />
                <Input.Password
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: 8 }}
                />
                <Input.Password
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ marginBottom: 16 }}
                />
                <Button
                  type="primary"
                  style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
                >
                  Update Password
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}
