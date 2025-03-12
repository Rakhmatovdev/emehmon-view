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

const Departed = (): JSX.Element => {
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
      key: '19',
      name: 'Sophia Gray',
      chinese: 93,
      math: 88,
      english: 90,
      passport: 'BJ1234567',
      nationality: 'Узбекистан',
      birtday: '27.02.2025'
    },
    {
      key: '20',
      name: 'Liam Black',
      chinese: 87,
      math: 75,
      english: 82,
      passport: 'BK1234567',
      nationality: 'Российская Федерация',
      birtday: '28.02.2025'
    },
    {
      key: '21',
      name: 'Noah White',
      chinese: 90,
      math: 85,
      english: 88,
      passport: 'BL1234567',
      nationality: 'Польша',
      birtday: '01.03.2025'
    },
    {
      key: '22',
      name: 'Emma Green',
      chinese: 92,
      math: 95,
      english: 97,
      passport: 'BM1234567',
      nationality: 'Финляндия',
      birtday: '02.03.2025'
    },
    {
      key: '23',
      name: 'Olivia Red',
      chinese: 88,
      math: 83,
      english: 79,
      passport: 'BN1234567',
      nationality: 'Армения',
      birtday: '03.03.2025'
    },
    {
      key: '24',
      name: 'James Blue',
      chinese: 85,
      math: 92,
      english: 80,
      passport: 'BO1234567',
      nationality: 'Казахстан',
      birtday: '04.03.2025'
    },
    {
      key: '25',
      name: 'William Yellow',
      chinese: 91,
      math: 95,
      english: 97,
      passport: 'BP1234567',
      nationality: 'Азербайджан',
      birtday: '05.03.2025'
    },
    {
      key: '26',
      name: 'Benjamin Purple',
      chinese: 80,
      math: 70,
      english: 78,
      passport: 'BQ1234567',
      nationality: 'Грузия',
      birtday: '06.03.2025'
    },
    {
      key: '27',
      name: 'Charlotte Orange',
      chinese: 92,
      math: 86,
      english: 84,
      passport: 'BR1234567',
      nationality: 'Молдова',
      birtday: '07.03.2025'
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
      <Flex className="mt-[24px] p-6 bg-[#FFF]  rounded-2xl ">
      <Table<DataType> className="w-full overflow-y-scroll  scroll-none  scroll-smooth h-[calc(100vh-230px)]" pagination={false} bordered columns={columns} dataSource={data} onChange={onChange} />
        </Flex>
    </Flex>
  );
};

export default Departed;
