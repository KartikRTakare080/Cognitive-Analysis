# NeuroAbacus: EEG Cognitive Analysis Platform

## Overview

NeuroAbacus is an advanced platform designed for the cognitive analysis of abacus students using Electroencephalography (EEG) data. It integrates a modern React/Next.js frontend with a robust backend for data processing and machine learning model inference. The platform provides insights into students' cognitive states, performance trends, and the effectiveness of various machine learning models in predicting cognitive metrics.

## Features

*   **EEG Data Upload:** Securely upload EEG data files (.edf, .csv, .mat, .txt) for analysis.
*   **Machine Learning Integration:** Utilizes three distinct ML models (SVM, Random Forest, Neural Network) for comprehensive data processing and prediction.
*   **Cognitive Metrics:** Visualizes key cognitive metrics such as attention level, memory performance, processing speed, and mental arithmetic abilities.
*   **Interactive Dashboards:** Provides dynamic dashboards for student performance trends, brainwave analysis, and detailed cognitive assessments.
*   **Model Comparison:** Offers insights into the performance (accuracy, precision, recall) and training progress of different ML models.
*   **Responsive Design:** Built with Tailwind CSS and shadcn/ui for a modern, responsive user interface.
*   **API Routes:** Backend API routes for handling file uploads, data analysis, and student data management.
*   **Python Scripts:** Includes Python scripts for EEG signal preprocessing and the core machine learning pipeline.

## Technologies Used

**Frontend:**
*   Next.js (App Router)
*   React
*   Tailwind CSS
*   shadcn/ui (for UI components)
*   Recharts (for data visualization)
*   Lucide React (for icons)

**Backend:**
*   Next.js API Routes (for data handling and ML integration)
*   Node.js

**Machine Learning & Data Processing:**
*   Python 3.x
*   NumPy
*   Pandas
*   SciPy
*   Scikit-learn
*   Matplotlib
*   Joblib


Here is the README.md content in plain text form:


# NeuroAbacus: EEG Cognitive Analysis Platform

## Overview

NeuroAbacus is an advanced platform designed for the cognitive analysis of abacus students using Electroencephalography (EEG) data. It integrates a modern React/Next.js frontend with a robust backend for data processing and machine learning model inference. The platform provides insights into students' cognitive states, performance trends, and the effectiveness of various machine learning models in predicting cognitive metrics.

## Features

*   **EEG Data Upload:** Securely upload EEG data files (.edf, .csv, .mat, .txt) for analysis.
*   **Machine Learning Integration:** Utilizes three distinct ML models (SVM, Random Forest, Neural Network) for comprehensive data processing and prediction.
*   **Cognitive Metrics:** Visualizes key cognitive metrics such as attention level, memory performance, processing speed, and mental arithmetic abilities.
*   **Interactive Dashboards:** Provides dynamic dashboards for student performance trends, brainwave analysis, and detailed cognitive assessments.
*   **Model Comparison:** Offers insights into the performance (accuracy, precision, recall) and training progress of different ML models.
*   **Responsive Design:** Built with Tailwind CSS and shadcn/ui for a modern, responsive user interface.
*   **API Routes:** Backend API routes for handling file uploads, data analysis, and student data management.
*   **Python Scripts:** Includes Python scripts for EEG signal preprocessing and the core machine learning pipeline.

## Technologies Used

**Frontend:**
*   Next.js (App Router)
*   React
*   Tailwind CSS
*   shadcn/ui (for UI components)
*   Recharts (for data visualization)
*   Lucide React (for icons)

**Backend:**
*   Next.js API Routes (for data handling and ML integration)
*   Node.js

**Machine Learning & Data Processing:**
*   Python 3.x
*   NumPy
*   Pandas
*   SciPy
*   Scikit-learn
*   Matplotlib
*   Joblib

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1.  **Node.js (LTS version) and npm:**
    *   Download from: https://nodejs.org/en/download/
    *   **Important:** During installation, ensure "Add to PATH" is selected.
    *   Verify installation in PowerShell:
        ```powershell
        node -v
        npm -v
Git (Recommended):

Download from: https://git-scm.com/download/win
Verify installation in PowerShell:


git --version
Python 3.x and pip:

Download from: https://www.python.org/downloads/windows/
Important: During installation, check the box "Add Python.exe to PATH" on the first screen.
Verify installation in PowerShell:


python --version
pip --version
Python Libraries:

Install the required Python packages using pip in PowerShell:


pip install numpy pandas scipy matplotlib scikit-learn joblib
Installation
Follow these steps to set up and run the project on a new system:

Step 1: Prepare the Project (on Source System)
If you are transferring the project from another system, perform these steps on the source system first.

Navigate to your project directory:


cd "C:\Users\Kartik Takare\OneDrive\Desktop\eeg-cognitive-analysis" # Adjust path as needed
Clean up generated files:


Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force ./.next
(Optional) Verify packageManager in package.json: Ensure your package.json includes the "packageManager": "npm@X.Y.Z" line (replace X.Y.Z with your npm version, e.g., npm@10.5.0). This helps ensure npm is used.
Create a ZIP archive of your project folder:


Compress-Archive -Path "C:\Users\Kartik Takare\OneDrive\Desktop\eeg-cognitive-analysis" -DestinationPath "C:\Users\Kartik Takare\OneDrive\Desktop\eeg-cognitive-analysis.zip" # Adjust paths
Step 2: Set Up Project (on Target System)
Transfer the eeg-cognitive-analysis.zip file to your target system.

Open PowerShell on the target system and navigate to your desired extraction directory:


cd "C:\Users\YourUser\Documents\Projects\" # Adjust path as needed
Extract the ZIP archive:


Expand-Archive -Path "C:\Users\YourUser\Downloads\eeg-cognitive-analysis.zip" -DestinationPath "C:\Users\YourUser\Documents\Projects\" # Adjust paths
Navigate into the extracted project directory:


cd "C:\Users\YourUser\Documents\Projects\eeg-cognitive-analysis" # Adjust path
Install Node.js dependencies:


npm install
Re-initialize and Re-add shadcn/ui Components: This step is crucial to ensure all UI components and their underlying Radix UI dependencies are correctly linked in the new environment.

First, initialize shadcn/ui (accept defaults or configure as preferred):


npx shadcn@latest init
Then, add each component used in the project. Type y and press Enter when prompted to overwrite.


npx shadcn@latest add tabs
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add progress
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add toast
Clear the Next.js cache:


Remove-Item -Recurse -Force ./.next
Running the Project
Once all installation steps are complete:

Start the development server:


npm run dev
Open your web browser and navigate to http://localhost:3000.
Usage
Dashboard: View overall student performance trends and brainwave analysis.
Data Upload: Upload EEG data files. The system will simulate processing and analysis by the integrated ML models.
Analysis: See the results of the ML models, including performance metrics and a cognitive profile.
ML Models: Compare the training progress and characteristics of the SVM, Random Forest, and Neural Network models.
Metrics: Dive deeper into specific cognitive metrics like attention, memory, and processing abilities.
Project Structure Highlights
app/page.tsx: Main application entry point and tab orchestration.
components/: Contains all React components, including shadcn/ui components and custom components like student-dashboard.tsx, data-upload.tsx, analysis-results.tsx, model-comparison.tsx, and cognitive-metrics.tsx.
app/api/: Next.js API routes for analyze, students, and upload endpoints.
scripts/: Python scripts for eeg_preprocessing.py and ml_models.py.
public/: Static assets (e.g., placeholder images).
hooks/: Custom React hooks (e.g., use-toast.ts).
lib/: Utility functions (e.g., utils.ts).
Contributing
Feel free to fork this repository and contribute to its development.

License
[Specify your project's license here, e.g., MIT License]
