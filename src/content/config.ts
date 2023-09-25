import { defineCollection, z } from 'astro:content'

const commerceCollection = defineCollection({ 
  schema: z.object({
    logo: z.string().optional(),
    name: z.string(),
    tag: z.string(),
    city: z.string(),
    address: z.string(),
    map: z.string().url(),
    isSubsidiary: z.boolean(),
    isMainSubsidiary: z.boolean(),
    subsidiaryFrom: z.string().optional(),
    social: z.object({
      whatsapp: z.string().optional(),
      telephone: z.number().optional(),
      facebook: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      email: z.string().optional()
    }).optional().nullable()
  })
})

export const collections = { 
  'caracas': commerceCollection, 
  'margarita': commerceCollection,
  'valencia': commerceCollection 
}