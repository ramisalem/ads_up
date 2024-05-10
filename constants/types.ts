import {
  CupounsSchema,
  MetaDataSchema,
  UserRole as user_role,
} from "@/schemas";
import { z } from "zod";

export enum userRole {
  ADMIN,
  USER,
}

export type UserRole = z.infer<typeof user_role>;

export type SideNavItem = {
  name: string;
  href: string;
  icon?: any; //string; //JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
export type Tickets = {
  uuid: string;
  title: string;
  description: string;
  status: "Opened" | "Closed";
  createdBy: string;
};
export type Metadata = z.infer<typeof MetaDataSchema>;
// export type Metadata = {
//     aboutAr?: String,
//     aboutEn?: String,
//     termsAndConditionsAr?: String,
//     termsAndConditionsEn?: String,
//     privacyPolicyAr?: String,
//     privacyPolicyEn?: String,

// }

const AdvStatus = z.enum(["Pending", "Published", "Deleted", "Hidden"]);
export type AdvType = {
  uuid: string | any;
  title: string;
  categoryId: string; // (UUID)
  description: string;
  price: number;
  link?: string; //(Optional)
  images: string; //[]to be discuss later
  location: string; // (UUID)
  start: string; //(Timestamp in UTC zone )
  end: string; // (Timestamp in UTC zone )
  status: z.infer<typeof AdvStatus>; //'Pending' | 'Published' | 'Deleted' | 'Hidden',
};
export type Coupons = z.infer<typeof CupounsSchema>;
// export type Coupons = {
//     uuid?: string,// (UUID)
//     code: string,
//     description: string,
//     start: Date, //Long (Timestamp in UTC zone )
//     end: Date,//Long (Timestamp in UTC zone )
//     usage: number, //long
//     percentage: number, //float
//     price: number,//Float
//     status: 'Activated' | 'Deactivated',
// }
