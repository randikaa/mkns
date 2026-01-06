import { pgTable, serial, varchar, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core'

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

export const staff = pgTable('staff', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 50 }).notNull(),
  position: varchar('position', { length: 255 }).notNull(),
  department: varchar('department', { length: 255 }).notNull(),
  salary: varchar('salary', { length: 50 }),
  hireDate: timestamp('hire_date').notNull(),
  password: varchar('password', { length: 255 }).notNull(), // In production, this should be hashed
  notes: text('notes'),
  status: varchar('status', { length: 50 }).default('Active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time').notNull(),
  location: varchar('location', { length: 255 }),
  clientId: integer('client_id').references(() => clients.id),
  staffId: integer('staff_id').references(() => staff.id),
  eventType: varchar('event_type', { length: 100 }).notNull(), // Commercial, Deep Clean, Maintenance, etc.
  status: varchar('status', { length: 50 }).default('Scheduled').notNull(), // Scheduled, In Progress, Completed, Cancelled
  priority: varchar('priority', { length: 20 }).default('Medium').notNull(), // Low, Medium, High, Urgent
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Client = typeof clients.$inferSelect
export type NewClient = typeof clients.$inferInsert
export type Staff = typeof staff.$inferSelect
export type NewStaff = typeof staff.$inferInsert
export type Event = typeof events.$inferSelect
export type NewEvent = typeof events.$inferInsert