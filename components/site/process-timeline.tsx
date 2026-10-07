import { processSteps } from '@/lib/site-data'

export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
      <span
        aria-hidden="true"
        className="absolute top-[2.65rem] right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-teal via-cyan to-cyan-glow md:block"
      />
      {processSteps.map((step, i) => (
        <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-4">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <span className="text-sm font-bold text-primary tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            <span className="relative flex size-5 items-center justify-center rounded-full border-2 border-primary bg-background">
              <span className="size-2 rounded-full bg-primary" />
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
