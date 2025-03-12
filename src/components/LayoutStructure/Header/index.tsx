import {
  Badge,
  Breadcrumb,
  Button,
  Divider,
  Flex,
  Image,
  Popover,
  Typography,
} from "antd";
import NotificationIcon from "../../icons/NotificationIcon";
import avatar from "../../../../public/avatar.png";
import DownArrowIcon from "../../icons/DownArrowIcon";
import AuthService from "../../../config/services/auth.service";
import { useNavigate } from "react-router";


export default function Header() {
const navigate =useNavigate()
  const Logout =()=>{
    AuthService.logout();
    navigate("/auth/login");
  }

  const text = <button onClick={Logout} >Logout</button>;

  return (
    <Flex className="p-[8px_24px] bg-white border-b border-[#E5E7EB] w-full items-center justify-between">
      <Flex>
        <Breadcrumb
          items={[
            {
              title: "Главная",
            },
            {
              title: <a href="">КОГГ</a>,
            },
          ]}
        />
      </Flex>

      <Flex className="items-center gap-[20px]">
        <Badge count={5} color="#2563EB">
          <Button className="size-[39px] bg-[#F8FAFC] rounded-lg flex items-center justify-center">
            <NotificationIcon />
          </Button>
        </Badge>

        <Divider type="vertical" className="h-[24px] w-[1px] bg-[#E5E7EB]" />

        <Button
          type="link"
          className="flex items-center gap-[12px] text-[#1F2937] text-[15px] font-[600] h-auto"
        >
          <Image
            src={avatar}
            preview={false}
            className="rounded-lg overflow-hidden"
          />
            <Popover className="flex items-center gap-[10px]" placement="bottomRight" title={text} >
             <Typography>Алексей Пашкин</Typography>
            <DownArrowIcon />
          </Popover>
         
        </Button>
      </Flex>
    </Flex>
  );
}
