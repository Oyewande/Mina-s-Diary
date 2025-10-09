import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import './AdminDashboard.css'

function AdminDashboard({ user, onLogout }) {
  const [emails, setEmails] = useState([]);

  // Fetch emails manually
  const fetchEmails = async () => {
    const querySnapshot = await getDocs(collection(db, "subscribers"));
    const emailList = querySnapshot.docs.map(doc => doc.data().email);
    setEmails(emailList);
  };

  // Auto-fetch emails every 30 minutes
  useEffect(() => {
    fetchEmails();
    const interval = setInterval(fetchEmails, 1800000); 
    return () => clearInterval(interval);
  }, []);

  // Export to CSV
  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + emails.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "subscribers.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="admin-dash-root">
  <h2 className="admin-dash-heading">Welcome, {user.email}!</h2>
  
  <div className="admin-dash-controls">
    <button className="admin-dash-btn-primary" onClick={fetchEmails}>
      Refresh Emails
    </button>
    <button className="admin-dash-btn-primary admin-dash-btn-export" onClick={exportToCSV}>
      Export Emails as CSV
    </button>
  </div>

  <div className="admin-dash-list-container">
    <h3>Subscribers:</h3>
    <ul className="admin-dash-sub-list">
      {emails.map((email, index) => (
        <li className="admin-dash-list-item" key={index}>{email}</li>
      ))}
    </ul>
  </div>

  <button className="admin-dash-btn-primary admin-dash-logout" onClick={onLogout}>
    Logout
  </button>
</div>
  );
}

export default AdminDashboard;