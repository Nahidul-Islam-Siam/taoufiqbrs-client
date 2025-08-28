"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Timeline,
  Tag,
  Row,
  Col,
  Breadcrumb,
  Modal,
  Input,
  Form,
  message,
  Steps,
} from "antd";
import {
  HomeOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

export default function RiderActivity() {
  const [currentStep, setCurrentStep] = useState(2);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [, setDeliveryStatus] = useState("current");
  const [form] = Form.useForm();

  const timelineItems = [
    {
      id: 1,
      title: "Order Received",
      date: "May 27, 2025",
      description: "Your shipment has been registered in our system.",
      status: "completed",
    },
    {
      id: 2,
      title: "Dispatched",
      date: "April 20, 2025",
      description:
        "Your Product has been prepared and successfully dispatched from our Farm.",
      status: "completed",
    },
    {
      id: 3,
      title: "Given to Delivery man",
      date: "Jun 07, 2025",
      description:
        "Your Product is currently on its way to the delivery destination.",
      status: currentStep >= 2 ? "completed" : "pending",
    },
    {
      id: 4,
      title: "Delivery man on the way",
      date: "July 27, 2025",
      description: "Our Delivery Partner is En Route to Your Location.",
      status:
        currentStep >= 3
          ? "completed"
          : currentStep === 2
          ? "current"
          : "pending",
    },
    {
      id: 5,
      title: "Delivered",
      date: "July 27, 2025",
      description:
        "Your Product has been successfully delivered to the specified location.",
      status: currentStep >= 4 ? "completed" : "pending",
    },
  ];

  const handleUpdate = () => {
    setIsUpdateModalVisible(true);
  };

  const handleUpdateConfirm = () => {
    if (currentStep === 2) {
      // Moving from "Given to Delivery man" to "Delivery man on the way"
      setCurrentStep(3);
      setDeliveryStatus("current");
      message.success("Status updated to: Delivery man on the way");
    } else if (currentStep === 3) {
      // Moving to "Delivered" - show OTP modal
      setIsOtpModalVisible(true);
    }
    setIsUpdateModalVisible(false);
  };

  const handleOtpSubmit = () => {
    // Simulate OTP verification (in real app, this would verify against backend)
    if (otp === "1234") {
      setCurrentStep(4);
      setDeliveryStatus("completed");
      setIsOtpModalVisible(false);
      message.success("Delivery completed successfully!");
    } else {
      message.error("Invalid OTP. Please try again.");
    }
  };

  const getTimelineDot = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "16px" }} />
        );
      case "current":
        return (
          <ClockCircleOutlined style={{ color: "#1890ff", fontSize: "16px" }} />
        );
      case "pending":
        return (
          <ClockCircleOutlined style={{ color: "#d9d9d9", fontSize: "16px" }} />
        );
      default:
        return (
          <ClockCircleOutlined style={{ color: "#d9d9d9", fontSize: "16px" }} />
        );
    }
  };

  const getTimelineColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "current":
        return "blue";
      case "pending":
        return "gray";
      default:
        return "gray";
    }
  };

  const getNextAction = () => {
    if (currentStep === 2) return "Confirm I'm on the way";
    if (currentStep === 3) return "Mark as Delivered";
    return "Update Status";
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", padding: 24 }}>
      <div>
        {/* Breadcrumb */}
        <Breadcrumb style={{ marginBottom: 24 }}>
          <Breadcrumb.Item>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span style={{ color: "#8c8c8c", fontSize: "14px" }}>
              Order Activity
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Main Heading */}
        <Title
          level={2}
          style={{ color: "#16a34a", marginBottom: 32, textAlign: "start" }}
        >
          Order Activity
        </Title>

        {/* Progress Steps */}
        <Card style={{ marginBottom: 24 }}>
          <Steps current={currentStep} style={{ marginBottom: 20 }}>
            <Step title="Order Received" icon={<UserOutlined />} />
            <Step title="Dispatched" icon={<CheckCircleOutlined />} />
            <Step title="On the Way" icon={<ClockCircleOutlined />} />
            <Step title="Delivered" icon={<SmileOutlined />} />
          </Steps>

          <Text type="secondary">
            Current Status:{" "}
            {timelineItems[currentStep + 1]?.title || "Completed"}
          </Text>
        </Card>

        {/* Timeline Section */}
        <Card
          title={
            <Title level={4} style={{ margin: 0 }}>
              Timeline
            </Title>
          }
          style={{ marginBottom: 24 }}
          headStyle={{
            borderBottom: "1px solid #f0f0f0",
            padding: "16px 24px",
          }}
          bodyStyle={{ padding: "24px" }}
        >
          <Timeline
            mode="left"
            items={timelineItems.map((item) => ({
              dot: getTimelineDot(item.status),
              color: getTimelineColor(item.status),
              children: (
                <div style={{ marginLeft: 16 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <Text strong style={{ fontSize: "16px", marginRight: 8 }}>
                      {item.title}
                    </Text>
                    <Tag color={getTimelineColor(item.status)}>
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </Tag>
                  </div>
                  <Text
                    type="secondary"
                    style={{
                      display: "block",
                      marginBottom: 8,
                      fontSize: "14px",
                    }}
                  >
                    {item.date}
                  </Text>
                  <Paragraph
                    style={{
                      margin: 0,
                      color: "#8c8c8c",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Paragraph>
                </div>
              ),
            }))}
          />
        </Card>

        {/* Update Button */}
        <Row justify="center">
          <Col>
            <Button
              type="primary"
              size="large"
              onClick={handleUpdate}
              disabled={currentStep >= 4}
              style={{
                backgroundColor: "#16a34a",
                borderColor: "#16a34a",
                padding: "0 32px",
                height: 40,
              }}
            >
              {getNextAction()}
            </Button>
          </Col>
        </Row>

        {/* Update Confirmation Modal */}
        <Modal
          title="Confirm Status Update"
          open={isUpdateModalVisible}
          onCancel={() => setIsUpdateModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => setIsUpdateModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="confirm"
              type="primary"
              onClick={handleUpdateConfirm}
              style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
            >
              Confirm
            </Button>,
          ]}
        >
          <p>
            Are you sure you want to update the status to{" "}
            <strong>
              {currentStep === 2 ? "Delivery man on the way" : "Delivered"}
            </strong>
            ?
          </p>
          {currentStep === 3 && (
            <p style={{ color: "#ff4d4f", marginTop: 8 }}>
              This action will require OTP verification from the customer.
            </p>
          )}
        </Modal>

        {/* OTP Verification Modal */}
        <Modal
          title="Delivery Verification"
          open={isOtpModalVisible}
          onCancel={() => setIsOtpModalVisible(false)}
          footer={[
            <Button key="cancel" onClick={() => setIsOtpModalVisible(false)}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={handleOtpSubmit}
              style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}
            >
              Verify OTP
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="Enter OTP received from customer"
              name="otp"
              rules={[{ required: true, message: "Please enter the OTP" }]}
            >
              <Input.OTP
                length={4}
                onChange={setOtp}
                style={{ justifyContent: "center" }}
              />
            </Form.Item>
          </Form>
          <Text type="secondary">
            Please ask the customer for the 4-digit OTP to complete the
            delivery.
          </Text>
        </Modal>
      </div>
    </div>
  );
}
