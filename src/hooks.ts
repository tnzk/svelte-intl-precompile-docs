import cookie from 'cookie';

export function getSession(request) {
	const cookies = cookie.parse(request.headers.cookie || '');
  let acceptedLanguage = cookies.lang || (request.headers["accept-language"] && request.headers["accept-language"].split(',')[0]);
  console.log(`[INFO] Request received in getSession is ${JSON.stringify(request)}`);
  return { acceptedLanguage };
}