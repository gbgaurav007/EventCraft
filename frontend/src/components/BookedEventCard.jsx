const BookedEventCard = ({ event }) => {
    return (
      <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-6">
        <img src={event.image} alt={event.name} className="w-32 h-32 object-cover rounded" />
        <div>
          <h2 className="text-xl font-bold">{event.name}</h2>
          <p className="text-gray-600">{event.category}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p className="text-sm text-blue-600">{event.tickets} ticket(s) booked</p>
        </div>
      </div>
    );
  };
  
  export default BookedEventCard;
