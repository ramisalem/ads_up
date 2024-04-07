import { NextRequest } from "next/server";

let res = {
    coupons: [
        {
            uuid: "587cbb127526d542096693927dabe832baef2dfd70d8fdfffe1ad7dd312e70b7",
            code: "Katia",
            usage: 2,
            description:
                "Harum sint qui quas repellendus est repudiandae. Saepe eum vero doloribus. Quasi inventore magnam est et pariatur.",
            price: 1,
            percentage: 10.0,
            status: "Activated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "a3a43dee7968f6aa540135c548271a2a40ac6075b2671e34991cd2fabfc208f6",
            code: "Frank",
            usage: 7,
            description:
                "Rerum temporibus quam. Ut voluptatem quaerat porro. Temporibus incidunt quia. Dolorum omnis excepturi consequatur. Blanditiis cumque dolorem.",
            price: 7,
            percentage: 0,
            status: "Activated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Activated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Activated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Activated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Deactivated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Deactivated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
        {
            uuid: "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
            code: "Terisa",
            usage: 9,
            description:
                "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
            price: 4,
            percentage: 3,
            status: "Deactivated",
            start: "October 21, 2016",
            end: "October 21, 2016",
        },
    ],
};

export async function GET(req: NextRequest) {
    console.log("in get coupons rout");
    // console.log(req.headers)
    return Response.json(res);
}

export async function POST(req: NextRequest) {
    const data = await req.json();

    const coupons = data ?? "";

    res.coupons.push(coupons);
    return Response.json(data);
}
export async function PUT(req: NextRequest) {
    //console.log(req.headers)
    const id = req.headers.get("param");
    console.log(id);
    let objIndex = res.coupons.findIndex((obj) => obj.uuid == id);

    if (res.coupons[objIndex].status === "Activated")
        res.coupons[objIndex].status = "Deactivated";
    else res.coupons[objIndex].status = "Activated";

    return Response.json(res.coupons[objIndex]);
}
