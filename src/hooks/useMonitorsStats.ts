import { useMonitors } from './useMonitors';

export function useMonitorStats() {
    const { data, isLoading, isError } = useMonitors(1, 100, 1); // limit to 1 last event per monitor

    const stats = {
        Functional: 0,
        Down: 0,
        Maintenance: 0,
        Unknown: 0,
        Paused: 0,
        Pending: 0,
    };

    if (!data) return { stats, isLoading, isError };

    if (data?.data) {
        for (const monitor of data.data) {
            const last = monitor.lastEvents?.[0];
            if (!last) {
                stats.Unknown++;
                continue;
            }

            if (monitor.isActive === false) {
                stats.Paused++;
                continue;
            }

            if (last.maintenanceType) {
                stats.Maintenance++;
                continue;
            }

            if (last.isUp === true) {
                stats.Functional++;
            } else if (last.isUp === false) {
                stats.Down++;
            } else {
                stats.Unknown++;
            }
        }
    }

    return { stats, isLoading, isError };
}
