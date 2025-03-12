import { compareData } from "../../config/moc/data";
import HFTable from "../../components/FormElements/HFTable";
import { compareColumns } from "./compareColumns";


const ComparisonFinger = () => {
  return (
    <>
      <hr className="h-px my-6 border-none bg-[#E5E7EB]" />
        <div className=" ">
          <HFTable
            columns={compareColumns}
            dataSource={compareData}
            pagination={false}
            bordered
            rowKey="key"
          />
      </div>
    </>
  );
};

export default ComparisonFinger;
