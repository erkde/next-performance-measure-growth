export async function GET(req: Request) {
  const url = new URL(req.url);

  if (url.searchParams.get('clear') === '1') {
    performance.clearMeasures();
  }

  const measures = performance.getEntriesByType("measure");
  const names = [...new Set(measures.map((m) => m.name))];
  
  return Response.json({
    measures: measures.length,
    names,
    heapMB: Math.round(process.memoryUsage().heapUsed / 1e6),
  });
}
