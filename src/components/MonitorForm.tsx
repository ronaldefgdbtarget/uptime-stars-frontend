'use client';

import {useState} from 'react';
import {createMonitor} from '@/api/monitors';
import {useRouter} from 'next/navigation';

export const MonitorForm = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        type: 'HTTPS',            // HTTPS | PING
        name: '',
        target: '',
        intervalInMinutes: 1,     // minutos
        tiemoutInMilliseconds: 1000,
        alertEmails: '',          // cadena separada por comas
        description: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const payload = {
                name: form.name,
                type: form.type === 'PING' ? 0 as const : 1 as const,
                target: form.target,
                intervalInMinutes: Number(form.intervalInMinutes),
                tiemoutInMilliseconds: Number(form.tiemoutInMilliseconds),
                alertEmails: form.alertEmails
                    .split(',')
                    .map(email => email.trim())
                    .filter(Boolean),
            };

            const newId = await createMonitor(payload);
            console.log('Monitor created with ID:', newId);

            router.push(`/monitors/${newId}`);
        } catch (err) {
            console.error('Error creating monitor:', err);
            alert('The monitor could not be created. Check the console..');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-3xl mx-auto"
        >
            {/* Tipo */}
            <div>
                <label className="block mb-1">Monitor type</label>
                <select
                    name="type"
                    onChange={handleChange}
                    value={form.type}
                    className="w-full border rounded p-2"
                >
                    <option value="HTTPS">HTTP(s)</option>
                    <option value="PING">Ping</option>
                </select>
            </div>

            {/* Nombre */}
            <div>
                <label className="block mb-1">Simple name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    className="w-full border rounded p-2"
                    required
                />
            </div>

            {/* URL / Target */}
            <div className="md:col-span-2">
                <label className="block mb-1">Target URL / IP</label>
                <input
                    type="text"
                    name="target"
                    onChange={handleChange}
                    value={form.target}
                    className="w-full border rounded p-2"
                    required
                />
            </div>

            {/* Intervalo */}
            <div>
                <label className="block mb-1">Interval (minutes)</label>
                <input
                    type="number"
                    name="intervalInMinutes"
                    onChange={handleChange}
                    value={form.intervalInMinutes}
                    className="w-full border rounded p-2"
                    min={1}
                />
            </div>

            {/* Timeout */}
            <div>
                <label className="block mb-1">Timeout (milliseconds)</label>
                <input
                    type="number"
                    name="tiemoutInMilliseconds"
                    onChange={handleChange}
                    value={form.tiemoutInMilliseconds}
                    className="w-full border rounded p-2"
                    min={100}
                />
            </div>

            {/* Emails */}
            <div className="md:col-span-2">
                <label className="block mb-1">Alert emails (comma-separated)</label>
                <input
                    type="text"
                    name="alertEmails"
                    onChange={handleChange}
                    value={form.alertEmails}
                    className="w-full border rounded p-2"
                    placeholder="user@example.com, admin@example.com"
                />
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
                <label className="block mb-1">Description</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={form.description}
                    className="w-full border rounded p-2"
                    rows={3}
                />
            </div>

            {/* Botón */}
            <div className="md:col-span-2">
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                    Save
                </button>
            </div>
        </form>
    );
};
