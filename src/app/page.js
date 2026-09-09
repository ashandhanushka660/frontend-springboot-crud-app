'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [users, setUsers] = useState([]);

    // Backend එකෙන් data (Users list) fetch කරගැනීම
    useEffect(() => {
        fetch('http://localhost:8080/api/users/')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#000000' }}>
            <h1>Welcome to User Dashboard! 👋</h1>
            <h3>All Users List:</h3>

            {/* Table එක හරස් අතට මැදට (Center) ගෙන ඒම */}
            <table border={1} style={{ margin: '20px auto', width: '70%', borderCollapse: 'collapse', background: 'white' }}>
                <thead>
                <tr style={{ background: '#f4f4f4' }}>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Email</th>
                </tr>
                </thead>
                <tbody>
                {/* Loop එකක් මඟින් backend එකෙන් එන users ලා table එකට දැමීම */}
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.id}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.name}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}