import { z } from 'zod';
export type SideNavItem = {
    name: string;
    href: string;
    icon?: any; //string; //JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};
export type Tickets = {
    uuid: string,
    title: string,
    description: string,
    status: "Opened" | "Closed",
    createdBy: string,
    // createdAt: string,
    // updatedAt: string,
    // uuid: String,
    // title: String
    // description: String 
    // status: String (Opened/Closed)
    // createdBy: String
}
export type Metadata = {
    aboutAr: String,
    aboutEn: String,
    termsAndConditionsAr: String,
    termsAndConditionsEn: String,
    privacyPolicyAr: String,
    privacyPolicyEn: String,

}

export type AdvType = {
    uuid: string | any,
    title: string,
    categoryId: string,   // (UUID)
    description: string,
    price: number,
    link?: string, //(Optional)
    images: string, //[]to be discuss later
    location: string, // (UUID)
    start: string,//(Timestamp in UTC zone )
    end: string, // (Timestamp in UTC zone )
    status: 'Pending' | 'Published' | 'Deleted' | 'Hidden',
}
export type Coupons = {
    uuid: string,// (UUID)
    code: string,
    description: string,
    start: string, //Long (Timestamp in UTC zone )
    end: string,//Long (Timestamp in UTC zone )
    usage: number, //long
    percentage: number, //float
    price: number,//Float
    status: 'Activated' | 'Deactivated',
}

