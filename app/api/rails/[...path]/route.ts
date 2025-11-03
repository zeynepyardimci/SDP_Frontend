import { NextRequest, NextResponse } from "next/server";

const API_BASE = process.env.RAILS_API_URL || process.env.NEXT_PUBLIC_API_URL;

function buildTargetUrl(pathSegments: string[], search: string): string {
	const base = (API_BASE ?? "").replace(/\/$/, "");
	const path = pathSegments.join("/");
	const url = `${base}/${path}`;
	return search ? `${url}?${search}` : url;
}

async function proxy(req: NextRequest, context: { params: { path: string[] } }) {
	if (!API_BASE) {
		return NextResponse.json({ message: "API base URL is not configured" }, { status: 500 });
	}

	const targetUrl = buildTargetUrl(context.params.path || [], req.nextUrl.searchParams.toString());

	const headers = new Headers(req.headers);
	headers.delete("host");
	headers.delete("connection");
	// Remove cache validators so backend won't return 304 Not Modified
	headers.delete("if-none-match");
	headers.delete("if-modified-since");
	// Set Accept; avoid forcing Content-Type for GET/HEAD
	if (!headers.has("accept")) headers.set("accept", "application/json, */*;q=0.8");
	if (req.method === "GET" || req.method === "HEAD") {
		headers.delete("content-type");
	}

	const init: RequestInit = {
		method: req.method,
		headers,
		redirect: "manual",
		cache: "no-store",
	};

	if (req.method !== "GET" && req.method !== "HEAD") {
		const body = await req.text();
		init.body = body;
	}

	try {
		const res = await fetch(targetUrl, init);
		const resHeaders = new Headers(res.headers);
		// Ensure CORS headers from upstream don't leak
		resHeaders.delete("access-control-allow-origin");
		resHeaders.delete("access-control-allow-credentials");

		const buffer = await res.arrayBuffer();
		return new NextResponse(buffer, {
			status: res.status,
			statusText: res.statusText,
			headers: resHeaders,
		});
	} catch (error: unknown) {
		console.error("[Rails Proxy] request failed", { targetUrl, error });
		return NextResponse.json({ message: "Proxy request failed", targetUrl, error: String(error) }, { status: 502 });
	}
}

export async function GET(req: NextRequest, context: { params: { path: string[] } }) {
	return proxy(req, context);
}

export async function POST(req: NextRequest, context: { params: { path: string[] } }) {
	return proxy(req, context);
}

export async function PUT(req: NextRequest, context: { params: { path: string[] } }) {
	return proxy(req, context);
}

export async function PATCH(req: NextRequest, context: { params: { path: string[] } }) {
	return proxy(req, context);
}

export async function DELETE(req: NextRequest, context: { params: { path: string[] } }) {
	return proxy(req, context);
}

export async function OPTIONS() {
	return NextResponse.json({ ok: true });
}


