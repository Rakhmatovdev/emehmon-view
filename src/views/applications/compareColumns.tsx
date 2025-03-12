import type { ColumnsType } from "antd/es/table";
import { CompareRow } from "../../config/moc/data";

export const compareColumns: ColumnsType<CompareRow> = [
  {
    title: <p className="border hidden border-red-500 w-full"></p>,
    dataIndex: "label",
    key: "label",
    width: "30%",
    render: (text) => (
      <strong className="text-[#6B7280] text-sm font-medium">{text}</strong>
    ),
  },
  {
    title: (
      <p className="text-[#1F2937] text-sm rounded-lg">Анкета с заявки</p>
    ),
    dataIndex: "request",
    key: "request",
    width: "35%",
    render: (text) => (
      <strong className="text-[#1F2937] text-sm font-normal">{text}</strong>
    ),
  },
  {
    title: (
      <p className="text-[#1F2937] text-sm font-semibold">
        Анкета с базы данных
      </p>
    ),
    dataIndex: "db",
    key: "db",
    width: "35%",
    render: (text) => (
      <strong className="text-[#1F2937] text-sm font-normal">{text}</strong>
    ),
  },
];
