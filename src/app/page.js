'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        router.push('/dashboard');
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

            {/* මෙන්න Register Button එක */}
            <div style={{ marginTop: '15px' }}>
                <p>Don't have an account?</p>
                <button
                    onClick={() => router.push('/register')}
                    style={{ padding: '8px 15px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                    Register 📝
                </button>
            </div>
        </div>
    );
}