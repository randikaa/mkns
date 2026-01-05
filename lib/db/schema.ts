import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core'

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  companyName: varchar('company_name', { length: 255 }).notNull(),
  contactName: varchar('contact_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 50 }).notNull(),
  address: text('address'),
  password: varchar('password', { length: 255 }).notNull(), // In production, this should be hashed
  notes: text('notes'),
  status: varchar('status', { length: 50 }).default('Active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Client = typeof clients.$inferSelect
export type NewClient = typeof clients.$inferInsert