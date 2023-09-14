import { defineCollection, z } from 'astro:content'

const commerceCollection = defineCollection({ 
  schema: z.object({
    name: z.string(),
    tag: z.string(),
    city: z.string(),
    address: z.string(),
    map: z.string().url(),
    isSubsidiary: z.boolean(),
    isMainSubsidiary: z.boolean(),
    subsidiaryFrom: z.string().optional(),
  })
})

export const collections = { 
  'caracas': commerceCollection, 
  'margarita': commerceCollection,
  'valencia': commerceCollection 
}