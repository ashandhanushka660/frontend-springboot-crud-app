'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${API_URL}/api/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            alert('Registered Successfully! 🎉');
            router.push('/');
        } else {
            alert('Registration Failed!');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Register Page 📝</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br/><br/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
                <button type="submit">Register</button>
                <button type="button" onClick={() => router.push('/')} style={{ marginLeft: '10px' }}>Go to Login</button>
            </form>
        </div>
    );
}