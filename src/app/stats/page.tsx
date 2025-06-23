'use client';
import { StatsBar } from '@/components/StatsBar';
import { useMonitorStats } from '@/hooks/useMonitorsStats';

const defaultStats = {
    Functional: 0,
    Down: 0,
    Maintenance: 0,
    Unknown: 0,
    Paused: 0,
    Pending: 0,
};

export default function StatsPage() {
    const { stats, isLoading, isError } = useMonitorStats();

    if (isError) {
        return <p className="text-red-500">Error loading stats</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Quick Statistics</h1>
            <StatsBar stats={isLoading ? defaultStats : stats} />
        </div>
    );
}
