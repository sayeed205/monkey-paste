import { notFound } from 'next/navigation';

import { getCurrentUser } from '@/lib/session';

export const metadata = {
    title: 'Dashboard',
};

export default async function DashboardLayout() {
    const user = await getCurrentUser();
    if (!user) return notFound();

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}
