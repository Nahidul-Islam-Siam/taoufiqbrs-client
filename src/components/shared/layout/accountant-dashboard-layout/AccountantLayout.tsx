"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { MenuItem } from "../Layout";
import BaseLayout, { getItem } from "./Layout";
import { ClockArrowDown, LayoutDashboard, NotebookTabs, Package, Settings, ShoppingBag, User } from "lucide-react";

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
    <Link href="/accountant/my-listing">My Listing</Link>,
    "/accountant/my-listing",
    <NotebookTabs />
  ),
  getItem(
    <Link href="/accountant/my-packages">My Packages</Link>,
    "/accountant/my-packages",
    <Package />
  ),
  getItem(
    <Link href="/accountant/users">Users</Link>,
    "/accountant/users",
    <User />
  ),
  getItem(
    <Link href="/accountant/accountant-setting">Setting</Link>,
    "/accountant/accountant-setting",
    <Settings />
  ),
];

const AccountantLayout = ({ children }: { children: ReactNode }) => {
  return <BaseLayout nav={navLinks}>{children}</BaseLayout>;
};

export default AccountantLayout;
