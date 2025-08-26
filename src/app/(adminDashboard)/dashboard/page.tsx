import AdminOverview from "@/components/admin/AdminOverview";
import { OrderList } from "@/components/admin/OrderList";

const DashbaordPage = () => {
  return (
    <div className="bg-white">
      <h1 className="text-[#B3B3B3]">Dashboard Overview</h1>
      <>
        <AdminOverview />
        <div>
          <OrderList />
        </div>
      </>
    </div>
  );
};

export default DashbaordPage;
