import { NextRequest } from "next/server";

let res = {
    aboutAr: 'نبذه عننا',
    aboutEn: 'about En',
    termsAndConditionsAr: 'الشروط والاتفاقيات',
    termsAndConditionsEn: 'term and condition en',
    privacyPolicyAr: 'سياسة الخصوصية',
    privacyPolicyEn: 'privacy en'
}
export async function GET(req: NextRequest) {
    console.log('in get metaData');

    return Response.json(res);
}
export async function PUT(req: NextRequest) {
    console.log('in update metaData');
    const data = await req.json();
    console.log(data);
    res = data;
    return Response.json(res);
}