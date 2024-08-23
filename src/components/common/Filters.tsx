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
    <div className="bg-white rounded-lg shadow my-4 p-2 dark:bg-gray-800">
      <p className="text-gray-200">Filters</p>
      <div className="flex gap-4">
        <Flex
          vertical
          className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            Select Symbol
          </p>
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
        <Flex
          vertical
          className="gap-3 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            Select Interval
          </p>
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
        <Flex
          vertical
          className="gap-3 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            Select Adjusted
          </p>
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
