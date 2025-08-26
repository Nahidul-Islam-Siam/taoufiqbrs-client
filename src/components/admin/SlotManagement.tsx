"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Table,
  Button,
  Tag,
  Dropdown,
  Space,
  Card,
  Typography,
  Pagination,
  Breadcrumb,
  Modal,
  Select,
  Calendar,
} from "antd";
import {
  PlusOutlined,
  StarFilled,
  StarOutlined,
  MoreOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";
import type { Dayjs } from "dayjs";

const { Title, Text } = Typography;
const { Option } = Select;

const listings = [
  {
    id: "01",
    date: "12/10/2025",
    time: "07:00am To 08:00am",
    slot: "02",
    availableSlot: 1,
    starred: true,
  },
  {
    id: "02",
    date: "13/10/2025",
    time: "08:00am To 09:00am",
    slot: "03",
    availableSlot: 0,
    starred: false,
  },
];

export default function SlotManagement() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedSlot, setSelectedSlot] = useState("01");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState("08:00am To 09:00am");

  const items: MenuProps["items"] = [
    { key: "1", label: "Edit" },
    { key: "2", label: "Remove" },
  ];

  const timeSlots = [
    "08:00am To 09:00am",
    "09:00am To 10:00am",
    "10:00am To 11:00am",
    "11:00am To 12:00pm",
    "12:00pm To 01:00pm",
    "01:00pm To 02:00pm",
    "02:00pm To 03:00pm",
    "03:00pm To 04:00pm",
  ];

  const columns: TableColumnsType<(typeof listings)[0]> = [
    {
      title: "Slot No",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <Space>
          {record.starred ? (
            <StarFilled style={{ color: "#faad14" }} />
          ) : (
            <StarOutlined style={{ color: "#d9d9d9" }} />
          )}
          {text}
        </Space>
      ),
    },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Time", dataIndex: "time", key: "time" },
    { title: "Slot", dataIndex: "slot", key: "slot" },
    {
      title: "Available Slot",
      dataIndex: "availableSlot",
      key: "availableSlot",
      render: (slot) => <Tag color={slot > 0 ? "green" : "red"}>{slot}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const handleOk = () => {
    console.log({
      date: selectedDate ? selectedDate.format("DD/MM/YYYY") : null,
      time: selectedTime,
      slot: selectedSlot,
    });
    setIsModalVisible(false);
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#fff", padding: "20px" }}
    >
      <Breadcrumb style={{ marginBottom: "16px" }}>
        <Breadcrumb.Item>
          <Text type="secondary">Slot Management</Text>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <Title level={2} style={{ color: "#389e0d", margin: 0 }}>
          Slot Management
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            backgroundColor: "#389e0d",
            borderColor: "#389e0d",
            height: 40,
          }}
          onClick={showModal}
        >
          Add Slot
        </Button>
      </div>

      {/* Table */}
      <Card
        bodyStyle={{ padding: 0 }}
        style={{
          borderRadius: 8,
          boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          border: "1px solid #f0f0f0",
        }}
      >
        <Table
          columns={columns}
          dataSource={listings}
          pagination={false}
          scroll={{ x: true }}
          rowClassName={() => "hover-row"}
        />
      </Card>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        <Pagination
          total={50}
          showSizeChanger={false}
          itemRender={(page, type) => {
            if (type === "prev") return <Button icon={<LeftOutlined />} />;
            if (type === "next") return <Button icon={<RightOutlined />} />;
            return (
              <Button
                type={page === 1 ? "primary" : "default"}
                style={
                  page === 1
                    ? {
                        backgroundColor: "#389e0d",
                        color: "#fff",
                        borderColor: "#389e0d",
                      }
                    : {}
                }
              >
                {page}
              </Button>
            );
          }}
        />
      </div>

      {/* Add Slot Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<X size={20} />}
        style={{ top: 20 }}
        width="100%"
        className="max-w-6xl mx-auto"
      >
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Select Date */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-gray-900 m-0">
                Select Date
              </h3>
              <Calendar
                fullscreen={false}
                onSelect={(value) => setSelectedDate(value)}
                value={selectedDate || undefined}
                className="rounded-lg border border-gray-300"
              />
            </div>

            {/* Select Time */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-gray-900 m-0">
                Select Time
              </h3>
              <Select
                value={selectedTime}
                onChange={setSelectedTime}
                size="large"
                className="w-full"
              >
                {timeSlots.map((time) => (
                  <Option key={time} value={time}>
                    {time}
                  </Option>
                ))}
              </Select>
            </div>

            {/* Select Slot */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-gray-900 m-0">
                Select Slot
              </h3>
              <div className="flex flex-col gap-3 pt-2">
                {["01", "02", "03", "04", "05"].map((slot) => (
                  <label
                    key={slot}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="slot"
                      value={slot}
                      checked={selectedSlot === slot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="hidden"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedSlot === slot
                          ? "border-green-600 bg-green-600"
                          : "border-gray-300 bg-transparent"
                      }`}
                    >
                      {selectedSlot === slot && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-700">{slot} Slot</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Add Slot Button */}
          <div className="flex justify-center mt-8">
            <Button
              type="primary"
              size="large"
              className="!bg-green-600 !border-green-600 !h-12 !px-8 text-lg"
              onClick={handleOk}
            >
              Add Slot
            </Button>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        :global(.ant-table-thead > tr > th) {
          background-color: #1f1f1f !important;
          color: white !important;
          font-weight: 500;
        }
        :global(.hover-row:hover td) {
          background-color: #fafafa !important;
        }
        :global(.ant-btn-default:hover) {
          color: #389e0d;
          border-color: #389e0d;
        }
      `}</style>
    </div>
  );
}
