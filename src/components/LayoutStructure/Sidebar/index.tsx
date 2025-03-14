import { Button, Collapse, Flex, Image, Typography } from "antd";
import { useState } from "react";
import LogoSvg from "../../../../public/full-logo.svg";
import LogoMain from "../../../../public/logo-main.svg";
import IIVLogo from "../../../../public/iiv-logo.png";
import ToggleSidebarIcon from "../../icons/ToggleSidebarIcon";
import sidebarElements from "./sidebarElements";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router"
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };


  return (
    <Flex
      className={`p-[12px] border-r border-solid border-[#E9E9E9] h-[100vh] flex-col justify-between bg-white ${twMerge(
        "transition-all duration-300",
        collapsed ? "w-[60px]" : "w-[220px]"
      )}`}
    >
      <Flex vertical>
        <Flex className="items-center justify-between w-full mb-[24px]">
          <Image
            src={collapsed ? LogoMain : LogoSvg}
            preview={false}
            height={36}
            onClick={() => {
              if (collapsed) {
                setCollapsed(false);
              }
            }}
          />
          {collapsed ? (
            ""
          ) : (
            <Button
              type="link"
              className="size-[24px]"
              onClick={toggleCollapsed}
            >
              <ToggleSidebarIcon />
            </Button>
          )}
        </Flex>
<div className="overflow-y-scroll h-[calc(100vh-200px)] scroll-none scroll-smooth">
        <Flex vertical gap={8}>
          {sidebarElements?.map((item,index) => (
           <div key={index}> 
           {item.link ?
           (<Link
           to={item.link}
           type="link"
           className="w-full    flex items-center justify-start gap-[8px] group-hover:bg-[#2563EB] text-[#69757A] text-[14px] font-[500] leading-[18px] hover:text-[#2563EB] p-[10px] h-auto"
         >
           <item.icon className="text-[#232E40]" />
           {collapsed ? "" : item.title}
         </Link>) 
          : (<Collapse
            expandIconPosition="end"
            ghost
            items={[
              {
                key: '1',
                label: (
                  <div className="flex -translate-x-1.5 group-hover:bg-[#2563EB] bg-transparent items-center transition-all gap-x-2 text-[#232E40] font-medium text-[14px]">
                    <item.icon className="text-[#232E40]" /> 
                    {collapsed ? "" : item.title}
                  </div>
                ),
                showArrow: false,
                children: item.children?.map((kog) => (
                  <Link
                    key={kog.link}
                    to={kog.link}
                    className="w-full flex -translate-x-1.5 items-center gap-y-2 text-[#69757A] text-[14px] font-medium leading-[18px] hover:bg-[#F5F7FA]  hover:text-[#171429] p-2 rounded-md"
                  >
                    <span className="w-[4px] h-[20px] bg-transparent group-hover:bg-[#2563EB] transition-all">
                    {kog.title}</span>
                  </Link>
                )),
              },
            ]}
          />)}
           
            </div>
          ))}
        </Flex></div>
      </Flex>

      <Flex>
        <Button className="w-full border border-[#E9E9E9] rounded-[8px] overflow-hidden p-[8px] h-auto flex items-center justify-start gap-[8px]">
          <Flex className="size-[36px] rounded-[7px] min-w-[36px]">
            <Image src={IIVLogo} preview={false} />
          </Flex>
          <Flex vertical className="items-start">
            <Typography className="text-[#171429] text-[14px] font-[600] leading-[18px]">
              ОВИР МВД
            </Typography>
            <Typography className="text-[#69757A] text-[12px] font-[400] leading-[15px]">
              Название роли
            </Typography>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
