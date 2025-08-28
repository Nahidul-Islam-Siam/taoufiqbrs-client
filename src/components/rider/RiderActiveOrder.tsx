"use client";
import img from "@/assets/admin/fruit.png";
import { Button, Card, Grid, Typography } from "antd";
import Image from "next/image";

const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

const RiderActiveOrder = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  return (
    <div>
      <Title level={4} style={{ color: "#1f2937", marginBottom: "16px" }} className="text-green-500">
        Active Order
      </Title>

      <Card
        style={{
          backgroundColor: "white",
          border: "none",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          padding: 0,
        }}
      >
        {/* Order 1 */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            padding: "16px",
            borderBottom: "1px solid #f3f4f6",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={img}
                fill
                alt="Vegetables"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Title level={5} style={{ margin: 0, color: "#1f2937" }}>
                Vegetable
              </Title>
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  display: isMobile ? "none" : "block",
                }}
              >
                Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)
              </Paragraph>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "12px" : "24px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "Date: " : "Delivery Date"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                12/25/2025
              </Paragraph>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "Time: " : "Delivery Time"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                07:00 AM
              </Paragraph>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "ID: " : "Order ID"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                #Sgn651kg
              </Paragraph>
            </div>

            <Button
              type="primary"
              style={{
                backgroundColor: "#16a34a",
                borderColor: "#16a34a",
                padding: "0 16px",
                height: "36px",
                fontSize: "14px",
                marginTop: isMobile ? "8px" : 0,
                alignSelf: isMobile ? "stretch" : "center",
              }}
            >
              {isMobile ? "Activity" : "Order Activity"}
            </Button>
          </div>
        </div>

        {/* Order 2 */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            padding: "16px",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={img}
                fill
                alt="Vegetables"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <Title level={5} style={{ margin: 0, color: "#1f2937" }}>
                Vegetable
              </Title>
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  display: isMobile ? "none" : "block",
                }}
              >
                Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)
              </Paragraph>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "12px" : "24px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "Date: " : "Delivery Date"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                12/25/2025
              </Paragraph>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "Time: " : "Delivery Time"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                10:00 AM
              </Paragraph>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: isMobile ? "center" : "center",
                gap: isMobile ? "8px" : "4px",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              <Paragraph
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: 0,
                  fontWeight: isMobile ? 500 : 400,
                }}
              >
                {isMobile ? "ID: " : "Order ID"}
              </Paragraph>
              <Paragraph
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  margin: 0,
                  color: isMobile ? "#1f2937" : "inherit",
                }}
              >
                #Sgn651kg
              </Paragraph>
            </div>

            <Button
              type="primary"
              style={{
                backgroundColor: "#16a34a",
                borderColor: "#16a34a",
                padding: "0 16px",
                height: "36px",
                fontSize: "14px",
                marginTop: isMobile ? "8px" : 0,
                alignSelf: isMobile ? "stretch" : "center",
              }}
            >
              {isMobile ? "Activity" : "Order Activity"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RiderActiveOrder;
