import { Link } from "react-router";
import headpone from "../../../../public/svg/headPhoneIcon.svg";
import phone from "../../../../public/svg/phoneIcon.svg";


const Support = () => {
  return (
    <>
      <div className="bg-[#232E40] w-[610px]  p-[100px] text-white h-[644px] pt-20   rounded-2xl ">
        <div className="m-[10px] space-y-6">
          <div className="flex justify-center items-center">
            <div
              className={
                "py-2 px-[7px] border-4 rounded-full border-gray-500/30"
              }
            >
              <img src={headpone} alt={"Headphone"} />
            </div>
          </div>
          <div className={"space-y-4"}>
            <p className={"text-[28px] font-semibold text-center"}>
              Техническая поддержка
            </p>
            <p className={"font-light text-center"}>
              Если у вас появились проблемы с доступом к платформе, вы можете
              связаться с колл-центром
            </p>
          </div>
          <div className={"space-y-4"}>
            <div
              className={
                "border border-[#3F416B] bg-[#232E40] rounded-2xl p-6 flex gap-2.5 items-center"
              }
            >
              <Link
                to={"tel:++998949760926"}
                className={"p-3 bg-[#1E293B] rounded-lg cursor-pointer"}
              >
                <img src={phone} alt={"phone"} />
              </Link>
              <div>
                <Link
                  to={"tel:++998949760926"}
                  className={"text-2xl font-semibold"}
                >
                  +998 94 976 09 26
                </Link>
                <p className={"text-[#14B8A6] font-normal"}>
                  Служба поддержки E-Mehmon.uz
                </p>
              </div>
            </div>{" "}
            <div
              className={
                "border border-[#3F416B] bg-[#232E40] rounded-2xl p-6 flex gap-2.5 items-center"
              }
            >
              <Link
                to={"tel:+998339062026"}
                className={"p-3 bg-[#1E293B] rounded-lg cursor-pointer"}
              >
                <img src={phone} alt={"phone"} />
              </Link>
              <div>
                <Link
                  to={"tel:+998339062026"}
                  className={"text-2xl font-semibold"}
                >
                  +998 33 906 20 26
                </Link>
                <p className={"text-[#14B8A6] font-normal"}>
                  Дополнительный номер
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
