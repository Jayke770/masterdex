import { z } from 'zod'
const MainPageSettings = z.object({
    currency: z.string().optional()
})
export type IMainPageSettings = z.infer<typeof MainPageSettings>