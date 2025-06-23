'use client';

interface ExportEventsButtonProps {
    monitorId: string;
    monitorName: string;
}

export function ExportEventsButton({ monitorId, monitorName }: ExportEventsButtonProps) {
    const exportUrl = `https://uptime-stars-backend-api-production.up.railway.app/api/v1/event/export/${monitorId}`;
    const fileName = `${monitorName.toLowerCase().replace(/\s+/g, '_')}_events.xlsx`;

    return (
        <a
            href={exportUrl}
            download={fileName}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer inline-block"
        >
            Export Events
        </a>
    );
}
