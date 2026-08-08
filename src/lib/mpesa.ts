export async function getMpesaToken() {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const baseUrl =
    process.env.MPESA_ENVIRONMENT === "sandbox"
      ? "https://sandbox.safaricom.co.ke"
      : "https://api.safaricom.co.ke";

  const auth = Buffer.from(`${key}:${secret}`).toString("base64");

  const response = await fetch(
    `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  if (!response.ok) throw new Error("Failed to get M-Pesa token");
  const data = await response.json();
  return data.access_token;
}

export async function initiateStkPush(
  phoneNumber: string,
  amount: number,
  reference: string,
  description: string
) {
  const token = await getMpesaToken();
  const shortcode = process.env.MPESA_SHORTCODE!;
  const passkey = process.env.MPESA_PASSKEY!;
  const baseUrl =
    process.env.MPESA_ENVIRONMENT === "sandbox"
      ? "https://sandbox.safaricom.co.ke"
      : "https://api.safaricom.co.ke";

  const formattedPhone = phoneNumber.startsWith("0")
    ? `254${phoneNumber.slice(1)}`
    : phoneNumber;

  const timestamp = new Date()
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(0, -3);
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString(
    "base64"
  );

  const payload = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: formattedPhone,
    PartyB: shortcode,
    PhoneNumber: formattedPhone,
    CallBackURL: `${process.env.APP_PUBLIC_URL}/api/mpesa/callback`,
    AccountReference: reference,
    TransactionDesc: description,
  };

  const response = await fetch(
    `${baseUrl}/mpesa/stkpush/v1/processrequest`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return await response.json();
}