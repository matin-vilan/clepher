import { MetaDataType } from "../../types/timeSeries";
import { formatMetadata } from "../../utils/table/formatMetadata";
import Flex from "./Flex";

export default function MetaData({ metaData }: { metaData: MetaDataType }) {
  const results = formatMetadata(metaData);

  return (
    <Flex className="bg-blue-200 gap-4 p-2 justify-between">
      {results.map((item) => (
        <Flex vertical className="gap-2">
          <p className="text-gray-500">{item["key"]}</p>
          <p className="text-gray-900">{item["value"]}</p>
        </Flex>
      ))}
    </Flex>
  );
}
