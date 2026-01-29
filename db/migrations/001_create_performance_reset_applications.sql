CREATE TABLE IF NOT EXISTS performance_reset_applications (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    current_bodyfat_range TEXT NOT NULL,
    goal_bodyfat_range TEXT NOT NULL,
    physique_confidence_1_10 INT NOT NULL,
    energy_6pm_1_10 INT NOT NULL,
    stress_1_10 INT NOT NULL,
    challenges JSONB NOT NULL,
    work_hours_range TEXT NOT NULL,
    role TEXT NOT NULL,
    success_6_12m TEXT NOT NULL,
    why_now TEXT NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_content TEXT,
    utm_term TEXT,
    gclid TEXT,
    referrer TEXT,
    landing_path TEXT
);

CREATE INDEX IF NOT EXISTS performance_reset_applications_created_at_idx
    ON performance_reset_applications (created_at DESC);

CREATE INDEX IF NOT EXISTS performance_reset_applications_email_idx
    ON performance_reset_applications (email);
