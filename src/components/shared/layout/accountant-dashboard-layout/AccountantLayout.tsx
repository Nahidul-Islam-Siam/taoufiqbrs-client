"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { MenuItem } from "../Layout";
import BaseLayout, { getItem } from "./Layout";
import { ClockArrowDown, LayoutDashboard, NotebookTabs, Package, ShoppingBag } from "lucide-react";

const navLinks: MenuItem[] = [
  getItem(
    <Link href="/accountant">Dashboard</Link>,
    "/accountant",
    <LayoutDashboard />
  ),
  getItem(
    <Link href="/accountant/order-list">Order List</Link>,
    "/accountant/order-list",
    <ShoppingBag />
  ),
  getItem(
    <Link href="/accountant/order-request">Order Request</Link>,
    "/accountant/order-request",
    <ClockArrowDown />
  ),
  getItem(
    <Link href="/accountant/order-request">My Listing</Link>,
    "/accountant/my-listing",
    <NotebookTabs />
  ),
  getItem(
    <Link href="/accountant/my-packages">My Packages</Link>,
    "/accountant/my-packages",
    <Package />
  ),
];

const AccountantLayout = ({ children }: { children: ReactNode }) => {
  return <BaseLayout nav={navLinks}>{children}</BaseLayout>;
};

export default AccountantLayout;
