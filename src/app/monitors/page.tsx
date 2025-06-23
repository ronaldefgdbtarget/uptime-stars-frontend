'use client';
import { useState } from 'react';
import { useMonitors } from '@/hooks/useMonitors';
import MonitorCard from '@/components/MonitorCard';
import Pagination from '@/components/Pagination';
import { MonitorDto } from '@/api/monitors';


export default function MonitorListPage() {
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const {data, isLoading, isError} = useMonitors(page, pageSize);

    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Error to load monitors</p>;

    return (
        <section className="space-y-4">
            {data.data.map((monitor: MonitorDto) => (
                <MonitorCard key={monitor.id} monitor={monitor} />
            ))}
            <Pagination
                page={data.pageNumber}
                pageCount={data.pageCount}
                onPageChange={setPage}
            />
        </section>
    );
}
