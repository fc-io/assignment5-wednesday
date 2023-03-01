import Link from "next/link"

export default function IdLayout({ children }) {
  return (
    <>
      <div style={{
        background: '#224400',
        height: '50px',
      }}>
        <Link href="/portfolio" style={{
          color: '#fff',
          fontSize: '30px',
        }}>Portfolio</Link>
      </div>
      {children}
    </>
  )
}
