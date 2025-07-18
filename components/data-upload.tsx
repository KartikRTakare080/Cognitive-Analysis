"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, CheckCircle, Brain } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

interface DataUploadProps {
  onAnalysisComplete: (data: any) => void
}

export default function DataUpload({ onAnalysisComplete }: DataUploadProps) {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const { toast } = useToast()

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files
      if (!files || files.length === 0) return

      setIsUploading(true)
      setUploadProgress(0)

      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            setUploadedFiles(Array.from(files).map((f) => f.name))
            toast({
              title: "Upload Complete",
              description: `${files.length} EEG file(s) uploaded successfully`,
            })
            return 100
          }
          return prev + 10
        })
      }, 200)
    },
    [toast],
  )

  const handleAnalyze = useCallback(async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No Files",
        description: "Please upload EEG data files first",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)

    // Simulate ML analysis
    setTimeout(() => {
      const mockResults = {
        svm: { accuracy: 92.5, precision: 89.3, recall: 94.1 },
        randomForest: { accuracy: 94.2, precision: 91.7, recall: 96.3 },
        neuralNetwork: { accuracy: 96.8, precision: 94.5, recall: 98.1 },
        cognitiveMetrics: {
          attentionLevel: 8.7,
          memoryPerformance: 9.2,
          processingSpeed: 7.9,
          mentalArithmetic: 9.5,
        },
      }

      setIsAnalyzing(false)
      onAnalysisComplete(mockResults)
      toast({
        title: "Analysis Complete",
        description: "EEG data has been processed by all 3 ML models",
      })
    }, 3000)
  }, [uploadedFiles, onAnalysisComplete, toast])

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-600" />
            EEG Data Upload
          </CardTitle>
          <CardDescription>Upload EEG data files (.edf, .csv, .mat) for cognitive analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="eeg-files">EEG Data Files</Label>
            <Input
              id="eeg-files"
              type="file"
              multiple
              accept=".edf,.csv,.mat,.txt"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </div>

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} />
            </div>
          )}

          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Uploaded Files:</h4>
              <div className="space-y-1">
                {uploadedFiles.map((filename, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{filename}</span>
                    <Badge variant="secondary">Ready</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Configuration */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Analysis Configuration
          </CardTitle>
          <CardDescription>Configure ML models and analysis parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <h4 className="font-semibold">SVM Model</h4>
                </div>
                <p className="text-sm text-muted-foreground">Support Vector Machine for pattern classification</p>
                <Badge className="mt-2 bg-blue-600">Active</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <h4 className="font-semibold">Random Forest</h4>
                </div>
                <p className="text-sm text-muted-foreground">Ensemble learning for robust predictions</p>
                <Badge className="mt-2 bg-green-600">Active</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <h4 className="font-semibold">Neural Network</h4>
                </div>
                <p className="text-sm text-muted-foreground">Deep learning for complex pattern recognition</p>
                <Badge className="mt-2 bg-purple-600">Active</Badge>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || uploadedFiles.length === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isAnalyzing ? (
              <>
                <Brain className="h-4 w-4 mr-2 animate-spin" />
                Analyzing EEG Data...
              </>
            ) : (
              <>
                <Brain className="h-4 w-4 mr-2" />
                Start Cognitive Analysis
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Processing Status */}
      {isAnalyzing && (
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">Processing EEG Data</h3>
                <p className="text-sm text-blue-700">Running analysis with 3 ML models...</p>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span>Preprocessing EEG signals</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <span>Feature extraction</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                    <span>Model inference</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}