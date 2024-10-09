import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  // Detect if the form was filled by a bot
  if (req.body.realName) {
    return res.redirect(302, "/error");
  }

  // Additional bot detection logic (e.g., checking for empty fields)
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.redirect(302, "/error");
  }

  if (req.method === "POST") {
    const { data, error } = await resend.emails.send({
      from: "hello@kerkzhan.com",
      to: ["kerkzhanboon@gmail.com"],
      subject: `REACHING OUT from ${req.body.email}`,
      react: EmailTemplate({
        name: req.body.name,
        message: req.body.message,
      }),
    });

    if (error) {
      return res.redirect(302, "/error");
    }

    return res.redirect(303, "/success");
  } else {
    // Handle unsupported request methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
