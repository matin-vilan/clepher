import { ChangeEventHandler } from "react";
import { GetApiInterval, GetApiSymbol } from "../../types/req";
import Flex from "./Flex";
import Select from "./Select";

export default function Filters({
  onChange,
}: {
  onChange: ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div className="py-2 bg-gray-200 p-2 rounded-sm border flex flex-col gap-4">
      <p className="text-blue-700">Filters</p>
      <div className="flex gap-4">
        <Flex vertical className="gap-3">
          <p>Select Symbol</p>
          <Select
            name="symbol"
            onChange={onChange}
            options={[
              {
                name: "IBN",
                value: GetApiSymbol.IBM,
              },
            ]}
          />
        </Flex>
        <Flex vertical className="gap-3">
          <p>Select Interval</p>
          <Select
            name="interval"
            defaultValue={GetApiInterval["5MIN"]}
            onChange={onChange}
            options={[
              {
                name: "1MIN",
                value: GetApiInterval["1MIN"],
              },
              {
                name: "5MIN",
                value: GetApiInterval["5MIN"],
              },
              {
                name: "15MIN",
                value: GetApiInterval["15MIN"],
              },
              {
                name: "30MIN",
                value: GetApiInterval["30MIN"],
              },
              {
                name: "60MIN",
                value: GetApiInterval["60MIN"],
              },
            ]}
          />
        </Flex>
        <Flex vertical className="gap-3">
          <p>Select Adjusted</p>
          <Select
            name="adjusted"
            defaultValue={"true"}
            onChange={onChange}
            options={[
              {
                name: "TRUE",
                value: true,
              },
              {
                name: "FALSE",
                value: false,
              },
            ]}
          />
        </Flex>
      </div>
    </div>
  );
}
