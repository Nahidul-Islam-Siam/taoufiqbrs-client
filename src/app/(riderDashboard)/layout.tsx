import RiderLayout from "@/components/shared/layout/rider-dashboard-layout/RiderLayout";

interface AccountantLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AccountantLayoutProps) => {
  return <RiderLayout>{children}</RiderLayout>;
};

export default layout;
