import { Mail, Clock, ShieldCheck } from 'lucide-react';
import ContactForm from '@/src/components/contact/ContactForm';

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 py-12 sm:py-16 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left specifications column */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="space-y-3">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                                    Global Support
                                </span>
                                <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                    Reach Our Vetting Team
                                </h1>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Have an inquiry regarding listing digital assets, custom enterprise licensing, or requesting refunds? Fill out our form or contact us directly.
                                </p>
                            </div>

                            {/* Specs items */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-zinc-900 bg-zinc-900/10">
                                    <Mail className="h-5 w-5 text-emerald-400 mt-0.5" />
                                    <div className="text-xs sm:text-sm">
                                        <p className="font-bold text-white">Direct Support Email</p>
                                        <p className="text-zinc-500 mt-0.5">support@digicraft.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-zinc-900 bg-zinc-900/10">
                                    <Clock className="h-5 w-5 text-emerald-400 mt-0.5" />
                                    <div className="text-xs sm:text-sm">
                                        <p className="font-bold text-white">Vetting SLA Hours</p>
                                        <p className="text-zinc-500 mt-0.5">Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM UTC</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3.5 p-4 rounded-xl border border-zinc-900 bg-zinc-900/10">
                                    <ShieldCheck className="h-5 w-5 text-emerald-400 mt-0.5" />
                                    <div className="text-xs sm:text-sm">
                                        <p className="font-bold text-white">100% Satisfaction SLA</p>
                                        <p className="text-zinc-500 mt-0.5">Responses guaranteed within 24 business hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Contact Form Column */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default ContactPage;