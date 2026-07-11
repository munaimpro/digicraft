import ProfileCard from '@/components/dashboard/ProfileCard';
import { User } from 'lucide-react';

const ProfilePage = () => {
    return (
        <div className="space-y-8">
            {/* Title block */}
            <div className="space-y-3">
                <div className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
                    <User className="h-4 w-4" />
                    <span>Profile Console</span>
                </div>
                <h1 className="text-3xl font-black text-white leading-tight">
                    Manage Account Identity
                </h1>
                <p className="text-zinc-500 text-sm max-w-xl">
                    Edit your visual display credentials, view assigned security access codes, or confirm platform license agreements.
                </p>
            </div>

            {/* Profile edit controls */}
            <ProfileCard />
        </div>
    );
}

export default ProfilePage;