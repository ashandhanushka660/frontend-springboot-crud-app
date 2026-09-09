'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const router = useRouter();

    // Render එකේ Live Backend URL එක ගැනීම
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Users ලා ටික server එකෙන් fetch කරගැනීම
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(`${API_URL}/api/users/`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    };

    // Delete Function (User කෙනෙක්ව ඉවත් කිරීම)
    const handleDelete = async (id) => {
        await fetch(`${API_URL}/api/users/${id}`, {
            method: 'DELETE',
        });
        alert('User Deleted Successfully! 🗑️');
        fetchUsers(); // Table එක refresh කිරීම
    };

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#000000', width: '100%' }}>
            <h1>User Dashboard (CRUD) 👋</h1>
            <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                Logout
            </button>

            {/* Table එක */}
            <table style={{ margin: '0 auto', width: '80%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
                <thead>
                <tr style={{ backgroundColor: '#0070f3', color: 'white' }}>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>ID</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Email</th>
                    <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.id}</td>
                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.name}</td>
                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.email}</td>
                        <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                            {/* Interactive Delete Button */}
                            <button onClick={() => handleDelete(user.id)} style={{ padding: '6px 12px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                Delete ❌
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}