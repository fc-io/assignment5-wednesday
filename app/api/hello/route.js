let numberOfRequests = 0

export async function GET(request) {
  numberOfRequests = numberOfRequests + 1
  const msg = `Hello, Next.js! For the ${numberOfRequests} times`

  return new Response(msg)
}
