import { Container } from "./Container";

export function DetailSkeleton() {
  return (
    <>
      <section className="pt-14 lg:pt-20">
        <Container>
          <div className="h-3 w-56 animate-pulse bg-ink-2" />
          <div className="mt-10 flex flex-col gap-7">
            <div className="h-3 w-32 animate-pulse bg-ink-2" />
            <div className="h-14 w-2/3 max-w-2xl animate-pulse bg-ink-2" />
          </div>
          <div className="mt-10 h-5 w-full max-w-xl animate-pulse bg-ink-2" />
          <div className="mt-3 h-5 w-3/4 max-w-lg animate-pulse bg-ink-2" />
          <div className="mt-14 horizon-rule" />
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse bg-ink-raised" />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
            <div className="flex max-w-2xl flex-col gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={i === 5 ? "h-4 w-2/3 animate-pulse bg-ink-2" : "h-4 animate-pulse bg-ink-2"}
                />
              ))}
            </div>
            <div className="h-96 animate-pulse border border-line bg-ink-raised" />
          </div>
        </Container>
      </section>
    </>
  );
}
