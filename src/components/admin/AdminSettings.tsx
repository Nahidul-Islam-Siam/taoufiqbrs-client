"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Space,
  Row,
  Col,
  Input,
  Modal,
  Form,
  Avatar,
  message,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  PlusCircleOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
import manIcon from "@/assets/admin/man.png";
import manIcon2 from "@/assets/admin/man2.png";
import Image from "next/image";
import Link from "next/link";

export default function AdminSettings() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();
  const [selectedUser, setSelectedUser] = useState<{
    name: string;
    email: string;
    phone?: string;
    address?: string;
    introduction?: string;
  } | null>(null);

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      // Save logic here
      console.log("Form values:", values);
      setIsModalOpen(false);
    });
  };

  // Fixed handleRemove function
  const handleRemove = (email: string) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        console.log("Removing user with email:", email);
        message.success("Deleted successfully!");
      },
    });
  };

  // UserCard component
  const UserCard = ({ name, email }: { name: string; email: string }) => (
    <Card
      style={{ marginBottom: 12, borderRadius: 8 }}
      bodyStyle={{ padding: 20 }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Space>
            <div className="relative">
              <Avatar
                size={80}
                icon={<UserOutlined />}
                src={manIcon2.src}
                className="rounded-full"
              />
              <EditOutlined
                onClick={() => {
                  setSelectedUser({
                    name,
                    email,
                    phone: "+123456789",
                    address: "123 Main St",
                    introduction: "User introduction",
                  });
                  setIsModalOpen(true);
                }}
                className="absolute bottom-1 right-1 cursor-pointer text-gray-600 hover:text-gray-800 bg-white p-1 rounded-full"
              />
            </div>
            <div>
              <div style={{ fontWeight: 500, color: "#1f2937" }}>{name}</div>
              <Text type="secondary" style={{ fontSize: 14 }}>
                {email}
              </Text>
            </div>
          </Space>
        </Col>
        <Col>
          <Space>
            <Button
              onClick={() => handleRemove(email)}
              size="small"
              style={{ color: "#6b7280", borderColor: "#d1d5db" }}
            >
              Remove
            </Button>
            <Button
              size="small"
              style={{ color: "#6b7280", borderColor: "#d1d5db" }}
              onClick={() => {
                setSelectedUser({
                  name,
                  email,
                  phone: "+123456789",
                  address: "123 Main St",
                  introduction: "User introduction",
                });
                setIsModalOpen(true);
              }}
            >
              Details
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  );

  // Role Section component
  const RoleSection = ({ title }: { title: string }) => {
  // create a slug version of the title
  const href = `/dashboard/assign-${title.toLowerCase()}`;

  return (
    <div style={{ marginBottom: 24 }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Title level={4} style={{ margin: 0, color: "#1f2937" }}>
            {title}
          </Title>
        </Col>
        <Col>
          <Link href={href}>
            <Button
              type="primary"
              size="small"
              style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
              icon={<PlusCircleOutlined />}
            >
              Assign {title}
            </Button>
          </Link>
        </Col>
      </Row>

      <Space direction="vertical" style={{ width: "100%" }}>
        <UserCard name="Harry Jr." email="harryjr@email.com" />
        <UserCard name="Jane Smith" email="jane@email.com" />
      </Space>
    </div>
  );
};

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

        {/* Role Sections */}
        <div>
          <RoleSection title="Administrator" />
          <RoleSection title="Accountant" />
          <RoleSection title="Rider" />
          <RoleSection title="Preparer" />
        </div>
      </div>

      {/* User Details Modal */}
      <Modal
        title={
          <Title
            level={3}
            style={{ margin: 0, fontWeight: 600, textAlign: "center" }}
          >
            Edit Profile
          </Title>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            size="large"
            style={{
              color: "#16a34a",
              borderColor: "#16a34a",
              fontWeight: 500,
            }}
          >
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            size="large"
            style={{
              backgroundColor: "#16a34a",
              borderColor: "#16a34a",
              fontWeight: 500,
            }}
            onClick={handleSave}
          >
            Change
          </Button>,
        ]}
        bodyStyle={{ padding: "24px" }}
        width={500}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            name: selectedUser?.name || "",
            email: selectedUser?.email || "",
            introduction: selectedUser?.introduction || "",
            contact: selectedUser?.phone || "",
            address: selectedUser?.address || "",
          }}
        >
          <Form.Item
            name="name"
            label={<Text strong>Name</Text>}
            style={{ marginBottom: 16 }}
          >
            <Input
              placeholder="Enter Name"
              size="large"
              style={{ borderRadius: 6 }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={<Text strong>Email</Text>}
            style={{ marginBottom: 16 }}
          >
            <Input
              placeholder="Enter Email"
              size="large"
              style={{ borderRadius: 6 }}
            />
          </Form.Item>

          <Form.Item
            name="introduction"
            label={<Text strong>Introduction</Text>}
            style={{ marginBottom: 16 }}
          >
            <Input.TextArea
              placeholder="Enter Introduction"
              rows={3}
              style={{ borderRadius: 6 }}
            />
          </Form.Item>

          <Form.Item
            name="contact"
            label={<Text strong>Contact</Text>}
            style={{ marginBottom: 16 }}
          >
            <Input
              placeholder="Enter Contact"
              size="large"
              style={{ borderRadius: 6 }}
            />
          </Form.Item>

          <Form.Item
            name="address"
            label={<Text strong>Address</Text>}
            style={{ marginBottom: 0 }}
          >
            <Input
              placeholder="Enter Address"
              size="large"
              style={{ borderRadius: 6 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
