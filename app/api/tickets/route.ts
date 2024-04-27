import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

let res = {
    "tickets": [
        {
            "title": "title 1",
            "description": "description 1",
            "status": "Opened",
            "createdBy": "Gorgeous",
            "uuid": "1"
        },
        {
            "title": "title 2",
            "description": "description 2",
            "status": "Closed",
            "createdBy": "Nepal",
            "uuid": "2"
        },
        {
            "title": "title 3",
            "description": "description 3",
            "status": "Opened",
            "createdBy": "Operations",
            "uuid": "3"
        },
        {
            "title": "title 4",
            "description": "description 4",
            "status": "Opened",
            "createdBy": "Legacy",
            "uuid": "4"
        },
        {
            "title": "title 5",
            "description": "description 5",
            "status": "Opened",
            "createdBy": "Estonia",
            "uuid": "5"
        },
        {
            "title": "title 6",
            "description": "description 6",
            "status": "Closed",
            "createdBy": "Cab",
            "uuid": "6"
        },
        {
            "title": "title 7",
            "description": "description 7",
            "status": "Opened",
            "createdBy": "synthesizing",
            "uuid": "7"
        },
        {
            "title": "title 8",
            "description": "description 8",
            "status": "Closed",
            "createdBy": "Bicycle",
            "uuid": "8"
        },
        {
            "title": "title 9",
            "description": "description 9",
            "status": "Opened",
            "createdBy": "blah",
            "uuid": "9"
        },
        {
            "title": "title 10",
            "description": "description 10",
            "status": "Opened",
            "createdBy": "Health",
            "uuid": "10"
        },
        {
            "title": "title 11",
            "description": "description 11",
            "status": "Opened",
            "createdBy": "Plastic",
            "uuid": "11"
        },
        {
            "title": "title 12",
            "description": "description 12",
            "status": "Closed",
            "createdBy": "male",
            "uuid": "12"
        },
        {
            "title": "title 13",
            "description": "description 13",
            "status": "Closed",
            "createdBy": "Iowa",
            "uuid": "13"
        },
        {
            "title": "title 14",
            "description": "description 14",
            "status": "Closed",
            "createdBy": "Hyundai",
            "uuid": "14"
        },
        {
            "title": "title 15",
            "description": "description 15",
            "status": "Closed",
            "createdBy": "Persevering",
            "uuid": "15"
        },
        {
            "title": "title 16",
            "description": "description 16",
            "status": "Opened",
            "createdBy": "Rock",
            "uuid": "16"
        },
        {
            "title": "title 17",
            "description": "description 17",
            "status": "Opened",
            "createdBy": "infomediaries",
            "uuid": "17"
        },
        {
            "title": "title 18",
            "description": "description 18",
            "status": "Opened",
            "createdBy": "instead",
            "uuid": "18"
        },
        {
            "title": "title 19",
            "description": "description 19",
            "status": "Opened",
            "createdBy": "cliff",
            "uuid": "19"
        },
        {
            "title": "title 20",
            "description": "description 20",
            "status": "Closed",
            "createdBy": "South",
            "uuid": "20"
        },
        {
            "title": "title 21",
            "description": "description 21",
            "status": "Closed",
            "createdBy": "Praseodymium",
            "uuid": "21"
        },
        {
            "title": "title 22",
            "description": "description 22",
            "status": "Closed",
            "createdBy": "Bohrium",
            "uuid": "22"
        },
        {
            "title": "title 23",
            "description": "description 23",
            "status": "Closed",
            "createdBy": "DRAM",
            "uuid": "23"
        },
        {
            "title": "title 24",
            "description": "description 24",
            "status": "Closed",
            "createdBy": "indigo",
            "uuid": "24"
        },
        {
            "title": "title 25",
            "description": "description 25",
            "status": "Opened",
            "createdBy": "Gloves",
            "uuid": "25"
        },
        {
            "title": "title 26",
            "description": "description 26",
            "status": "Opened",
            "createdBy": "Tools",
            "uuid": "26"
        },
        {
            "title": "title 27",
            "description": "description 27",
            "status": "Opened",
            "createdBy": "hic",
            "uuid": "27"
        },
        {
            "title": "title 28",
            "description": "description 28",
            "status": "Opened",
            "createdBy": "Kia",
            "uuid": "28"
        },
        {
            "title": "title 29",
            "description": "description 29",
            "status": "Closed",
            "createdBy": "lime",
            "uuid": "29"
        },
        {
            "title": "title 30",
            "description": "description 30",
            "status": "Opened",
            "createdBy": "Delaware",
            "uuid": "30"
        },
        {
            "title": "title 31",
            "description": "description 31",
            "status": "Closed",
            "createdBy": "whoever",
            "uuid": "31"
        },
        {
            "title": "title 32",
            "description": "description 32",
            "status": "Closed",
            "createdBy": "Graphic",
            "uuid": "32"
        },
        {
            "title": "title 33",
            "description": "description 33",
            "status": "Opened",
            "createdBy": "Representative",
            "uuid": "33"
        },
        {
            "title": "title 34",
            "description": "description 34",
            "status": "status 34",
            "createdBy": "Thulium",
            "uuid": "34"
        },
        {
            "title": "title 35",
            "description": "description 35",
            "status": "status 35",
            "createdBy": "Maserati",
            "uuid": "35"
        },
        {
            "title": "title 36",
            "description": "description 36",
            "status": "status 36",
            "createdBy": "Guadeloupe",
            "uuid": "36"
        },
        {
            "title": "title 37",
            "description": "description 37",
            "status": "status 37",
            "createdBy": "out",
            "uuid": "37"
        },
        {
            "title": "title 38",
            "description": "description 38",
            "status": "status 38",
            "createdBy": "Tin",
            "uuid": "38"
        },
        {
            "title": "title 39",
            "description": "description 39",
            "status": "status 39",
            "createdBy": "IB",
            "uuid": "39"
        },
        {
            "title": "title 40",
            "description": "description 40",
            "status": "status 40",
            "createdBy": "International",
            "uuid": "40"
        },
        {
            "title": "title 41",
            "description": "description 41",
            "status": "status 41",
            "createdBy": "indexing",
            "uuid": "41"
        },
        {
            "title": "title 42",
            "description": "description 42",
            "status": "Closed",
            "createdBy": "female",
            "uuid": "42"
        },
        {
            "title": "title 43",
            "description": "description 43",
            "status": "Closed",
            "createdBy": "Gasoline",
            "uuid": "43"
        },
        {
            "title": "title 44",
            "description": "description 44",
            "status": "Closed",
            "createdBy": "purple",
            "uuid": "44"
        },
        {
            "title": "title 45",
            "description": "description 45",
            "status": "Closed",
            "createdBy": "transmitting",
            "uuid": "45"
        },
        {
            "title": "title 46",
            "description": "description 46",
            "status": "Closed",
            "createdBy": "habit",
            "uuid": "46"
        },
        {
            "title": "title 47",
            "description": "description 47",
            "status": "Opened",
            "createdBy": "steradian",
            "uuid": "47"
        },
        {
            "title": "title 48",
            "description": "description 48",
            "status": "Opened",
            "createdBy": "azure",
            "uuid": "48"
        },
        {
            "title": "title 49",
            "description": "description 49",
            "status": "Opened",
            "createdBy": "hack",
            "uuid": "49"
        }
    ]
};

export async function GET() {
    return Response.json(res);
}

export async function PUT(req: NextRequest) {
    //console.log(req.headers)
    const id = req.headers.get('param');
    //console.log(id);
    let objIndex = res.tickets.findIndex(obj => obj.uuid == id);


    res.tickets[objIndex].status = "Closed"
    revalidatePath('/');
    return Response.json(res);
}
