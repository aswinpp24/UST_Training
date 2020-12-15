package student;

import java.io.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class StudentDetails extends HttpServlet{
	protected void doPost(HttpServletRequest req,HttpServletResponse res)
			throws ServletException,IOException{
				PrintWriter pw = res.getWriter();
				res.setContentType("text/html");
				
				String studentId = req.getParameter("sId");
				String studentName = req.getParameter("sName");
				String address="Kannur, Kerala";
				String bGroup="O-ve";
				
				if(studentId.equals("ust001") && studentName.equals("aswin")) {
					pw.println("ID: " +studentId);
					pw.println("\nName: "+studentName);
					pw.println("Address: "+address);
					pw.println("Blood Group: "+bGroup);
				}
				else
					pw.println("Student does not exist.....Try again......:(");
				pw.close();
			}
}
