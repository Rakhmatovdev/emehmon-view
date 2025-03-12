import lock from "../../../../public/svg/lockIcon.svg";
import phone from '../../../../public/svg/phoneIcon.svg'
import {Link} from "react-router";

const Lock = () => {
    return (<>
        <div className={'z-50  text-white w-[610px] h-[644px] bg-[#232E40] rounded-2xl'}>
            <div className={'p-[100px] space-y-6'}>
                <div className={'flex justify-center items-center'}><div className={'px-[11px] py-2 border-4 rounded-full border-gray-500/30'}><img src={lock} alt={'Lock'}/></div></div>
                <div className={'space-y-4'}>
                    <p className={'text-[28px] font-semibold text-center'}>Забыли пароль?</p>
                    <p className={'font-light text-center'}>Вам необходимо связаться с технической поддержкой E-Mehmon.uz</p>
                </div>
                <div className={'space-y-4'}>
                    <div className={'border border-[#3F416B] bg-[#232E40] rounded-2xl p-6 flex gap-2.5 items-center'}>
                        <Link to={'tel:++998949760926'} className={'p-3 bg-[#1E293B] rounded-lg cursor-pointer'}><img src={phone} alt={'phone'}/></Link>
                        <div>
                            <Link to={'tel:++998949760926'} className={'text-2xl font-semibold'}>+998 94 976 09 26</Link>
                            <p className={'text-[#14B8A6] font-normal'}>Служба поддержки E-Mehmon.uz</p>
                        </div>
                    </div> <div className={'border border-[#3F416B] bg-[#232E40] rounded-2xl p-6 flex gap-2.5 items-center'}>
                    <Link to={'tel:+998339062026'} className={'p-3 bg-[#1E293B] rounded-lg cursor-pointer'}><img src={phone} alt={'phone'}/></Link>
                    <div>
                        <Link to={'tel:+998339062026'} className={'text-2xl font-semibold'}>+998 33 906 20 26</Link>
                        <p className={'text-[#14B8A6] font-normal'}>Дополнительный номер</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
        
   </> );
};

export default Lock;