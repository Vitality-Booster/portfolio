// "use server";

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
// import "dotenv/config"

// TODO: Finish it

const S3_SKILL_FOLDER = "skillset/icons/"

const client = new S3Client({
    region: process.env.S3_CLIENT_REGION,

    credentials: fromCognitoIdentityPool({
        clientConfig: { region: process.env.S3_CLIENT_REGION },
        identityPoolId: process.env.S3_IDENTITY_POOL_ID ?? "",
    }),
})

// export async function GET() {
//     const command = new ListObjectsCommand({
//         Bucket: process.env.S3_BUCKET_NAME,
//     })
//     const { Contents } = await client.send(command)

//     return Response.json({ images: Contents })
// }

export async function GET(request: Request) {
    const query = new URL(request.url)
    let path = query.searchParams.get("path")
    const type = query.searchParams.get("type")

    if (path === null) {
        return Response.json({ error: "No path provided" })
    }

    if (type === "skill") {
        path = S3_SKILL_FOLDER + path
    }

    const signedUrl = await signUrl(process.env.S3_BUCKET_NAME ?? "", path)

    return Response.json({ imageUrl: signedUrl })
}

async function signUrl(bucket: string, key: string): Promise<string> {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key })
    const url = await getSignedUrl(client, command, { expiresIn: 3600 })
    return url
}
