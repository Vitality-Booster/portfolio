import {
    GetObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const S3_SKILL_FOLDER = "skillset/icons/"
const S3_PROJECT_FOLDER = "projects/images/"

export enum ImageType {
    Project,
    Skill
}

const client = new S3Client({
    region: process.env.S3_CLIENT_REGION,

    credentials: fromCognitoIdentityPool({
        clientConfig: { region: process.env.S3_CLIENT_REGION },
        identityPoolId: process.env.S3_IDENTITY_POOL_ID ?? "",
    }),
})

export async function imagePathToUrl(path: string, type: ImageType): Promise<string> {

    if (path === "") {
        return "https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_640.jpg"
    }

    let fullPath = ""

    if (type === ImageType.Project)
        fullPath = S3_PROJECT_FOLDER + path
    else if (type === ImageType.Skill) 
        fullPath = S3_SKILL_FOLDER + path

    const signedUrl = await signUrl(process.env.S3_BUCKET_NAME ?? "", fullPath)

    return signedUrl
}

async function signUrl(bucket: string, key: string): Promise<string> {
    const command = new GetObjectCommand({ Bucket: bucket, Key: key })
    const url = await getSignedUrl(client, command, { expiresIn: 3600 })
    return url
}