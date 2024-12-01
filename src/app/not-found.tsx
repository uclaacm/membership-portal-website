import styles from '@/styles/pages/not-found.module.scss';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>

      <Link href="/" className={styles.button}>
        Return to Home
      </Link>
    </div>
  );
}
