import { contactAction } from "@/app/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const token = body.get("captcha") as string;
    const response = await contactAction(token, body);
    return NextResponse.json(response, {
      status: response.success ? 200 : 400,
    });
  } catch (error) {
    console.error("Erreur API Contact:", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
