import numpy as np
import pandas as pd
from scipy import signal
import matplotlib.pyplot as plt

def preprocess_eeg_data():
    """
    EEG preprocessing demonstration
    """
    print("🧠 Starting EEG preprocessing...")
    
    # Generate sample EEG data
    sample_rate = 256
    duration = 5
    time = np.linspace(0, duration, sample_rate * duration)
    
    # Simulate EEG signals
    alpha_wave = 2 * np.sin(2 * np.pi * 10 * time)  # 10 Hz alpha
    beta_wave = 1 * np.sin(2 * np.pi * 20 * time)   # 20 Hz beta
    noise = 0.5 * np.random.randn(len(time))
    
    eeg_signal = alpha_wave + beta_wave + noise
    
    # Apply bandpass filter
    nyquist = sample_rate / 2
    low = 1.0 / nyquist
    high = 50.0 / nyquist
    b, a = signal.butter(4, [low, high], btype='band')
    filtered_signal = signal.filtfilt(b, a, eeg_signal)
    
    print(f"✅ Processed {len(eeg_signal)} data points")
    print(f"✅ Applied bandpass filter (1-50 Hz)")
    print(f"✅ Signal length: {duration} seconds")
    print("🎉 EEG preprocessing completed successfully!")
    
    return filtered_signal

if __name__ == "__main__":
    preprocess_eeg_data()