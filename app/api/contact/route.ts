import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend('re_X4v9c4wo_Amzz4h15Es9AjWmYyWKqUGYP')

/**
 * POST /api/contact
 * Handles contact form submissions and sends email via Resend
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const {
      name,
      coordinateOfOrigin,
      archiveLanguage,
      natureOfAcquisition,
      contactMethod,
      conciergeEmail,
      whatsappNumber,
      message,
    } = body

    // Validate required fields
    if (!name || !coordinateOfOrigin || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email if contact method is email
    if (contactMethod === 'email' && !conciergeEmail) {
      return NextResponse.json(
        { error: 'Email address is required when contact method is email' },
        { status: 400 }
      )
    }

    // Validate WhatsApp number if contact method is WhatsApp
    if (contactMethod === 'whatsapp' && !whatsappNumber) {
      return NextResponse.json(
        { error: 'WhatsApp number is required when contact method is WhatsApp' },
        { status: 400 }
      )
    }

    // Format the date for display
    const formatDate = (dateStr: string): string => {
      if (!dateStr) return 'Not provided'
      const date = new Date(dateStr + 'T12:00:00')
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }

    // Format select values for display
    const formatSelectValue = (value: string): string => {
      return value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    // Prepare email content
    const contactInfo =
      contactMethod === 'email'
        ? `Email: ${conciergeEmail}`
        : `WhatsApp: ${whatsappNumber}`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #181818;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              border-bottom: 2px solid #722F37;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #722F37;
              margin: 0;
              font-size: 24px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f9f9f9;
              border-left: 3px solid #722F37;
            }
            .field-label {
              font-weight: 600;
              color: #722F37;
              margin-bottom: 5px;
              text-transform: uppercase;
              font-size: 12px;
              letter-spacing: 0.5px;
            }
            .field-value {
              color: #181818;
              font-size: 16px;
            }
            .message-box {
              background-color: #f5f5f5;
              padding: 20px;
              border-radius: 4px;
              margin-top: 10px;
              white-space: pre-wrap;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; color: #666;">House of Binaryhubb - Private Access Form</p>
          </div>

          <div class="field">
            <div class="field-label">The Names to be Inscribed</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">Contact Information</div>
            <div class="field-value">${contactInfo}</div>
          </div>

          <div class="field">
            <div class="field-label">The Coordinate of Origin</div>
            <div class="field-value">${formatDate(coordinateOfOrigin)}</div>
          </div>

          <div class="field">
            <div class="field-label">Archive Language Preference</div>
            <div class="field-value">${formatSelectValue(archiveLanguage)}</div>
          </div>

          <div class="field">
            <div class="field-label">Nature of Acquisition</div>
            <div class="field-value">${formatSelectValue(natureOfAcquisition)}</div>
          </div>

          <div class="field">
            <div class="field-label">The Intimate Decree</div>
            <div class="message-box">${message}</div>
          </div>

          <div class="footer">
            <p>This email was sent from the Binaryhubb contact form.</p>
            <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</p>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Contact Form Submission - House of Binaryhubb

The Names to be Inscribed: ${name}
Contact Information: ${contactInfo}
The Coordinate of Origin: ${formatDate(coordinateOfOrigin)}
Archive Language Preference: ${formatSelectValue(archiveLanguage)}
Nature of Acquisition: ${formatSelectValue(natureOfAcquisition)}

The Intimate Decree:
${message}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
    `.trim()

    // Hardcoded recipient email
    const recipientEmail = 'pranayverma38logo@gmail.com'

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `Binaryhubb Contact <noreply@pranaydevops.cloud>`,
      to: [recipientEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: contactMethod === 'email' ? conciergeEmail : undefined,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        emailId: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
