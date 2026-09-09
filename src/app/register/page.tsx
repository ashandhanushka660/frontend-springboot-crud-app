'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Render එකේ Live Backend URL එක ලබා ගැනීම
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        try {
            const response = await fetch(`${API_URL}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                alert('Registration Successful! 🎉');
                router.push('/'); // සාර්ථක වුණාම Login page එකට යැවීම
            } else {
                alert('Registration Failed! User may already exist.');
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#000' }}>
            <h2>Register Page 📝</h2>
            <form onSubmit={handleRegister} style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
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

                {/* Buttons දෙක එක ළඟට (Side-by-side) සකස් කිරීම */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button type="submit" style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', flex: 1, borderRadius: '4px' }}>
                        Register
                    </button>
                    <button type="button" onClick={() => router.push('/')} style={{ padding: '10px 20px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer', flex: 1, borderRadius: '4px' }}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}