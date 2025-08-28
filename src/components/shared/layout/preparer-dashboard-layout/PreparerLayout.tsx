"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { MenuItem } from "./Layout";
import BaseLayout, { getItem } from "./Layout";
import { LayoutDashboard, Settings, ShoppingBag } from "lucide-react";

const navLinks: MenuItem[] = [
  getItem(
    <Link href="/preparer">Dashboard</Link>,
    "/preparer",
    <LayoutDashboard />
  ),
  getItem(
    <Link href="/preparer/order-list">Order List</Link>,
    "/preparer/order-list",
    <ShoppingBag />
  ),
  getItem(
    <Link href="/preparer/preparer-setting">Setting</Link>,
    "/preparer/preparer-setting",
    <Settings />
  ),
];

const PreparerLayout = ({ children }: { children: ReactNode }) => {
  return <BaseLayout nav={navLinks}>{children}</BaseLayout>;
};

export default PreparerLayout;
