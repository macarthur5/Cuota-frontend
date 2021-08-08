export type TListEntry = {
  name: string;
  path: string;
  isFile?: boolean;
};

export type TListResponse = {
  status: "OK" | "FAIL";
  list: TListEntry[];
};
