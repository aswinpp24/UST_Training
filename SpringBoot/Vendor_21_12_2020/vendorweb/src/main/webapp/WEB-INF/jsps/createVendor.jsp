<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create Vendor</title>
</head>
<body>
<h1>Vendor Registration</h1>
	<pre>
		<form action="saveVendor" method="POST"> 
			Id:    <input type="text" name="id" />
			<br>
			Code:  <input type="text" name="code" />
			<br>
			Name:  <input type="text" name="name" />
			<br>
			Type:  Wholesale: <input type="radio" name="type" value="WHOLESALE" />
			       Retail: <input type="radio" name="type" value="RETAIL" />
			<br>
			Email:  <input type="text" name="email" />
			<br>
			Phone:  <input type="text" name="phone" />
			<br>
			Address:  <input type="text" name="address" />
			<br>       
		    <input type="submit"  value="save"/>
		</form>
	</pre>
	<p>
		${msg}
	</p>
	<p>
		<a href="displayVendors">View All</a>
	</p>
	<p>
		<a href="generateReport">Show Pie Chart</a>
	</p>
</body>
</html>