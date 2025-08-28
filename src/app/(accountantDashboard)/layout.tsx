import AccountantLayout from "@/components/shared/layout/accountant-dashboard-layout/AccountantLayout";

interface AccountantLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AccountantLayoutProps) => {
  return <AccountantLayout>{children}</AccountantLayout>;
};

export default layout;
