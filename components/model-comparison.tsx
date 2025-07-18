"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts"
import { Brain, Cpu, Layers, Zap } from 'lucide-react'

const trainingData = [
  { epoch: 1, svm: 78, rf: 82, nn: 75 },
  { epoch: 5, svm: 85, rf: 87, nn: 83 },
  { epoch: 10, svm: 89, rf: 91, nn: 88 },
  { epoch: 15, svm: 91, rf: 93, nn: 92 },
  { epoch: 20, svm: 92, rf: 94, nn: 95 },
  { epoch: 25, svm: 92.5, rf: 94.2, nn: 96.8 },
]

const complexityData = [
  { complexity: 1, accuracy: 92.5, model: "SVM" },
  { complexity: 3, accuracy: 94.2, model: "Random Forest" },
  { complexity: 8, accuracy: 96.8, model: "Neural Network" },
]

export default function ModelComparison() {
  return (
    <div className="space-y-6">
      {/* Model Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Cpu className="h-5 w-5" />
              Support Vector Machine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span className="font-semibold">92.5%</span>
              </div>
              <Progress value={92.5} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Training Time</span>
                <span className="font-semibold">2.3 min</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Linear Kernel</Badge>
              <Badge variant="outline">Fast</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Layers className="h-5 w-5" />
              Random Forest
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span className="font-semibold">94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Training Time</span>
                <span className="font-semibold">4.7 min</span>
              </div>
              <Progress value={47} className="h-2" />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">100 Trees</Badge>
              <Badge variant="outline">Robust</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Brain className="h-5 w-5" />
              Neural Network
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Accuracy</span>
                <span className="font-semibold">96.8%</span>
              </div>
              <Progress value={96.8} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Training Time</span>
                <span className="font-semibold">12.4 min</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">3 Layers</Badge>
              <Badge variant="outline">Deep</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Progress */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-600" />
            Training Progress
          </CardTitle>
          <CardDescription>Model accuracy improvement over training epochs</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trainingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="svm" stroke="#3b82f6" strokeWidth={2} name="SVM" />
              <Line type="monotone" dataKey="rf" stroke="#10b981" strokeWidth={2} name="Random Forest" />
              <Line type="monotone" dataKey="nn" stroke="#8b5cf6" strokeWidth={2} name="Neural Network" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Model Complexity vs Accuracy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Complexity vs Accuracy</CardTitle>
            <CardDescription>Trade-off between model complexity and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart data={complexityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="complexity" name="Complexity" />
                <YAxis dataKey="accuracy" name="Accuracy" domain={[90, 100]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter dataKey="accuracy" fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Model Recommendations</CardTitle>
            <CardDescription>Best use cases for each model</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-1">SVM</h4>
              <p className="text-sm text-blue-700">Best for real-time analysis with limited computational resources</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-1">Random Forest</h4>
              <p className="text-sm text-green-700">Ideal for balanced accuracy and interpretability</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-1">Neural Network</h4>
              <p className="text-sm text-purple-700">
                Optimal for highest accuracy when computational power is available
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics Table */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Detailed Performance Metrics</CardTitle>
          <CardDescription>Comprehensive comparison of all model metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Model</th>
                  <th className="text-left p-2">Accuracy</th>
                  <th className="text-left p-2">Precision</th>
                  <th className="text-left p-2">Recall</th>
                  <th className="text-left p-2">F1-Score</th>
                  <th className="text-left p-2">Training Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">SVM</td>
                  <td className="p-2">92.5%</td>
                  <td className="p-2">89.3%</td>
                  <td className="p-2">94.1%</td>
                  <td className="p-2">91.6%</td>
                  <td className="p-2">2.3 min</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Random Forest</td>
                  <td className="p-2">94.2%</td>
                  <td className="p-2">91.7%</td>
                  <td className="p-2">96.3%</td>
                  <td className="p-2">93.9%</td>
                  <td className="p-2">4.7 min</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Neural Network</td>
                  <td className="p-2">96.8%</td>
                  <td className="p-2">94.5%</td>
                  <td className="p-2">98.1%</td>
                  <td className="p-2">96.3%</td>
                  <td className="p-2">12.4 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}