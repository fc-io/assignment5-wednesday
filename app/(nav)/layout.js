import Link from "next/link"

export default function PortfolioLayout({ children }) {
  return (
    <>
      <div style={{
        background: '#440022',
        height: '50px',
      }}>
        <Link href="/" style={{
          color: '#fff',
          fontSize: '30px',
        }}>Home</Link>
      </div>
      {children}
    </>
  )
}
