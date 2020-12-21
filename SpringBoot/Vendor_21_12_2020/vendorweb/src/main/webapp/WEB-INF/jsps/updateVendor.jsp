<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
 <%@page isELIgnored="false" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update Vendor</title>
</head>
<body>
	<pre>
		<form action="updateVendor" method="POST"> 
			Id:    <input type="text" name="id" value="${vendor.id}" readonly/>
			<br>
			Code:  <input type="text" name="code" value="${vendor.code}"/>
			<br>
			Name:  <input type="text" name="name" value="${vendor.name}"/>
			<br>
			Type:  Wholesale: <input type="radio" name="type" value="WHOLESALE" ${vendor.type=='WHOLESALE' ? 'checked' : ''} />
			       Retail: <input type="radio" name="type" value="RETAIL" ${location.type=='RETAIL' ? 'checked' : ''}  />
		    <br>
		   Email:  <input type="text" name="email" value="${vendor.email}"/>
		   <br>
		   Phone:  <input type="text" name="phone" value="${vendor.phone}"/>
		   <br>
		   Address:  <input type="text" name="address" value="${vendor.address}"/>
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
</body>
</html>