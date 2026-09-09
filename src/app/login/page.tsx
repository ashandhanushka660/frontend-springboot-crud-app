'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Next.js Link component එක import කරගැනීම

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login Successful! 🎉');
        router.push('/dashboard');
    };

    return (
        <div style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#000000' }}>Login Form</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '8px', marginBottom: '10px', width: '200px', color: '#000000' }}
                /><br/>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '8px', marginBottom: '20px', width: '200px', color: '#000000' }}
                /><br/>

                {/* Login Button එක */}
                <button type="submit" style={{ padding: '10px 20px', background: '#10b981', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
                    Login
                </button>

                {/* ළඟින්ම තැබූ Join / Register Button එක */}
                <Link href="/register">
                    <button type="button" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Join / Register
                    </button>
                </Link>
            </form>
        </div>
    );
}