import React, { useState } from 'react';
import { 
  Database, Download, Upload, Trash2, RefreshCw, 
  Settings, Shield, Clock, AlertTriangle, CheckCircle,
  FileText, Save, X, Edit3, Plus, Users, Key
} from 'lucide-react';

export default function DataManagement() {
  const [activeTab, setActiveTab] = useState<'backup' | 'import' | 'export' | 'cleanup' | 'security'>('backup');
  const [isProcessing, setIsProcessing] = useState(false);

  const tabs = [
    { id: 'backup', label: 'Backup & Restore', icon: Database },
    { id: 'import', label: 'Import Data', icon: Upload },
    { id: 'export', label: 'Export Data', icon: Download },
    { id: 'cleanup', label: 'Data Cleanup', icon: Trash2 },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const handleBackup = async () => {
    setIsProcessing(true);
    // Simulate backup process
    setTimeout(() => {
      setIsProcessing(false);
      alert('Backup completed successfully!');
    }, 2000);
  };

  const handleExport = async (dataType: string) => {
    setIsProcessing(true);
    // Simulate export process
    setTimeout(() => {
      setIsProcessing(false);
      alert(`${dataType} exported successfully!`);
    }, 1500);
  };

  const renderBackupRestore = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Backup</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Last Backup</p>
                <p className="text-sm text-green-700">February 20, 2024 at 2:30 AM</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Routes and Links</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Trouble Tickets</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Maintenance Records</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">Network Assets</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-700">User Settings</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleBackup}
              disabled={isProcessing}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                <RefreshCw className="h-5 w-5 animate-spin" />
              ) : (
                <Database className="h-5 w-5" />
              )}
              <span>{isProcessing ? 'Creating Backup...' : 'Create Backup'}</span>
            </button>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Upload className="h-5 w-5" />
              <span>Restore from Backup</span>
            </button>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Automatic backups are scheduled daily at 2:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup History</h3>
        
        <div className="space-y-3">
          {[
            { date: '2024-02-20', time: '2:30 AM', size: '45.2 MB', status: 'completed' },
            { date: '2024-02-19', time: '2:30 AM', size: '44.8 MB', status: 'completed' },
            { date: '2024-02-18', time: '2:30 AM', size: '44.1 MB', status: 'completed' },
            { date: '2024-02-17', time: '2:30 AM', size: '43.9 MB', status: 'failed' },
            { date: '2024-02-16', time: '2:30 AM', size: '43.7 MB', status: 'completed' }
          ].map((backup, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  backup.status === 'completed' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{backup.date}</p>
                  <p className="text-xs text-gray-500">{backup.time} • {backup.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  backup.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {backup.status}
                </span>
                {backup.status === 'completed' && (
                  <button className="p-1 text-blue-600 hover:text-blue-800 rounded">
                    <Download className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderImport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Data</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">Drop files here or click to browse</p>
              <p className="text-xs text-gray-500">Supported formats: CSV, JSON, XML</p>
              <input type="file" className="hidden" accept=".csv,.json,.xml" />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Import Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Routes and Links</option>
                <option>Network Assets</option>
                <option>Maintenance Records</option>
                <option>Trouble Tickets</option>
                <option>User Data</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Import Guidelines</h4>
                  <ul className="text-xs text-yellow-700 mt-2 space-y-1">
                    <li>• Ensure data format matches template</li>
                    <li>• Backup existing data before import</li>
                    <li>• Large files may take several minutes</li>
                    <li>• Duplicate entries will be skipped</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Upload className="h-5 w-5" />
              <span>Start Import</span>
            </button>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <FileText className="h-5 w-5" />
              <span>Download Template</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Data</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Routes & Links', description: 'All route and link information', count: '6 routes, 15 links' },
            { name: 'Trouble Tickets', description: 'All trouble ticket records', count: '24 tickets' },
            { name: 'Maintenance Records', description: 'Maintenance history and schedules', count: '156 records' },
            { name: 'Network Assets', description: 'Asset inventory and specifications', count: '342 assets' },
            { name: 'SLA Reports', description: 'Performance and SLA data', count: '4 weeks data' },
            { name: 'System Logs', description: 'Application and system logs', count: '30 days' }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-2">{item.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-xs text-gray-500 mb-3">{item.count}</p>
              <button
                onClick={() => handleExport(item.name)}
                disabled={isProcessing}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {isProcessing ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                <span className="text-sm">Export</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>CSV (Comma Separated)</option>
                <option>JSON (JavaScript Object)</option>
                <option>XML (Extensible Markup)</option>
                <option>PDF (Portable Document)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Include Options</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                  <span className="text-sm text-gray-700">Include metadata</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                  <span className="text-sm text-gray-700">Include attachments</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-700">Include deleted records</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCleanup = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Cleanup</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Warning</h4>
                  <p className="text-xs text-red-700 mt-1">
                    Data cleanup operations are permanent and cannot be undone. 
                    Please ensure you have a recent backup before proceeding.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Cleanup Options</h4>
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Old Trouble Tickets</span>
                  <p className="text-xs text-gray-500">Remove closed tickets older than 1 year</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" />
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Maintenance Logs</span>
                  <p className="text-xs text-gray-500">Remove logs older than 6 months</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" />
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Temporary Files</span>
                  <p className="text-xs text-gray-500">Remove temporary uploads and cache</p>
                </div>
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
              </label>
              
              <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-900">Duplicate Records</span>
                  <p className="text-xs text-gray-500">Remove duplicate asset entries</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" />
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Storage Usage</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="text-sm font-medium">245 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Attachments</span>
                  <span className="text-sm font-medium">1.2 GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Logs</span>
                  <span className="text-sm font-medium">89 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cache</span>
                  <span className="text-sm font-medium">156 MB</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between items-center font-medium">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">1.7 GB</span>
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Trash2 className="h-5 w-5" />
              <span>Start Cleanup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Access Control</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Two-Factor Authentication</span>
                    <p className="text-xs text-gray-500">Require 2FA for all users</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Session Timeout</span>
                    <p className="text-xs text-gray-500">Auto-logout after inactivity</p>
                  </div>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>4 hours</option>
                  </select>
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">IP Restrictions</span>
                    <p className="text-xs text-gray-500">Limit access to specific IP ranges</p>
                  </div>
                  <input type="checkbox" className="rounded border-gray-300" />
                </label>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Data Protection</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Encryption at Rest</span>
                    <p className="text-xs text-gray-500">Encrypt stored data</p>
                  </div>
                  <input type="checkbox" defaultChecked disabled className="rounded border-gray-300" />
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Audit Logging</span>
                    <p className="text-xs text-gray-500">Log all user actions</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Data Anonymization</span>
                    <p className="text-xs text-gray-500">Anonymize exported data</p>
                  </div>
                  <input type="checkbox" className="rounded border-gray-300" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-900">Active Users</h4>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add User</span>
            </button>
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'John Smith', email: 'john@company.com', role: 'Administrator', lastLogin: '2 hours ago' },
              { name: 'Sarah Johnson', email: 'sarah@company.com', role: 'Technician', lastLogin: '1 day ago' },
              { name: 'Mike Wilson', email: 'mike@company.com', role: 'Technician', lastLogin: '3 days ago' },
              { name: 'Lisa Chen', email: 'lisa@company.com', role: 'Viewer', lastLogin: '1 week ago' }
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email} • {user.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{user.lastLogin}</span>
                  <button className="p-1 text-gray-400 hover:text-blue-600 rounded">
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Data Management</h2>
            <p className="text-gray-600">Manage system data, backups, and security settings</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">System Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium text-green-600">Operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'backup' && renderBackupRestore()}
      {activeTab === 'import' && renderImport()}
      {activeTab === 'export' && renderExport()}
      {activeTab === 'cleanup' && renderCleanup()}
      {activeTab === 'security' && renderSecurity()}
    </div>
  );
}