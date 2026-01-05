# Neon Database Setup Guide

## 1. Create Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy your database connection string

## 2. Configure Environment Variables

Update your `.env.local` file with your Neon database URL:

```env
DATABASE_URL="postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/dbname?sslmode=require"
```

## 3. Generate and Push Database Schema

Run these commands to set up your database:

```bash
# Generate migration files
pnpm db:generate

# Push schema to database (for development)
pnpm db:push
```

## 4. Optional: Use Drizzle Studio

To view and manage your database with a GUI:

```bash
pnpm db:studio
```

## 5. Start Development Server

```bash
pnpm dev
```

## Database Schema

The `clients` table includes:
- `id` (Primary Key)
- `companyName` (Required)
- `contactName` (Required)
- `email` (Required, Unique)
- `phone` (Required)
- `address` (Optional)
- `password` (Required - for client portal access)
- `notes` (Optional)
- `status` (Default: 'Active')
- `createdAt` (Auto-generated)
- `updatedAt` (Auto-generated)

## API Endpoints

- `GET /api/clients` - Fetch all clients
- `POST /api/clients` - Create new client
- `GET /api/clients/[id]` - Fetch single client
- `PUT /api/clients/[id]` - Update client
- `DELETE /api/clients/[id]` - Delete client

## Security Notes

⚠️ **Important**: In production, you should:
1. Hash passwords before storing them (use bcrypt)
2. Add proper authentication middleware
3. Validate all inputs server-side
4. Use environment variables for sensitive data
5. Implement rate limiting
6. Add proper error handling and logging

## Features Implemented

✅ Add new clients with password field
✅ Load clients from database
✅ Search and filter clients
✅ Form validation
✅ Error handling
✅ Loading states
✅ Responsive design