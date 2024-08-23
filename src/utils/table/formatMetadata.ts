import { MetaDataType } from "../../types/timeSeries";

export function formatMetadata(metaData: MetaDataType) {
  const results = Object.keys(metaData).map((key) => ({
    key,
    value: metaData[key],
  }));
  return results;
}
