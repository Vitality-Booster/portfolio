import nodemailer from "nodemailer"

export async function POST(req: Request) {
    const { fullName, subject, email, message } = await req.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
    })

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: `(Portfolio) ${subject} from ${fullName}`,
        text: `I am getting the following email from my Portfolio: \n
            sender email: ${email} \n
            sender full name: ${fullName} \n
            the subject: ${subject} \n
            the message from the sender:\n
            ${message}`,
    }

    try {
        await transporter.sendMail(mailOptions)
        return Response.json(
            { message: "Email sent successfully" },
            { status: 200 },
        )
    } catch (error) {
        return Response.json(
            { message: "Error sending email", error },
            { status: 500 },
        )
    }
}
