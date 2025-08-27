/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Input, Form, Card, Typography } from "antd";

const { Title, Text } = Typography;

export default function AssignAccountant() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // Handle form submission here
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#Fff",
        padding: 32,
      }}
    >
      <div
        style={{
          maxWidth: 850,
          margin: "0 auto",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: 32,
            color: "#1f2937",
            fontWeight: 600,
          }}
        >
          Assign Accountant
        </Title>

        <Card
          style={{
            borderRadius: 8,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
          bodyStyle={{ padding: 24 }}
        >
          <Text
            strong
            style={{
              display: "block",
              fontSize: 18,
              color: "#1f2937",
              marginBottom: 24,
            }}
          >
            Accountant Information
          </Text>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label={<Text strong>Name*</Text>}
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <Input placeholder="Enter your first name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label={<Text strong>Email*</Text>}
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input type="email" placeholder="Enter your email" size="large" />
            </Form.Item>

            <Form.Item name="phone" label={<Text strong>Phone number</Text>}>
              <Input type="tel" placeholder="+0" size="large" />
            </Form.Item>

            <Form.Item
              name="address"
              label={<Text strong>Address*</Text>}
              rules={[{ required: true, message: "Please enter address" }]}
            >
              <Input placeholder="Enter your address" size="large" />
            </Form.Item>

            <Form.Item name="password" label={<Text strong>Password</Text>}>
              <Input.Password placeholder="Enter your password" size="large" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label={<Text strong>Confirm Password</Text>}
              dependencies={["password"]}
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm your password"
                size="large"
              />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                style={{
                  backgroundColor: "#16a34a",
                  borderColor: "#16a34a",
                  height: 48,
                  fontWeight: 500,
                }}
              >
                Assign
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
