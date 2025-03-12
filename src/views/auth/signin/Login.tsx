import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Input, Modal, notification, Spin } from "antd";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router";
import logo from "../../../../public/logo.svg";
import emehmon from "../../../../public/svg/EMEHMON.svg";
import headphone from "../../../../public/svg/headphone.svg";
import uzinfocom from "../../../../public/svg/лого 20.svg";
import registon from "../../../../public/video/registon.mp4";
import Lock from "../lock/Lock.tsx";
import Support from "../support/Support.tsx";
import { useMutation } from "@tanstack/react-query";
import AuthService from "../../../config/services/auth.service.ts";
import { AxiosError } from "axios";

interface LoginResponse {
    access: string;
    refresh: string;
}
interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

type Inputs = {
  username: string;
  password: string;
};
const token = localStorage.getItem("accessToken");


export default function Login() {
  const [supportModal, setSupportModal] = useState(false);
  const [lockModal, setLockModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const { data, mutate,isPending } = useMutation<LoginResponse, AxiosError<ErrorResponse>, Inputs>({
    mutationKey: ["login"],
    mutationFn: AuthService.login,
    onSuccess: () => {
     notification.success({message: "Welcome back!"});
      navigate("/");  
    },
  });
  
console.log(data);

  const onSubmit = (data: Inputs) => {
    console.log("Form ma’lumotlari:", data);
    mutate(data)
  };

 return (<>
   {token? <div className="flex w-full h-full justify-center items-center mt-96"> <Spin className="" /></div>:<div className={`relative `}>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={registon} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-20 absolute mx-auto w-full ">
          <section className="bg-transparent text-white">
            <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
              <div className="w-full rounded-2xl sm:max-w-[570px] xl:p-01">
                <div className="space-y-45 md:space-y-6 wrapper p-[100px]">
                  <div className="flex items-center justify-center gap-3">
                    <img src={logo} alt="logo" />
                    <img src={emehmon} alt="emehmon" />
                  </div>
                  <div>
                    <h4 className="text-[28px] font-semibold text-center">
                      Добро пожаловать!
                    </h4>
                    <h4 className="text-base mt-4 font-light text-center">
                      Управление отелями: Все операции легко и быстро с единым
                      интерфейсом
                    </h4>
                  </div>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <label
                        htmlFor="floating_login"
                        className="text-sm font-medium"
                      >
                        Электронная почта
                      </label>
                      <Controller
                        name="username"
                        control={control}
                        rules={{ required: "Данный пользователь не найден" }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            status={errors.username ? "error" : ""}
                            id="floating_login"
                            className="bg-transparent mt-2.5 px-4 py-3.5 placeholder:text-[15px] font-medium border border-[#6B7280] focus:border-[#3B82F6] rounded-lg shinput"
                            placeholder="Введите почту"
                          />
                        )}
                      />
                      {errors.username && (
                        <span className="text-rose-500">
                          {errors.username.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm font-medium">
                        <label
                          htmlFor="floating_password"
                          className="font-medium"
                        >
                          Пароль
                        </label>
                        <h4
                          className="text-[#6B7280] z-10 hover:underline cursor-pointer"
                          onClick={() => setLockModal(true)}
                        >
                          Забыли пароль?
                        </h4>
                      </div>
                      <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Неверный пароль" }}
                        render={({ field }) => (
                          <Input.Password
                            {...field}
                            status={errors.password ? "error" : ""}
                            id="floating_password"
                            className="bg-transparent    mt-2.5 px-4 py-3.5 placeholder:text-[18px] text-[15px] text-white font-medium border border-[#6B7280]  rounded-lg shinput"
                            placeholder="Введите пароль"
                            iconRender={(visible) =>
                              visible ? (
                                <EyeOutlined
                                  className={"text-xl text-white"}
                                  style={{ color: "white" }}
                                />
                              ) : (
                                <EyeInvisibleOutlined
                                  style={{ color: "white" }}
                                />
                              )
                            }
                          />
                        )}
                      />
                      {errors.password && (
                        <span className="text-rose-500">
                          {errors.password.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      
                      disabled={!watch("username") || !watch("password") || isPending}
                      className="w-full text-white disabled:cursor-not-allowed bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-[#6B7280] disabled:hover:bg-[#6A7280] disabled:focus:ring-[#6A7280]"
                    >
                      Войти в аккаунт
                    </button>
                  </form>

                  <div
                    className="flex items-center justify-center py-3.5"
                    onClick={() => {
                      setSupportModal(true);
                    }}
                  >
                    <div className="flex gap-2.5 text-sm font-semibold cursor-pointer">
                      <img src={headphone} alt="headphone" />
                      <p>Связаться с поддержкой</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={"absolute z-10 blur-sky"} />
      <div
        className={
          "absolute flex text-white bottom-4 w-full  justify-center lg:bottom-[54px] z-20 gap-2 items-center "
        }
      >
        <p className={"font-light text-white/50"}>Powered by</p>
        <Link to={"https://uzinfocom.uz/"} target={"_blank"}>
          {" "}
          <img
            className={"cursor-pointer"}
            src={uzinfocom}
            alt={"creator and designer"}
          />
        </Link>
      </div>
      <Modal
        open={supportModal}
        footer={null}
        title={false}
        // closeIcon={false}
        className="transparent-modal  rounded-2xl"
        onCancel={() => setSupportModal(false)}
        onClose={() => setSupportModal(false)}
        width={610}
      >
        <Support />
      </Modal>
      
      <Modal
        open={lockModal}
        title={false}
        footer={null}
        className="transparent-modal   rounded-2xl"
        onCancel={() => setLockModal(false)}
        onClose={() => setLockModal(false)}
      >
        <Lock />
      </Modal>

      {/* {lock && <kLock />} */}
    </div>} 
  </>);
}
