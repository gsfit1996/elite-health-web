import { sql } from "@vercel/postgres";
import Link from "next/link";

export const dynamic = "force-dynamic";

function formatChallenge(value: unknown) {
    if (!value) return "";
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
}

export default async function PerformanceResetAdminPage() {
    const { rows } = await sql`
        SELECT *
        FROM performance_reset_applications
        ORDER BY created_at DESC
        LIMIT 200;
    `;

    return (
        <div className="min-h-screen bg-background px-6 py-12 text-foreground">
            <div className="mx-auto max-w-6xl space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Performance Reset Applications</h1>
                        <p className="text-sm text-muted-foreground">Latest 200 submissions.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/performance-reset/csv"
                            className="inline-flex items-center justify-center rounded-md border border-border bg-muted/10 px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted/20"
                        >
                            Download CSV
                        </Link>
                    </div>
                </div>

                <div className="overflow-auto rounded-2xl border border-border/60">
                    <table className="min-w-[1200px] w-full text-left text-sm">
                        <thead className="bg-muted/30 text-xs uppercase tracking-wide text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3">Created</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Phone</th>
                                <th className="px-4 py-3">Role</th>
                                <th className="px-4 py-3">Current BF</th>
                                <th className="px-4 py-3">Goal BF</th>
                                <th className="px-4 py-3">Work hours</th>
                                <th className="px-4 py-3">Scores</th>
                                <th className="px-4 py-3">Challenges</th>
                                <th className="px-4 py-3">UTM / Referrer</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/60">
                            {rows.map((row) => (
                                <tr key={row.id} className="align-top">
                                    <td className="px-4 py-3 whitespace-nowrap">{new Date(row.created_at).toLocaleString()}</td>
                                    <td className="px-4 py-3">{row.first_name} {row.last_name}</td>
                                    <td className="px-4 py-3">{row.email}</td>
                                    <td className="px-4 py-3">{row.phone || "-"}</td>
                                    <td className="px-4 py-3">{row.role}</td>
                                    <td className="px-4 py-3">{row.current_bodyfat_range}</td>
                                    <td className="px-4 py-3">{row.goal_bodyfat_range}</td>
                                    <td className="px-4 py-3">{row.work_hours_range}</td>
                                    <td className="px-4 py-3">
                                        Physique {row.physique_confidence_1_10}/10<br />
                                        Energy {row.energy_6pm_1_10}/10<br />
                                        Stress {row.stress_1_10}/10
                                    </td>
                                    <td className="px-4 py-3">{formatChallenge(row.challenges)}</td>
                                    <td className="px-4 py-3 text-xs text-muted-foreground">
                                        {row.utm_source || row.utm_campaign || row.utm_medium ? (
                                            <div>
                                                <div>utm_source: {row.utm_source || "-"}</div>
                                                <div>utm_medium: {row.utm_medium || "-"}</div>
                                                <div>utm_campaign: {row.utm_campaign || "-"}</div>
                                            </div>
                                        ) : null}
                                        <div className="mt-2">referrer: {row.referrer || "-"}</div>
                                        <div>landing: {row.landing_path || "-"}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
