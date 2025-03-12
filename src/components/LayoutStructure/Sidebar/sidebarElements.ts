import ArmIcon from "../../icons/ArmIcon";
import CorrectIcon from "../../icons/CorrectIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import EmployeesIcon from "../../icons/EmployeesIcon";
import KoggIcon from "../../icons/KoggIcon";
import MvdIcon from "../../icons/MvdIcon";
import OvirIcon from "../../icons/OvirIcon";
import PaperIcon from "../../icons/PaperIcon";
import SearchIcon from "../../icons/SearchIcon";
import noteIcon from "../../icons/NoteIcon";
const sidebarElements = [
  {
    title: "Статистика",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    title: "КОГГ",
    icon: KoggIcon,
    children: [
      {
        title: "Прибывшие",
        link: "/arrived",
      },
      {
        title: "Убывшие",
        link: "/departed",
      },
      {
        title: "Зарегистрированные",
        link: "/registered",
      },
    ],
  },
  {
    title: "Иммигранты",
    icon: ArmIcon,
    link: "/arm",
  },
  {
    title: "Заявки",
    icon: noteIcon,
    link: "/applications",
  },
  {
    title: "МВД",
    icon: MvdIcon,
    link: "/dashboard",
  },
  {
    title: "Корректировка",
    icon: CorrectIcon,
    link: "/adjustment",
  },
  {
    title: "Листки",
    icon: PaperIcon,
    link: "/dashboard",
  },
  {
    title: "Поиск гостя",
    icon: SearchIcon,
    link: "/dashboard",
  },
  {
    title: "ОВИР",
    icon: OvirIcon,
    link: "/dashboard",
  },
  {
    title: "Сотрудники",
    icon: EmployeesIcon,
    link: "/dashboard",
  },
];

export default sidebarElements;