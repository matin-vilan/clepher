import { MetaDataType } from "../../types/timeSeries";
import { formatMetadata } from "../../utils/table/formatMetadata";
import Flex from "./Flex";

export default function MetaData({ metaData }: { metaData: MetaDataType }) {
  const results = formatMetadata(metaData);

  return (
    <Flex className="bg-white rounded-lg shadow my-4 p-2 dark:bg-gray-800">
      {results.map((item) => (
        <Flex
          vertical
          className="gap-2 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
        >
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-500">
            {item["key"]}
          </p>
          <p className="text-sm text-gray-500 sm:text-center dark:text-gray-200">
            {item["value"]}
          </p>
        </Flex>
      ))}
    </Flex>
  );
}
