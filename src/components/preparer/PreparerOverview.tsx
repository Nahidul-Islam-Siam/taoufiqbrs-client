"use client";
import { Card, Row, Col, Typography } from "antd";
import {
  TruckOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import PreparerOrderList from "./PreparerOrderList";

const { Title, Text } = Typography;


export default function PreparerOverview() {
  

  return (
    <div
      style={{ backgroundColor: "#fff",  }}
    >
      <div>
        {/* Header */}
        <Title level={4} style={{ color: "#4b5563", marginBottom: "32px" }}>
          Dashboard Overview
        </Title>

        {/* Metrics Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
          {/* Total Delivery */}
          <Col xs={24} md={8}>
            <Card
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow:
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "8px",
                  }}
                >
                  <TruckOutlined
                    style={{ fontSize: "20px", color: "#4b5563" }}
                  />
                </div>
                <Text style={{ color: "#4b5563", fontSize: "14px" }}>
                  Total Prepare
                </Text>
              </div>
              <Title level={2} style={{ color: "#16a34a", margin: 0 }}>
                14
              </Title>
            </Card>
          </Col>

          {/* Cancel Delivery */}
          <Col xs={24} md={8}>
            <Card
              style={{
                backgroundColor: "white",
                border: "none",
                boxShadow:
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "#fee2e2",
                    borderRadius: "8px",
                  }}
                >
                  <CloseCircleOutlined
                    style={{ fontSize: "20px", color: "#ef4444" }}
                  />
                </div>
                <Text style={{ color: "#4b5563", fontSize: "14px" }}>
                  Cancel Delivery
                </Text>
              </div>
              <Title level={2} style={{ color: "#16a34a", margin: 0 }}>
                02
              </Title>
            </Card>
          </Col>
        </Row>

        <PreparerOrderList/>
      </div>
    </div>
  );
}