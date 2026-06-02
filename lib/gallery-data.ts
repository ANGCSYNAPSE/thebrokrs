export type GalleryItemType = "photo" | "video"

export type GalleryItem = {
  title: string
  uploader: string
  role: string
  date: string
  type: GalleryItemType
  image: string
  tall: boolean
  slug?: string
  src?: string
  duration?: string
  description?: string
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Launch day walk-through",
    uploader: "Aarav Mehta",
    role: "Partner",
    date: "18 Oct 2026",
    type: "video",
    image: "/assets/estate.jpeg",
    src: "/assets/v1.mp4",
    slug: "launch-day-walk-through",
    duration: "0:45",
    description: "A first look at the launch-day experience with partners, members, and field teams.",
    tall: false
  },
  {
    title: "Client visit moment",
    uploader: "Riya Sharma",
    role: "Member",
    date: "18 Oct 2026",
    type: "photo",
    image: "/assets/project.jpeg",
    tall: true
  },
  {
    title: "Registration proof",
    uploader: "Kabir Sethi",
    role: "Field Team",
    date: "17 Oct 2026",
    type: "photo",
    image: "/assets/register.webp",
    tall: false
  },
  {
    title: "Verified handover",
    uploader: "Nisha Rao",
    role: "Support",
    date: "17 Oct 2026",
    type: "photo",
    image: "/assets/kyc.jpg",
    tall: true
  },
  {
    title: "Campaign desk",
    uploader: "Dev Malhotra",
    role: "Brokrs Team",
    date: "16 Oct 2026",
    type: "photo",
    image: "/assets/design.webp",
    tall: false
  },
  {
    title: "Property story",
    uploader: "Ananya Jain",
    role: "Partner",
    date: "16 Oct 2026",
    type: "photo",
    image: "/assets/estate 3.jpeg",
    tall: false
  },
  {
    title: "Media highlight",
    uploader: "The Brokrs",
    role: "Admin",
    date: "15 Oct 2026",
    type: "video",
    image: "/assets/media1.webp",
    src: "/assets/WhatsApp-Video-2025-06-23-at-1.57.47-PM.mp4",
    slug: "media-highlight",
    duration: "0:28",
    description: "A media-room highlight from the Brokrs community archive.",
    tall: true
  },
  {
    title: "Partner field update",
    uploader: "The Brokrs",
    role: "Field Team",
    date: "15 Oct 2026",
    type: "video",
    image: "/assets/estate 4.jpg",
    src: "/assets/v1.mp4",
    slug: "partner-field-update",
    duration: "0:45",
    description: "A field update captured during partner activity and project walkthroughs.",
    tall: false
  },
  {
    title: "Community reel recap",
    uploader: "The Brokrs",
    role: "Admin",
    date: "14 Oct 2026",
    type: "video",
    image: "/assets/img3.webp",
    src: "/assets/WhatsApp-Video-2025-06-23-at-1.57.47-PM.mp4",
    slug: "community-reel-recap",
    duration: "0:28",
    description: "A short recap of community moments, campaign energy, and member stories.",
    tall: true
  },
  {
    title: "Plan discussion",
    uploader: "Ishan Verma",
    role: "Advisor",
    date: "15 Oct 2026",
    type: "photo",
    image: "/assets/plans.jpg",
    tall: false
  },
  {
    title: "Growth room",
    uploader: "Priya Nair",
    role: "Campaign Lead",
    date: "14 Oct 2026",
    type: "photo",
    image: "/assets/img3.webp",
    tall: true
  },
  {
    title: "Offer showcase",
    uploader: "Rohan Kapoor",
    role: "Partner",
    date: "14 Oct 2026",
    type: "photo",
    image: "/assets/property.webp",
    tall: false
  }
]

export const galleryVideos = galleryItems.filter(
  (item): item is GalleryItem & { type: "video"; slug: string; src: string } =>
    item.type === "video" && Boolean(item.slug && item.src)
)

export const galleryPhotos = galleryItems.filter((item) => item.type === "photo")

export const galleryCounts = {
  videos: galleryVideos.length,
  photos: galleryPhotos.length
}

export function getGalleryVideoBySlug(slug: string) {
  return galleryVideos.find((item) => item.slug === slug)
}

export function getGalleryVideoHref(item: GalleryItem) {
  return item.type === "video" && item.slug ? `/gallery/videos/${item.slug}` : "/gallery"
}
