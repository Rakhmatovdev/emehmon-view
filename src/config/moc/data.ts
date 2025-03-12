import user1 from '../../../public/svg/user.png';
import user2 from '../../../public/svg/user2.png';
import user3 from '../../../public/svg/user3.png';
import user4 from '../../../public/svg/user4.png';


export interface userData{
    id:number;
    avatar:string;
    name:string;
    citizenship:string;
    passport:string;
    birthday:string;
    nationality:string;
    same:number
}
export const users: userData[]= [
    {
    id:777,
    avatar: user1,
    name: 'Рахимова Азиза Икрамовна',
    citizenship: 'Узбекистан',
    passport: 'AD2430483',
    birthday: '31.12.1988',
    nationality: 'Узбечка',
    same:99
},
{
    id:778,
    avatar: user2,
    name: 'Нурматова Азиза Шерзодовна',
    citizenship: 'Узбекистан',
    passport: 'AD2383823',
    birthday: '31.12.1982',
    nationality: 'Узбечка',
    same:85
},
    {
    id:779,
    avatar: user3,
    name: 'Ибрагимова Зухра Фархадовна',
    citizenship: 'Узбекистан',
    passport: 'AD9381238',
    birthday: '31.12.1984',
    nationality: 'Узбечка',
    same:76
},
{
    id:780,
    avatar: user4,
    name: 'Хасанова Гулисан Бахтияровна',
    citizenship: 'Узбекистан',
    passport: 'AD4839234',
    birthday: '31.12.1990',
    nationality: 'Узбечка',
    same:60
},
];



export interface CompareRow {
    key: string;
    label: string;   
    request: string;
    db: string;
  }
  
  export const compareData: CompareRow[] = [
    {
      key: '1',
      label: 'Фамилия',
      request: 'Рахимова',
      db: 'Рахимова',
    },
    {
      key: '2',
      label: 'Имя',
      request: 'Азиза',
      db: 'Азиза',
    },
    {
      key: '3',
      label: 'Отчество',
      request: 'Икрамовна',
      db: 'Икрамовна',
    },
    {
      key: '4',
      label: 'Серия и номер паспорта',
      request: 'AD2340483',
      db: 'AD2340483',
    },
    {
      key: '5',
      label: 'Гражданство',
      request: 'Узбекистан',
      db: 'Узбекистан',
    },
    {
      key: '6',
      label: 'Дата рождения',
      request: '31.12.1980',
      db: '31.12.1980',
    },
    {
      key: '7',
      label: 'Пол',
      request: 'Женский',
      db: 'Женский',
    },
    {
      key: '8',
      label: 'Место рождения',
      request: 'Ташкент',
      db: 'Ташкент',
    },
    {
      key: '9',
      label: 'Номер выдачи',
      request: 'IIV 26291',
      db: 'IIV 26291',
    },
    {
      key: '10',
      label: 'Дата выдачи',
      request: '12.10.2030',
      db: '12.10.2030',
    },
    {
      key: '11',
      label: 'Срок действия',
      request: '12.10.2030',
      db: '12.10.2030',
    },
  ];
  