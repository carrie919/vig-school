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
        "private_key_id": "ca36cbba46f5ccbfba3020f12b1ac1e26179bf65",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLCoEhsNC18/wE\nXJL3V5KvFqdYiT4jkAzNPdee55atFh9qDeH8wYS6LQIDEwT8OP+dzYiqhCRgrS8/\nICpbIJI+jEp9LnDYEknMNQjAmnspqB1kExoIZxDIuxyvJAinKtniSjGct+mQMRIi\nDroGLRLpiw6qjcPdmbf2xF6FZrWyLSSb+dqgyx9EuNb3ryZhK4nvlR1l+2syTkJg\nqiFlKpv0qlTDe8+S/wDMy6yRshzZHY7Z91LFuu3v4Wu7BXTX6h59wmatdB6ToI7A\nlmE2wSzUEyoPamuEYUCiMiv92enpyiA0M/zedKKCfZO1U3D7ADxdwqobhEYLtao1\nzMgknsDJAgMBAAECggEAA2QRBQWFbsx81HvRToUtY3Qu5kkgewqQVCsouzQl7Y0V\niDlkIUsAEvXmdzOtnSK8jh+dHS/oxZ6Oz/CTFIOGPbotEksgwlMH3XuzQjgyP19Z\n4k55XFOQUbHiSECDTntmOSPBEVt28JwJL/1r+OduzeyvGYUVlNFY46ui4np1JV0Z\nBiYyd8QEKb5+aMEkhL7MzxlqIl4us0x57X023/pp/1Dn/UxmXOo08gOLjiLQMSgO\nkBZ93DURlW84vRQoH36hohejZ/Ae3/WjKE1q6SCuC2pYAWD/DCoHFpEbGPQZRbYE\nWLn2LE7dZJiWCDFyGNcXGXbKUbspY8kBkDBpvi/XAwKBgQDoAIztqoO+yfVyGQDL\nYF9QPEmNCQyjQqRAm1Bz7/KRmyIRBwbLhCZ4cmXpNpDbUsY7OrDqvvrFHqof2zqI\ntkoppHkRccMs405/376/Tswv7bQnAhpQ/TqI0HumupMTTU5u9VkgADM+4CmBeZsb\nYhg/2xV5Y1IqxkFKSrK2qf5BDwKBgQDgCw84/Lb2WLHQ30Dx5InnKIrHQz85uzra\nXg05oksb1pKZ/wbQDy4r6Ytnglaf6MDhNnn+JDz+A26wfxnQuuJ4XQYWh+9wNUm6\nOMUa0fMTkMqBib7e9rPQ0vQ7Gohkv4ABiDn3HlWTAeFQnlAQw8hOtmS7pjCsxHwg\n9FimzHiwpwKBgEge67ByQnRL6f4nIaUXd2nE5ARw3Lnf3Jms7oyr+dcjx6pNaeJY\nWXE19tJRwSQ9DhyZeSfwaJpglvhCOWcIa/OYCn7Ow6KvotaDopNsFnOLzGYX9EBb\nCBhB3z6MX24vqQM7SBJ3nXadTqnOONaBXxJys7FBm+hqKx/CKt436C8nAoGBAKh9\nyMH71IFp7Lh/3fDNBiURKWV4HmmFdFpbVyjb9A6IjZJA6Fe6wueFaTC8Jfd27O+y\nr4ZArJn/7NPRkpGWqtEIbJavPpQtjzf8j8d+04cIYjOPazt1X4AR1llIuADEwDjm\nwWkmqAa56EBf/yjMhK0loJY7Auo7jnqeKLmwlqeLAoGBAI3nEq36JRyCEAvtloR4\nm4Vt330UuEFQD5IStmgEi1C/SWu9FmmAbcgBZ9I5uy+sUWNgMT2slHkbgJ4HogP1\njNWwK52fLTTEkOwfUGZa+gAIS8ox4mFfLnTsd9oQRwC3viQXq4W2Of6KBeV3y/B0\nnrQxjUtKhWnmwD52XOhKniAl\n-----END PRIVATE KEY-----\n",
        "client_email": "vignanaluminisheetapi@vignan-web.iam.gserviceaccount.com",
        "client_id": "101764120105542124349",
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
