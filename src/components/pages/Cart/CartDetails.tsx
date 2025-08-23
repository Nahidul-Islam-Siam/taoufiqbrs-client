"use client";

import { useState } from "react";
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react";
import img1 from "@/assets/cart/1.png";
import img2 from "@/assets/cart/2.png";
import img3 from "@/assets/cart/3.png";
import {
  Button,
  Card,
  Modal,
  Input,
  Radio,
  Space,
  Typography,
  Row,
  Col,
  Divider,
  ConfigProvider,
} from "antd";
import Image from "next/image";
import { Calendar } from "antd";
import { useRouter } from "next/router";
const { TextArea } = Input;
const { Title, Text } = Typography;

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 2,
      image: img1,
    },
    {
      id: 2,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 1,
      image: img2,
    },
    {
      id: 3,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 1,
      image: img3,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("08:00am");
  const [selectedSlot, setSelectedSlot] = useState("01");
  const [note, setNote] = useState("");
  const router = useRouter()
  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * 70, 0);
  const tax = 7;
  const total = subtotal + tax;

  const handleConfirmOrder = () => {
    console.log("Order confirmed with:", {
      selectedTime,
      selectedSlot,
      note,
    });
    setIsModalOpen(false);
    router.push('/order-conformation')
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#22c55e",
        },
      }}
    >
      <div className=" bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button type="text" icon={<ChevronLeft className="h-5 w-5" />} />
            <Title level={3} style={{ margin: 0 }}>
              Shopping Continue
            </Title>
          </div>

          <Row gutter={32}>
            {/* Cart Items */}
            <Col xs={24} lg={16}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                {cartItems?.map((item) => (
                  <Card key={item.id}>
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          width={500}
                          height={300}
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Title level={4} style={{ margin: "0 0 4px 0" }}>
                          {item.name}
                        </Title>
                        <Text type="secondary" style={{ fontSize: "14px" }}>
                          {item.description}
                        </Text>
                      </div>

                      {/* Price */}
                      <Title level={4} style={{ margin: 0 }}>
                        ${item.price.toLocaleString()}
                      </Title>

                      {/* Quantity Controls */}
                      <Space>
                        <Button
                          size="small"
                          danger
                          icon={<Minus className="h-4 w-4" />}
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{ width: "32px", height: "32px" }}
                        />
                        <span className="w-8 text-center font-medium">
                          {item.quantity.toString().padStart(2, "0")}
                        </span>
                        <Button
                          size="small"
                          type="primary"
                          icon={<Plus className="h-4 w-4" />}
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "#22c55e",
                            borderColor: "#22c55e",
                          }}
                        />
                      </Space>

                      {/* Delete Button */}
                      <Button
                        type="text"
                        danger
                        icon={<Trash2 className="h-5 w-5" />}
                        onClick={() => removeItem(item.id)}
                      />
                    </div>
                  </Card>
                ))}
              </Space>
            </Col>

            {/* Order Summary */}
            <Col xs={24} lg={8}>
              <Card>
                <Title level={3} style={{ marginBottom: "24px" }}>
                  Order Summary
                </Title>

                {/* Summary Header */}
                <Row gutter={16} style={{ marginBottom: "16px" }}>
                  <Col span={12}>
                    <Text strong type="secondary">
                      Name
                    </Text>
                  </Col>
                  <Col span={6} style={{ textAlign: "center" }}>
                    <Text strong type="secondary">
                      Quantity
                    </Text>
                  </Col>
                  <Col span={6} style={{ textAlign: "right" }}>
                    <Text strong type="secondary">
                      Money
                    </Text>
                  </Col>
                </Row>

                {/* Summary Items */}
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%", marginBottom: "24px" }}
                >
                  {cartItems.map((item, index) => (
                    <Row key={item.id} gutter={16}>
                      <Col span={12}>
                        <Text>
                          {index + 1}. {item.name}
                        </Text>
                      </Col>
                      <Col span={6} style={{ textAlign: "center" }}>
                        <Text>{item.quantity.toString().padStart(2, "0")}</Text>
                      </Col>
                      <Col span={6} style={{ textAlign: "right" }}>
                        <Text>{item.quantity * 70}$</Text>
                      </Col>
                    </Row>
                  ))}
                  <Row gutter={16}>
                    <Col span={12}>
                      <Text>3. Tax</Text>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={6} style={{ textAlign: "right" }}>
                      <Text>{tax}$</Text>
                    </Col>
                  </Row>
                </Space>

                {/* Total */}
                <Divider />
                <Row justify="space-between" style={{ marginBottom: "24px" }}>
                  <Col>
                    <Title level={3} style={{ margin: 0 }}>
                      Total
                    </Title>
                  </Col>
                  <Col>
                    <Title level={3} style={{ margin: 0 }}>
                      ${total.toFixed(2)}
                    </Title>
                  </Col>
                </Row>

                {/* Place Order Button */}
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    backgroundColor: "#22c55e",
                    borderColor: "#22c55e",
                    height: "48px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Place Order
                </Button>
              </Card>
            </Col>
          </Row>
        </div>

        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          width={800}
          style={{ top: 20 }}
        >
          <Row gutter={32} style={{ padding: "24px 0" }}>
            {/* Date Selection */}
            <Col xs={24} lg={12}>
              <Title level={2} style={{ marginBottom: "16px" }}>
                Select Date
              </Title>

              {/* Ant Design Calendar */}
              <Calendar fullscreen={false} />
            </Col>

            {/* Time & Slot Selection */}
            <Col xs={24} lg={12}>
              <Title level={2} style={{ marginBottom: "24px" }}>
                Select Time & Slot
              </Title>

              {/* Time Selection */}
              <div
                style={{ marginBottom: "24px" }}
                className="flex flex-col gap-2 text-center"
              >
                <div>
                  <Button
                    type={selectedTime === "07:00am" ? "primary" : "default"}
                    onClick={() => setSelectedTime("07:00am")}
                    style={{
                      backgroundColor:
                        selectedTime === "07:00am" ? "#22c55e" : undefined,
                      borderColor:
                        selectedTime === "07:00am" ? "#22c55e" : "#22c55e",
                      borderWidth: "2px",
                    }}
                  >
                    07:00am
                  </Button>
                </div>
                <div>
                  <Button
                    type={selectedTime === "08:00am" ? "primary" : "default"}
                    onClick={() => setSelectedTime("08:00am")}
                    style={{
                      backgroundColor:
                        selectedTime === "08:00am" ? "#22c55e" : undefined,
                      borderColor:
                        selectedTime === "08:00am" ? "#22c55e" : "#22c55e",
                      borderWidth: "2px",
                    }}
                  >
                    08:00am
                  </Button>
                </div>
              </div>

              {/* Slot Selection */}
              <div style={{ marginBottom: "24px", textAlign: "center" }}>
                <Radio.Group
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <Space>
                    <Radio value="01">Slot 01</Radio>
                    <Radio value="02">Slot 02</Radio>
                  </Space>
                </Radio.Group>
              </div>

              {/* Additional Time Options */}
              {/* Time Selection */}
              <div
                style={{ marginBottom: "24px" }}
                className="flex flex-col gap-2 text-center"
              >
                <div>
                  <Button
                    type={selectedTime === "09:00am" ? "primary" : "default"}
                    onClick={() => setSelectedTime("09:00am")}
                    style={{
                      backgroundColor:
                        selectedTime === "09:00am" ? "#22c55e" : undefined,
                      borderColor:
                        selectedTime === "09:00am" ? "#22c55e" : "#22c55e",
                      borderWidth: "2px",
                    }}
                  >
                    09:00am
                  </Button>
                </div>
                <div>
                  <Button
                    type={selectedTime === "10:00am" ? "primary" : "default"}
                    onClick={() => setSelectedTime("10:00am")}
                    style={{
                      backgroundColor:
                        selectedTime === "10:00am" ? "#22c55e" : undefined,
                      borderColor:
                        selectedTime === "10:00am" ? "#22c55e" : "#22c55e",
                      borderWidth: "2px",
                    }}
                  >
                    10:00am
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Note Section */}
          <div style={{ marginBottom: "24px" }}>
            <Title level={4} style={{ marginBottom: "12px" }}>
              Note
            </Title>
            <TextArea
              placeholder="Enter your note here"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              style={{ resize: "none" }}
            />
          </div>

          {/* Confirm Button */}
          <Button
            type="primary"
            size="large"
            block
            onClick={handleConfirmOrder}
            style={{
              backgroundColor: "#22c55e",
              borderColor: "#22c55e",
              height: "48px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Confirm Order
          </Button>
        </Modal>
      </div>
    </ConfigProvider>
  );
}
