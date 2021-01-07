<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h2>Flight Details</h2>
<pre>
	Airlines: ${reservation.flight.operatingAirlines }
	Flight No: ${reservation.flight.flightNumber }
	Departure City: ${reservation.flight.departureCity }
	Arrival City: ${reservation.flight.arrivalCity }
	Date Of Departure: ${reservation.flight.dateOfDeparture }
	Estimated Departure Time: ${reservation.flight.estimatedDepartureTime }
</pre>

<h2>Passenger Details</h2>
 <pre>
 	 First Name: ${reservation.passenger.firstName}
	 Last Name: ${reservation.passenger.lastName} 
	 Email: ${reservation.passenger.email} 
	 Phone: ${reservation.passenger.phone}  
 </pre>

<form action="completeCheckIn" method="post">
	Enter the Number of Bags:  <input type="text" name="numberOfBags" />
	<input type="hidden"  value="${reservation.id }" name="reservationId"/>
	<input type="submit" value="Check In"/>
</form>
</body>
</html>