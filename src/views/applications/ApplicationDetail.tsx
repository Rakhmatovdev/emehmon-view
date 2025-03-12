import ArrowLeftOutlined from "@ant-design/icons/ArrowLeftOutlined";
import { Flex, Modal, Typography } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import empty from "../../../public/svg/user.png";
import HFInput from "../../components/FormElements/HFInput";
import SearchIcon from "../../components/icons/Leading.svg";
import { Chart as ChartJS, ArcElement } from "chart.js";
import DonutChart from "./donut/MyDonut";
import { users } from "../../config/moc/data";
import ASkeleton from "./ASkleton";
import Comparison from "./Comparison";
ChartJS.register(ArcElement);

const ApplicationDetail = (): JSX.Element => {

  const { control } = useForm();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Flex vertical className="bg-[#F8FAFC] h-full w-full p-[24px]">
      <Link to={"/applications"} className=" mb-4 flex items-center">
        <ArrowLeftOutlined className="text-[#3276FF] w-5 h-5" />
        <p className="text-sm">Назад</p>
      </Link>
      <Flex className="grid grid-cols-3 gap-4">
        <Flex className="flex flex-col col-span-2">
          <Flex className="p-6 space-y-4  bg-[#FFF] overflow-y-scroll grid grid-cols-1 scroll-none scroll-smooth rounded-2xl ">
            <Typography className="text-[#232E40] text-[24px] font-[700]">
              База данных похожих людей
            </Typography>
            <Typography className="text-[#6B7280] font-medium">
              Найдите в базе наиболее похожего человека, сравните фото и
              прикрепите его ID.
            </Typography>
            <HFInput
              control={control}
              name="last_name"
              placeholder="Поиск"
              className="border placeholder:text-[#6B7280] placeholder:font-medium "
              prefix={<img src={SearchIcon} className="" alt="search Icon" />}
            />
            <div className="overflow-y-scroll scroll-smooth space-y-4 scroll-none h-[calc(100vh-330px)]">
              {loading ? (
                <ASkeleton />
              ) : (
                users?.map((user) => (
                  <Flex className="flex    gap-x-6 items-center justify-between space-y-4 border  p-3 hover:border-[#4DD282] rounded-md ">
                    <div className="flex items-center gap-6  ">
                      <div className="bg-slate-200 w-[154px] h-[154px] rounded-md ">
                        <img className="" src={user.avatar} alt="user" />
                      </div>
                      <div className="space-y-2.5">
                        <p className="text-[#232E40] text-xl font-semibold my-0">
                          {user.name}
                        </p>
                        <p className="text-[#6B7280]">
                          Гражданство:{" "}
                          <span className="text-[#1F2937] font-medium">
                            {user.citizenship}
                          </span>
                        </p>
                        <p className="text-[#6B7280]">
                          Серия и номер паспорта:{" "}
                          <span className="text-[#1F2937] font-medium">
                            {user.passport}
                          </span>
                        </p>
                        <p className="text-[#6B7280]">
                          Дата рождения:{" "}
                          <span className="text-[#1F2937] font-medium">
                            {user.birthday}
                          </span>
                        </p>
                        <p className="text-[#6B7280]">
                          Национальность:{" "}
                          <span className="text-[#1F2937] font-medium">
                            {user.nationality}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4  flex-col p-4 bg-[#F8F8FA] rounded-lg ">
                      <div className="flex gap-x-3 items-center  ">
                        <div style={{ width: "64px", margin: "0 auto" }}>
                          <DonutChart percentage={user.same} />
                        </div>
                        <div className="w-[300px] py-2.5">
                          Процент сходства фотографии из заявки с базой данных
                        </div>
                      </div>
                      <div  className="grid grid-cols-2 w-full gap-3 items-center text-sm">
                        <div onClick={()=>setShow(true)}  className="py-3 border flex-1 text-center rounded-lg text-[#2563EB] border-[#2563EB] font-semibold cursor-pointer">
                          Сравнить
                        </div>
                        <div
                          className="py-3 border flex-1 text-center rounded-lg bg-[#2563EB] text-white font-semibold cursor-pointer"
                          onClick={() => console.log(user.id)}
                        >
                          Прикрепить ID
                        </div>
                      </div>
                    </div>
                  </Flex>
                ))
              )}
            </div>{" "}
          </Flex>
        </Flex>

        <Flex className="col-span-1 space-y-6 p-6 bg-[#FFF] flex flex-col overflow-y-scroll px-6 py-9 scroll-none h-[calc(100vh-100px)] scroll-smooth rounded-2xl overflow-hidden">
          <div className="flex justify-center space-y-6 items-center flex-col">
            <img
              src={empty}
              alt="empty"
              className="rounded-xl bg-lightgray bg-no-repeat w-[160px] h-[160px] bg-slate-200"
              style={{
                backgroundPosition: "-56.034px 0px",
                backgroundSize: "170.668% 113.75%",
              }}
            />
            <div className="space-y-2">
              <Typography className="text-[#1F2937] text-center text-[24px] font-[600] leading-[30px]">
                Рахимова Азиза Икрамовна
              </Typography>
              <Typography className="text-[#2563EB] hover:underline text-center font-medium leading-[30px]">
                rahimova_a@gmail.com
              </Typography>
            </div>
          </div>

          <div className="h-px w-full bg-[#E5E7EB]" />

          <div className="space-y-2">
            <p className="text-[18px] font-semibold">Паспортные данные</p>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Серия и номер паспорта
              </p>
              <p className="font-medium text-base">AD2430483</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Гражданство
              </p>
              <p className="font-medium text-base">Узбекистан</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">ПИНФЛ</p>
              <p className="font-medium text-base">31210202029182</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Дата рождения
              </p>
              <p className="font-medium text-base">31.12.1980</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">Пол</p>
              <p className="font-medium text-base">AD2430483</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Серия и номер паспорта
              </p>
              <p className="font-medium text-base">Женский</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Национальность
              </p>
              <p className="font-medium text-base">Узбечка</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Место рождения
              </p>
              <p className="font-medium text-base">Ташкент</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Место выдачи
              </p>
              <p className="font-medium text-base">IIV 26291</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Дата выдачи
              </p>
              <p className="font-medium text-base">12.10.2020</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Дата истечения срока действия
              </p>
              <p className="font-medium text-base">12.10.2030</p>
            </div>
          </div>
          <div className="h-px w-full bg-[#E5E7EB]" />
          <div className="space-y-2">
            <p className="text-[18px] font-semibold">Об иммигранте</p>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                ID иммигранта
              </p>
              <p className="font-medium text-base">123456789101112</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium text-base text-[#6B7280]">
                Номер телефона
              </p>
              <p className="font-medium text-base">+998 94 976 09 26</p>
            </div>
          </div>
        </Flex>
      </Flex>
      <Modal
      onClose={() => setShow(false)}
      visible={show}
      title={<p className="text-2xl font-bold   text-[#1F2937]">Сравнение анкет иммигрантов</p> }
      footer={null}
      width={1250}
      className="rounded-2xl"
      height={665}
      onCancel={() => setShow(false)}
      >
        <Comparison/>
      </Modal>
    </Flex>
  );
};

export default ApplicationDetail;
