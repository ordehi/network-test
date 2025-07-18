'use client'
import posthog from 'posthog-js'
import { useState } from 'react'

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact Page</h1>
        
        {/* Network Testing Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Network Request Testing</h2>
          <p className="text-gray-600 text-center mb-8">
            Test PostHog's network capture functionality with these API calls.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Successful Request</h3>
              <p className="text-gray-600 mb-4">Make a successful API call to test network capture.</p>
              <button 
                onClick={async () => {
                  posthog.capture('contact_successful_request_clicked')
                  setErrorMessage('')
                  try {
                    const response = await fetch('/api/contact')
                    const data = await response.json()
                    console.log('Successful request:', data)
                    setSuccessMessage(JSON.stringify(data, null, 2))
                  } catch (error) {
                    console.error('Request failed:', error)
                    setErrorMessage(`Request failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
                  }
                }}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Make Successful Request
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Failed Request</h3>
              <p className="text-gray-600 mb-4">Make a request that will fail to test error capture.</p>
              <button 
                onClick={async () => {
                  posthog.capture('contact_failed_request_clicked')
                  setSuccessMessage('')
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ invalid: 'data' })
                    })
                    // This will fail because the API doesn't handle POST with body
                    const data = await response.json()
                    console.log('Unexpected success:', data)
                    setSuccessMessage('Unexpected success: ' + JSON.stringify(data, null, 2))
                  } catch (error) {
                    console.error('Expected failure:', error)
                    setErrorMessage(`Expected failure: ${error instanceof Error ? error.message : 'Unknown error'}`)
                  }
                }}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Make Failed Request
              </button>
            </div>
          </div>
          
          {/* Response Messages */}
          {(successMessage || errorMessage) && (
            <div className="mt-8">
              {successMessage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <h4 className="text-green-800 font-semibold mb-2">Success Response:</h4>
                  <pre className="text-green-700 text-sm bg-green-100 p-3 rounded overflow-x-auto">
                    {successMessage}
                  </pre>
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-red-800 font-semibold mb-2">Error Response:</h4>
                  <pre className="text-red-700 text-sm bg-red-100 p-3 rounded overflow-x-auto">
                    {errorMessage}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 