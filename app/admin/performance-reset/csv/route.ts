import { sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";

const csvEscape = (value: unknown) => {
    if (value === null || value === undefined) {
        return "";
    }
    const text = String(value).replace(/\r?\n/g, " ");
    if (/[",]/.test(text)) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
};

export async function GET() {
    const { rows } = await sql`
        SELECT *
        FROM performance_reset_applications
        ORDER BY created_at DESC
        LIMIT 200;
    `;

    const headers = [
        "created_at",
        "first_name",
        "last_name",
        "email",
        "phone",
        "current_bodyfat_range",
        "goal_bodyfat_range",
        "physique_confidence_1_10",
        "energy_6pm_1_10",
        "stress_1_10",
        "challenges",
        "work_hours_range",
        "role",
        "success_6_12m",
        "why_now",
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gclid",
        "referrer",
        "landing_path",
    ];

    const lines = [headers.join(",")];
    for (const row of rows) {
        lines.push(
            headers
                .map((header) => {
                    const value = header === "challenges" ? JSON.stringify(row[header]) : row[header];
                    return csvEscape(value);
                })
                .join(",")
        );
    }

    return new Response(lines.join("\n"), {
        headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": "attachment; filename=performance-reset-applications.csv",
        },
    });
}
