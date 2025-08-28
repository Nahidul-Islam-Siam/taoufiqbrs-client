"use client";

import { useState } from "react";
import { Table, Tag, Button, Dropdown, Menu, Pagination } from "antd";
import { DownloadOutlined, MoreOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Order {
  id: number;
  orderTime: string;
  orderBy: string;
  address: string;
  amount: string;
  slot: string;
  status: "Processing" | "Done" | "cancel";
}

const orders: Order[] = [
  {
    id: 12345,
    orderTime: "19 May 25 03:55 AM",
    orderBy: "Wilson Levin",
    address: "35 N 100 E, Salina",
    amount: "$1234",
    slot: "07:30 am",
    status: "Processing",
  },
  {
    id: 12346,
    orderTime: "20 May 25 05:15 PM",
    orderBy: "Sophia Carter",
    address: "21 W 200 S, Manti",
    amount: "$567",
    slot: "02:15 pm",
    status: "Done",
  },
  {
    id: 12347,
    orderTime: "21 May 25 09:45 AM",
    orderBy: "David Kim",
    address: "48 E 300 N, Monroe",
    amount: "$890",
    slot: "10:00 am",
    status: "cancel",
  },
];

export function AccountantOrderList() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Processing":
        return "blue";
      case "Done":
        return "green";
      case "cancel":
        return "red";
      default:
        return "default";
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Order Time",
      dataIndex: "orderTime",
      key: "orderTime",
    },
    {
      title: "Order By",
      dataIndex: "orderBy",
      key: "orderBy",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Slot",
      dataIndex: "slot",
      key: "slot",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: Order["status"]) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: "Invoice",
      key: "invoice",
      render: () => (
        <Button
          className="bg-black hover:!bg-black"
          type="primary"
          size="small"
          icon={<DownloadOutlined />}
        >
          Documents
        </Button>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: Order) => {
        const menu = (
          <Menu>
            <Menu.Item key="done">Done</Menu.Item>
            <Menu.Item key="cancel">Cancel</Menu.Item>
            <Menu.Item key="details">
              <Link href={`/accountant/order-details/${record?.id}`}>
                Details
              </Link>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div>
      <h1 className="text-[#328736] text-[20px] font-bold p-5">Order List</h1>
      <Table
        className="p-5 overflow-y-scroll [&_.ant-table-thead>tr>th]:bg-gray-900 [&_.ant-table-thead>tr>th]:text-white"
        columns={columns}
        dataSource={orders}
        rowKey="id"
        pagination={false}
        bordered
      />

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={25}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
