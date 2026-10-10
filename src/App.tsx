const buildTime = __BUILD_TIME__

export default function App() {
  return (
    <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'system-ui, sans-serif',background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'#f8fafc',margin:0}}>
      <h1 style={{fontSize:'2.5rem',margin:0}}>Hello from Anandhu's React app</h1>
      <p style={{opacity:0.8}}>Built at: {buildTime}</p>
    </main>
  )
}
