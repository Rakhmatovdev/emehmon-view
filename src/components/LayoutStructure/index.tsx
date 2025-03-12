import { Flex } from "antd";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flex>
      <Sidebar />
      <Flex vertical className="w-full">
        <Header />
        {children}
      </Flex>
    </Flex>
  );
}
