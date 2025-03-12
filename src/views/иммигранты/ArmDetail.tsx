import { Checkbox, Flex, Table, TableColumnsType, TableProps, Typography } from "antd";
// import { useForm } from "react-hook-form";
import empty from '../../../public/svg/user.png'
import { Link } from "react-router";
import russia from '../../components/flag/russia.svg'
import kirgiz from '../../components/flag/kirgizistan.svg'
import uzbekistan from '../../components/flag/uzbeksitan.svg'
import { useEffect, useState } from "react";
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
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
  kogg:string
}
interface DataType2 {
  key: React.Key;
  city: string;
  chinese: number;
  math: number;
  passport: string;
  data: string;
  nationality: string;
  nation: string;
  punkt: string;
  kogg:string;
crossing:string;
stay_country:string;
}
const ArmDetail = (): JSX.Element => {
  // const { control } = useForm();

  const [loading, setLoading] = useState(true); 

useEffect(() => {
  setTimeout(() => setLoading(false), 2000); 
}, []);


  const handleCheckboxChange = (key: React.Key, checked: boolean) => {
    console.log(`key: ${key}, checked: ${checked}`);
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: <p className="text-center text-xs font-medium   text-[#6B7280]">№</p>,
      render: (__, _, index) =><p className="text-center">{index + 1}</p>,
      width: 50,
    },
    {
        title: <p className="table_th">Фамилия, Имя, Отчество</p>,
        dataIndex: 'name',
        width:255,
      
      },
      
    
    {
      title: <p className="table_th">Гражданство</p>,
      dataIndex: 'nationality',
     
    },
    {
      title: <p className="table_th">Паспорт</p>,
      dataIndex: 'passport',
     
    },
    {
      title: <p className="table_th">Дата выдачи</p>,
      dataIndex: 'birtday',
      
    },
    {
      title: <p className="text-center table_th">Выбрано</p>,
      dataIndex: 'choice',
      render: (_, record) => (
       <div className="text-center"> <Checkbox
          onChange={e => handleCheckboxChange(record.key, e.target.checked)}
        /></div>
      ),
    },
  ];
  const columns2: TableColumnsType<DataType2> = [
    {
      title: <p className="text-center table_th">№</p>,
      render: (__, _, index) =><p className="text-center">{index + 1}</p>,
      width: 50,
    },
    {
        title: <p className=" table_th">Страна</p>,
        dataIndex: 'city',
        render: (__, record,) =><div className="flex gap-2 text-sm"> <img src={record.city=="Россия"?russia:record.city=="Кыргызстан"?kirgiz:uzbekistan} alt="flag"/><p>{record.city}</p></div>,
       
      },
      
    
    {
      title: <p className=" table_th">Дата и время</p>,
      dataIndex: 'data',
      width:167,

      render: (text) => {
        return (
          <Flex gap="8px" align="center">
            <Typography className="text-sm">{text}</Typography>
          </Flex>
        );
      }
     
    },
    {
      title: <p className="table_th">КОГГ</p>,
      dataIndex: 'kogg',
      width:103,
      render: (text) => {
        return (
          <Flex gap="8px" align="center">
            <Typography className={`p-[6px] text-xs rounded-[6px] cursor-pointer ${text=='Выезд'?"bg-[#FECACA] hover:bg-rose-300 text-[#991B1B]":"bg-[rgba(77,210,130,0.12)] hover:bg-green-200 text-[#4DD282]"}`}>{text}</Typography>
          </Flex>
        );
      }
    },
    {
      title: <p className="table_th">Пограничный пункт</p>,
      dataIndex: 'punkt',
      render: (__, record) =><p>{record.punkt}</p>,
      
    },
    {
      title: <p className="table_th">Пересечение границы</p>,
      dataIndex: 'crossing',
    },
    {
      title: <p className="table_th">Пребывание в стране</p>,
      dataIndex: 'stay_country',  
    },
  ];

  const data: DataType[] =[
    {
    key: "1",
    name: "Рахимова Азиза Икрамовна",
    chinese: 1,
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
    },
    {
    key: "2",
    name: "Рахимова Азиза Икрамовна",
    chinese: 2,
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
    }
];
  const data2: DataType2[] =[
    {
    key: "1",
    city: "Россия",
    chinese: 1,
    math: 80,
    passport: "BA1234567",
    nationality: "Казахстан",
    data: "17.01.2025 23:47:06",
    nation: "Казах",
    kogg: "Заезд",
    punkt:"МПП Дустлик авто",
    crossing:"Автомобиль",
    stay_country:"-"
    },
    {
    key: "2",
    city: "Кыргызстан",
    chinese: 2,
    math: 85,
    passport: "BB1234567",
    nationality: "Кыргызстан",
    data: "17.01.2025 23:47:06",
    nation: "Кыргыз",
    kogg:"Выезд",
    punkt:"МПП Дустлик авто",
    crossing:"Автомобиль",
    stay_country:"31 день"
    }
];

const onChange: TableProps<DataType>['onChange'] = ( filters, sorter, extra) => {
  console.log('params',filters, sorter, extra);
};
const onChange2: TableProps<DataType2>['onChange'] = ( filters, sorter, extra) => {
  console.log('params',filters, sorter, extra);
};

  return (
    <Flex vertical className="bg-[#F8FAFC]  w-full px-6 pt-6">
     <Link to={'/arm'} className=" mb-4 flex items-center"><ArrowLeftOutlined className="text-[#3276FF] w-5 h-5"/> <p className="text-sm">Назад</p></Link>
      <Flex className="grid grid-cols-3  gap-4  ">
      <Flex className="flex flex-col    col-span-2 ">

      <Flex className=" p-6 space-y-4 flex-1  bg-[#FFF]  flex flex-col rounded-2xl ">
      <Typography className="text-[#1F2937] text-[24px] font-[600] leading-[30px]">
      Все паспорта 
        </Typography>
      <Table<DataType> tableLayout="fixed"  loading={loading} className="w-full text-sm border rounded-xl scroll-smooth scroll-none  " pagination={false} bordered columns={columns} dataSource={data} onChange={onChange} />
        </Flex>

      <Flex className="mt-4 space-y-4 flex-1  flex flex-col p-6 bg-[#FFF] rounded-2xl ">
     <div className="flex justify-between items-center w-full">
     <Typography className="text-[#1F2937] text-[24px] font-[600]">
      Последнее пересечение границы
        </Typography>
        <Link to={'/arm/borders'} className="text-[#2563EB] font-semibold hover:underline">
        Смотреть все &gt;
        </Link>
     </div>
     <Table<DataType2>  loading={loading} className="w-full text-sm  " pagination={false} bordered columns={columns2} dataSource={data2} onChange={onChange2} />
      </Flex>
      </Flex>

        <Flex className=" col-span-1 space-y-6  p-6 bg-[#FFF] flex flex-col overflow-y-scroll h-[calc(100vh-100px)]  px-6 py-9   scroll-none  scroll-smooth rounded-2xl  overflow-hidden ">
<div className="flex justify-center space-y-6   items-center flex-col">
<img src={empty} alt="empty" className="rounded-xl bg-lightgray bg-no-repeat w-[160px] h-[160px] bg-slate-200 bg-[length:170.668%_113.75%]" style={{backgroundPosition: "-56.034px 0px",
    backgroundSize: "170.668% 113.75%",}} />
       <div className="space-y-2"> <Typography className="text-[#1F2937] text-center text-[24px] font-[600] leading-[30px]">
        Рахимова Азиза Икрамовна
        </Typography>
        <Typography className="text-[#2563EB] hover:underline text-center  font-medium  leading-[30px]">
        rahimova_a@gmail.com
        </Typography></div>
</div>
      <div className="h-px w-full bg-[#E5E7EB]"/>
        <div className="space-y-2">
          <p className="text-[18px] font-semibold">Паспортные данные</p>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Серия и номер паспорта</p>
            <p className="font-medium text-base">AD2430483</p>
          </div>
          

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Гражданство</p>
            <p className="font-medium text-base">Узбекистан</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">ПИНФЛ</p>
            <p className="font-medium text-base">31210202029182</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Дата рождения</p>
            <p className="font-medium text-base">31.12.1980</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Пол</p>
            <p className="font-medium text-base">AD2430483</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Серия и номер паспорта</p>
            <p className="font-medium text-base">Женский</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Национальность</p>
            <p className="font-medium text-base">Узбечка</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Место рождения</p>
            <p className="font-medium text-base">Ташкент</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Место выдачи</p>
            <p className="font-medium text-base">IIV 26291</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Дата выдачи</p>
            <p className="font-medium text-base">12.10.2020</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Дата истечения срока действия</p>
            <p className="font-medium text-base">12.10.2030</p>
          </div>

        </div>
          <div className="h-px w-full bg-[#E5E7EB]"/>
          <div className="space-y-2">
          <p className="text-[18px] font-semibold">Об иммигранте</p>
          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">ID иммигранта</p>
            <p className="font-medium text-base">123456789101112</p>
          </div>
          

          <div className="flex justify-between items-center">
            <p className="font-medium text-base text-[#6B7280]">Номер телефона</p>
            <p className="font-medium text-base">+998 94 976 09 26</p>
          </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ArmDetail;
