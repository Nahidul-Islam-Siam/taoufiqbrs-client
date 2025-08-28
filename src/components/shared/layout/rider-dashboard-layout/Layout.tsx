"use client";

import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import adminImage from "@/assets/admin/admin-image.png";
import adminLogo from "@/assets/admin/admin-logo.png";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";

const { Header, Content, Sider } = Layout;

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface BaseLayoutProps {
  children: ReactNode;
  nav: MenuItem[];
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, nav }) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState(pathname);

  const handleClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Sidebar */}
      <Sider
        width={220}
        className={`!bg-[#fff] !overflow-y-auto !fixed lg:!static h-full z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        theme="light"
      >
        <Link
          href={"/"}
          className="flex justify-center items-center py-3 border-b border-[#ffffff1a]"
        >
          <Image className="w-[130px]" src={adminLogo} alt="logo" />
        </Link>

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={nav}
          style={{
            backgroundColor: "#fff",
            fontWeight: "500",
            borderRight: 0,
          }}
          inlineIndent={16}
        />
      </Sider>

      {/* Main */}
      <Layout>
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="text-xl hidden lg:block sm:text-2xl lg:text-3xl font-semibold">
            Welcome Back, John Doe!
          </h2>

          <div className="flex items-center gap-4">
            <Bell size={20} className="cursor-pointer" />
            <div className="flex items-center gap-3">
              <Image
                src={adminImage}
                className="rounded-full"
                width={40}
                height={40}
                alt="adminImage"
              />
              <div className="flex flex-col">
                <h1 className="text-sm font-medium">John Doe</h1>
                <p className="text-xs text-gray-500">Rider</p>
              </div>
            </div>
          </div>

          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="lg:!hidden text-2xl cursor-pointer"
          />
        </Header>

        <Content
          className="!overflow-y-auto !overflow-x-hidden"
          onClick={() => setOpen(false)}
          style={{
            padding: "24px",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
