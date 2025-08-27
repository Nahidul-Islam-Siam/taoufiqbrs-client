"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";
import { BetweenHorizontalEnd, CalendarArrowDown, ChartBarStacked, CirclePlus, ClipboardList, FilePlus2, Package, Settings, ShoppingCart, SquarePen, UserPlus, UserRound } from "lucide-react";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboards</Link>,
    "/dashboard",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/order-list">Order List</Link>,
    "/dashboard/order-list",
    <ShoppingCart />
  ),
  getItem(
    <Link href="/dashboard/order-request">Order Request</Link>,
    "/dashboard/order-request",
    <CalendarArrowDown />
  ),
  getItem(
    <Link href="/dashboard/my-listing">My Listing</Link>,
    "/dashboard/my-listing",
    <ClipboardList />
  ),
  getItem(
    <Link href="/dashboard/add-listing">Add listing</Link>,
    "/dashboard/add-listing",
    <CirclePlus />
  ),
  getItem(
    <Link href="/dashboard/my-packages">My Packages</Link>,
    "/dashboard/my-packages",
    <Package />
  ),
  getItem(
    <Link href="/dashboard/add-package">Add Package</Link>,
    "/dashboard/add-package",
    <CirclePlus />
  ),
  getItem(
    <Link href="/dashboard/slot-management">Slot Management</Link>,
    "/dashboard/slot-management",
    <BetweenHorizontalEnd />
  ),
  getItem(
    <Link href="/dashboard/add-management">Add Management</Link>,
    "/dashboard/add-management",
    <FilePlus2 />
  ),
  getItem(
    <Link href="/dashboard/add-category">Add Category</Link>,
    "/dashboard/add-category",
    <ChartBarStacked />
  ),
  getItem(
    <Link href="/dashboard/users">User</Link>,
    "/dashboard/users",
    <UserRound />
  ),
  getItem(
    <Link href="/dashboard/user-request">User Request</Link>,
    "/dashboard/user-request",
    <UserPlus/>
  ),
  getItem(
    <Link href="/dashboard/edit-website">Edit Website</Link>,
    "/dashboard/edit-website",
    <SquarePen />
  ),
  getItem(
    <Link href="/dashboard/admin-settings">Setting</Link>,
    "/dashboard/admin-settings",
    <Settings />
  ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
