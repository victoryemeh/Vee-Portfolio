import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ padding: '140px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>404</h1>
      <p style={{ color: 'var(--gray-text)', marginBottom: '24px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
