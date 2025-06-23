import { StatusBadge } from './StatusBadge';
import { MonitorDto } from '@/api/monitors';
import {Status} from "@/constants/index";

export default function MonitorCard({ monitor }: { monitor: MonitorDto }) {
    function getStatusFromMonitor(monitor: MonitorDto): Status {
        return monitor.isActive ? 'Functional' : 'Down';
    }
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded shadow">
            <div>
                <h3 className="font-medium">{monitor.name}</h3>
                <p className="text-sm text-gray-500">{monitor.target}</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-sm">
                    <span className="block">24 h: {monitor.uptime24hPercentage}</span>
                    <span className="block">30 d: {monitor.uptime30dPercentage}</span>
                </div>
                <StatusBadge status={getStatusFromMonitor(monitor)} />
            </div>
        </div>
    );
}