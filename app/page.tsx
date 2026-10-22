export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 720, margin: '2rem auto', lineHeight: 1.5 }}>
      <h1>Next.js performance.measure buffer growth</h1>
      <p>
        When <code>NEXT_OTEL_PERFORMANCE_PREFIX</code> is set, the server records a{' '}
        <code>performance.measure</code> entry for each request. This app shows how the
        number of entries in Node&apos;s global performance buffer grows with traffic.
      </p>

      <h2>Routes</h2>
      <ul>
        <li><a href="/static">/static</a>: prerendered, adds ~1 entry per request</li>
        <li><a href="/dynamic">/dynamic</a>: rendered per request, adds ~3 entries per request</li>
        <li><a href="/api/perf">/api/perf</a>: shows the current entry counts by name</li>
        <li><a href="/api/perf?clear=1">/api/perf?clear=1</a>: calls <code>performance.clearMeasures()</code></li>
      </ul>

      <h2>Run it</h2>
      <pre>{`npm run build
NEXT_OTEL_PERFORMANCE_PREFIX=test npm start`}</pre>
      <p>See the README for the full test sequence and expected numbers.</p>

      <p><small>Don&apos;t include this page in test runs: requesting it also adds entries.</small></p>
    </main>
  )
}
