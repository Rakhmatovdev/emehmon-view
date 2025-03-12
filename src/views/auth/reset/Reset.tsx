import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router";
import registon from "../../../../public/video/registon.mp4";
import logo from '../../../../public/logo.svg';
import emehmon from '../../../../public/svg/EMEHMON.svg';
import { Input } from 'antd';
import { EyeInvisibleOutlined,EyeOutlined} from '@ant-design/icons';
type InputReset = {
    password: string;
    cpassword: string;
};
// const token = localStorage.getItem('accessToken');
export default function Reset() {
    const { control, handleSubmit, formState: { errors },watch } = useForm<InputReset>();
    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (token) {
    //         navigate('/');
    //     }
    // },[token, navigate]);

    // if (token) {
    //     return null;
    // }

    const onSubmit = (data: InputReset) => {
        console.log('Form ma’lumotlari:', data);
    };
    return (
        <div className={"relative"}>
      <div className="video-container ">
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
                                Создайте пароль
                            </h4>
                            <h4 className="text-base mt-4 font-light text-center">
                                Вам необходимо придумать новый пароль
                            </h4>
                        </div>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="floating_login" className="text-sm font-medium">Придумайте пароль</label>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: "Данный строка не должна быть пустой" }}
                                    render={({ field }) => (
                                        <Input.Password
                                            {...field}
                                            status={errors.password ? 'error' : ''}
                                            type="password"
                                            id="floating_password"
                                            className="bg-transparent    mt-2.5 px-4 py-3.5 placeholder:text-[18px] text-[15px] text-white font-medium border border-[#6B7280]  rounded-lg shinput"
                                            placeholder="Введите почту"
                                            iconRender={(visible) => (visible ? <EyeOutlined className={'text-xl text-white'} style={{color:"white"}} /> : <EyeInvisibleOutlined style={{color:"white"}} />)}
                                        />
                                    )}
                                />
                                {errors.password && <span className="text-rose-500">{errors.password.message}</span>}
                            </div>

                            <div>

                                    <label htmlFor="floating_password" className="font-medium text-sm">Подтвердите пароль</label>


                                <Controller
                                    name="cpassword"
                                    control={control}
                                    rules={{ required: "Пароль не соответствует" }}
                                    render={({ field }) => (
                                        <Input.Password
                                            {...field}
                                            status={errors.cpassword ? 'error' : ''}
                                            id="floating_cpassword"
                                            className="bg-transparent    mt-2.5 px-4 py-3.5 placeholder:text-[18px] text-[15px] text-white font-medium border border-[#6B7280]  rounded-lg shinput"
                                            placeholder="Введите пароль"
                                            iconRender={(visible) => (visible ? <EyeOutlined className={'text-xl text-white'} style={{color:"white"}} /> : <EyeInvisibleOutlined style={{color:"white"}} />)}
                                        />
                                    )}
                                />
                                {errors.cpassword && <span className="text-rose-500">{errors.cpassword.message}</span>}
                            </div>

                            <button type="submit" disabled={!watch('cpassword') || !watch('password')}
                                    className="w-full text-white disabled:cursor-not-allowed bg-[#2563EB] hover:bg-[#1563EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-[#6B7280] disabled:hover:bg-[#6A7280] disabled:focus:ring-[#6A7280]">
                                Войти в аккаунт
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
        </div>
      </div>
      <div className={"absolute z-10 blur-sky"} />
    

    </div>
    );
}
