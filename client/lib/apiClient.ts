import axios from "axios";

// Use Next.js API proxy to avoid browser CORS in development
// This forwards to process.env.NEXT_PUBLIC_API_URL on the server
const apiClient = axios.create({
	baseURL: "/api/rails",
	headers: {
		"Content-Type": "application/json",
	},
	// withCredentials: true, // Cookie/sessiyon gerekiyorsa aç
});

export default apiClient;


