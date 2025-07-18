import { type NextRequest, NextResponse } from "next/server"

// Mock student database
const students = [
  {
    id: 1,
    name: "Alice Chen",
    age: 12,
    level: "Advanced",
    accuracy: 96.2,
    sessionsCompleted: 45,
    avgResponseTime: 1.8,
    cognitiveProfile: {
      attention: 9.2,
      memory: 8.8,
      processing: 9.5,
      arithmetic: 9.7,
    },
  },
  {
    id: 2,
    name: "Bob Kumar",
    age: 11,
    level: "Intermediate",
    accuracy: 89.4,
    sessionsCompleted: 32,
    avgResponseTime: 2.3,
    cognitiveProfile: {
      attention: 8.1,
      memory: 7.9,
      processing: 8.3,
      arithmetic: 8.7,
    },
  },
  {
    id: 3,
    name: "Carol Zhang",
    age: 13,
    level: "Advanced",
    accuracy: 94.1,
    sessionsCompleted: 52,
    avgResponseTime: 1.9,
    cognitiveProfile: {
      attention: 8.9,
      memory: 9.1,
      processing: 8.7,
      arithmetic: 9.3,
    },
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const studentId = searchParams.get("id")

  if (studentId) {
    const student = students.find((s) => s.id === Number.parseInt(studentId))
    if (student) {
      return NextResponse.json({ success: true, student })
    } else {
      return NextResponse.json({ success: false, error: "Student not found" }, { status: 404 })
    }
  }

  return NextResponse.json({ success: true, students })
}

export async function POST(request: NextRequest) {
  try {
    const newStudent = await request.json()
    const student = {
      id: students.length + 1,
      ...newStudent,
      sessionsCompleted: 0,
      cognitiveProfile: {
        attention: 0,
        memory: 0,
        processing: 0,
        arithmetic: 0,
      },
    }

    students.push(student)

    return NextResponse.json({ success: true, student })
  } catch (error) {
    console.error("Error creating student:", error)
    return NextResponse.json({ success: false, error: "Failed to create student" }, { status: 500 })
  }
}