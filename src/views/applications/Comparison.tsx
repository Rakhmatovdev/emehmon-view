import { compareData } from "../../config/moc/data";
import HFTable from "../../components/FormElements/HFTable";
import user from "../../../public/svg/user.png";
import DonutChart from "./donut/MyDonut";
import { compareColumns } from "./compareColumns"; 

const Comparison = () => {
  return (
    <>
      <hr className="h-px my-6 border-none bg-[#E5E7EB]" />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <HFTable
            columns={compareColumns}
            dataSource={compareData}
            pagination={false}
            bordered
            rowKey="key"
          />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={user}
                alt=""
                className="rounded-lg bg-slate-200 w-full"
              />
              <p className="mt-3 text-center text-sm font-medium">
                Фото с заявки
              </p>
            </div>
            <div>
              <img
                src={user}
                alt=""
                className="rounded-lg bg-slate-200 w-full"
              />
              <p className="mt-3 text-center text-sm font-medium">
                Фото с базы данных
              </p>
            </div>
          </div>
          <hr className="border-none h-px bg-[#E5E7EB]" />

          <div className="flex gap-x-3 items-center bg-[#F8F8FA] p-4 rounded-lg">
            <div style={{ width: "64px", margin: "0 auto" }}>
              <DonutChart percentage={99} />
            </div>
            <div className="w-[300px] py-2.5">
              Процент сходства фотографии из заявки с базой данных
            </div>
          </div>

          <div className="flex gap-x-3 items-center bg-[#F8F8FA] p-4 rounded-lg">
            <div style={{ width: "64px", margin: "0 auto" }}>
              <DonutChart percentage={100} />
            </div>
            <div className="w-[300px] py-2.5">
              Процент сходства фотографии из заявки с базой данных
            </div>
          </div>

          <button className="border border-[#2563EB] w-full py-3 rounded-lg text-[#2563EB] text-sm font-semibold">
            Сравнить отпечатки
          </button>
          <button className="w-full py-3 rounded-lg bg-[#2563EB] text-white text-sm font-semibold">
            Прикрепить ID
          </button>
        </div>
      </div>
    </>
  );
};

export default Comparison;
