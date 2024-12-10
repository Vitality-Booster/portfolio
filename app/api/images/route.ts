// "use server";

import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"
// import "dotenv/config"

// TODO: Finish it

const client = new S3Client({
    region: process.env.S3_CLIENT_REGION,
    // Unless you have a public bucket, you'll need access to a private bucket.
    // One way to do this is to create an Amazon Cognito identity pool, attach a role to the pool,
    // and grant the role access to the 's3:GetObject' action.
    //
    // You'll also need to configure the CORS settings on the bucket to allow traffic from
    // this example site. Here's an example configuration that allows all origins. Don't
    // do this in production.
    //[
    //  {
    //    "AllowedHeaders": ["*"],
    //    "AllowedMethods": ["GET"],
    //    "AllowedOrigins": ["*"],
    //    "ExposeHeaders": [],
    //  },
    //]
    //
    credentials: fromCognitoIdentityPool({
        clientConfig: { region: process.env.S3_CLIENT_REGION },
        identityPoolId: process.env.S3_IDENTITY_POOL_ID ?? "",
    }),
})

export async function GET() {
    const command = new ListObjectsCommand({
        Bucket: process.env.S3_BUCKET_NAME,
    })
    const { Contents } = await client.send(command)

    return Response.json({ images: Contents })
}
