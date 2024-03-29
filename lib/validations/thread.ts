import * as z from "zod"

export const ThreadValidation = z.object({
    thread : z.string().min(3 , {message : "Minimum  3 characters"} ).nonempty(),
    accountId : z.string()
})
export const CommnetValidation = z.object({
    thread : z.string().min(3 , {message : "Minimum  3 characters"} ).nonempty(),
})