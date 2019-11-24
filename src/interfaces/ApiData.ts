import SingleBarData from "./SingleBarData";

export interface ApiData {
  name: string;
  provider: number;
  user: number;
}

const defaultColors = {
  left: "#007cff",
  right: "#ffe944"
};

export const apiToSingleBarData = (apiData: ApiData) => {
  let data: SingleBarData = {
    title: apiData.name,
    left: {
      color: defaultColors.left,
      value: apiData.provider
    },
    right: {
      color: defaultColors.right,
      value: apiData.user
    }
  };
  return data;
};
