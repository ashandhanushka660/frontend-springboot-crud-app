'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch(`${API_URL}/api/users`)
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setUsers(data);
                } else {
                    setUsers([]);
                }
            })
            .catch((err) => console.error("Error fetching users:", err));
    };

    const handleDelete = async (id) => {
        await fetch(`${API_URL}/api/users/${id}`, {
            method: 'DELETE',
        });
        alert('User Deleted Successfully! 🗑️');
        fetchUsers();
    };

    return (
        <div style={{ textAlign: 'center', padding: '30px 20px', color: '#000000', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header Section - සාමාන්‍ය Flow එකට සකසා ඇත */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#0070f3', margin: '0 0 10px 0' }}>Welcome to the Admin Dashboard! 🎉</h3>
                <h1 style={{ fontSize: '26px', margin: '0 0 15px 0' }}>User Dashboard (CRUD) 👋</h1>
                <button onClick={() => router.push('/')} style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Logout
                </button>
            </div>

            <style>{`
                th, td {
                    color: #000000 !important;
                }
            `}</style>

            {/* Table Section - දැන් Header එකට පහළින් ඉතා ලස්සනට සම්පූර්ණයෙන්ම පෙනේ */}
            <div>
                <table style={{ margin: '0 auto', width: '80%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#0070f3', color: 'white' }}>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>ID</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Email</th>
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.id}</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.name}</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{user.email}</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                                    <button onClick={() => handleDelete(user.id)} style={{ padding: '6px 12px', background: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                        Delete ❌
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ padding: '20px', textAlign: 'center' }}>No users found!</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}