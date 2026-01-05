import { config } from 'dotenv'
import { db, clients } from '../lib/db'

// Load environment variables
config({ path: '.env.local' })

async function testDatabase() {
  try {
    console.log('Testing database connection...')
    
    // Test connection by fetching clients
    const allClients = await db.select().from(clients)
    console.log(`✅ Database connected successfully! Found ${allClients.length} clients.`)
    
    // If no clients exist, add a sample client
    if (allClients.length === 0) {
      console.log('Adding sample client...')
      
      const [newClient] = await db.insert(clients).values({
        companyName: 'Sample Corp',
        contactName: 'John Doe',
        email: 'john@samplecorp.com',
        phone: '+1 555-0123',
        address: '123 Business St, City, State 12345',
        password: 'samplepassword123',
        notes: 'This is a sample client for testing purposes.',
        status: 'Active'
      }).returning()
      
      console.log('✅ Sample client added:', newClient.companyName)
    }
    
    // Display all clients
    const updatedClients = await db.select().from(clients)
    console.log('\n📋 Current clients:')
    updatedClients.forEach(client => {
      console.log(`- ${client.companyName} (${client.contactName}) - ${client.email}`)
    })
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
  }
}

testDatabase()