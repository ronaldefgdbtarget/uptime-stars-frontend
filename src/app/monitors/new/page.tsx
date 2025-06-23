'use client';
import { MonitorForm } from '@/components/MonitorForm';

export default function CreateMonitorPage() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Add new monitor</h1>
            <MonitorForm />
        </div>
    );
}
