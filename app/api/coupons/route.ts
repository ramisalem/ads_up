

export async function GET() {
    let res = {
        "coupons": [
            {
                "uuid": "587cbb127526d542096693927dabe832baef2dfd70d8fdfffe1ad7dd312e70b7",
                "code": "Katia",
                "usage": 2,
                "description": "Harum sint qui quas repellendus est repudiandae. Saepe eum vero doloribus. Quasi inventore magnam est et pariatur.",
                "price": 1,
                "precentage": 1,
                "status": "ACTIVE",
                "start": "October 21, 2016",
                "end": "October 21, 2016"
            },
            {
                "uuid": "a3a43dee7968f6aa540135c548271a2a40ac6075b2671e34991cd2fabfc208f6",
                "code": "Frank",
                "usage": 7,
                "description": "Rerum temporibus quam. Ut voluptatem quaerat porro. Temporibus incidunt quia. Dolorum omnis excepturi consequatur. Blanditiis cumque dolorem.",
                "price": 7,
                "precentage": 0,
                "status": "ACTIVE",
                "start": "October 21, 2016",
                "end": "October 21, 2016"
            },
            {
                "uuid": "aefa44dd6a2f50792a70f2dfb164341e185358ab2091acdc79b3d08d29f412b4",
                "code": "Terisa",
                "usage": 9,
                "description": "Debitis dolor dicta quae. Voluptas in sunt quidem dolor ab reiciendis et. Est minus et et pariatur id ut nemo.",
                "price": 4,
                "precentage": 3,
                "status": "ACTIVE",
                "start": "October 21, 2016",
                "end": "October 21, 2016"
            },
        ]
    }
    return Response.json(res);
}

export async function POST() {

}