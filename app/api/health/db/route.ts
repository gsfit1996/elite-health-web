import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export const runtime = "nodejs";

export async function GET() {
    const requestId = crypto.randomUUID();

    if (!process.env.POSTGRES_URL) {
        return NextResponse.json(
            {
                ok: false,
                code: "db_not_configured",
                message: "POSTGRES_URL missing - DB not configured",
                requestId,
            },
            { status: 500 }
        );
    }

    try {
        const { rows } = await sql`
            SELECT to_regclass('public.performance_reset_applications') as table_name;
        `;

        const tableName = rows?.[0]?.table_name;

        if (!tableName) {
            return NextResponse.json(
                {
                    ok: false,
                    code: "db_table_missing",
                    message: "performance_reset_applications table missing",
                    requestId,
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, table: tableName });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error({ requestId, code: "db_health_error", message, error });
        return NextResponse.json(
            {
                ok: false,
                code: "db_health_error",
                message: "DB health check failed",
                requestId,
            },
            { status: 500 }
        );
    }
}
