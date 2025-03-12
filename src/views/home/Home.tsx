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

const Home = (): JSX.Element => {
  const { control } = useForm();

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'chinese',
      width: 100,
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
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
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
      passport: 'AA1234567',
       nationality:'Узбекистан',
      birtday: '26.02.2025',
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
      passport: 'AC1234567',
       nationality:'Российская Федерация',
      birtday: '23.02.2025',
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
      passport: 'AB1234567',
       nationality:'Польша',
      birtday: '20.02.2025',
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
      passport: 'AD1234567',
       nationality:'Финляндия',
      birtday: '21.02.2025',
    },
    {
      key: '5',
      name: 'Jim Rich',
      chinese: 77,
      math: 66,
      english: 59,
      passport: 'AK1234567',
       nationality:'Узбекистан',
      birtday: '23.02.2025',
    },
    {
      key: '6',
      name: 'Jon Rich',
      chinese: 87,
      math: 76,
      english: 79,
      passport: 'AV1234567',
       nationality:'Российская Федерация',
      birtday: '22.02.2025',
    },
    {
      key: '7',
      name: 'Rols Rich',
      chinese: 87,
      math: 76,
      english: 79,
      passport: 'AX1234567',
       nationality:'Узбекистан',
      birtday: '20.02.2025',
    },
    {
      key: '8',
      name: 'Rols Roys',
      chinese: 87,
      math: 76,
      english: 79,
      passport: 'AS1234567',
       nationality:'Финляндия',
      birtday: '24.02.2025',
    },
    {
      key: '9',
      name: 'Rols Connect',
      chinese: 87,
      math: 76,
      english: 79,
      passport: 'AI1234567',
       nationality:'Польша',
      birtday: '26.02.2025',
    },
  ];

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
      <Flex className="mt-[24px] p-6 bg-[#FFF] rounded-2xl   ">
      <Table<DataType> className="w-full overflow-y-scroll  scroll-none  scroll-smooth h-[calc(100vh-230px)]" pagination={false} bordered columns={columns} dataSource={data} onChange={onChange} />
        </Flex>
    </Flex>
  );
};

export default Home;
