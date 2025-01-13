'use client';

import { useState } from 'react';
import styles from '../signin/AuthForm.module.css'; // Import CSS styles
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { AlertDestructive } from '@/components/ui/alert-destructive';
import { fetchWithErrorHandling } from '@/utils/http-client';
import { BadRequestError } from '@/model/error/bad-request-error';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const SignUpPage = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State for error message
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    try {
      await fetchWithErrorHandling(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );
      handleSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: unknown) => {
    if (error instanceof BadRequestError) {
      setError(error.details ? Object.values(error.details.errors).flat().join(' ') : error.message);
    } else {
      console.error('Unexpected error during registration:', error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSuccess = () => {
    router.push('/signin');
    toast("Account registered", {
      description: "You can now login with the registered account",
      duration: 3000,
      position: 'top-center',
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleRegister();
  };
  
  return (
    <div className="h-full justify-center flex flex-col items-center">
      <div className="flex flex-col gap-4 bg-white p-5 rounded-lg shadow-md w-4/12">
        <h1 className={styles.title}>User Sign Up</h1>
        {error &&
          <AlertDestructive 
            title="Error" 
            description={error}
          />
        }
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
