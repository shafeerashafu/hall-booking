 1) Creating a Room

 API : http://localhost:4000/rooms

 Render API

 Method : POST

 Example body of request : 
 {
    "roomId": 1,
    "seatsAvailable": 3,
    "amenities": ["bed","sofa"],
    "pricePerHour": 100,
    "booked": false,
    "bookings":[]
}

Example body of response (200) :
{
    "message": "Room created successfully",
    "room": {
        "roomId": 1,
        "seatsAvailable": 3,
        "amenities": [
            "bed",
            "sofa"
        ],
        "pricePerHour": 100,
        "booked": false,
        "bookings": []
    }
}

2) Booking a Room

API : http://localhost:4000/bookings

Method : POST

 Example body of request : 
 {
    "bookingId": 111,
    "customerName": "Sam",
    "date": "14/12/2023",
    "startTime": "10:00 AM",
    "endTime": "03:00 PM",
    "roomId": 1
}

Example body of response (200) :
{
    "message": "Room booked successfully",
    "booking": {
        "bookingId": 1,
        "customerName": "Sam",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM",
        "roomId": 1
    }
}

3) List all Rooms with booked data

API : http://localhost:4000/rooms/bookings

Method : GET

Example body of response (200) :
[
    {
        "roomName": "Room 1",
        "bookedStatus": "Booked",
        "bookings": [
            {
                "customerName": "Sam",
                "date": "14/12/2023",
                "startTime": "10:00 AM",
                "endTime": "03:00 PM"
            }
        ]
    },
    {
        "roomName": "Room 2",
        "bookedStatus": "Booked",
        "bookings": [
            {
                "customerName": "Ram",
                "date": "14/12/2023",
                "startTime": "10:00 AM",
                "endTime": "03:00 PM"
            }
        ]
    },
    {
        "roomName": "Room 3",
        "bookedStatus": "Booked",
        "bookings": [
            {
                "customerName": "Ram",
                "date": "14/12/2023",
                "startTime": "10:00 AM",
                "endTime": "03:00 PM"
            }
        ]
    }
]

4) List all customers with booked data

API : http://localhost:4000/customers/bookings

Method : GET

Example body of response (200) :
[
    {
        "customerName": "Sam",
        "roomName": "Room 1",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM"
    },
    {
        "customerName": "Ram",
        "roomName": "Room 2",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM"
    },
    {
        "customerName": "Ram",
        "roomName": "Room 3",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM"
    }
]

5) List how many times a customer has booked a room

API : http://localhost:4000/customers/Ram/bookings  (path params)

Method : GET
hello
Example body of response (200) :
[
    {
        "customerName": "Ram",
        "roomName": "Room 2",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM",
        "bookingId": 2
    },
    {
        "customerName": "Ram",
        "roomName": "Room 3",
        "date": "14/12/2023",
        "startTime": "10:00 AM",
        "endTime": "03:00 PM",
        "bookingId": 3
    }
]





