// @next/next/no-server-import-in-page
// import { handleRedirects } from '~/lib/edge/handleRedirects'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
	return NextResponse.next()
}
