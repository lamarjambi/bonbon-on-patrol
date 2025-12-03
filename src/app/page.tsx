'use client';

import { useState } from 'react';

// 

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'health' | 'location' | 'video' | 'alerts' | 'logs'>('dashboard');

  // in the real app, this would come from the BonBon device
  const vitalData = {
    heartRate: 72,
    temperature: 98.6,
    oxygenation: 98,
    stressLevel: 23,
  };

  const riskScores = {
    injuryRisk: 12,
    tantrumLikelihood: 8,
    socialDefiance: 5,
    infectionRisk: 3,
    dehydrationRisk: 15,
  };

  const developmentalData = {
    bracket: 'Standard Development',
    riskTier: 'Tier 2 - Low Risk',
    chipId: 'CH-2047-89234',
    complianceStatus: 'Active',
  };

  const recentAlerts = [
    { type: 'emotional', message: 'Elevated stress detected', time: '2 min ago', severity: 'medium' },
    { type: 'health', message: 'Minor cut detected on left hand', time: '15 min ago', severity: 'low' },
    { type: 'behavior', message: 'Unusual movement pattern', time: '1 hour ago', severity: 'low' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">BonBon on Patrol</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400">CHIP SYNC</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-600 dark:text-slate-400">Government Chip: {developmentalData.chipId} • Last sync: 30s ago</p>
            <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded">CSSA 2045 Compliant</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {activeTab === 'dashboard' && (
          <div className="p-4 space-y-4">
            {/* Status Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Device Status</h2>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">BonBon is actively monitoring</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">Autonomous Mode</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full">AI Active</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded-full">Gov Network</span>
              </div>
            </div>

            {/* Developmental Classification */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Developmental Classification</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Bracket:</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">{developmentalData.bracket}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Risk Tier:</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">{developmentalData.riskTier}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Chip Status:</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">{developmentalData.complianceStatus}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">Classification updated via government health systems</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Heart Rate</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{vitalData.heartRate}</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Normal</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Temperature</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{vitalData.temperature}°F</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Normal</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Oxygenation</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{vitalData.oxygenation}%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Optimal</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Stress Level</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">{vitalData.stressLevel}%</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Elevated</p>
              </div>
            </div>

            {/* Risk Scores */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Predictive Risk Scores</h2>
              <div className="space-y-3">
                {Object.entries(riskScores).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">{value}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          value < 10 ? 'bg-green-500' : value < 20 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Recent Alerts</h2>
              <div className="space-y-2">
                {recentAlerts.map((alert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.severity === 'high' ? 'bg-red-500' : 
                      alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-50">{alert.message}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Vital Signs</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Heart Rate</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">BPM</p>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{vitalData.heartRate}</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Body Temperature</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Fahrenheit</p>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{vitalData.temperature}°</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Blood Oxygenation</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">SpO2</p>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{vitalData.oxygenation}%</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Stress Level</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Cortisol Index</p>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{vitalData.stressLevel}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Recent Medical Events</h2>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Minor cut detected</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Left hand • 15 minutes ago</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Treated autonomously</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Logged to government health network</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Medication administered</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Micro-dose • 2 hours ago</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">AI decision: Preventive measure</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Neural Pattern Monitoring</h2>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Current Pattern: Baseline</p>
                <div className="h-24 bg-slate-200 dark:bg-slate-600 rounded flex items-center justify-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Neural activity visualization</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">View Details</button>
                  <button className="flex-1 px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 text-sm rounded-lg">Export Data</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Live Location</h2>
              <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Map View</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">40.7128°N, 74.0060°W</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Active Tracking</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Chip Signal:</span>
                  <span className="font-medium text-slate-900 dark:text-slate-50">Locked</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Signal Strength:</span>
                  <span className="font-medium text-slate-900 dark:text-slate-50">Excellent</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Last Update:</span>
                  <span className="font-medium text-slate-900 dark:text-slate-50">30 seconds ago</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Emergency protocol: Signal can guide responders directly to child's location</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Location History</h2>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Home</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">2:30 PM - Present</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-50">School</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">8:00 AM - 2:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'video' && (
          <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Live Video Feed</h2>
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white/20 rounded-full mx-auto mb-2"></div>
                    <p className="text-white/60 text-sm">Live Feed</p>
                    <p className="text-white/40 text-xs mt-1">Child's Perspective</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Record</button>
                <button className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg text-sm font-medium">Screenshot</button>
                <button className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg text-sm font-medium">Settings</button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Recent Recordings</h2>
              <div className="space-y-2">
                <div className="flex gap-3 p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="w-20 h-14 bg-slate-300 dark:bg-slate-600 rounded flex items-center justify-center">
                    <span className="text-xs text-slate-500 font-medium">PLAY</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Recording 001</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">2:15 PM • 5 min</p>
                  </div>
                </div>
                <div className="flex gap-3 p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="w-20 h-14 bg-slate-300 dark:bg-slate-600 rounded flex items-center justify-center">
                    <span className="text-xs text-slate-500 font-medium">PLAY</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Recording 002</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">1:30 PM • 3 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-4">Active Alerts</h2>
              <div className="space-y-3">
                {recentAlerts.map((alert, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-50">{alert.message}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        alert.severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{alert.time}</p>
                    <button className="mt-2 text-xs text-blue-600 dark:text-blue-400">View Details →</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Alert Settings</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Emotional Alerts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Notify on stress spikes</p>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Health Alerts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Notify on medical events</p>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Behavior Alerts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Notify on unusual patterns</p>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Emergency Alerts</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Always enabled</p>
                  </div>
                  <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="p-4 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Surveillance Archive</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Complete record since birth</p>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400">Filter</button>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Behavior Log</p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Today, 2:15 PM</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Unusual movement pattern detected and logged</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Categorized: Behavioral Anomaly</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Health Event</p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Today, 1:30 PM</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Minor cut detected and treated autonomously</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Categorized: Medical Intervention</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">Emotional State</p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Today, 12:00 PM</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Stress level elevated to 23%</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Categorized: Emotional Monitoring</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400">Archive contains {Math.floor(Math.random() * 5000 + 10000).toLocaleString()} entries spanning {Math.floor(Math.random() * 3 + 8)} years</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Remote Messaging</h2>
                <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded">Behavior Nudging</span>
              </div>
              <div className="space-y-3">
                <textarea 
                  className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-600 resize-none"
                  placeholder="Send a behavior nudge or message through BonBon..."
                  rows={4}
                ></textarea>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Send Message</button>
                  <button className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 rounded-lg text-sm font-medium">Templates</button>
                </div>
                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="text-xs text-amber-800 dark:text-amber-300">Messages are delivered through BonBon without the child's awareness. Use for guidance, discipline, or comfort.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">Export Options</h2>
              <div className="space-y-2">
                <button className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-left text-sm font-medium text-slate-900 dark:text-slate-50">
                  Export Health Logs (Since Birth)
                </button>
                <button className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-left text-sm font-medium text-slate-900 dark:text-slate-50">
                  Export Behavior Archive
                </button>
                <button className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-left text-sm font-medium text-slate-900 dark:text-slate-50">
                  Export Full Surveillance Data
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-6 gap-1 px-2 py-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'dashboard' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="2" y="2" width="7" height="7" rx="1"/>
              <rect x="11" y="2" width="7" height="7" rx="1"/>
              <rect x="2" y="11" width="7" height="7" rx="1"/>
              <rect x="11" y="11" width="7" height="7" rx="1"/>
            </svg>
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'health' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10h4l2-4 2 8 2-4h4"/>
            </svg>
            <span className="text-xs font-medium">Health</span>
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'location' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2C7.2 2 5 4.2 5 7c0 4 5 11 5 11s5-7 5-11c0-2.8-2.2-5-5-5z" fillRule="evenodd"/>
              <circle cx="10" cy="7" r="2.5" fill="white"/>
            </svg>
            <span className="text-xs font-medium">Location</span>
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'video' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="5" width="12" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 10l-4-2.5v5l4-2.5z"/>
            </svg>
            <span className="text-xs font-medium">Video</span>
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'alerts' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v1a5 5 0 014 4.9V12a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.1A5 5 0 019 4V3a1 1 0 011-1z" fillRule="evenodd"/>
              <path d="M8 15a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="text-xs font-medium">Alerts</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              activeTab === 'logs' 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="3" y="4" width="14" height="2" rx="0.5"/>
              <rect x="3" y="9" width="14" height="2" rx="0.5"/>
              <rect x="3" y="14" width="10" height="2" rx="0.5"/>
            </svg>
            <span className="text-xs font-medium">Logs</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
