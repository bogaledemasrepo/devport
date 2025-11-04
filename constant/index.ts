"use server";

import { headers } from "next/headers";
const headersList =await headers();
const host =headersList.get('host');

const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
const serverUrl = `${protocol}://${host}`;

export default serverUrl;