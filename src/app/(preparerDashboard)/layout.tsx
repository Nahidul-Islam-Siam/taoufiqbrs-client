import PreparerLayout from "@/components/shared/layout/preparer-dashboard-layout/PreparerLayout";

interface AccountantLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AccountantLayoutProps) => {
  return <PreparerLayout>{children}</PreparerLayout>;
};

export default layout;
