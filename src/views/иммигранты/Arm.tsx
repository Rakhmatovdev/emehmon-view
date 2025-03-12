import { Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import HFDatePicker from "../../components/FormElements/HFDatePicker";
import HFInput from "../../components/FormElements/HFInput";
import FRow from "../../components/FormElements/HFRow";
import HFSelect from "../../components/FormElements/HFSelect";
import HFTable from "../../components/FormElements/HFTable"; 
import Avatar from "../../components/users";
import location from "../../components/users/location.svg";
import user from "../../components/users/user.svg";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
  passport: string;
  birtday: string;
  nationality: string;
  nation: string;
  phone: string;
  poll: string;
  email: string;
  kogg: string;
  avatar: string;
  id: number;
}

interface TableParams {
  pagination?: {
    current: number;
    pageSize: number;
  };
  sortField?: string;
  sortOrder?: "ascend" | "descend";
  filters?: Record<string, string>;
}

const Arm = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });
  };

  const { control } = useForm();

  const columns: ColumnsType<DataType> = [
    {
      title: <p className="text-center table_th">№</p>,
      key: "index",
      render: (_: unknown, __: DataType, index: number) => <p className="text-center">{index + 1}</p>,
      width: 50,
    },
    {
      title: <p className="table_th">Фамилия, Имя, Отчество</p>,
      dataIndex: "name",
      key: "name",
      width: 300,
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text: string, record: DataType) => (
        <Link to={`${record.id}`}>
          <Flex className="cursor-pointer" gap="8px" align="center">
            <img className="rounded-md" src={record.avatar} alt="avatar" />
            <Typography className="text-sm line-clamp-1">{text}</Typography>
          </Flex>
        </Link>
      ),
    },
    {
      title: <p className="table_th">Дата рождения</p>,
      dataIndex: "birtday",
      key: "birtday",
    },
    {
      title: <p className="table_th">Гражданство </p>,
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: <p className="table_th">ID иммигранта </p>,
      dataIndex: "passport",
      key: "passport",
      sorter: (a, b) => a.passport.localeCompare(b.passport),
    },
    {
      title: <p className="table_th">Национальность </p>,
      dataIndex: "nation",
      key: "nation",
    },
    {
      title: <p className="table_th">Номер телефон</p>,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: <p className="table_th">Пол</p>,
      dataIndex: "poll",
      key: "poll",
      sorter: (a, b) => a.poll.localeCompare(b.poll),
    },
    {
      title: <p className="table_th">Почта</p>,
      dataIndex: "email",
      key: "email",
    },
    {
      title: <p className="table_th">КОГГ</p>,
      dataIndex: "kogg",
      key: "kogg",
      sorter: (a, b) => a.kogg.localeCompare(b.kogg),
      render: (text: string) => (
        <Flex gap="8px" align="center">
          <Typography
            className={`p-[6px] text-xs rounded-[6px] cursor-pointer ${
              text === "Выезд"
                ? "bg-[#FECACA] hover:bg-rose-300 text-[#991B1B]"
                : "bg-[rgba(77,210,130,0.12)] hover:bg-green-200 text-[#4DD282]"
            }`}
          >
            {text}
          </Typography>
        </Flex>
      ),
    },
  ];
  

  const data: DataType[] = [
    {
      id: 1,
      key: "10",
      name: "Рахимова Азиза Икрамовна",
      chinese: 95,
      math: 80,
      english: 85,
      passport: "BA1234567",
      nationality: "Казахстан",
      birtday: "25.02.2025",
      nation: "Казах",
      phone: "87071234567",
      poll: "Жен",
      email: "alice@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User1
    },
    {
      id: 2,
      key: "11",
      name: "Юлдашева Махлиё Шавкатовна",
      chinese: 90,
      math: 85,
      english: 88,
      passport: "BB1234567",
      nationality: "Кыргызстан",
      birtday: "22.02.2025",
      nation: "Кыргыз",
      phone: "87071234567",
      poll: "Муж",
      email: "Bob@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User2
    },
    {
      id: 3,
      key: "12",
      name: "Каримов Фаррух Абдурасулович",
      chinese: 85,
      math: 92,
      english: 80,
      passport: "BC1234567",
      nationality: "Таджикистан",
      birtday: "20.02.2025",
      nation: "Таджик",
      phone:"998949760926",
      poll: "Муж",
      email: "charlie@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User3
    },
    {
      id: 4,
      key: "13",
      name: "Саидова Дилноза Бахтияровна",
      chinese: 82,
      math: 78,
      english: 75,
      passport: "BD1234567",
      nationality: "Туркменистан",
      birtday: "21.02.2025",
      nation: "Туркмен",
      phone: "99365712345",
      poll: "Муж",
      email: "david@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User4
    },
    {
      id: 5,
      key: "14",
      name: "Emma Red",
      chinese: 89,
      math: 88,
      english: 92,
      passport: "BE1234567",
      nationality: "Армения",
      birtday: "23.02.2025",
      nation: "Армянин",
      phone: "37491234567",
      poll: "Жен",
      email: "emma.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User5
    },
    {
      id: 6,
      key: "15",
      name: "Frank Brown",
      chinese: 80,
      math: 70,
      english: 78,
      passport: "BF1234567",
      nationality: "Грузия",
      birtday: "26.02.2025",
      nation: "Грузин",
      phone: "995322123456",
      poll: "Муж",
      email: "frank.test@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User6
    },
    {
      id: 7,
      key: "16",
      name: "Grace Yellow",
      chinese: 91,
      math: 95,
      english: 97,
      passport: "BG1234567",
      nationality: "Азербайджан",
      birtday: "24.02.2025",
      nation: "Азербайджанец",
      phone:"994123456789",
      poll: "Муж",
      email:"grace.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User7
    },
    {
      id: 8,
      key: "17",
      name: "Henry Purple",
      chinese: 88,
      math: 83,
      english: 79,
      passport: "BH1234567",
      nationality: "Беларусь",
      birtday: "22.02.2025",
      nation: "Белорус",
      phone: "375123456789",
      poll: "Муж",
      email: "henry.test@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User8
    },
    {
      id: 9,
      key: "18",
      name: "Isabella Orange",
      chinese: 92,
      math: 86,
      english: 84,
      passport: "BI1234567",
      nationality: "Молдова",
      birtday: "20.02.2025",
      nation: "Молдаванин",
      phone: "37312345678",
      poll: "Жен",
      email: "isabella.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User9
    },
    {
      id: 1,
      key: "10",
      name: "Alice Blue",
      chinese: 95,
      math: 80,
      english: 85,
      passport: "BA1234567",
      nationality: "Казахстан",
      birtday: "25.02.2025",
      nation: "Казах",
      phone: "87071234567",
      poll: "Жен",
      email: "alice@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User1
    },
    {
      id: 2,
      key: "11",
      name: "Bob White",
      chinese: 90,
      math: 85,
      english: 88,
      passport: "BB1234567",
      nationality: "Кыргызстан",
      birtday: "22.02.2025",
      nation: "Кыргыз",
      phone: "87071234567",
      poll: "Муж",
      email: "Bob@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User2
    },
    {
      id: 3,
      key: "12",
      name: "Charlie Green",
      chinese: 85,
      math: 92,
      english: 80,
      passport: "BC1234567",
      nationality: "Таджикистан",
      birtday: "20.02.2025",
      nation: "Таджик",
      phone:"998949760926",
      poll: "Муж",
      email: "charlie@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User3
    },
    {
      id: 4,
      key: "13",
      name: "David Black",
      chinese: 82,
      math: 78,
      english: 75,
      passport: "BD1234567",
      nationality: "Туркменистан",
      birtday: "21.02.2025",
      nation: "Туркмен",
      phone: "99365712345",
      poll: "Муж",
      email: "david@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User4
    },
    {
      id: 5,
      key: "14",
      name: "Emma Red",
      chinese: 89,
      math: 88,
      english: 92,
      passport: "BE1234567",
      nationality: "Армения",
      birtday: "23.02.2025",
      nation: "Армянин",
      phone: "37491234567",
      poll: "Жен",
      email: "emma.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User5
    },
    {
      id: 6,
      key: "15",
      name: "Frank Brown",
      chinese: 80,
      math: 70,
      english: 78,
      passport: "BF1234567",
      nationality: "Грузия",
      birtday: "26.02.2025",
      nation: "Грузин",
      phone: "995322123456",
      poll: "Муж",
      email: "frank.test@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User6
    },
    {
      id: 7,
      key: "16",
      name: "Grace Yellow",
      chinese: 91,
      math: 95,
      english: 97,
      passport: "BG1234567",
      nationality: "Азербайджан",
      birtday: "24.02.2025",
      nation: "Азербайджанец",
      phone:"994123456789",
      poll: "Муж",
      email:"grace.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User7
    },
    {
      id: 8,
      key: "17",
      name: "Henry Purple",
      chinese: 88,
      math: 83,
      english: 79,
      passport: "BH1234567",
      nationality: "Беларусь",
      birtday: "22.02.2025",
      nation: "Белорус",
      phone: "375123456789",
      poll: "Муж",
      email: "henry.test@gmail.com",
      kogg: "Заезд",
      avatar: Avatar.User8
    },
    {
      id: 9,
      key: "18",
      name: "Isabella Orange",
      chinese: 92,
      math: 86,
      english: 84,
      passport: "BI1234567",
      nationality: "Молдова",
      birtday: "20.02.2025",
      nation: "Молдаванин",
      phone: "37312345678",
      poll: "Жен",
      email: "isabella.test@gmail.com",
      kogg: "Выезд",
      avatar: Avatar.User9
    },
  ];

  return (
    <Flex vertical className="bg-[#F8FAFC] h-full w-full p-[24px]">
      <Flex className="mb-4">
        <Typography className="text-[#1F2937] text-[24px] font-[600] leading-[30px]">
          Иммигранты
        </Typography>
      </Flex>

      <Flex className="grid grid-cols-6 gap-4">
        <FRow label="Дата прибытия">
          <HFDatePicker control={control} name="arrive" placeholder="Выберите дату" />
        </FRow>
        <FRow label="Фамилия гостя">
          <HFInput
            control={control}
            name="last_name"
            placeholder="Введите данные"
            prefix={<img src={user} width={12.5} height={12.5} alt="user icon" />}
          />
        </FRow>
        <FRow label="Имя гостя">
          <HFInput
            control={control}
            name="first_name"
            placeholder="Введите данные"
            prefix={<img src={user} width={12.5} height={12.5} alt="user icon" />}
          />
        </FRow>
        <FRow label="Отчество гостя">
          <HFInput
            control={control}
            name="otchot"
            placeholder="Введите данные"
            prefix={<img src={user} width={12.5} height={12.5} alt="user icon" />}
          />
        </FRow>
        <FRow label="День рождение">
          <HFDatePicker control={control} name="birth" placeholder="Выберите дату" />
        </FRow>
        <FRow label="Гражданство">
          <HFSelect
            control={control}
            name="citizen"
            prefix={<img src={location} alt="location" width={12.5} height={12.5} />}
            defaultValue="kz"
            placeholder="Выберите страну"
            options={[
              { label: "Казахстан", value: "kz" },
              { label: "Россия", value: "ru" },
              { label: "США", value: "usa" },
            ]}
          />
        </FRow>
      </Flex>

      <Flex className="mt-[24px] px-6 pt-6 pb-1 bg-[#FFF] rounded-2xl ">
        <HFTable<DataType>
          className="w-full  overflow-y-scroll scroll-smooth scroll-none h-[calc(100vh-245px)]x"
          columns={columns}
          bordered
          rowKey={(record) => record.chinese}
          dataSource={data}
          loading={loading}
          onChange={handleTableChange}
          scroll={{ y:630}}
          pagination={{
            ...tableParams.pagination,
            position: ["bottomCenter"],
            showSizeChanger: false,
            className: "custom-pagination",
            itemRender: (_, type, originalElement) => {
              if (type === "prev") {
                return (
                  <a className="text-[#6B7280] text-base border px-3 py-[7px] rounded-lg">
                    Пред
                  </a>
                );
              }
              if (type === "next") {
                return (
                  <a className="text-[#6B7280] text-base border px-3 py-[7px] rounded-lg">
                    След
                  </a>
                );
              }
              return originalElement;
            },
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Arm;
