import Image from 'next/image';
import { serviceWork } from '@/lib/service-work';
import type { Service } from '@/lib/site';

export function ServiceWork({ slug }: { slug: Service['slug'] }) {
  const example = serviceWork[slug];

  if (!example) return null;

  return (
    <section aria-labelledby="service-work-title" className="container-site pb-16 md:pb-20 lg:pb-22">
      <div className="border-t border-line pt-9 md:pt-12">
        <p className="eyebrow">Einblick aus einem Einsatz</p>
        <h2 id="service-work-title" className="display mt-5 max-w-[850px] break-words hyphens-auto text-[clamp(37px,4vw,55px)]">
          {example.title}
        </h2>
        {example.kind === 'comparison' ? (
          <figure className="mt-7 max-w-[1160px] md:mt-9">
            <div className="grid gap-7 md:grid-cols-2 md:gap-6">
              {([
                ['Vorher', example.before],
                ['Nachher', example.after],
              ] as const).map(([label, photo]) => (
                <div key={label}>
                  <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[.1em] text-green">{label}</p>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc((100vw - 64px) / 2), 608px"
                    className="h-auto w-full rounded-[8px]"
                  />
                </div>
              ))}
            </div>
            <figcaption className="mt-4 max-w-[760px] text-sm leading-7 text-muted md:mt-5">{example.caption}</figcaption>
          </figure>
        ) : (
          <figure className="mt-7 w-full md:mt-9" style={{ maxWidth: Math.min(example.image.width, 980) }}>
            <Image
              src={example.image.src}
              alt={example.image.alt}
              width={example.image.width}
              height={example.image.height}
              sizes={`(max-width: 767px) calc(100vw - 32px), (max-width: ${Math.min(example.image.width, 980) + 39}px) calc(100vw - 40px), ${Math.min(example.image.width, 980)}px`}
              className={example.image.width > example.image.height ? 'h-auto w-full rounded-[8px]' : 'aspect-[3/4] w-full rounded-[8px] object-cover object-[50%_35%] md:aspect-[4/3]'}
            />
            {example.caption && <figcaption className="mt-4 max-w-[760px] text-sm leading-7 text-muted md:mt-5">{example.caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}
