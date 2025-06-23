'use client';

export function ExportButton() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const lastDay = new Date(year, parseInt(month), 0).getDate();

    const dateFrom = `01/${month}/${year}`;
    const dateTo = `${lastDay}/${month}/${year}`;
    const exportUrl = `https://uptime-stars-backend-api-production.up.railway.app/api/v1/monitor/export?dateFrom=${dateFrom}&dateTo=${dateTo}`;

    return (
        <a
            href={exportUrl}
            download={`monitor_export_${month}_${year}.xlsx`}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
        >
            Export Excel
        </a>
    );
}
