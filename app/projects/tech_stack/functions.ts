"use server"

import {
    LineDataType,
    RawCircleType,
    TechCircleType,
} from "@/app/types/TechCircle"
import { randomInt } from "crypto"
import Line from "./Line"

export async function generateAllCircles({
    rawCircles,
    maxX,
    maxY,
    size,
}: {
    rawCircles: RawCircleType[]
    maxX: number
    maxY: number
    size: number
}): Promise<TechCircleType[]> {
    const allCircles: TechCircleType[] = []
    const realMaxX = maxX - size
    const realMaxY = maxY - size
    rawCircles.forEach((rawCircle) => {
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
                if (
                    Math.abs(newX - circle.newX) < size &&
                    Math.abs(newY - circle.newY) < size
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
            id: rawCircle.id,
            type: rawCircle.type,
            newX,
            newY,
        })
    })

    console.log("All the circles generated: ", JSON.stringify(allCircles))
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
                    console.log(
                        `I am generating a line for the circles: ${prevCircle.id} and ${circle.id} with their x1,y1 = ${prevCircle.newX},${prevCircle.newY} and x2,y2 = ${circle.newX},${circle.newY}`,
                    )

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
                        angle
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

async function calculateLineAngle(x1: number, y1: number, x2: number, y2: number): Promise<number> {
    return Math.atan2(
        y2 - y1,
        x2 - x1,
    )
}

async function calculateLineLength(x1: number, y1: number, x2: number, y2: number): Promise<number> {
    return Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2),
    )
}

async function calculateLinePosition(x1: number, y1: number, x2: number, y2: number, circleSize: number, length: number, angle: number): Promise<number[]> {

    const newXP1 =
        x1 < x2
            ? x1 + circleSize / 2
            : x2 + circleSize / 2
    const newXP2 = length / 2 - (length / 2) * Math.abs(Math.cos(angle))
    const newX = newXP1 - newXP2

    const newYP1 =
        x1 < x2
            ? y1 + circleSize / 2
            : y2 + circleSize / 2

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
