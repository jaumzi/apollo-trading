import { META_ROBOTS } from "./MetaHeaders";

// other constants
export const NAME_APP = 'Apollo Trading & Investing';

export const META_DEFAULT_KEYWORDS = ["Apollo", "Trading", "Investing"];
export const META_DEFAULT_ROBOTS = [META_ROBOTS.ALL];

// export const BASE_URL = process.env.NODE_ENV == "production" && navigator.userAgent != "ReactSnap"
//   ? "/"
//   : "http://xxx.yy/rest-api";

export enum EnumPermissions {
  ADMIN = 1,
  SUPORT = 2,
  BASIC = 3,
};

export const VALUE_OUT_OF_INDEX = -1;
