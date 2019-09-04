export function helloWorld(req: { respond: (arg0: { body: Uint8Array; }) => void; }) {
  const body = new TextEncoder().encode("Hello World\n");
  req.respond({ body });
}

export function ping(req: { respond: (arg0: { body: Uint8Array; }) => void; }) {
  const body = new TextEncoder().encode("Ping! 2019");
  req.respond({ body });
}
