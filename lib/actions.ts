'use server'

import { google } from 'googleapis';
import path from 'path';


function findPhoneColumnIndex(headerRow: string[]): number {
  return headerRow.findIndex((header: string) => header.toLowerCase() === 'mobile');
}

export async function postAlumni(data: any) {  // Use POST for form submission
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      credentials: {
        "type": "service_account",
        "project_id": "vignan-web",
        "private_key_id": `${process.env.PRIVATE_KEY_ID}`,
        "private_key": `${process.env.PRIVATE_KEY}`.replace(/\\n/g, '\n'),
        "client_email": `${process.env.CLIENT_EMAIL}`,
        "client_id": `${process.env.CLIENT_ID}`,
        "universe_domain": "googleapis.com"
      }
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const phoneNumber = data.mobile;
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const range = 'Sheet1!A:Z';

    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const values = existingData.data.values || [];
    const phoneColumnIndex = findPhoneColumnIndex(values[0]);

    const isDuplicate = values.slice(1).some(row => row[phoneColumnIndex] === phoneNumber);

    if (isDuplicate) {
      return { message: 'Phone number already exists!', status: "FAILURE" };
    }

    const valuesToAppend = [Object.values(data)];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: valuesToAppend,
      },
    });

    return { message: 'Data submitted successfully!', status: "SUCCESS" }; // Use NextResponse

  } catch (error: any) {
    return { message: error.message, status: "FAILURE" }; // Use NextResponse
  }
}
