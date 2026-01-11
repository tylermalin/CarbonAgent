"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        company: '',
        industry: ''
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // "Register" the user by setting a fake token
        localStorage.setItem('malamacarbon_auth_token', 'valid_token_' + Date.now());
        localStorage.setItem('malamacarbon_user', JSON.stringify({
            email: formData.email,
            company: formData.company
        }));

        setLoading(false);
        router.push('/dashboard');
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-secondary/10 p-4">
            <div className="w-full space-y-8" style={{ maxWidth: '800px' }}>
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
                    <p className="text-muted-foreground mt-2">Start your journey to Net Zero today.</p>
                </div>

                <Card>
                    <CardContent className="pt-6">
                        <form onSubmit={handleRegister} className="flex flex-col gap-4">
                            <Input
                                label="Work Email"
                                type="email"
                                placeholder="name@company.com"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />

                            <Input
                                label="Password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />

                            <Input
                                label="Company Name"
                                placeholder="Acme Corp"
                                required
                                value={formData.company}
                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                            />

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-muted-foreground">Industry</label>
                                <select
                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                    value={formData.industry}
                                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                                >
                                    <option value="" disabled>Select an industry...</option>
                                    <option value="Retail">Retail / CPG</option>
                                    <option value="Manufacturing">Manufacturing</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Energy">Energy & Utilities</option>
                                    <option value="Tech">Technology</option>
                                </select>
                            </div>

                            <Button type="submit" className="mt-4 w-full" disabled={loading}>
                                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                {loading ? 'Creating Account...' : 'Get Started'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
