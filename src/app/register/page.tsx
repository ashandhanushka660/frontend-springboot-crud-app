'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });
        if (res.ok) {
            alert('Registration Successful! 🎉');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#000000' }}>
            <h2>Register Form</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} style={{ padding: '8px', marginBottom: '10px', width: '200px', color: '#000000' }} /><br/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px', marginBottom: '10px', width: '200px', color: '#000000' }} /><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px', marginBottom: '20px', width: '200px', color: '#000000' }} /><br/>

                {/* Register Button එක */}
                <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
                    Register
                </button>

                {/* ළඟින්ම තැබූ Login Button එක */}
                <Link href="/login">
                    <button type="button" style={{ padding: '10px 20px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Go to Login
                    </button>
                </Link>
            </form>
        </div>
    );
}