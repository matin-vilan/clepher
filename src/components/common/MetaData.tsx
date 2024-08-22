import { MetaDataType } from "../../types/timeSeries";
import Flex from "./Flex";

export default function MetaData({ metaData }: { metaData: MetaDataType }) {
  return (
    <Flex className="bg-blue-200 gap-4 p-2 justify-between">
      <Flex vertical className="gap-2">
        <p className="text-gray-500">Information</p>
        <p className="text-gray-900">{metaData["1. Information"]}</p>
      </Flex>
      <Flex vertical className="gap-2">
        <p className="text-gray-500">Symbol</p>
        <p className="text-gray-900">{metaData["2. Symbol"]}</p>
      </Flex>
      <Flex vertical className="gap-2">
        <p className="text-gray-500">Last Refreshed</p>
        <p className="text-gray-900">{metaData["3. Last Refreshed"]}</p>
      </Flex>
      <Flex vertical className="gap-2">
        <p className="text-gray-500">Output Size</p>
        <p className="text-gray-900">{metaData["4. Output Size"]}</p>
      </Flex>
    </Flex>
  );
}
