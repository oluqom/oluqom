import { FC } from "react";
import { LayoutHeader, LayoutFooter } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex flex-col overflow-hidden justify-between py-16 h-screen">
      <LayoutHeader />
      <main className="overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
