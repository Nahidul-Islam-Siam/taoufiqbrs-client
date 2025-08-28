import { AccountantOrderList } from "@/components/accountant/AccountantOrderList";
import AccountantOverview from "@/components/accountant/AccountantOverview";

const DashbaordPage = () => {
  return (
    <div className="bg-white">
      <h1 className="text-[#B3B3B3]">Dashboard Overview</h1>
      <>
        <AccountantOverview />
        <div>
          <AccountantOrderList />
        </div>
      </>
    </div>
  );
};

export default DashbaordPage;
