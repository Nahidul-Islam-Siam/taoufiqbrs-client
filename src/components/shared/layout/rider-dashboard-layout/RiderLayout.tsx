"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { MenuItem } from "./Layout";
import BaseLayout, { getItem } from "./Layout";
import { Clock10, LayoutDashboard, Settings, ShoppingBag } from "lucide-react";

const navLinks: MenuItem[] = [
  getItem(<Link href="/rider">Dashboard</Link>, "/rider", <LayoutDashboard />),
  getItem(
    <Link href="/rider/order-list">Order List</Link>,
    "/rider/order-list",
    <ShoppingBag />
  ),
  getItem(
    <Link href="/rider/activity">Activity</Link>,
    "/rider/activity",
    <Clock10 />
  ),
  getItem(
    <Link href="/rider/rider-setting">Setting</Link>,
    "/rider/rider-setting",
    <Settings />
  ),
];

const RiderLayout = ({ children }: { children: ReactNode }) => {
  return <BaseLayout nav={navLinks}>{children}</BaseLayout>;
};

export default RiderLayout;
