'use client';

import React, { useState } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate sending message
        setSuccess(true);
        setLoading(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <div className="rounded-xl border border-zinc-900 bg-zinc-900/5 p-6 space-y-6">
            <div className="flex items-center space-x-2 pb-3 border-b border-zinc-900">
                <MessageSquare className="h-4.5 w-4.5 text-emerald-500" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Submit Support Ticket
                </h3>
            </div>

            {success && (
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/15 p-4 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span>Ticket generated successfully! Check your inbox for confirmation.</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Full Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Sarah Connor"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Email Address</label>
                        <input
                            id="contact-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sarah@example.com"
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Subject Topic</label>
                    <input
                        id="contact-subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Creator License inquiry, Custom integration"
                        className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                    />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Ticket Message</label>
                    <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please detail your support query..."
                        className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-emerald-500 focus:outline-none"
                    />
                </div>

                <div className="pt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 disabled:opacity-50 px-5 py-2.5 text-xs font-bold shadow-md transition-colors"
                    >
                        {loading ? 'Sending Request...' : 'Submit Support Ticket'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;