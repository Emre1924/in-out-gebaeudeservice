import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ImageSquare } from '@phosphor-icons/react/ssr';
import { services } from '@/lib/site';

export function ServiceList({ limit, priorityFirstImage = false }: { limit?: number; priorityFirstImage?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
      {services.slice(0, limit).map((service, index) => (
        <Link
          key={service.slug}
          href={`/leistungen/${service.slug}`}
          className={`group relative isolate block aspect-[16/10] min-w-0 overflow-hidden rounded-[8px] bg-sand ${service.overviewImage ? 'text-white' : 'border border-line/15 text-primary'}`}
        >
          {service.overviewImage ? (
            <>
              <Image
                src={service.overviewImage.src}
                alt={service.overviewImage.alt}
                fill
                quality={86}
                priority={priorityFirstImage && index === 0}
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc((100vw - 64px) / 2), 608px"
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.015]"
                style={{ objectPosition: service.overviewImage.position ?? 'center' }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,18,0.88)_0%,rgba(15,23,18,0.68)_28%,rgba(15,23,18,0.16)_55%,transparent_75%)]" aria-hidden="true" />
            </>
          ) : (
            <div className="absolute inset-x-0 top-[25%] flex items-center justify-center gap-2.5 text-green/60" aria-hidden="true">
              <ImageSquare size={22} weight="light" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[.1em]">Leistungsbild</span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-6 lg:p-8">
            <span className="mb-3 block font-mono text-[11px] font-semibold">{service.number}</span>
            <div className="flex items-end gap-4">
              <h3 className="min-w-0 flex-1 hyphens-auto text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.2] tracking-[-.03em]">{service.title}</h3>
              <ArrowUpRight aria-hidden="true" className="mb-1 shrink-0 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" size={22} />
            </div>
            <p className="sr-only">{service.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
