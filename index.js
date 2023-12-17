const express = require('express');
const app = express();
app.use(express.json());


let rooms = [];
let bookings = [];

// 1) Creating a Room
app.post('/rooms', (req, res) => {
    const { seatsAvailable, amenities, pricePerHour } = req.body;
    const newRoom = {
        roomId: rooms.length + 1,
        seatsAvailable,
        amenities,
        pricePerHour,
        booked: false,
        bookings: []
    };
    rooms.push(newRoom);
    res.json({ message: 'Room created successfully', room: newRoom });
});

// 2) Booking a Room
app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const room = rooms.find(room => room.roomId === roomId);

    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }

    if (room.booked) {
        return res.status(400).json({ message: 'Room is already booked' });
    }

    

    const newBooking = {
        bookingId: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId,
        bookingDate: new Date(),
        bookingStatus: 'Confirmed'
    };
    room.booked = true;
    room.bookings.push(newBooking);
    bookings.push(newBooking);
    res.json({ message: 'Room booked successfully', booking: newBooking });
});

// 3) List all Rooms with booked data
app.get('/rooms/bookings', (req, res) => {
    const roomsWithBookings = rooms.map(room => {
        return {
            roomName: `Room ${room.roomId}`,
            bookedStatus: room.booked ? 'Booked' : 'Available',
            bookings: room.bookings.map(booking => ({
                customerName: booking.customerName,
                date: booking.date,
                startTime: booking.startTime,
                endTime: booking.endTime
            }))
        };
    });
    res.json(roomsWithBookings);
});

// 4) List all customers with booked data
app.get('/customers/bookings', (req, res) => {
    const customersWithBookings = bookings.map(booking => ({
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime
    }));
    res.json(customersWithBookings);
});

// 5) List how many times a customer has booked a room
app.get('/customers/:customerName/bookings', (req, res) => {
    const customerName = req.params.customerName;
    const customerBookings = bookings.filter(booking => booking.customerName === customerName)
        .map(booking => ({
            customerName: booking.customerName,
            roomName: `Room ${booking.roomId}`,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking.bookingId,
            bookingDate: booking.bookingDate,
            bookingStatus: booking.bookingStatus
        }));
    res.json(customerBookings);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
