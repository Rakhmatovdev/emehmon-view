import { Flex, Table, TableColumnsType, TableProps, Typography } from "antd";
import { useForm } from "react-hook-form";
import HFDatePicker from "../../components/FormElements/HFDatePicker";
import HFInput from "../../components/FormElements/HFInput";
import FRow from "../../components/FormElements/HFRow";
import HFSelect from "../../components/FormElements/HFSelect";
import Avatar from "../../components/users"
import HFDateRangePicker from "../../components/FormElements/HFDataRangePicker";
import {UserOutlined  } from '@ant-design/icons';
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
  passport: string;
  birtday: string;
  nationality: string;
  avatar:string
}

const Arrived = (): JSX.Element => {
  const { control } = useForm();

  const columns: TableColumnsType<DataType> = [
    {
      title: <p className="text-center">№</p>,
      render: (_, __, index) =><p className="text-center">{index + 1}</p>,
      width: 50,
    },
    {
      title: 'Фамилия, Имя, Отчество',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 2,
      },
      render(text, record) {
        return (
          <Flex gap="8px" align="center">
            <img className="rounded-md " src={record.avatar} />
            <Typography>{text}</Typography>
          </Flex>
        );
      }
    },
    {
      title: 'Дата прибытия',
      dataIndex: 'birtday',
      sorter: {
        compare: (a, b) => a.birtday.localeCompare(b.birtday),
        multiple: 3,
      },
    },
    
    {
      title: 'Гражданство',
      dataIndex: 'nationality',
      sorter: {
        compare: (a, b) => a.nationality.localeCompare(b.nationality),
        multiple: 1,
      },
    },
    {
      title: 'Серия и номер паспорта',
      dataIndex: 'passport',
      sorter: {
        compare: (a, b) => a.passport.localeCompare(b.passport),
        multiple: 1,
      },
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birtday',
      sorter: {
        compare: (a, b) => a.birtday.localeCompare(b.birtday),
        multiple: 1,
      },
    },
  ];
  
  const data: DataType[] =[
    {
    key: "10",
    name: "Alice Blue",
    chinese: 95,
    math: 80,
    english: 85,
    passport: "BA1234567",
    nationality: "Казахстан",
    birtday: "25.02.2025",
  avatar:Avatar.User1
  },
    {
    key: "11",
    name: "Bob White",
    chinese: 90,
    math: 85,
    english: 88,
    passport: "BB1234567",
    nationality: "Кыргызстан",
    birtday: "22.02.2025",
  avatar:Avatar.User2
  },
    {
    key: "12",
    name: "Charlie Green",
    chinese: 85,
    math: 92,
    english: 80,
    passport: "BC1234567",
    nationality: "Таджикистан",
    birtday: "20.02.2025",
  avatar:Avatar.User3
  },
    {
    key: "13",
    name: "David Black",
    chinese: 82,
    math: 78,
    english: 75,
    passport: "BD1234567",
    nationality: "Туркменистан",
    birtday: "21.02.2025",
  avatar:Avatar.User4
  },
    {
    key: "14",
    name: "Emma Red",
    chinese: 89,
    math: 88,
    english: 92,
    passport: "BE1234567",
    nationality: "Армения",
    birtday: "23.02.2025",
  avatar:Avatar.User5
  },
    {
    key: "15",
    name: "Frank Brown",
    chinese: 80,
    math: 70,
    english: 78,
    passport: "BF1234567",
    nationality: "Грузия",
    birtday: "26.02.2025",
  avatar:Avatar.User6
  },
    {
    key: "16",
    name: "Grace Yellow",
    chinese: 91,
    math: 95,
    english: 97,
    passport: "BG1234567",
    nationality: "Азербайджан",
    birtday: "24.02.2025",
  avatar:Avatar.User7
  },
    {
    key: "17",
    name: "Henry Purple",
    chinese: 88,
    math: 83,
    english: 79,
    passport: "BH1234567",
    nationality: "Российская Федерация",
    birtday: "22.02.2025",
  avatar:Avatar.User8
  },
    {
    key: "18",
    name: "Isabella Orange",
    chinese: 92,
    math: 86,
    english: 84,
    passport: "BI1234567",
    nationality: "Молдова",
    birtday: "20.02.2025",
    avatar:Avatar.User9
    }
]
;

const onChange: TableProps<DataType>['onChange'] = ( filters, sorter, extra) => {
  console.log('params',filters, sorter, extra);
};

  return (
    <Flex vertical className="bg-[#F8FAFC] h-full w-full p-[24px]">
      <Flex className="mb-[24px]">
        <Typography className="text-[#1F2937] text-[24px] font-[600] leading-[30px]">
          КОГГ
        </Typography>
      </Flex>

      <Flex className="grid grid-cols-6 gap-[16px] ">
        <FRow label="Фамилия">
          <HFInput
          prefix={<UserOutlined />}
            control={control}
            name="guestLastName"
            placeholder="Введите Фамилия"
          />
        </FRow>
        <FRow label="Имя">
          <HFInput prefix={<UserOutlined />}
            control={control}
            name="guestName"
            placeholder="Введите имя"
          />
        </FRow>

        <FRow label="Серия и номер паспорта">
          <HFInput control={control} name="passport" placeholder="Поиск" />
        </FRow>

        <FRow label="Дата прибытия">
          <HFDatePicker
            control={control}
            name="arrive"
            placeholder="Выберите дату"
          />
        </FRow>

        <FRow label="День рождение">
          <HFDateRangePicker
            control={control}
            name="birth"
            placeholder="Выберите дату"
          />
        </FRow>

        <FRow label="Гражданство">
          <HFSelect
            control={control}
            name="citizen"
            placeholder="Выберите страну"
            options={[
              {
                label: "Казахстан",
                value: "kz",
              },
              {
                label: "Россия",
                value: "ru",
              },
              {
                label: "США",
                value: "usa",
              },
            ]}
          />
        </FRow>
      </Flex>
      <Flex className="mt-[24px] p-6 bg-[#FFF]  rounded-2xl  ">
      <Table<DataType> className="w-full overflow-y-scroll  scroll-none  scroll-smooth h-[calc(100vh-260px)]" pagination={false} bordered columns={columns} dataSource={data} onChange={onChange} />
        </Flex>
    </Flex>
  );
};

export default Arrived;
