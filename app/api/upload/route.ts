import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files") as File[]

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, error: "No files uploaded" }, { status: 400 })
    }

    // Simulate file processing
    const processedFiles = []

    for (const file of files) {
      // Validate file type
      const allowedTypes = [".edf", ".csv", ".mat", ".txt"]
      const fileExtension = "." + file.name.split(".").pop()?.toLowerCase()

      if (!allowedTypes.includes(fileExtension)) {
        return NextResponse.json({ success: false, error: `Unsupported file type: ${fileExtension}` }, { status: 400 })
      }

      // Simulate file processing
      await new Promise((resolve) => setTimeout(resolve, 100))

      processedFiles.push({
        name: file.name,
        size: file.size,
        type: file.type,
        processed: true,
        channels: Math.floor(Math.random() * 32) + 8, // 8-40 channels
        sampleRate: 256, // Hz
        duration: Math.floor(Math.random() * 300) + 60, // 1-5 minutes
      })
    }

    return NextResponse.json({
      success: true,
      files: processedFiles,
      message: `Successfully processed ${files.length} EEG file(s)`,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 })
  }
}