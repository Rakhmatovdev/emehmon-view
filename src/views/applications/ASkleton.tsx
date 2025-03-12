import { Flex, Skeleton } from "antd";

const ASkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index: number) => (
        <Flex
          key={index}
          className="flex gap-x-6 items-center justify-between space-y-4 border p-3 hover:border-[#4DD282] rounded-md"
        >
          <div className="flex items-center gap-6">
            <Skeleton.Avatar size={154} shape="square" active />
            <div className="space-y-2.5">
              <Skeleton.Input active size="large" style={{ width: 200 }} />
              <Skeleton.Input active size="small" style={{ width: 250 }} />
              <Skeleton.Input active size="small" style={{ width: 220 }} />
              <Skeleton.Input active size="small" style={{ width: 180 }} />
              <Skeleton.Input active size="small" style={{ width: 200 }} />
            </div>
          </div>
          <div className="flex gap-4 flex-col p-4 bg-[#F8F8FA] rounded-lg">
            <Skeleton.Input active size="large" style={{ width: 350 }} />
            <Skeleton.Button active size="large" style={{ width: "100%", height: 40 }} />
          </div>
        </Flex>
      ))}
    </>
  );
};

export default ASkeleton;
