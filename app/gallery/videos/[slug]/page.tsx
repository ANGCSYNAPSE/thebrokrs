import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, Play, UserRound } from "lucide-react"
import { galleryVideos, getGalleryVideoBySlug } from "@/lib/gallery-data"

type VideoPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return galleryVideos.map((video) => ({ slug: video.slug }))
}

export function generateMetadata({ params }: VideoPageProps) {
  const video = getGalleryVideoBySlug(params.slug)

  if (!video) {
    return {
      title: "Video Not Found | The Brokrs"
    }
  }

  return {
    title: `${video.title} | The Brokrs Gallery`,
    description: video.description
  }
}

export default function GalleryVideoPage({ params }: VideoPageProps) {
  const video = getGalleryVideoBySlug(params.slug)

  if (!video) {
    notFound()
  }

  const relatedVideos = galleryVideos.filter((item) => item.slug !== video.slug)

  return (
    <main className="min-h-screen bg-[#0b1118] text-white">
      <section className="border-b border-white/10 bg-[#0f1720]/95 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/gallery" className="inline-flex h-10 items-center gap-2 rounded-full bg-white/10 px-4 text-xs font-black uppercase tracking-widest text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Gallery
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-200/70">The Brokrs Videos</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-6 lg:py-8">
        <div className="min-w-0">
          <div className="overflow-hidden rounded-[18px] bg-black shadow-2xl shadow-black/35">
            <video
              src={video.src}
              poster={video.image}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black object-contain"
            />
          </div>

          <div className="mt-5 border-b border-white/10 pb-5">
            <h1 className="text-2xl font-black leading-tight md:text-4xl">{video.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/58">
              <span className="inline-flex items-center gap-2">
                <UserRound className="h-4 w-4 text-cyan-200" />
                {video.uploader}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-cyan-200" />
                {video.date}
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-200">{video.role}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 md:text-base">{video.description}</p>
          </div>
        </div>

        <aside className="min-w-0">
          <h2 className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-white/58">More Videos</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {relatedVideos.map((item) => (
              <Link
                key={item.slug}
                href={`/gallery/videos/${item.slug}`}
                className="group grid grid-cols-[132px_minmax(0,1fr)] gap-3 rounded-[12px] p-2 transition hover:bg-white/[0.06] sm:grid-cols-1 lg:grid-cols-[132px_minmax(0,1fr)]"
              >
                <div className="relative aspect-video overflow-hidden rounded-[10px] bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="132px"
                    className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 backdrop-blur-md">
                      <Play className="h-4 w-4 fill-white" />
                    </span>
                  </span>
                  {item.duration && (
                    <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-black text-white">
                      {item.duration}
                    </span>
                  )}
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="line-clamp-2 text-sm font-black leading-snug text-white group-hover:text-cyan-100">{item.title}</h3>
                  <p className="mt-1 truncate text-xs font-semibold text-white/50">{item.uploader}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/35">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}
