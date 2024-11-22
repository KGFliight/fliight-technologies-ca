import { useEffect } from 'react'
import Plotly from 'plotly.js-dist'

const AraceAngelGraph = () => {
  useEffect(() => {
    const data = [
      {
        x: [0, 0.4, 0.9, 1.4, 1.9],
        y: [120, 108, 92, 76, 69],
        mode: 'lines+markers',
        name: 'Arace Angel',
        line: { color: 'orange' },
      },
      {
        x: [0, 0.678, 0.8, 0.828, 0.88, 0.905, 0.92, 0.93],
        y: [45, 34.9, 33.9, 33, 32.7, 32.5, 32.2, 32.1],
        mode: 'lines+markers',
        name: 'DJI M350',
        line: { color: 'cyan' },
      },
      {
        x: [0, 1, 2, 3],
        y: [55, 45, 37, 30],
        mode: 'lines+markers',
        name: 'IF800 Tomcat',
        line: { color: 'lime' },
      },
      {
        x: [0, 0.4, 0.8, 1.2, 1.4],
        y: [37.5, 33.5, 29.5, 27, 25.5],
        mode: 'lines+markers',
        name: 'Freefly Astro',
        line: { color: 'magenta' },
      },
    ]

    const layout = {
      title: {
        text: 'Arace Angel vs the Competitors',
        font: { color: '#ffffff', family: 'Inter, sans-serif' },
      },
      paper_bgcolor: '#121212',
      plot_bgcolor: '#121212',
      xaxis: {
        title: { text: 'Payload Weight (kg)', font: { color: '#ffffff' } },
        color: '#ffffff',
        gridcolor: '#333333',
      },
      yaxis: {
        title: { text: 'Flight Time (mins)', font: { color: '#ffffff' } },
        color: '#ffffff',
        gridcolor: '#333333',
      },
      legend: {
        orientation: 'h',
        y: -0.2,
        x: 0.5,
        xanchor: 'center',
        font: { color: '#ffffff' },
        itemwidth: 60,
      },
      hovermode: 'closest',
      responsive: true,
    }

    const graphDiv = document.getElementById('graph')
    Plotly.newPlot(graphDiv, data, layout)

    // Handle window resize
    const handleResize = () => {
      Plotly.Plots.resize(graphDiv)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Dynamic styles with media queries
  const styles = {
    container: {
      width: '100%',
      maxWidth: '800px',
      height: '600px',
      border: '1px solid #333',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
    },
    
  }

  return (
    <>
      {/* Inject mobile-specific styles */}
      <style>{styles.mobileStyles}</style>
      <div id="graph" style={styles.container}></div>
    </>
  )
}

export default AraceAngelGraph
