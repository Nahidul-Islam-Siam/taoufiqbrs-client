"use client";
import { Card, Dropdown, Button, Input, MenuProps } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import user from "@/assets/admin/users.png"
import dolar from "@/assets/admin/dolar.png"
import cart from "@/assets/admin/carts.png"
import Image from "next/image";


const revenueData = [
  { name: "1st", value: 1000 },
  { name: "2nd", value: 600 },
  { name: "3rd", value: 1200 },
  { name: "4th", value: 800 },
  { name: "5th", value: 900 },
];

const potatoRevenueData = [
  { name: "Apr", value: 1200 },
  { name: "May", value: 400 },
  { name: "Jun", value: 1500 },
  { name: "Jul", value: 600 },
  { name: "Aug", value: 1000 },
  { name: "Sep", value: 600 },
  { name: "Oct", value: 800 },
  { name: "Nov", value: 300 },
];

const bestProducts = [
  { name: "Apple", sales: "Daily", amount: "Weekly" },
  { name: "Apple", sales: "Weekly", amount: "Monthly" },
  { name: "Apple", sales: "Monthly", amount: "Yearly" },
  { name: "Apple", sales: "Yearly", amount: "10000" },
];

const AdminOverview: React.FC = () => {
  const monthlyMenuItems: MenuProps['items'] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'yearly', label: 'Yearly' },
  ];

  const weeklyMenuItems: MenuProps['items'] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'yearly', label: 'Yearly' },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", marginTop: "20px" }}>
      <div style={{  display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Top Stats Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ color: "gray", marginBottom: "8px", fontSize: "14px" }}>Total Revenue</p>
                <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>$16345426</p>
              </div>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                backgroundColor: "#f6ffed", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image src={dolar} width={200} height={200} alt="dolar"/>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ color: "gray", marginBottom: "8px", fontSize: "14px" }}>Total Order</p>
                <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>1260</p>
              </div>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                backgroundColor: "#fff7e6", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image src={cart} width={200} height={200} alt="dolar"/>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ color: "gray", marginBottom: "8px", fontSize: "14px" }}>Total User</p>
                <p style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>5426</p>
              </div>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                backgroundColor: "#1890ff", 
                borderRadius: "50%", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image src={user} width={200} height={200} alt="dolar"/>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Section - Revenue Chart and Best Product */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "24px" }}>
          {/* Revenue Chart */}
          <Card 
            title="Revenue" 
            extra={
              <Dropdown menu={{ items: monthlyMenuItems }} trigger={['click']}>
                <Button>
                  Monthly <DownOutlined />
                </Button>
              </Dropdown>
            }
          >
            <p style={{ fontSize: "30px", fontWeight: "bold", margin: "8px 0" }}>5320$</p>
            <p style={{ color: "gray", marginBottom: "16px" }}>Money</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Bar dataKey="value" fill="#8AB3CF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Best Product */}
          <Card 
            title="Best Product" 
            extra={
              <Dropdown menu={{ items: weeklyMenuItems }} trigger={['click']}>
                <Button>
                  Weekly <DownOutlined />
                </Button>
              </Dropdown>
            }
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {bestProducts.map((product, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0" }}>
                  <span style={{ fontWeight: "500" }}>{product.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ color: "gray", fontSize: "14px" }}>{product.sales}</span>
                    <span style={{ fontWeight: "500", fontSize: "14px" }}>{product.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: "500px" }}>
          <Input 
            placeholder="Search Product..." 
            prefix={<SearchOutlined />} 
            style={{ backgroundColor: "white" }}
          />
        </div>

        {/* Product Revenue Chart */}
        <Card title="Product Revenue">
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "8px 0" }}>Potato</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={potatoRevenueData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Bar dataKey="value" fill="#8AB3CF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default AdminOverview;