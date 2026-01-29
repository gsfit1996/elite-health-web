import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "@vercel/postgres";

const bodyfatRange = z.enum(["10-12%", "13-15%", "16-18%", "19-22%", "23-27%", "28%+"]);
const goalBodyfatRange = z.enum(["10-12%", "13-15%", "16-18%", "19-22%", "23%+"]);
const workHoursRange = z.enum(["30-40", "41-50", "51-60", "61-70", "70+"]);

const payloadSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional().nullable(),
    currentBodyfatRange: bodyfatRange,
    goalBodyfatRange: goalBodyfatRange,
    physiqueConfidence: z.number().min(1).max(10),
    energy6pm: z.number().min(1).max(10),
    stress: z.number().min(1).max(10),
    challenges: z.array(z.string()).min(1),
    workHoursRange: workHoursRange,
    role: z.string().min(1),
    success612: z.string().min(1),
    whyNow: z.string().min(1),
    consent: z.boolean().refine((value) => value === true, { message: "Consent required" }),
    company: z.string().optional(),
    utm_source: z.string().optional().nullable(),
    utm_medium: z.string().optional().nullable(),
    utm_campaign: z.string().optional().nullable(),
    utm_content: z.string().optional().nullable(),
    utm_term: z.string().optional().nullable(),
    gclid: z.string().optional().nullable(),
    referrer: z.string().optional().nullable(),
    landingPath: z.string().optional().nullable(),
});

export async function POST(request: Request) {
    try {
        const json = await request.json();
        const parsed = payloadSchema.safeParse(json);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    message: "Validation failed",
                    errors: parsed.error.flatten(),
                },
                { status: 400 }
            );
        }

        const data = parsed.data;

        if (data.company && data.company.trim().length > 0) {
            return NextResponse.json({ ok: true });
        }

        await sql`
            INSERT INTO performance_reset_applications (
                first_name,
                last_name,
                email,
                phone,
                current_bodyfat_range,
                goal_bodyfat_range,
                physique_confidence_1_10,
                energy_6pm_1_10,
                stress_1_10,
                challenges,
                work_hours_range,
                role,
                success_6_12m,
                why_now,
                utm_source,
                utm_medium,
                utm_campaign,
                utm_content,
                utm_term,
                gclid,
                referrer,
                landing_path
            ) VALUES (
                ${data.firstName},
                ${data.lastName},
                ${data.email},
                ${data.phone ?? null},
                ${data.currentBodyfatRange},
                ${data.goalBodyfatRange},
                ${data.physiqueConfidence},
                ${data.energy6pm},
                ${data.stress},
                ${JSON.stringify(data.challenges)},
                ${data.workHoursRange},
                ${data.role},
                ${data.success612},
                ${data.whyNow},
                ${data.utm_source ?? null},
                ${data.utm_medium ?? null},
                ${data.utm_campaign ?? null},
                ${data.utm_content ?? null},
                ${data.utm_term ?? null},
                ${data.gclid ?? null},
                ${data.referrer ?? null},
                ${data.landingPath ?? null}
            );
        `;

        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
