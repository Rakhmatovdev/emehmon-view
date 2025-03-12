type Status = 'Доработан' | 'Отклонен' | 'Новый' | 'Процессе'| 'Одобрено'| 'Возврат'
const useColor = (status: Status) => {
   let bgColor=''
        switch (status) {
            case 'Отклонен':
                bgColor=('text-[#991B1B] bg-[#FECACA]');
                break;
            case 'Новый':
                bgColor=('text-[#777E90] bg-[#F8FAFC]');
                break;
            case 'Процессе':
                bgColor=('text-[#EAB308] bg-[#FEF9C3]');
                break;
            case 'Доработан':
                bgColor=('text-[#2563EB] bg-[#DBEAFE]');
                break;
            case 'Одобрено':
                bgColor=('text-[#4DD282] bg-[#4DD2821F]');
                break;
            case 'Возврат':
                bgColor=('text-[#1F2937] bg-[#F3F4F6]');
                break;
            default:
                bgColor=('');
        }
    return bgColor;
};

export default useColor;