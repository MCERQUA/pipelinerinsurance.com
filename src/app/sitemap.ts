import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pipelinerinsurance.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/coverages`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/coverages/general-liability`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/coverages/workers-compensation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/coverages/commercial-auto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/coverages/equipment-coverage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/coverages/pollution-liability`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/coverages/contractor-bonds`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/pipeline-construction-insurance-requirements`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/why-pipeline-contractors-need-pollution-liability`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/workers-comp-for-pipeline-workers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
