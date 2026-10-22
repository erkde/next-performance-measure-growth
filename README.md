## Next.js performance.measure buffer growth

Repro for growth of Node's global performance buffer when `NEXT_OTEL_PERFORMANCE_PREFIX` is set.

Details are in the linked issue.

Tested on Next.js 16.4.2.

## Run

```bash
npm install
npm run build
NEXT_OTEL_PERFORMANCE_PREFIX=test npm start
```

## Check

```bash
curl -s "localhost:3000/api/perf?clear=1"
for i in $(seq 1 1000); do curl -s localhost:3000/dynamic > /dev/null; done
curl -s localhost:3000/api/perf
```

Expected: about 3,000 entries (about 1,000 for /static).

Without the env var, the count stays at 0. `/api/perf?clear=1` calls `performance.clearMeasures()` and resets the count.
