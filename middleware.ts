import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const parseBasicAuth = (authHeader: string) => {
    const encoded = authHeader.split(" ")[1];
    if (!encoded) return null;
    try {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(":");
        return { user, pass };
    } catch (error) {
        return null;
    }
};

export function middleware(request: NextRequest) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        return NextResponse.next();
    }

    const adminUser = process.env.ADMIN_USERNAME ?? "admin";
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Basic ")) {
        return new NextResponse("Authentication required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Admin"',
            },
        });
    }

    const credentials = parseBasicAuth(authHeader);
    if (!credentials || credentials.user !== adminUser || credentials.pass !== adminPassword) {
        return new NextResponse("Invalid credentials", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Admin"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/performance-reset/:path*"] ,
};
