import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
};
