"use server"

import {
    LineDataType,
    RawCircleType,
    TechCircleType,
} from "@/app/types/TechCircle"
import { Skill } from "@prisma/client"
import { randomInt } from "crypto"

export async function generateAllCircles({
    skills,
    maxX,
    maxY,
    size,
    animationPadding,
}: {
    skills: Skill[]
    maxX: number
    maxY: number
    size: number
    animationPadding: number
}): Promise<TechCircleType[]> {
    const allCircles: TechCircleType[] = []
    const realMaxX = maxX - size
    const realMaxY = maxY - size
    skills.forEach((skill) => {
        let newX,
            newY = 0
        for (;;) {
            newX = randomInt(0, realMaxX)
            newY = randomInt(0, realMaxY)
            let isSuccessful = false
            if (allCircles.length === 0) {
                isSuccessful = true
            }
            for (const circle of allCircles) {
                console.log("Still calculating")
                if (
                    Math.abs(newX - circle.newX) <
                        size + 2 * animationPadding &&
                    Math.abs(newY - circle.newY) < size + 2 * animationPadding
                )
                    break
                else {
                    if (circle === allCircles[allCircles.length - 1]) {
                        isSuccessful = true
                    }
                    continue
                }
            }

            if (isSuccessful) {
                break
            }
        }

        allCircles.push({
            size,
            newX,
            newY,
            id: `tech-circle-${skill.id}`,
            type: skill.tags[0],
            name: skill.name,
            src: skill.image
        })
    })

    return allCircles
}

export async function generateLines(
    allCircles: TechCircleType[],
    circleSize: number,
): Promise<LineDataType[]> {
    const lines: LineDataType[] = []
    const types: string[] = await getAllTypes(allCircles)

    for (const type of types) {
        let prevCircle: TechCircleType | null = null
        allCircles.forEach(async (circle) => {
            if (circle.type === type) {
                if (!prevCircle) {
                    prevCircle = circle
                } else {
                    const angle = await calculateLineAngle(
                        prevCircle.newX,
                        prevCircle.newY,
                        circle.newX,
                        circle.newY,
                    )

                    const length = await calculateLineLength(
                        prevCircle.newX,
                        prevCircle.newY,
                        circle.newX,
                        circle.newY,
                    )

                    const linePoisition = await calculateLinePosition(
                        prevCircle.newX,
                        prevCircle.newY,
                        circle.newX,
                        circle.newY,
                        circleSize,
                        length,
                        angle,
                    )

                    const id = `line-${Math.round(linePoisition[0])}-${Math.round(linePoisition[1])}`

                    lines.push({
                        id,
                        x: linePoisition[0],
                        y: linePoisition[1],
                        length,
                        angle,
                        type,
                    })
                    prevCircle = circle
                }
            }
        })
    }

    return lines
}

async function calculateLineAngle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): Promise<number> {
    return Math.atan2(y2 - y1, x2 - x1)
}

async function calculateLineLength(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): Promise<number> {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

async function calculateLinePosition(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    circleSize: number,
    length: number,
    angle: number,
): Promise<number[]> {
    const newXP1 = x1 < x2 ? x1 + circleSize / 2 : x2 + circleSize / 2
    const newXP2 = length / 2 - (length / 2) * Math.abs(Math.cos(angle))
    const newX = newXP1 - newXP2

    const newYP1 = x1 < x2 ? y1 + circleSize / 2 : y2 + circleSize / 2

    const newYP2 = (length / 2) * Math.sin(angle)
    const newY = x1 < x2 ? newYP1 + newYP2 : newYP1 - newYP2

    return [newX, newY]
}

async function getAllTypes(allCircles: TechCircleType[]): Promise<string[]> {
    const types: string[] = []
    allCircles.forEach((circle) => {
        if (types.indexOf(circle.type) === -1) types.push(circle.type)
    })

    return types
}
