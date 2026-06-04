import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Admin() {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");

        if (!isAdmin) {
            navigate("/admin/login");
            return;
        }

        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/contact`
            );

            const data = await response.json();

            setContacts(data.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>

            <p
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "#666",
                }}
            >
                Total Submissions: {contacts.length}
            </p>

            <button
                onClick={() => {
                    localStorage.removeItem("isAdmin");
                    navigate("/admin/login");
                }}
            >
                Logout
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;