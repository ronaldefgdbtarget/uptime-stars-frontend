'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { StatusBadge } from '@/components/StatusBadge';
import { EventEditModal } from '@/components/EventEditModal';

const mockMonitor = {
    id: '1',
    name: 'Monitor Test Atlassian',
    url: 'https://bitbucket.status.atlassian.com/',
    keyword: 'All Systems Operational',
    status: 'Down',
    history: [
        { status: 'Down', date: '2025-06-19 09:15:20', message: 'timeout of 100ms exceeded' },
        { status: 'Functional', date: '2025-06-19 09:12:36', message: '200 - OK, keyword is found' },
        { status: 'Down', date: '2025-06-19 09:12:10', message: '200 - OK, but keyword is not in [Atlassian Bitbucket Status...]' },
        { status: 'Functional', date: '2025-06-19 09:10:14', message: '200 - OK, keyword is found' },
    ],
};

export default function MonitorDetailPage() {
    const params = useParams();
    const [monitor] = useState(mockMonitor);
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (event: any) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleSave = (data: any) => {
        console.log('Evento actualizado:', data);
        // Aquí guardarías los cambios en la base de datos
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">{monitor.name}</h1>
            <a href={monitor.url} className="text-blue-600 underline block mb-2" target="_blank" rel="noreferrer">
                {monitor.url}
            </a>
            <p className="text-sm text-zinc-700 mb-4">Keyword: <strong>{monitor.keyword}</strong></p>

            <div className="flex flex-wrap gap-2 mb-6">
                <button className="bg-green-500 text-white px-3 py-1 rounded">Resume</button>
                <button className="bg-yellow-400 text-white px-3 py-1 rounded">Edit</button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Clone</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">Current status:</span>
                <StatusBadge status={monitor.status as any} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-sm text-gray-500">Response</h3>
                    <p className="text-xl font-bold">N/A</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-sm text-gray-500">AVG response (24h)</h3>
                    <p className="text-xl font-bold">227 ms</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-sm text-gray-500">Active time (30 days)</h3>
                    <p className="text-xl font-bold">25.34%</p>
                </div>
            </div>

            <table className="w-full text-sm border">
                <thead>
                <tr className="bg-zinc-100">
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Message</th>
                    <th className="border p-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {monitor.history.map((h, i) => (
                    <tr key={i}>
                        <td className="border px-2 py-1">
                            <StatusBadge status={h.status as any} />
                        </td>
                        <td className="border px-2 py-1">{h.date}</td>
                        <td className="border px-2 py-1">{h.message}</td>
                        <td className="border px-2 py-1">
                            <button
                                onClick={() => handleEditClick(h)}
                                className="text-xs text-yellow-700 border border-yellow-400 rounded px-2 py-0.5"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <EventEditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                defaultValues={selectedEvent}
            />
        </div>
    );
}
