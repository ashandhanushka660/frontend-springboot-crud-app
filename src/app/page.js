'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            const res = await fetch(`${API_URL}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) {
                alert('Invalid Email or Password!');
                return;
            }

            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Unable to connect to the backend.');
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#000' }}>
            <h2>Login Page 🔐</h2>
            <form onSubmit={handleLogin} style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email: </label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '8px', width: '250px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Password: </label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: '8px', width: '250px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer', width: '100%' }}>
                    Login
                </button>
            </form>
            <div style={{ marginTop: '15px' }}>
                <button onClick={() => router.push('/register')} style={{ padding: '8px 15px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                    Register 📝
                </button>
            </div>
        </div>
    );
}