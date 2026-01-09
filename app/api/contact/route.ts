import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, phone, company, service, message } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !service || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "MKNS Contact Form <onboarding@resend.dev>", // Resend's default sender for testing
            to: process.env.CONTACT_EMAIL || "contact@mknscleaningsolution.com.au",
            subject: `New Quote Request from ${firstName} ${lastName}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
              .value { color: #4b5563; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Quote Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Service Required:</div>
                  <div class="value">${service}</div>
                </div>
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the MKNS Cleaning Services contact form.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        })

        if (error) {
            console.error("Resend error:", error)
            return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
        }

        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch (error) {
        console.error("API error:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
