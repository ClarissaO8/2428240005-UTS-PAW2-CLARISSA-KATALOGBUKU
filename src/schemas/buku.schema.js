import z from "zod";

export const storeBukuSchema = z.object({
    title: z.string().trim().min(3, "Judul buku minimal 3 karakter"),
    author: z.string().trim().min(3, "Nama penulis minimal 3 karakter"),
    publication_year: z.number().int().min(1000, "Tahun terbit tidak valid"),
});

export const updateBukuSchema = z.object({
    title: z.string().trim().min(3, "Judul buku minimal 3 karakter").optional(),
    author: z.string().trim().min(3, "Nama penulis minimal 3 karakter").optional(),
    publication_year: z.number().int().min(1000, "Tahun terbit tidak valid").optional(),
});