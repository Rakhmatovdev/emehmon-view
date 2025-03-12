import { Flex, Table, TableColumnsType, TableProps, Typography } from "antd";
import { useForm } from "react-hook-form";
import HFDatePicker from "../../components/FormElements/HFDatePicker";
import HFInput from "../../components/FormElements/HFInput";
import FRow from "../../components/FormElements/HFRow";
import HFSelect from "../../components/FormElements/HFSelect";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
  passport: string;
  birtday: string;
  nationality: string;
}

const Registered = (): JSX.Element => {
  const { control } = useForm();

  const columns: TableColumnsType<DataType> = [
    {
      title: <p className="text-center">№</p>,
      render: (_, __, index) =><p className="text-center">{index + 1}</p>,
      width: 50,
    },
    {
      title: 'Прибыл',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Фамилия, Имя, Отчество',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
        multiple: 2,
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
      title: 'Паспорт',
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
      key: '1',
      name: 'Ali Karimov',
      chinese: 92,
      math: 88,
      english: 85,
      passport: 'UZ1000001',
      nationality: 'Узбекистан',
      birtday: '10.03.2025',
    },
    {
      key: '2',
      name: 'Vali Rahimov',
      chinese: 85,
      math: 90,
      english: 87,
      passport: 'UZ1000002',
      nationality: 'Узбекистан',
      birtday: '11.03.2025',
    },
    {
      key: '3',
      name: 'Jasur Islomov',
      chinese: 78,
      math: 85,
      english: 80,
      passport: 'UZ1000003',
      nationality: 'Узбекистан',
      birtday: '12.03.2025',
    },
    {
      key: '4',
      name: 'Dilshod Tursunov',
      chinese: 88,
      math: 82,
      english: 90,
      passport: 'UZ1000004',
      nationality: 'Узбекистан',
      birtday: '13.03.2025',
    },
    {
      key: '5',
      name: 'Oybek Yunusov',
      chinese: 95,
      math: 87,
      english: 92,
      passport: 'UZ1000005',
      nationality: 'Узбекистан',
      birtday: '14.03.2025',
    },
    {
      key: '6',
      name: 'Sardor Akramov',
      chinese: 80,
      math: 78,
      english: 84,
      passport: 'UZ1000006',
      nationality: 'Узбекистан',
      birtday: '15.03.2025',
    },
    {
      key: '7',
      name: 'Aziz Davronov',
      chinese: 90,
      math: 93,
      english: 88,
      passport: 'UZ1000007',
      nationality: 'Узбекистан',
      birtday: '16.03.2025',
    },
    {
      key: '8',
      name: 'Bekzod Mirza',
      chinese: 87,
      math: 85,
      english: 80,
      passport: 'UZ1000008',
      nationality: 'Узбекистан',
      birtday: '17.03.2025',
    },
    {
      key: '9',
      name: 'Shahzoda Navoiy',
      chinese: 92,
      math: 89,
      english: 90,
      passport: 'UZ1000009',
      nationality: 'Узбекистан',
      birtday: '18.03.2025',
    },
    {
      key: '10',
      name: 'Ziyod Xudoyberdiyev',
      chinese: 85,
      math: 87,
      english: 86,
      passport: 'UZ1000010',
      nationality: 'Узбекистан',
      birtday: '19.03.2025',
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

      <Flex className="grid grid-cols-5 gap-[16px] ">
        <FRow label="Фамилия, Имя, Отчество">
          <HFInput
            control={control}
            name="guestName"
            placeholder="Введите имя"
          />
        </FRow>

        <FRow label="Данные паспорта">
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
          <HFDatePicker
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
      <Flex className="mt-[24px] p-6 bg-[#FFF]  rounded-2xl">
      <Table<DataType> className="w-full overflow-y-scroll  scroll-none  scroll-smooth h-[calc(100vh-260px)]" pagination={false} bordered columns={columns} dataSource={data} onChange={onChange} />
        </Flex>
    </Flex>
  );
};

export default Registered;
